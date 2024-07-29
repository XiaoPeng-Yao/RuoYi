package com.ruoyi.system.service.impl;

import cn.hutool.core.collection.CollectionUtil;
import cn.hutool.json.JSONUtil;
import com.google.common.base.Preconditions;
import com.ruoyi.common.annotation.DataScope;
import com.ruoyi.common.core.domain.entity.CountryTbl;
import com.ruoyi.common.core.domain.entity.SmsCountryPrice;
import com.ruoyi.common.core.domain.entity.SmsTaskTbl;
import com.ruoyi.common.core.domain.entity.UserPoint;
import com.ruoyi.common.core.domain.vo.BatchUpdateSmsVO;
import com.ruoyi.common.core.domain.vo.SmsTaskTblVO;
import com.ruoyi.common.core.text.Convert;
import com.ruoyi.common.utils.DateUtils;
import com.ruoyi.common.utils.ShiroUtils;
import com.ruoyi.system.api.IU02cxApi;
import com.ruoyi.system.api.entity.U02cx.*;
import com.ruoyi.system.domain.SmsChannelTbl;
import com.ruoyi.system.handler.GetSmsDetailTaskHandler;
import com.ruoyi.system.mapper.SmsChannelTblMapper;
import com.ruoyi.system.mapper.SmsCountryPriceMapper;
import com.ruoyi.system.mapper.SmsTaskTblMapper;
import com.ruoyi.system.mapper.UserPointMapper;
import com.ruoyi.system.service.ISmsTaskTblService;
import com.ruoyi.system.util.RsaUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.Arrays;
import java.util.Base64;
import java.util.List;
import java.util.stream.Collectors;

/**
 * WS短信任务配置Service业务层处理
 *
 * @author dorion
 * @date 2024-06-01
 */
@Service
public class SmsTaskTblServiceImpl implements ISmsTaskTblService {
    private static final Logger log = LoggerFactory.getLogger(SmsTaskTblServiceImpl.class);
    @Autowired
    private SmsTaskTblMapper smsTaskTblMapper;

    @Autowired
    private SmsChannelTblMapper smsChannelTblMapper;

    @Autowired
    private IU02cxApi u02cxApi;

    @Autowired
    private GetSmsDetailTaskHandler smsDetailTaskHandler;

    @Autowired
    private SmsCountryPriceMapper smsCountryPriceMapper;

    @Autowired
    private UserPointMapper userPointMapper;

    /**
     * 查询WS短信任务配置
     *
     * @param idSmsTask WS短信任务配置主键
     * @return WS短信任务配置
     */
    @Override
    public SmsTaskTbl selectSmsTaskTblByIdSmsTask(Long idSmsTask) {
        return smsTaskTblMapper.selectSmsTaskTblByIdSmsTask(idSmsTask);
    }

    /**
     * 查询WS短信任务配置列表
     *
     * @param smsTaskTbl WS短信任务配置
     * @return WS短信任务配置
     */
    @Override
    @DataScope(userAlias = "u")
    public List<SmsTaskTbl> selectSmsTaskTblList(SmsTaskTbl smsTaskTbl) {
        return smsTaskTblMapper.selectSmsTaskTblList(smsTaskTbl);
    }

    /**
     * 新增WS短信任务配置
     *
     * @param smsTaskTbl WS短信任务配置
     * @return 结果
     */
    @Override
    public int insertSmsTaskTbl(SmsTaskTbl smsTaskTbl) {

        String taskName = smsTaskTbl.getTaskName();
        Preconditions.checkState(taskName.matches("^[a-zA-Z0-9_]+$"), "任务名称只能是数字,字母和下划线");

        String phoneNumber = smsTaskTbl.getPhoneNumber();

        List<SmsCountryPrice> smsCountryPrices = getSmsCountryPrices(phoneNumber);

        SmsCountryPrice smsCountryPrice = smsCountryPrices.get(0);
        BigDecimal price = smsCountryPrice.getPrice();
        CountryTbl countryTbl = smsCountryPriceMapper.selectCountryById(smsCountryPrice.getCountryId());
        String chineseName = countryTbl.getChineseName();

        UserPoint userPoint = getUserPoint();

        int i = doAddSmsTaskTblRequest(smsTaskTbl, price, chineseName,userPoint);
        return i;
    }

    private UserPoint getUserPoint() {
        Long userId = ShiroUtils.getUserId();
        UserPoint userPointParam = new UserPoint();
        userPointParam.setUserId(userId);
        List<UserPoint> userPoints = userPointMapper.selectUserPointList(userPointParam);
        Preconditions.checkState(CollectionUtil.isNotEmpty(userPoints), "未有积分,请先进行充值");

        UserPoint userPoint = userPoints.get(0);
        return userPoint;
    }

    private int doAddSmsTaskTblRequest(SmsTaskTbl smsTaskTbl, BigDecimal price, String chineseName,UserPoint userPoint) {
        String taskName = smsTaskTbl.getTaskName();
        smsTaskTbl.setPrice(price);
        smsTaskTbl.setCountry(chineseName);
        BigDecimal preSummary = price.multiply(new BigDecimal(smsTaskTbl.getTotalCount()));
        smsTaskTbl.setPreSummary(preSummary);

        Long userId = ShiroUtils.getUserId();


        BigDecimal pointBalanceOld = userPoint.getPointBalance();
        Preconditions.checkState(pointBalanceOld.compareTo(preSummary) >= 0, "积分不足本次消耗,请先进行充值");

        BigDecimal pointBalance = pointBalanceOld.subtract(preSummary);
        userPoint.setPointBalance(pointBalance);

        SmsChannelTbl smsChannelTbl = smsChannelTblMapper.selectSmsChannelTblByIdSmsChannel(1L);

        GetTokenRequest getTokenRequest = new GetTokenRequest();
        BeanUtils.copyProperties(smsChannelTbl, getTokenRequest);

        String token = u02cxApi.getToken(getTokenRequest);
        log.debug("token:{}", token);
        AddTaskRequest addTaskRequest = new AddTaskRequest();
        addTaskRequest.setTaskName(taskName)
                .setPrice(smsTaskTbl.getPrice())
                .setTaskBeginTime(DateUtils.parseDateToStr("yyyy-MM-dd HH:mm:ss", smsTaskTbl.getTaskBeginTime()))
                .setFileName(smsTaskTbl.getFileName())
                .setFilePath(smsTaskTbl.getFilePath())
                .setFileMd5(smsTaskTbl.getFileMd5())
                .setContext( Base64.getEncoder().encodeToString(smsTaskTbl.getContext().getBytes()))
                .setType(Integer.parseInt(smsTaskTbl.getSmsContentType()));
        try {
            // 将公钥字符串转换为 PublicKey 对象
            // 使用公钥加密数据
            String jsonStr = JSONUtil.toJsonStr(addTaskRequest);
            log.debug("jsonStr:{}", jsonStr);
//            String encryptedData = EncryptionUtils.encrypt(jsonStr, publicKey);
            String encryptedData = RsaUtils.encryptData(jsonStr, smsChannelTbl.getPublicKey());

            BaseRequestBO baseRequestBO = new BaseRequestBO();
            baseRequestBO.setEncryptedData(encryptedData)
                    .setAppId(smsChannelTbl.getAppId())
                    .setToken(token);
            Long taskId = u02cxApi.addTask(baseRequestBO);

            smsTaskTbl.setTaskId(taskId);
            smsTaskTbl.setChannelId(smsChannelTbl.getChannelId());

            smsTaskTbl.setUserId(userId.toString());
            String loginName = ShiroUtils.getLoginName();
            smsTaskTbl.setCreateBy(loginName);
            smsTaskTbl.setUpdateBy(loginName);

        } catch (Exception e) {
            throw new RuntimeException(e);
        }

        int i = smsTaskTblMapper.insertSmsTaskTbl(smsTaskTbl);
        userPointMapper.updateUserPoint(userPoint);

        String taskStatus = smsTaskTbl.getTaskStatus();
        if ("1".equals(taskStatus)) {
            UpdateTaskStatusRequest updateTaskStatusRequest = new UpdateTaskStatusRequest();
            updateTaskStatusRequest.setTaskId(smsTaskTbl.getTaskId())
                    .setTaskStatus(Integer.parseInt(smsTaskTbl.getTaskStatus()));
            String jsonStr = JSONUtil.toJsonStr(updateTaskStatusRequest);
            log.debug("jsonStr:{}", jsonStr);
            String encryptedData = RsaUtils.encryptData(jsonStr, smsChannelTbl.getPublicKey());

            BaseRequestBO baseRequestBO = new BaseRequestBO();
            baseRequestBO.setEncryptedData(encryptedData)
                    .setAppId(smsChannelTbl.getAppId())
                    .setToken(token);
            u02cxApi.updateTaskStatus(baseRequestBO);
        }
        return i;
    }

    private List<SmsCountryPrice> getSmsCountryPrices(String phoneNumber) {
        Preconditions.checkState(phoneNumber.length() > 2, "首行号码位数不够");
        String areaCode = phoneNumber.substring(0, 2);
        SmsCountryPrice smsCountryPriceParam = new SmsCountryPrice();
        smsCountryPriceParam.setAreaCode(areaCode);
        List<SmsCountryPrice> smsCountryPrices = smsCountryPriceMapper.selectSmsCountryPriceList(smsCountryPriceParam);
        if (CollectionUtil.isEmpty(smsCountryPrices)) {
            smsCountryPriceParam.setAreaCode("99999");
            smsCountryPrices = smsCountryPriceMapper.selectSmsCountryPriceList(smsCountryPriceParam);
        }
        return smsCountryPrices;
    }


    /**
     * 修改WS短信任务配置
     *
     * @param smsTaskTbl WS短信任务配置
     * @return 结果
     */
    @Override
    public int updateSmsTaskTbl(SmsTaskTbl smsTaskTbl) {
        smsTaskTbl.setUpdateTime(DateUtils.getNowDate());
        return smsTaskTblMapper.updateSmsTaskTbl(smsTaskTbl);
    }

    /**
     * 批量删除WS短信任务配置
     *
     * @param idSmsTasks 需要删除的WS短信任务配置主键
     * @return 结果
     */
    @Override
    public int deleteSmsTaskTblByIdSmsTasks(String idSmsTasks) {
        return smsTaskTblMapper.deleteSmsTaskTblByIdSmsTasks(Convert.toStrArray(idSmsTasks));
    }

    /**
     * 删除WS短信任务配置信息
     *
     * @param idSmsTask WS短信任务配置主键
     * @return 结果
     */
    @Override
    public int deleteSmsTaskTblByIdSmsTask(Long idSmsTask) {
        return smsTaskTblMapper.deleteSmsTaskTblByIdSmsTask(idSmsTask);
    }

    @Override
    public void updateBatchUpdateSmsVO(BatchUpdateSmsVO batchUpdateSmsVO) {
        String editSmsTypes = batchUpdateSmsVO.getEditSmsType();
//        String[] split = editSmsTypes.split(",");
//        List<String> editSmsTypeList = Arrays.asList(split);
        String ids = batchUpdateSmsVO.getIds();
//        String[] idArray = ids.split(",");
        SmsChannelTbl smsChannelTbl = smsChannelTblMapper.selectSmsChannelTblByIdSmsChannel(1L);

        GetTokenRequest getTokenRequest = new GetTokenRequest();
        BeanUtils.copyProperties(smsChannelTbl, getTokenRequest);
        String token = u02cxApi.getToken(getTokenRequest);

        List<String> idsList = Arrays.asList(ids.split(","));
        List<SmsTaskTbl> smsTaskTblList = smsTaskTblMapper.selectSmsTaskTbl(idsList);

        List<String> editSmsTypeList = Arrays.asList(editSmsTypes.split(","));
        if (editSmsTypeList.contains("task_status")) {
            String taskStatus = batchUpdateSmsVO.getTaskStatus();

            String taskStatusName = taskStatus.equals("0") ? "关闭" : "开启";
            smsTaskTblList.stream().filter(smsTaskTbl -> smsTaskTbl.getTaskStatus().equals(taskStatus))
                    .forEach(smsTaskTbl -> {
                        throw new RuntimeException(smsTaskTbl.getTaskName() + "状态已经是:[ " + taskStatusName + " ]，不能修改,请重新选择");
                    });
        }


        for (SmsTaskTbl smsTaskTbl : smsTaskTblList) {
            if (editSmsTypeList.contains("task_status")) {
                UpdateTaskStatusRequest updateTaskStatusRequest = new UpdateTaskStatusRequest();
                updateTaskStatusRequest.setTaskId(smsTaskTbl.getTaskId())
                        .setTaskStatus(Integer.parseInt(batchUpdateSmsVO.getTaskStatus()));
                String jsonStr = JSONUtil.toJsonStr(updateTaskStatusRequest);
                log.debug("jsonStr:{}", jsonStr);
                String encryptedData = RsaUtils.encryptData(jsonStr, smsChannelTbl.getPublicKey());

                BaseRequestBO baseRequestBO = new BaseRequestBO();
                baseRequestBO.setEncryptedData(encryptedData)
                        .setAppId(smsChannelTbl.getAppId())
                        .setToken(token);
                u02cxApi.updateTaskStatus(baseRequestBO);
                smsTaskTbl.setTaskStatus(batchUpdateSmsVO.getTaskStatus());
            }

            if (editSmsTypeList.contains("begin_time")) {
                UpdateTaskRequest updateTaskRequest = new UpdateTaskRequest();
                updateTaskRequest.setTaskId(smsTaskTbl.getTaskId())
                        .setTaskBeginTime(DateUtils.parseDateToStr("yyyy-MM-dd HH:mm:ss", batchUpdateSmsVO.getTaskBeginTime()));
                String jsonStr = JSONUtil.toJsonStr(updateTaskRequest);
                log.debug("jsonStr:{}", jsonStr);
                String encryptedData = RsaUtils.encryptData(jsonStr, smsChannelTbl.getPublicKey());

                BaseRequestBO baseRequestBO = new BaseRequestBO();
                baseRequestBO.setEncryptedData(encryptedData)
                        .setAppId(smsChannelTbl.getAppId())
                        .setToken(token);
                u02cxApi.updateTask(baseRequestBO);
                smsTaskTbl.setTaskBeginTime(batchUpdateSmsVO.getTaskBeginTime());
            }

            smsTaskTblMapper.updateSmsTaskTbl(smsTaskTbl);
        }


//        for (String id : idArray) {
//            SmsTaskTbl smsTaskTbl = smsTaskTblMapper.selectSmsTaskTblByIdSmsTask(Long.valueOf(id));
//
//            for (String editSmsType : editSmsTypeList) {
//                if (editSmsType.equals("task_status")){
//                    UpdateTaskStatusRequest updateTaskStatusRequest = new UpdateTaskStatusRequest();
//                    updateTaskStatusRequest.setTaskId(smsTaskTbl.getTaskId())
//                            .setTaskStatus(Integer.parseInt(batchUpdateSmsVO.getTaskStatus()));
//                    String jsonStr = JSONUtil.toJsonStr(updateTaskStatusRequest);
//                    log.debug("jsonStr:{}", jsonStr);
//                    String encryptedData = RsaUtils.encryptData(jsonStr, smsChannelTbl.getPublicKey());
//
//                    BaseRequestBO baseRequestBO = new BaseRequestBO();
//                    baseRequestBO.setEncryptedData(encryptedData)
//                            .setAppId(smsChannelTbl.getAppId())
//                            .setToken(token);
//                    u02cxApi.updateTaskStatus(baseRequestBO);
//                    smsTaskTbl.setTaskStatus(batchUpdateSmsVO.getTaskStatus());
//                }else if (editSmsType.equals("begin_time")){
//
//                    UpdateTaskRequest updateTaskRequest = new UpdateTaskRequest();
//                    updateTaskRequest.setTaskId(smsTaskTbl.getTaskId())
//                            .setTaskBeginTime(DateUtils.parseDateToStr("yyyy-MM-dd HH:mm:ss", batchUpdateSmsVO.getTaskBeginTime()));
//                    String jsonStr = JSONUtil.toJsonStr(updateTaskRequest);
//                    log.debug("jsonStr:{}", jsonStr);
//                    String encryptedData = RsaUtils.encryptData(jsonStr, smsChannelTbl.getPublicKey());
//
//                    BaseRequestBO baseRequestBO = new BaseRequestBO();
//                    baseRequestBO.setEncryptedData(encryptedData)
//                            .setAppId(smsChannelTbl.getAppId())
//                            .setToken(token);
//                    u02cxApi.updateTask(baseRequestBO);
//                    smsTaskTbl.setTaskBeginTime(batchUpdateSmsVO.getTaskBeginTime());
//                }
//            }
//
//            smsTaskTblMapper.updateSmsTaskTbl(smsTaskTbl);
//        }
    }

    @Override
    public byte[] getReport(Long idSmsTask) {
        SmsTaskTbl smsTaskTbl = smsTaskTblMapper.selectSmsTaskTblByIdSmsTask(idSmsTask);
        SmsChannelTbl smsChannelTbl = smsChannelTblMapper.selectSmsChannelTblByIdSmsChannel(1L);

        GetTokenRequest getTokenRequest = new GetTokenRequest();
        BeanUtils.copyProperties(smsChannelTbl, getTokenRequest);
        String token = u02cxApi.getToken(getTokenRequest);


        GetReportRequest getReportRequest = new GetReportRequest();
        getReportRequest.setTaskId(smsTaskTbl.getTaskId())
                .setToken(token)
                .setAppId(smsChannelTbl.getAppId());
        byte[] report = u02cxApi.getReport(getReportRequest);
        return report;
    }

    @Override
    public int complete(String ids) {

        List<String> idsList = Arrays.asList(ids.split(","));
        List<SmsTaskTbl> smsTaskTblList = smsTaskTblMapper.selectSmsTaskTbl(idsList);

        SmsChannelTbl smsChannelTbl = smsChannelTblMapper.selectSmsChannelTblByIdSmsChannel(1L);

        GetTokenRequest getTokenRequest = new GetTokenRequest();
        BeanUtils.copyProperties(smsChannelTbl, getTokenRequest);
        String token = u02cxApi.getToken(getTokenRequest);

        List<Long> taskIds = smsTaskTblList.stream().map(SmsTaskTbl::getTaskId).collect(Collectors.toList());

        BatchTaskIdsRequest batchTaskIdsRequest = new BatchTaskIdsRequest();
        batchTaskIdsRequest.setTaskIds(taskIds)
                .setToken(token)
                .setAppId(smsChannelTbl.getAppId());
        u02cxApi.completeByBatch(batchTaskIdsRequest);

        smsDetailTaskHandler.doGetSmsDetailTask(smsTaskTblList);

        return smsTaskTblList.size();
    }

    @Override
    public void insertSmsTaskTblBatch(SmsTaskTblVO smsTaskTblVO) {
        List<SmsCountryPrice> smsCountryPrices = getSmsCountryPrices(smsTaskTblVO.getPhoneNumber());

        SmsCountryPrice smsCountryPrice = smsCountryPrices.get(0);
        BigDecimal price = smsCountryPrice.getPrice();
        CountryTbl countryTbl = smsCountryPriceMapper.selectCountryById(smsCountryPrice.getCountryId());
        String chineseName = countryTbl.getChineseName();
        List<SmsTaskTbl> smsTaskTblList = smsTaskTblVO.getSmsTaskTblList();

        UserPoint userPoint = getUserPoint();
        BigDecimal preSummary = price.multiply(new BigDecimal(smsTaskTblVO.getLineCount()));
        BigDecimal pointBalanceOld = userPoint.getPointBalance();
        Preconditions.checkState(pointBalanceOld.compareTo(preSummary) >= 0, "积分不足本次消耗,请先进行充值");

        for (SmsTaskTbl smsTaskTbl : smsTaskTblList) {
            doAddSmsTaskTblRequest(smsTaskTbl, price, chineseName,userPoint);
        }
    }
}
