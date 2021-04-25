package com.ruoyi.thread;

import com.ruoyi.cache.Cache;
import com.ruoyi.common.core.domain.entity.SysDictData;
import com.ruoyi.common.utils.DateUtils;
import com.ruoyi.common.utils.spring.SpringUtils;
import com.ruoyi.dto.DrawActivityRequest;
import com.ruoyi.dto.DrawActivityResult;
import com.ruoyi.dto.GtPrizeConfigTemp;
import com.ruoyi.service.AwardService;
import com.ruoyi.service.SequenceService;
import com.ruoyi.system.service.ISysDictDataService;
import com.ruoyi.system.service.ISysDictTypeService;
import com.ruoyi.web.vo.Const;
import com.ruoyi.web.vo.draw.DrawResult;
import com.sinosoft.activity.domain.*;
import com.sinosoft.activity.service.*;
import org.apache.commons.lang3.StringUtils;
import org.dom4j.DocumentException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.math.BigDecimal;
import java.net.InetAddress;
import java.net.UnknownHostException;
import java.rmi.RemoteException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.*;
import java.util.concurrent.Callable;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class DrawActivityThread implements Callable<DrawResult> {
	private static final Logger logger = LoggerFactory.getLogger(DrawActivityThread.class);
	private DrawInfo gtDrawInfo;
	private DrawRule gtDrawRule;
	private IDrawRecordService drawRecordService;
	private SequenceService sequenceService;
	private DrawResult response;
	private DrawActivityRequest request;
	private IDrawConfigService drawConfigService;
	private IDrawTaskNotifyService drawTaskNotifyService;
	private IDrawTaskConsumeService drawTaskConsumeService;
	private AwardService awardService;
	private ISysDictDataService sysDictDataService;
	private ISysDictTypeService sysDictTypeService;
	private IDrawAwardRecordService drawAwardRecordService;
// integral
//	private List<GtIntegralPayment> gtIntegralPaymentList = new ArrayList<GtIntegralPayment>();
//	private GtIntegralPaymentService gtIntegralPaymentService;

	private String bill = null;

	public DrawActivityThread(DrawActivityRequest request, DrawInfo gtDrawInfo, DrawRule gtDrawRule, DrawResult response) {
		this.gtDrawInfo = gtDrawInfo;
		this.gtDrawRule = gtDrawRule;
		this.response = response;
		this.request = request;
//		this.gtIntegralPaymentService = (GtIntegralPaymentService) SpringUtils.getBean("gtIntegralPaymentService");
		this.drawRecordService = (IDrawRecordService) SpringUtils.getBean("drawRecordService");
		this.sequenceService = (SequenceService) SpringUtils.getBean("sequenceService");
		this.drawConfigService = (IDrawConfigService) SpringUtils.getBean("drawConfigService");
		this.drawTaskNotifyService = (IDrawTaskNotifyService) SpringUtils.getBean("drawTaskNotifyService");
		this.drawTaskConsumeService = (IDrawTaskConsumeService) SpringUtils.getBean("drawTaskConsumeService");
		this.awardService = (AwardService) SpringUtils.getBean("awardService");
		this.sysDictDataService = (ISysDictDataService) SpringUtils.getBean("sysDictDataService");
		this.sysDictTypeService = (ISysDictTypeService) SpringUtils.getBean("sysDictTypeService");
		this.drawAwardRecordService = (IDrawAwardRecordService) SpringUtils.getBean("drawAwardRecordService");
	}

	/**
	 * �齱���߳�ʵ��
	 * 
	 * @throws Exception
	 * @throws RemoteException
	 */
	@Override
	public DrawResult call() throws RemoteException, Exception {
		// �жϳ齱�����Ƿ�����齱
		long point4 = System.currentTimeMillis();
		logger.info("�齱����4:" + request.getSerialNo() + ":" + point4);
		int x = checkRule(request.getUserId());
		logger.info("�齱�����жϷ���:" + request.getSerialNo() + "����ֵ" + x);
		if (x == 10) {
			// ��������
			return processResp(request, DrawActivityResult.EXCEPTION_000002, DrawActivityResult.getMsg(DrawActivityResult.EXCEPTION_000002, "����涨�ĳ齱��������"));
		}
		long point5 = System.currentTimeMillis();
		logger.info("�齱����5:" + request.getSerialNo() + ":" + point5 + "��ǰһ������ʱ���" + (point5 - point4));
		// �жϳ齱����
		String expeno = gtDrawInfo.getEXPENO();
		if (Const.DRAW_EXPE_INTEGRAL.equals(expeno)) {
			// ��ѯ�����˻���Ϣ
//			GetAccountServiceStub.GetAccountResponse getAccountResopnseService = getIntegralAccount(body);
//			if (getAccountResopnseService == null) {
//				return processResp(request, DrawActivityResult.EXCEPTION, DrawActivityResult.getMsg(DrawActivityResult.EXCEPTION, "��ѯ�����˻��쳣"));
//			}
//			GetAccountServiceStub.GetAccountResopnse get_return = getAccountResopnseService.get_return();
//			if (get_return == null) {
//				return processResp(request, DrawActivityResult.EXCEPTION, DrawActivityResult.getMsg(DrawActivityResult.EXCEPTION, "��ѯ�����˻��쳣"));
//			}
//			logger.info("getIntegralAccount response: " + get_return.getResultCode()+"|"+get_return.getResultInfo());
//			if (!get_return.getResultCode().equals(DrawActivityResult.SUCCESS)) {
//				return processResp(request, DrawActivityResult.EXCEPTION_000009,
//						DrawActivityResult.getMsg(DrawActivityResult.EXCEPTION_000009, get_return.getResultCode() + get_return.getResultInfo()));
//			}
//			GetAccountServiceStub.ResponseAccoutResult result = get_return.getAccout();
//			String integral = result.getIntegral();
//			Long expeNoValue = gtDrawInfo.getEXPENOVALUE();
//			if (new Long(integral).compareTo(expeNoValue) == -1) {
//				return processResp(request, DrawActivityResult.EXCEPTION_000010, DrawActivityResult.getMsg(DrawActivityResult.EXCEPTION_000010));
//			}
//			long point6 = System.currentTimeMillis();
//			logger.info("�齱����6:" + request.getSerialNo() + ":" + point6 + "��ǰһ������ʱ���" + (point6 - point5));
//			String tranSeqNo = new SimpleDateFormat("yyyyMMddHHmmssSSS").format(new Date()) + sequenceService.getDrawActivirtSeq();
//			DrawRecord gtDrawRecord = addGtDrawActityRecord(tranSeqNo, body);
//			String recordId = gtDrawRecord.getDrawRecordId();
//			// ���ֳ齱�����ɻ����� ��
//			InspectIntegralAccountWebServiceStub.InspectPaymentCodeResponse responseService = getIntegralPaymentToken(recordId, body);
//			InspectIntegralAccountWebServiceStub.MaInspectIntegralAccountResponse maInspectIntegralAccountResponse = responseService.get_return();
//			if (responseService == null || maInspectIntegralAccountResponse == null) {
//				gtIntegralPaymentService.saveGtIntegralPaymentList(gtIntegralPaymentList);
//				return processResp(request, DrawActivityResult.EXCEPTION_000002, DrawActivityResult.getMsg(DrawActivityResult.EXCEPTION_000002, "����֧��ʧ�ܣ����ƴ���"));
//			}
//			if (!maInspectIntegralAccountResponse.getResultCode().equals(DrawActivityResult.SUCCESS)) {
//				gtIntegralPaymentService.saveGtIntegralPaymentList(gtIntegralPaymentList);
//				return processResp(request, DrawActivityResult.EXCEPTION_000002, DrawActivityResult.getMsg(DrawActivityResult.EXCEPTION_000002, maInspectIntegralAccountResponse.getResultCode() + maInspectIntegralAccountResponse.getResultInfo()));
//			}
//			String token = maInspectIntegralAccountResponse.getTempToken();
//			logger.info("token___________________" + token);
//			bill = token;
//			long point7 = System.currentTimeMillis();
//			logger.info("�齱����7:" + request.getSerialNo() + ":" + point7 + "��ǰһ������ʱ���" + (point7 - point6));
//			// ���ֶ���
//			DealWorkingWebServiceResponse dealWorkingWebServiceResponse = freezeIntegral(recordId, body, token);
//			if (!(dealWorkingWebServiceResponse.getResultCode().equals(DrawActivityResult.SUCCESS) || dealWorkingWebServiceResponse == null)) {
//				gtIntegralPaymentService.saveGtIntegralPaymentList(gtIntegralPaymentList);
//				return processResp(request, DrawActivityResult.EXCEPTION_000002, DrawActivityResult.getMsg(DrawActivityResult.EXCEPTION_000002, dealWorkingWebServiceResponse.getResultCode() + dealWorkingWebServiceResponse.getResultInfo()));
//			}
//			long point8 = System.currentTimeMillis();
//			logger.info("�齱����8:" + request.getSerialNo() + ":" + point8 + "��ǰһ������ʱ���" + (point8 - point7));
//			Object[] awardObject = computingProcess(x);
//			// ����֧��
//			DealWorkingWebServiceResponse deductIntegralCheckResponse = deductIntegralCheck(recordId, body, dealWorkingWebServiceResponse);
//			if (!(deductIntegralCheckResponse.getResultCode().equals(DrawActivityResult.SUCCESS) || deductIntegralCheckResponse == null)) {
//				gtIntegralPaymentService.saveGtIntegralPaymentList(gtIntegralPaymentList);
//				return processResp(request, DrawActivityResult.EXCEPTION_000002, DrawActivityResult.getMsg(DrawActivityResult.EXCEPTION_000002, dealWorkingWebServiceResponse.getResultCode() + dealWorkingWebServiceResponse.getResultInfo()));
//			}
//			long point9 = System.currentTimeMillis();
//			logger.info("�齱����9:" + request.getSerialNo() + ":" + point9 + "��ǰһ������ʱ���" + (point9 - point8));
//			response = processDraw(tranSeqNo, gtDrawRecord, awardObject);
//			long point10 = System.currentTimeMillis();
//			logger.info("�齱����10:" + request.getSerialNo() + ":" + point10 + "��ǰһ������ʱ���" + (point10 - point9));
//			// �������������־
//			gtIntegralPaymentService.saveGtIntegralPaymentList(gtIntegralPaymentList);
//			// ��������
//			long point11 = System.currentTimeMillis();
//			logger.info("�齱����11:" + request.getSerialNo() + ":" + point11 + "��ǰһ������ʱ���" + (point11 - point10));
//			// ��ѯʣ�����
//			GetAccountServiceStub.GetAccountResponse getAvailableAccountResopnseService = getIntegralAccount(body);
//			GetAccountServiceStub.GetAccountResopnse getAvailable_return = getAvailableAccountResopnseService.get_return();
//			if (getAvailableAccountResopnseService == null || getAvailable_return == null) {
//				return processResp(request, DrawActivityResult.EXCEPTION_000002, DrawActivityResult.getMsg(DrawActivityResult.EXCEPTION_000002, "��ѯ�����˻��쳣"));
//			}
//			if (!getAvailable_return.getResultCode().equals(DrawActivityResult.SUCCESS)) {
//				return processResp(request, DrawActivityResult.EXCEPTION_000002, DrawActivityResult.getMsg(DrawActivityResult.EXCEPTION_000002, get_return.getResultCode() + get_return.getResultInfo()));
//			}
//			GetAccountServiceStub.ResponseAccoutResult availebleResult = getAvailable_return.getAccout();
//			String availebleintegral = availebleResult.getIntegral();
//			long point12 = System.currentTimeMillis();
//			logger.info("�齱����12:" + request.getSerialNo() + ":" + point12 + "��ǰһ������ʱ���:" + (point12 - point11));
//			response.setAvailable(availebleintegral);
			response = processResp(request, DrawActivityResult.EXCEPTION_000002, DrawActivityResult.getMsg(DrawActivityResult.EXCEPTION_000002, "�ݲ�֧�ֻ��ֳ齱"));
			return response;
		} else if (Const.DRAW_EXPE_TASK.equals(expeno)) {
			// �۳�����
			String tranSeqNo = new SimpleDateFormat("yyyyMMddHHmmssSSS").format(new Date()) + sequenceService.getDrawActivirtSeq();
			Object[] awardObject = computingProcess(x);
			long point6 = System.currentTimeMillis();
			logger.info("�齱����6:" + request.getSerialNo() + "_" + tranSeqNo + "&ʱ��:" + point6 + "&��ǰһ������ʱ���:" + (point6 - point5));
			// ������ϸ
			String gtTaskConsumeId = taskPlus();
			if (gtTaskConsumeId == null || "".equals(gtTaskConsumeId)) {
				return processResp(request, DrawActivityResult.EXCEPTION_000007, DrawActivityResult.getMsg(DrawActivityResult.EXCEPTION_000007));
			}
			long point7 = System.currentTimeMillis();
			logger.info("�齱����7:" + request.getSerialNo() + "_" + tranSeqNo + "&ʱ��:" + point7 + "&��ǰһ������ʱ���:" + (point7 - point6));
			DrawRecord gtDrawRecord = addGtDrawActityRecord(tranSeqNo, request);
			String recordId = gtDrawRecord.getDRAWRECORDID();
			long point8 = System.currentTimeMillis();
			logger.info("�齱����8:" + request.getSerialNo() + "_" + tranSeqNo + "&ʱ��:" + point8 + "&��ǰһ������ʱ���:" + (point8 - point7));
			// �жϷ���
			response = processDraw(tranSeqNo, gtDrawRecord, awardObject);
			long point9 = System.currentTimeMillis();
			logger.info("�齱����9:" + request.getSerialNo() + "_" + tranSeqNo + "&ʱ��:" + point9 + "&��ǰһ������ʱ���:" + (point9 - point8));
			// �齱��������
			DrawTaskConsume taskConsume = new DrawTaskConsume();
			taskConsume.setTRANSEQNO(tranSeqNo);
			taskConsume.setTRADEORDERID(recordId);
			taskConsume.setTASKCONSUMEID(gtTaskConsumeId);
			drawTaskConsumeService.updateDrawTaskConsumeState(taskConsume);
			long point10 = System.currentTimeMillis();
			logger.info("�齱����10:" + request.getSerialNo() + "_" + tranSeqNo + "&ʱ��:" + point10 + "&��ǰһ������ʱ���:" + (point10 - point9));
			// ��ѯʣ��齱����
			DrawTaskNotify drawTaskNotify = new DrawTaskNotify();
			drawTaskNotify.setDRAWCODE(gtDrawInfo.getDRAWCODE());
			drawTaskNotify.setUSERID(request.getUserId());
			Integer available = drawTaskNotifyService.selectDrawNumByUserId(drawTaskNotify);
			long point11 = System.currentTimeMillis();
			logger.info("�齱����11:" + request.getSerialNo() + "_" + tranSeqNo + "&ʱ��:" + point11 + "&��ǰһ������ʱ���:" + (point11 - point10));
			response.setAvailable(available+"");
			return response;
		}
		return response;
	}

	/**
	 * �������ֵ���ȯ��Ʒ
	 * @author huayue
	 * @since 2020-08-13
	 * @version 1656
	 * @param gtPrizeInfo
	 * @param gtDrawRecord
	 * @return
	 */
//	public String awardCoupon(DrawPrizeInfo gtPrizeInfo, GtDrawRecord gtDrawRecord) {
//		String extId = null;
//		try {
//            String transCode = PropertiesUtil.getProperties("sysConfig.properties", "URL_INTERFACE_INTEGRAL_AWARD_COUPON_SERVICE");
//			String awardCouponUrl = PropertiesUtil.getProperties("sysConfig.properties", "URL_INTERFACE_INTEGRAL_AWARD_COUPON_SERVICE");
//			AwardCouponServiceStub stub = new AwardCouponServiceStub(awardCouponUrl);
//			AwardCouponServiceStub.AwardCoupon awardCoupon = new AwardCouponServiceStub.AwardCoupon();
//			AwardCouponServiceStub.AwardCouponRequest req = new AwardCouponServiceStub.AwardCouponRequest();
//			AwardCouponServiceStub.AwardCouponRequestHander hander = getIntegralHander(AwardCouponServiceStub.AwardCouponRequestHander.class, "INTEGRAL_INTERFACE_TRANSCODE_AWARD_COUPON");
//			req.setHander(hander);
//			AwardCouponServiceStub.AwardCouponRequestBody body = new AwardCouponServiceStub.AwardCouponRequestBody();
//			body.setAwardsId(gtPrizeInfo.getIntegralProjectCode());
//			body.setUserId(gtDrawRecord.getUserId());
//			body.setUserType("01");
//			body.setMobile(gtDrawRecord.getPHONE());
//			body.setCHANNEL(request.getChannel());
//			body.setCount("1");
//			body.setBill(bill);
//			String hostAddress = InetAddress.getLocalHost().getHostAddress();
//			body.setIp(StringUtils.isBlank(hostAddress)?"127.0.0.1":hostAddress);
//			req.setBody(body);
//			awardCoupon.setRequest(req);
//			long start = System.currentTimeMillis();
//			AwardCouponServiceStub.AwardCouponResponseE awardCouponResponseE = stub.awardCoupon(awardCoupon);
//			long proct = System.currentTimeMillis()-start;
//			AwardCouponServiceStub.AwardCouponResponse aReturn = awardCouponResponseE.get_return();
//			String resultCode = aReturn.getResultCode();
//			String resultInfo = aReturn.getResultInfo();
//			String startTime = aReturn.getStartTime();
//			String endTime = aReturn.getEndTime();
//			String prizeCode = aReturn.getPRIZECODE();
//			saveAwardRecord(resultCode, resultInfo, gtDrawRecord, prizeCode);
//            JsonBinder jsonBinder = JsonBinder.buildNormalBinder();
//			saveTransRecord(transCode, jsonBinder.toJson(req), jsonBinder.toJson(aReturn), proct);
//			if ("0000".equals(resultCode)) {
//				JSONObject json = new JSONObject();
//				json.put("prizeCode", prizeCode);
//				json.put("startTime", startTime);
//				json.put("endTime", endTime);
//				return json.toString();
//			}
//        } catch (Exception e) {
//			logger.error("���Ż��ֵ���ȯ�쳣��", e);
//		}
//		return extId;
//	}

	/**
	 * ��ȡ��������hander����
	 * @author huayue
	 * @since 2020-08-13
	 * @version 1656
	 * @param clazz HanderClass
	 * @param transCodeKey transCode in sysConfig.properties
	 * @param <T>
	 * @return
	 */
//	private <T> T getIntegralHander(Class<T> clazz, String transCodeKey) {
//		T obj = null;
//		try {
//			String userName = PropertiesUtil.getProperties("sysConfig.properties", "INTEGRAL_INTERFACE_USER_HANDER");
//			String transCode = PropertiesUtil.getProperties("sysConfig.properties", transCodeKey);
//			String sysName = PropertiesUtil.getProperties("sysConfig.properties", "INTEGRAL_INTERFACE_SYS_NAME");
//			String pwd = PropertiesUtil.getProperties("sysConfig.properties", "INTEGRAL_INTERFACE_PASS_HANDER");
//
//			obj = clazz.newInstance();
//
//			MethodUtils.invokeMethod(obj, "setTransCode", transCode);
//			MethodUtils.invokeMethod(obj, "setSerialNo", DateUtil.getCurrentDate("yyyyMMddHHmmssSSS"));
//			MethodUtils.invokeMethod(obj, "setUserName", userName);
//			MethodUtils.invokeMethod(obj, "setPassword", pwd);
//			MethodUtils.invokeMethod(obj, "setSysName", sysName);
//
//		} catch (Exception e) {
//			logger.error("��װ��������ͷ�쳣��", e);
//		}
//		return obj;
//	}
	/**
	 * �洢���ױ���
	 * @author huayue
	 * @since 2020-08-11
	 * @version 1654
	 */
//	private void saveTransRecord(String transCode, String reqMsg, String respMsg, long proct) {
//		InPortalTransmessage message = new InPortalTransmessage();
//		message.setTransCode(transCode);
//		message.setTransRefGuid(new SimpleDateFormat("yyyyMMddHHmmssSSS").format(new Date()));
//		message.setRequestTime(new Date());
//		message.setResponseTime(new Date());
//		message.setRequestMessage(reqMsg);
//		message.setProct(proct);
//		message.setResponseMessage(respMsg);
//		transRecordService.offer(message);
//	}
	/**
	 * �洢�н���¼
	 * @author huayue
	 * @since 2020-08-11
	 * @version 1654
	 */
	private void saveAwardRecord(String returnCode, String returnInfo, DrawRecord gtDrawRecord, String extId) {
		DrawAwardRecord gtAwardRecord = new DrawAwardRecord();
		gtAwardRecord.setUSERNAME(gtDrawRecord.getUSERNAME());
		gtAwardRecord.setUSERID(gtDrawRecord.getUSERID());
		gtAwardRecord.setCREATETIMESTAMP(new Date());
		gtAwardRecord.setDRAWCODE(gtDrawRecord.getDRAWCODE());
		gtAwardRecord.setDRAWRECORDID(gtDrawRecord.getDRAWRECORDID());
		gtAwardRecord.setLASTUPDATETIMESTAMP(new Date());
		gtAwardRecord.setPRIZECODE(gtDrawRecord.getPRIZECODE());
		gtAwardRecord.setPRIZETYPE(gtDrawRecord.getPRIZETYPE());
		gtAwardRecord.setPRIZELEVEL(gtDrawRecord.getPRIZELEVEL());
		gtAwardRecord.setRETURNCODE(returnCode);
		gtAwardRecord.setRETURNMESSAGE(returnInfo);
		gtAwardRecord.setMERCHANTCODE(request.getMerchantCode());
		gtAwardRecord.setMERCHANTSYSCODE(request.getMerchantSysCode());
		gtAwardRecord.setCHANNEL(request.getChannel());
		gtAwardRecord.setBUSINESSAREA(request.getBusinessArea());
		gtAwardRecord.setDRAWTRANSEQNO(gtDrawRecord.getDRAWTRANSEQNO());
		gtAwardRecord.setEXTID(extId);
		if (DrawActivityResult.SUCCESS.equals(returnCode)) {
			gtAwardRecord.setAWARDRESULT(Const.AWARD_RESULT_SUCCESS);
			gtAwardRecord.setAWARDTIME(new Date());
		}else{
			gtAwardRecord.setAWARDRESULT(Const.AWARD_RESULT_FAIL);
			logger.error("saveAwardRecordʧ�ܣ�"+gtDrawRecord.getDRAWTRANSEQNO()+"&ʧ��ԭ��"+returnInfo);
		}
		drawAwardRecordService.insertDrawAwardRecord(gtAwardRecord);
	}
	/**
	 * һ��ͨ���
	 * @param gtPrizeInfo
	 * @param gtDrawRecord
	 * @return
	 * @throws Exception
	 */
//	public String getAccount(DrawPrizeInfo gtPrizeInfo, GtDrawRecord gtDrawRecord) throws Exception {
//		String extId = null;
//		String serviceId=PropertiesUtil.getProperties("sysConfig.properties", "ACCOUNT_SERVICEID");
//		String version=PropertiesUtil.getProperties("sysConfig.properties", "ACCOUNT_VERSION");
//		String url=PropertiesUtil.getProperties("sysConfig.properties", "ACCOUNT_URL");
//		String dev=PropertiesUtil.getProperties("sysConfig.properties", "dev");
//		Map<String, String> account_config = inCodeService.findAllCodeAndName("accountConfig");
//		String bonusSubType=account_config.get("p_sub_type");
//		String partnerId=account_config.get("PARTNID");
//		String key=account_config.get("p_key");
//		StringBuffer param=new StringBuffer("serviceId="+serviceId+"&partnerId="+partnerId);
//		JSONObject jsonRequest = new JSONObject();
//		JSONObject jsonHeader = new JSONObject();
//		JSONObject jsonBody = new JSONObject();
//		jsonHeader.put("version",version);
//		jsonHeader.put("timestamp", new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date()));
//		jsonHeader.put("format", "JSON");
//		jsonBody.put("mobile",gtDrawRecord.getPHONE());
//		jsonBody.put("couponCode", gtPrizeInfo.getIntegralProjectCode());
//		jsonBody.put("bonusSubType", bonusSubType);
//		jsonRequest.put("header", jsonHeader);
//		jsonRequest.put("request", jsonBody);
//		param.append("&data="+jsonRequest.toString());
//		param.append("&sign="+Md5Util.digestByMd5(partnerId+jsonRequest.toString()+key));
//		System.out.println(param);
//		boolean dev_flag=false;
//		if(dev.equals("1")){
//			dev_flag=true;
//		}
//		long start = System.currentTimeMillis();
//		logger.info("һ��ͨ���������:" + request.getSerialNo() + "_" + gtDrawRecord.getDrawTranseqNo() + "&���Ͳ���:" + param.toString() + "&����ʱ��:" + start);
//		String responseStr=HttpRequestUtil.sendPost(url,param.toString(), dev_flag);
//		long end = System.currentTimeMillis();
//		long proct = end - start;
//		logger.info("һ��ͨ�������Ӧ:" + request.getSerialNo() + "_" + gtDrawRecord.getDrawTranseqNo() + "&��Ӧ����:" + responseStr + "&��Ӧʱ��:" + System.currentTimeMillis() + "&����ʱ��:" + proct);
//		JSONObject responseJson = JSONObject.fromObject(responseStr);
//		GtAwardRecord gtAwardRecord = new GtAwardRecord();
//		gtAwardRecord.setUserName(request.getUserName());
//		gtAwardRecord.setUserId(request.getUserId());
//		gtAwardRecord.setCreateTimeStamp(new Date());
//		gtAwardRecord.setDrawCode(gtDrawInfo.getDRAWCODE());
//		gtAwardRecord.setDrawRecordId(gtDrawRecord.getDrawRecordId());
//		gtAwardRecord.setLastUpdateTimeStamp(new Date());
//		gtAwardRecord.setPrizeCode(gtPrizeInfo.getPRIZECODE());
//		gtAwardRecord.setPRIZETYPE(gtPrizeInfo.getPRIZETYPE());
//		gtAwardRecord.setPRIZELEVEL(gtDrawRecord.getPRIZELEVEL());
//		gtAwardRecord.setReturnCode(responseJson.getJSONObject("header").get("code").toString());
//		gtAwardRecord.setReturnMessage(responseJson.getJSONObject("header").get("msg").toString());
//		gtAwardRecord.setDrawTranseqNo(gtDrawRecord.getDrawTranseqNo());
//		
//		if (responseJson.getJSONObject("header").get("code").toString().endsWith("0")&&responseJson.getJSONObject("response").getJSONObject("query").getString("drawStatus").equals("1")) {
//			gtAwardRecord.setAwardResult(Const.AWARD_RESULT_SUCCESS);
//			gtAwardRecord.setAwardTime(new Date());
//			gtDrawRecord.setDrawResult(Const.DRAW_RECORD_RESULT_AWARDS);
//			extId = responseJson.getJSONObject("response").getJSONObject("query").getString("bonusAmount");
//			gtAwardRecord.setAwardTranseqNo(extId);
//			drawRecordService.updateGtDrawRecord(gtDrawRecord);
//			drawAwardRecordService.addGtAwardRecord(gtAwardRecord);
//		} else {
//			gtAwardRecord.setAwardResult(Const.AWARD_RESULT_FAIL);
//		}
//		InPortalTransmessage message = new InPortalTransmessage();
//		message.setTransCode("EXT00003");
//		message.setTransRefGuid(new SimpleDateFormat("yyyyMMddHHmmssSSS").format(new Date()));
//		message.setRequestTime(new Date());
//		message.setResponseTime(new Date());
//		message.setRequestMessage(param.toString());
//		message.setProct(proct);
//		message.setResponseMessage(responseStr);
//		transRecordService.offer(message);
//		return extId;
//	}
	
	
	/**
	 * ���ÿ�ȯ������ȯ�ӿ�
	 * 
	 * @return
	 * @throws Exception
	 */
//	public String getDiscountCode(DrawPrizeInfo gtPrizeInfo, GtDrawRecord gtDrawRecord) throws Exception {
//		String extId = null;
//		Map<String, String> coupon_config = inCodeService.findAllCodeAndName("INTERFACE_COUPON");
//		if (coupon_config == null || gtPrizeInfo == null) {
//			throw new Exception("��ȯ���ò����쳣");
//		}
//		StringBuffer param = new StringBuffer();
//		param.append("service_id=" + PropertiesUtil.getProperties("sysConfig.properties", "INTERFACE_COUPON_SERVICE_ID"));
//		param.append("&accessToken=" + coupon_config.get("ACCESS_TOKEN"));
//		Map<String, Object> dataMap = new HashMap<String, Object>();
//		Map<String, Object> requestMap = new HashMap<String, Object>();
//		requestMap.put("oldUserId", request.getUserId());
//		requestMap.put("bonusCode", gtPrizeInfo.getIntegralProjectCode());
////		requestMap.put("discountCode", gtPrizeInfo.getIntegralProjectCode());
//		requestMap.put("channelType", "3");
//		requestMap.put("platformLimit", "3");
//		dataMap.put("request", requestMap);
//		JSONObject jsonObject = JSONObject.fromObject(dataMap);
//		param.append("&data=" + jsonObject.toString());
//		long start = System.currentTimeMillis();
//		logger.info("ȯ���ķ�ȯ����:" + request.getSerialNo() + "_" + gtDrawRecord.getDrawTranseqNo() + "&���Ͳ���:" + param.toString() + "&����ʱ��:" + start);
//		String interfaceCouponUrl = PropertiesUtil.getProperties("sysConfig.properties", "INTERFACE_COUPON_URL");
//		String ecMock = PropertiesUtil.getProperties("sysConfig.properties", "ecMock");
//		String responseStr = null;
//		if ("1".equals(ecMock)) {
//			responseStr = "{\"response\":{\"errorCode\":\"0000\",\"errorMsg\":\"�Ż�ȯ��ȡ�ɹ�\",\"status\":\"0\",\"discountCode\":\"31098\",\"bonusUserId\":\"31098\"}}";
//		} else {
//			responseStr = HttpRequestUtil.sendHttpPostRequest(interfaceCouponUrl, param.toString());
//		}
//
//		long end = System.currentTimeMillis();
//		long proct = end - start;
//		logger.info("ȯ���ķ�ȯ��Ӧ:" + request.getSerialNo() + "_" + gtDrawRecord.getDrawTranseqNo() + "&��Ӧ����:" + responseStr + "&��Ӧʱ��:" + System.currentTimeMillis() + "&����ʱ��:" + proct);
//		if (StringUtils.isBlank(responseStr)) {
//			logger.error("��ȯ���ķ���Ϊ��");
//			return extId;
//		}
//		JSONObject responseJson = JSONObject.fromObject(responseStr);
//		GtAwardRecord gtAwardRecord = new GtAwardRecord();
//		gtAwardRecord.setUserName(request.getUserName());
//		gtAwardRecord.setUserId(request.getUserId());
//		gtAwardRecord.setCreateTimeStamp(new Date());
//		gtAwardRecord.setDrawCode(gtDrawInfo.getDRAWCODE());
//		gtAwardRecord.setDrawRecordId(gtDrawRecord.getDrawRecordId());
//		gtAwardRecord.setLastUpdateTimeStamp(new Date());
//		gtAwardRecord.setPrizeCode(gtPrizeInfo.getPRIZECODE());
//		gtAwardRecord.setPRIZETYPE(gtPrizeInfo.getPRIZETYPE());
//		gtAwardRecord.setPRIZELEVEL(gtDrawRecord.getPRIZELEVEL());
//		gtAwardRecord.setReturnCode(responseJson.getJSONObject("response").get("errorCode").toString());
//		gtAwardRecord.setReturnMessage(responseJson.getJSONObject("response").get("errorMsg").toString());
//		gtAwardRecord.setDrawTranseqNo(gtDrawRecord.getDrawTranseqNo());
//		if (responseJson.getJSONObject("response").get("errorCode").toString().endsWith(DrawActivityResult.SUCCESS)) {
//			gtAwardRecord.setAwardResult(Const.AWARD_RESULT_SUCCESS);
//			gtAwardRecord.setAwardTime(new Date());
//			gtDrawRecord.setDrawResult(Const.DRAW_RECORD_RESULT_AWARDS);
//			extId = responseJson.getJSONObject("response").get("discountCode").toString();
//			gtAwardRecord.setAwardTranseqNo(extId);
//			drawRecordService.updateGtDrawRecord(gtDrawRecord);
//			drawAwardRecordService.addGtAwardRecord(gtAwardRecord);
//		} else {
//			gtAwardRecord.setAwardResult(Const.AWARD_RESULT_FAIL);
//		}
//		InPortalTransmessage message = new InPortalTransmessage();
//		message.setTransCode("EXT00001");
//		message.setTransRefGuid(new SimpleDateFormat("yyyyMMddHHmmssSSS").format(new Date()));
//		message.setRequestTime(new Date());
//		message.setResponseTime(new Date());
//		message.setRequestMessage(jsonObject.toString());
//		message.setProct(proct);
//		message.setResponseMessage(responseStr);
//		transRecordService.offer(message);
//		return extId;
//	}

	// �ֻ������ж�
	private static boolean limitMobile(String mobile, String regex) {
		Pattern p = Pattern.compile(regex);
		Matcher m = p.matcher(mobile);
		return m.matches();
	}
	/**
	 * �齱����ж�
	 * 
	 * @param tranSeqNo
	 * @param gtDrawRecord
	 * @param awardObject
	 * @return
	 * @throws Exception
	 */
	private DrawResult processDraw(String tranSeqNo, DrawRecord gtDrawRecord, Object[] awardObject) throws Exception {
		DrawResult responseBody = new DrawResult();
		DrawConfig blankConfig = (DrawConfig) Cache.get("_" + gtDrawInfo.getDRAWCODE() + "_blankConfig_");
		DrawPrizeInfo awardBlankPrize = (DrawPrizeInfo) Cache.get("_" + gtDrawInfo.getDRAWCODE() + "_blank_");
		DrawConfig awardConfig = (DrawConfig) awardObject[0];
		DrawPrizeInfo awardPrize = (DrawPrizeInfo) awardObject[1];
		if (awardConfig != null) {
			String phone = gtDrawRecord.getPHONE();
			String drawCode = gtDrawRecord.getDRAWCODE();
			String regex = sysDictDataService.selectDictLabel( "DrawLimit", "mobile_"+drawCode);
//			String regex = "^(170|171)\\d{8}$";
			if (StringUtils.isNotBlank(phone) && StringUtils.isNotBlank(regex) && limitMobile(phone, regex)) {
				responseBody = parseResponseBody(tranSeqNo, awardBlankPrize, blankConfig, null, gtDrawRecord);
			} else if (awardConfig.getAWARDTYPE().equals(Const.AWARD_TYPE_NONE)) {
				// û�����ƣ�ֱ���жϿ��
				responseBody = querySotre(tranSeqNo, awardConfig, awardPrize, gtDrawRecord);
				logger.info("�齱����ж�:" + request.getSerialNo() + "_" + tranSeqNo + "&����������,�жϿ������" + responseBody.getPrizeType());
			} else if (awardConfig.getAWARDTYPE().equals(Const.AWARD_TYPE_DISTINCTION)) {
				// ��ȡ���ƴ�ʱ
				Long awardTypeValue = awardConfig.getAWARDTYPEVALUE();
				// ��ѯ���λ�µ��н�����
				DrawRecord drawRecord = new DrawRecord();
				drawRecord.setUSERID(request.getUserId());
				drawRecord.setDRAWCODE(gtDrawInfo.getDRAWCODE());
				drawRecord.setPRIZECODE(awardConfig.getPRIZECODE());
				Long size = drawRecordService.selectDrawRecordCount(drawRecord);
				if (size.compareTo(awardTypeValue) >= 0) {
					// �������ޣ��ս�
					responseBody = parseResponseBody(tranSeqNo, awardBlankPrize, blankConfig, null, gtDrawRecord);
					logger.info("�齱����ж�:" + request.getSerialNo() + "_" + tranSeqNo + "&��һ������ҵ�������,�жϿ������" + responseBody.getPrizeType());
				} else {
					responseBody = querySotre(tranSeqNo, awardConfig, awardPrize, gtDrawRecord);
					logger.info("�齱����ж�:" + request.getSerialNo() + "_" + tranSeqNo + "&��һ�������δ��������,�жϿ������" + responseBody.getPrizeType());
				}
			} else if (awardConfig.getAWARDTYPE().equals(Const.AWARD_TYPE_NODISTINCTION)) {
				// ��ȡ���ƴ�ʱ
				Long awardTypeValue = awardConfig.getAWARDTYPEVALUE();
				// ��ѯ���л�µ��н�����
				DrawRecord drawRecord = new DrawRecord();
				drawRecord.setUSERID(request.getUserId());
				drawRecord.setPRIZECODE(awardConfig.getPRIZECODE());
				Long size = drawRecordService.selectDrawRecordCount(drawRecord);
				if (size.compareTo(awardTypeValue) >= 0) {
					// �������ޣ��ս�
					responseBody = parseResponseBody(tranSeqNo, awardBlankPrize, blankConfig, null, gtDrawRecord);
					logger.info("�齱����ж�:" + request.getSerialNo() + "_" + tranSeqNo + "&�ǵ�һ�����ҵ�������,�жϿ������" + responseBody.getPrizeType());
				} else {
					responseBody = querySotre(tranSeqNo, awardConfig, awardPrize, gtDrawRecord);
					logger.info("�齱����ж�:" + request.getSerialNo() + "_" + tranSeqNo + "&�ǵ�һ�������δ��������,�жϿ������" + responseBody.getPrizeType());
				}
			}
		} else {
			responseBody = parseResponseBody(tranSeqNo, awardBlankPrize, blankConfig, null, gtDrawRecord);
		}
		if (!Const.PRIZE_TYPE_BLANK.equals(responseBody.getPrizeType())) {
			if (awardConfig != null && Const.AWARD_METHOD_AUTO.equals(awardConfig.getAWARDMETHOD())) {
				updateGtDrawRecordResult(gtDrawRecord.getDRAWRECORDID(), Const.DRAW_RECORD_RESULT_AWARDS, responseBody.getPrizeCode(), responseBody.getPrizeType(), responseBody.getPrizeLevel(), responseBody.getExtId());
			} else {
				updateGtDrawRecordResult(gtDrawRecord.getDRAWRECORDID(), responseBody.getResult(), responseBody.getPrizeCode(), responseBody.getPrizeType(), responseBody.getPrizeLevel(), responseBody.getExtId());
			}
		} else {
			updateGtDrawRecordResult(gtDrawRecord.getDRAWRECORDID(), responseBody.getResult(), responseBody.getPrizeCode(), responseBody.getPrizeType(), responseBody.getPrizeLevel(), responseBody.getExtId());
		}
		response = processResp(request, DrawActivityResult.SUCCESS, DrawActivityResult.getMsg(DrawActivityResult.SUCCESS));
		return response;
	}

	/**
	 * �жϽ�Ʒ���
	 * 
	 * @param tranSeqNo
	 * @param awardConfig
	 * @param awardPrize
	 * @return
	 * @throws Exception
	 */
	private DrawResult querySotre(String tranSeqNo, DrawConfig awardConfig, DrawPrizeInfo awardPrize, DrawRecord gtDrawRecord) throws Exception {
		long start = System.currentTimeMillis();
		logger.info("��ѯ��Ʒ��濪ʼ��" + tranSeqNo + ":" + start);
		DrawResult responseBody = new DrawResult();
		DrawConfig blankConfig = (DrawConfig) Cache.get("_" + gtDrawInfo.getDRAWCODE() + "_blankConfig_");
		DrawPrizeInfo awardBlankPrize = (DrawPrizeInfo) Cache.get("_" + gtDrawInfo.getDRAWCODE() + "_blank_");
		int f = prizeProcess(awardConfig);
		long check1 = System.currentTimeMillis();
		logger.info("��ɸ��¿�棺" + tranSeqNo + ":" + check1 + "����ʱ��" + (check1 - start));
		if (f == 0) {
			// ��Ʒû�ˣ���Ϊ�ս�
			responseBody = parseResponseBody(tranSeqNo, awardBlankPrize, blankConfig, null, gtDrawRecord);
		} else {
			Map<String, SysDictData> awardNotifyType = sysDictTypeService.selectDictMapByType("AWARDNOTIFYTYPE");
			String syncAward = awardNotifyType.get("SYNC_AWARD_LIST").getDictLabel();
			String awardNeedParam = awardNotifyType.get("GW_AWARD_LIST_FOR_PARAM").getDictLabel();
			List<String> syncAwardList = null;
			List<String> awardNeedParamList = null;
			if (syncAward != null) {
				syncAwardList = Arrays.asList(syncAward.split(","));
			}
			if (awardNeedParam != null) {
				awardNeedParamList = Arrays.asList(awardNeedParam.split(","));
			}
			// �ж��ǲ���ͬ��
			if (syncAwardList.contains(awardPrize.getPRIZETYPE())) {
				// ͬ������
				gtDrawRecord.setPRIZELEVEL(awardConfig.getPRIZELEVEL());
				String extId=null;
				if(Const.PRIZE_TYPE_WELFARE.equals(awardPrize.getPRIZETYPE())){
//					extId=getAccount(awardPrize, gtDrawRecord);
                } else if (Const.PRIZE_TYPE_VCOUPON.equals(awardPrize.getPRIZETYPE())) {
//                    extId = awardCoupon(awardPrize, gtDrawRecord);
				}else{
//					extId = getDiscountCode(awardPrize, gtDrawRecord);
				}
				logger.info("���ͬ����ȡȯ�룺" + tranSeqNo + ":" + check1 + "����ʱ��" + (System.currentTimeMillis() - start));
				if (StringUtils.isBlank(extId)) {
					// ���˽�Ʒ����
					int n = rollBackPrizeProcess(awardConfig);
					logger.info("��Ʒ���˷���" + n);
					responseBody = parseResponseBody(tranSeqNo, awardBlankPrize, blankConfig, null, gtDrawRecord);
				} else {
					responseBody = parseResponseBody(tranSeqNo, awardPrize, awardConfig, extId, gtDrawRecord);
				}
			} else if (awardNeedParamList.contains(awardPrize.getPRIZETYPE())) {
				// ǰ�˷�������Ҫ����
				responseBody = parseResponseBody(tranSeqNo, awardPrize, awardConfig, awardPrize.getINTEGRALPROJECTCODE(), gtDrawRecord);
			} else {
				gtDrawRecord.setPRIZECODE(awardPrize.getPRIZECODE());
				gtDrawRecord.setPRIZETYPE(awardPrize.getPRIZETYPE());
				gtDrawRecord.setPRIZELEVEL(awardConfig.getPRIZELEVEL());
				gtDrawRecord.setPROJECTCODE(awardPrize.getINTEGRALPROJECTCODE());
				awardService.award(gtDrawRecord, request, gtDrawInfo, request.getPhone(), awardConfig.getAWARDMETHOD());
				responseBody = parseResponseBody(tranSeqNo, awardPrize, awardConfig, awardPrize.getINTEGRALPROJECTCODE(), gtDrawRecord);
			}

		}
		return responseBody;
	}

	/**
	 * �齱��������
	 * 
	 * @return
	 */
	public String taskPlus()  {
		DrawTaskNotify taskNotify = new DrawTaskNotify();
		taskNotify.setUSERID(request.getUserId());
		taskNotify.setDRAWCODE(gtDrawInfo.getDRAWCODE());
		return drawTaskNotifyService.updateDrawTaskNotifyNum(taskNotify);
	}

	/**
	 * �����˻���ѯ������
	 * 
	 * @param body
	 * @return
	 * @throws RemoteException
	 */
//	private GetAccountServiceStub.GetAccountResponse getIntegralAccount(DrawActivityRequestBody body) throws AxisFault, RemoteException {
//		String getIntegralAccountUrl = PropertiesUtil.getProperties("sysConfig.properties", "URL_INTERFACE_INTEGRAL_GETACCOUNTSERVICE");
//		logger.info("getIntegralAccountUrl: " + getIntegralAccountUrl);
//		GetAccountServiceStub stub = new GetAccountServiceStub(getIntegralAccountUrl);
//		GetAccountServiceStub.GetAccount getAccountService = new GetAccountServiceStub.GetAccount();
//		GetAccountServiceStub.GetAccountRequest getAccountRequest = new GetAccountServiceStub.GetAccountRequest();
//		GetAccountServiceStub.GetAccountRequestHander hander = new GetAccountServiceStub.GetAccountRequestHander();
//		GetAccountServiceStub.GetAccountRequestBody getAccountRequestBody = new GetAccountServiceStub.GetAccountRequestBody();
//		hander.setTransCode(PropertiesUtil.getProperties("sysConfig.properties", "INTEGRAL_INTERFACE_TRANSCODE_GETACCOUNTSERVICE"));
//		hander.setSysName(PropertiesUtil.getProperties("sysConfig.properties", "INTEGRAL_INTERFACE_SYS_NAME"));
//		hander.setUserName(PropertiesUtil.getProperties("sysConfig.properties", "INTEGRAL_INTERFACE_USER_HANDER"));
//		hander.setPassword(PropertiesUtil.getProperties("sysConfig.properties", "INTEGRAL_INTERFACE_PASS_HANDER"));
//		hander.setSerialNo(new SimpleDateFormat(cn.com.chinalife.activity.sys.util.common.DateUtil.FORMAT8).format(new Date()));
//		getAccountRequestBody.setUserId(body.getUserId());
//		getAccountRequestBody.setUserType(body.getUserType());
//		getAccountRequest.setHander(hander);
//		getAccountRequest.setBody(getAccountRequestBody);
//		getAccountService.setRequest(getAccountRequest);
//		GetAccountServiceStub.GetAccountResponse getAccountResopnseService = stub.getAccount(getAccountService);
//		return getAccountResopnseService;
//	}

	/**
	 * ����֧���ӿڵ���
	 * 
	 * @param id
	 * @param body
	 * @param dealWorkingWebServiceResponse
	 * @return
	 * @throws AxisFault
	 * @throws Exception
	 * @throws RemoteException
	 */
//	private DealWorkingWebServiceResponse deductIntegralCheck(String id, DrawActivityRequestBody body, DealWorkingWebServiceResponse dealWorkingWebServiceResponse) throws AxisFault, Exception, RemoteException {
//		DealWorkingWebServiceStub dealWorkingWebServiceStub = new DealWorkingWebServiceStub(false, PropertiesUtil.getProperties("sysConfig.properties", "URL_INTERFACE_INTEGRAL_DEALWORKINGWEBSERVICE"));
//		DealWorkingWebServiceStub.DeductIntegralCheck deductIntegralCheck = new DealWorkingWebServiceStub.DeductIntegralCheck();
//		String deductXml = parseIntegralPaymentXml(dealWorkingWebServiceResponse.getTrade_order(), dealWorkingWebServiceResponse.getTrade_transNo(), dealWorkingWebServiceResponse.getSerialNum(), gtDrawInfo.getExpeNoValue().toString(), body.getMerchantCode(), body.getUserId(), body.getUserType(), "0", body.getChannel(), body.getMerchantSysCode(), "Y");
//		logger.info("����֧���������ģ�" + deductXml);
//		String xml = CryptUtil.encrypt(deductXml, PropertiesUtil.getProperties("sysConfig.properties", "INTEGRAL_PUBLIC_KEY"), "utf-8");
//		deductIntegralCheck.setXmlStr(xml);
//		DealWorkingWebServiceStub.DeductIntegralCheckResponse deductIntegralCheckResponse = dealWorkingWebServiceStub.deductIntegralCheck(deductIntegralCheck);
//		String deductIntegralCheckResponseXml = deductIntegralCheckResponse.get_return();
//		DealWorkingWebServiceResponse dealWorkingWebServiceResponse2 = null;
//		logger.info("����֧�����ر��ģ�" + deductIntegralCheckResponseXml);
//		if (!(deductIntegralCheckResponseXml == null || "".equals(deductIntegralCheckResponseXml))) {
//			dealWorkingWebServiceResponse2 = parseIntegralDealResponse(deductIntegralCheckResponseXml);
//		}
//		GtIntegralPayment gtIntegralPayment = new GtIntegralPayment();
//		gtIntegralPayment.setCHANNEL(body.getChannel());
//		gtIntegralPayment.setCreateTime(new Date());
//		gtIntegralPayment.setDrawRecordId(id);
//		gtIntegralPayment.setGatewayFlow(dealWorkingWebServiceResponse2.getSerialNum());
//		if (!(dealWorkingWebServiceResponse2.getSettleDate() == null || "".equals(dealWorkingWebServiceResponse2.getSettleDate()))) {
//			Date settleDate = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").parse(dealWorkingWebServiceResponse2.getSettleDate());
//			gtIntegralPayment.setGatewayTime(settleDate);
//		}
//		gtIntegralPayment.setIntegral(gtDrawInfo.getExpeNoValue());
//		gtIntegralPayment.setLastUpdaeTime(new Date());
//		gtIntegralPayment.setMerchantCode(body.getMerchantCode());
//		gtIntegralPayment.setMerchantSysCode(body.getMerchantSysCode());
//		gtIntegralPayment.setOperationType("Y");
//		gtIntegralPayment.setReturnCode(dealWorkingWebServiceResponse2.getResultCode());
//		gtIntegralPayment.setReturnMessage(dealWorkingWebServiceResponse2.getResultInfo());
//		gtIntegralPayment.setTradeOrder(dealWorkingWebServiceResponse.getTrade_order());
//		gtIntegralPayment.setTradeSeqNo(dealWorkingWebServiceResponse.getTrade_transNo());
//		gtIntegralPayment.setType("payment");
//		gtIntegralPayment.setUserId(body.getUserId());
//		gtIntegralPayment.setUserType(body.getUserType());
//		gtIntegralPaymentList.add(gtIntegralPayment);
//		return dealWorkingWebServiceResponse2;
//	}

	/**
	 * ��֤����֧�� ����ӿڵ���
	 * 
	 * @param id
	 * @param body
	 * @return
	 * @throws AxisFault
	 * @throws RemoteException
	 */
//	private InspectIntegralAccountWebServiceStub.InspectPaymentCodeResponse getIntegralPaymentToken(String id, DrawActivityRequestBody body) throws AxisFault, RemoteException {
//		InspectIntegralAccountWebServiceStub inspectIntegralAccountWebServiceStub = new InspectIntegralAccountWebServiceStub(PropertiesUtil.getProperties("sysConfig.properties", "URL_INTERFACE_INTEGRAL_INSPECTINTEGRALACCOUNTWEBSERVICE"));
//		InspectIntegralAccountWebServiceStub.InspectPaymentCode inspectPaymentCode = new InspectIntegralAccountWebServiceStub.InspectPaymentCode();
//		InspectIntegralAccountWebServiceStub.MaInspectIntegralAccountRequest maInspectIntegralAccountRequest = new InspectIntegralAccountWebServiceStub.MaInspectIntegralAccountRequest();
//		InspectIntegralAccountWebServiceStub.MaInspectIntegralAccountHander maInspectIntegralAccountHander = new InspectIntegralAccountWebServiceStub.MaInspectIntegralAccountHander();
//		InspectIntegralAccountWebServiceStub.MaInspectIntegralAccountBody maInspectIntegralAccountBody = new InspectIntegralAccountWebServiceStub.MaInspectIntegralAccountBody();
//		maInspectIntegralAccountHander.setTransCode(PropertiesUtil.getProperties("sysConfig.properties", "INTEGRAL_INTERFACE_TRANSCODE_INSPECTINTEGRALACCOUNTWEBSERVICE"));
//		maInspectIntegralAccountHander.setSysName(PropertiesUtil.getProperties("sysConfig.properties", "INTEGRAL_INTERFACE_SYS_NAME"));
//		maInspectIntegralAccountHander.setUserName(PropertiesUtil.getProperties("sysConfig.properties", "INTEGRAL_INTERFACE_USER_HANDER"));
//		maInspectIntegralAccountHander.setPassword(PropertiesUtil.getProperties("sysConfig.properties", "INTEGRAL_INTERFACE_PASS_HANDER"));
//		maInspectIntegralAccountHander.setSerialNo(new SimpleDateFormat(cn.com.chinalife.activity.sys.util.common.DateUtil.FORMAT8).format(new Date()));
//		maInspectIntegralAccountHander.setSysCode(body.getMerchantSysCode());
//		maInspectIntegralAccountHander.setCHANNEL(body.getChannel());
//		maInspectIntegralAccountBody.setUserId(body.getUserId());
//		maInspectIntegralAccountBody.setUserType(body.getUserType());
//		maInspectIntegralAccountBody.setPlatform("SINGLESITE");
//		maInspectIntegralAccountBody.setIntegraPayCode("4F607EF6073E513FCF02DFE2E2DFE05A");
//		maInspectIntegralAccountBody.setMerchantCode(body.getMerchantCode());
//		maInspectIntegralAccountRequest.setInspectIntegralAccountHander(maInspectIntegralAccountHander);
//		maInspectIntegralAccountRequest.setInspectIntegralAccountBody(maInspectIntegralAccountBody);
//		inspectPaymentCode.setRequest(maInspectIntegralAccountRequest);
//		InspectIntegralAccountWebServiceStub.InspectPaymentCodeResponse responseService = inspectIntegralAccountWebServiceStub.inspectPaymentCode(inspectPaymentCode);
//		GtIntegralPayment gtIntegralPayment = new GtIntegralPayment();
//		gtIntegralPayment.setCHANNEL(body.getChannel());
//		gtIntegralPayment.setCreateTime(new Date());
//		gtIntegralPayment.setDrawRecordId(id);
//		gtIntegralPayment.setGatewayFlow(responseService.get_return().getTempToken());
//		gtIntegralPayment.setLastUpdaeTime(new Date());
//		gtIntegralPayment.setMerchantCode(body.getMerchantCode());
//		gtIntegralPayment.setMerchantSysCode(body.getMerchantSysCode());
//		gtIntegralPayment.setReturnCode(responseService.get_return().getResultCode());
//		gtIntegralPayment.setReturnMessage(responseService.get_return().getResultInfo());
//		gtIntegralPayment.setType("getToken");
//		gtIntegralPayment.setUserId(body.getUserId());
//		gtIntegralPayment.setUserType(body.getUserType());
//		gtIntegralPaymentList.add(gtIntegralPayment);
//		return responseService;
//	}

	/**
	 * ���ֶ���ӿڵ���
	 * 
	 * @param id
	 * @param body
	 * @param token
	 * @return
	 * @throws AxisFault
	 * @throws Exception
	 * @throws RemoteException
	 * @throws DocumentException
	 */
//	private DealWorkingWebServiceResponse freezeIntegral(String id, DrawActivityRequestBody body, String token) throws AxisFault, Exception, RemoteException, DocumentException {
//		DealWorkingWebServiceStub dealWorkingWebServiceStub = new DealWorkingWebServiceStub(false, PropertiesUtil.getProperties("sysConfig.properties", "URL_INTERFACE_INTEGRAL_DEALWORKINGWEBSERVICE"));
//		DealWorkingWebServiceStub.FreezIntegralCheck freezIntegralCheck = new DealWorkingWebServiceStub.FreezIntegralCheck();
//		String freezeXml = parseXml(token, gtDrawInfo.getExpeNoValue().toString(), body.getMerchantCode(), body.getUserId(), body.getUserType(), "0", body.getChannel(), body.getMerchantSysCode());
//		logger.info("���ֶ�������" + freezeXml);
//		String xml = CryptUtil.encrypt(freezeXml, PropertiesUtil.getProperties("sysConfig.properties", "INTEGRAL_PUBLIC_KEY"), "utf-8");
//		freezIntegralCheck.setXmlStr(xml);
//		DealWorkingWebServiceStub.FreezIntegralCheckResponse freezIntegralCheckResponse = dealWorkingWebServiceStub.freezIntegralCheck(freezIntegralCheck);
//		String responseXml = freezIntegralCheckResponse.get_return();
//		DealWorkingWebServiceResponse dealWorkingWebServiceResponse = null;
//		logger.info("���ֶ��᷵��" + responseXml);
//		if (!(responseXml == null || "".equals(responseXml))) {
//			dealWorkingWebServiceResponse = parseIntegralDealResponse(responseXml);
//		}
//		GtIntegralPayment gtIntegralPayment = new GtIntegralPayment();
//		gtIntegralPayment.setCHANNEL(body.getChannel());
//		gtIntegralPayment.setCreateTime(new Date());
//		gtIntegralPayment.setDrawRecordId(id);
//		gtIntegralPayment.setGatewayFlow(dealWorkingWebServiceResponse.getSerialNum());
//		gtIntegralPayment.setIntegral(gtDrawInfo.getExpeNoValue());
//		gtIntegralPayment.setLastUpdaeTime(new Date());
//		gtIntegralPayment.setMerchantCode(body.getMerchantCode());
//		gtIntegralPayment.setMerchantSysCode(body.getMerchantSysCode());
//		gtIntegralPayment.setReturnCode(dealWorkingWebServiceResponse.getResultCode());
//		gtIntegralPayment.setReturnMessage(dealWorkingWebServiceResponse.getResultInfo());
//		gtIntegralPayment.setProductCode(gtDrawInfo.getDRAWCODE());
//		gtIntegralPayment.setProductName(gtDrawInfo.getDrawName());
//		gtIntegralPayment.setProductType(gtDrawInfo.getDrawType());
//		gtIntegralPayment.setTradeOrder(dealWorkingWebServiceResponse.getTrade_order());
//		gtIntegralPayment.setTradeSeqNo(dealWorkingWebServiceResponse.getTrade_transNo());
//		gtIntegralPayment.setUserId(body.getUserId());
//		gtIntegralPayment.setUserType(body.getUserType());
//		gtIntegralPayment.setType("freeze");
//		gtIntegralPaymentList.add(gtIntegralPayment);
//		return dealWorkingWebServiceResponse;
//	}

	/**
	 * �齱�߼����㷨
	 * 
	 * @param x
	 * @return
	 */
	@SuppressWarnings("unchecked")
	public Object[] computingProcess(int x) {
		String drawCode = gtDrawInfo.getDRAWCODE();
		String currentDateStr = (String) Cache.get("_" + drawCode + "_currentDateStr_");
		BigDecimal baseNumer = (BigDecimal) Cache.get("_" + drawCode + "_" + currentDateStr + "_baseNumber_");
		// ���������
		Random rand = new Random();
		int rand_ = rand.nextInt(baseNumer.intValue()) + 1;
		List<DrawConfig> configList = (List<DrawConfig>) Cache.get("_" + drawCode + "_" + currentDateStr + "_gtDrawConfigList_");
		DrawConfig awardConfig = null;
		DrawPrizeInfo awardPrize = (DrawPrizeInfo) Cache.get("_" + drawCode + "_blank_");
		for (int i = 0; i < configList.size(); i++) {
			logger.info("���γ齱���������:" + request.getSerialNo() + "�����:" + rand_);
			DrawConfig gtDrawConfig = configList.get(i);
			String prizeLevel = gtDrawConfig.getPRIZELEVEL();
			GtPrizeConfigTemp gtPrizeConfigTemp = (GtPrizeConfigTemp) Cache.get("_cache_" + drawCode + "_" + currentDateStr + "_" + prizeLevel + "_");
			if (x == 0) {
				if (gtDrawRule.getFIRSTAWARDPRIZE().equals(gtPrizeConfigTemp.getPrizeInfo().getPRIZECODE())) {
					awardPrize = gtPrizeConfigTemp.getPrizeInfo();
					awardConfig = gtDrawConfig;
				}
			}
			if (x == 3 || x == 1) {
				if (gtDrawRule.getWILLDRAWAWARDPRIZE().equals(gtPrizeConfigTemp.getPrizeInfo().getPRIZECODE())) {
					awardPrize = gtPrizeConfigTemp.getPrizeInfo();
					awardConfig = gtDrawConfig;
				}
			}
			long start = gtPrizeConfigTemp.getStartNumer();
			long end = gtPrizeConfigTemp.getEndNumber();
			logger.info("�齱����:" + request.getSerialNo() + "&���γ齱������" + baseNumer.toString() + "&������룺" + gtPrizeConfigTemp.getConfig().getPRIZELEVEL() + "&��Ʒ���룺" + gtPrizeConfigTemp.getConfig().getPRIZECODE() + "&���䳤��:" + gtPrizeConfigTemp.getWeightLength() + "&��ʼ����:" + start + "&��������:" + end);
			if (new BigDecimal(rand_).compareTo(new BigDecimal(start)) > -1 && new BigDecimal(rand_).compareTo(new BigDecimal(end)) < 1) {
				awardPrize = gtPrizeConfigTemp.getPrizeInfo();
				awardConfig = gtDrawConfig;
				break;
			}
		}
		// logger.info("�齱����:"+request.getSerialNo()+"&�����н���"
		// +awardConfig.getPRIZELEVEL()+"��ƷΪ"+awardPrize.getPRIZECODE()+awardPrize.getPrizeName());
		return new Object[] { awardConfig, awardPrize };
	}

	/**
	 * ���ӳ齱��¼
	 * 
	 * @param tranSeqNo
	 * @param body
	 * @return
	 * @throws ParseException
	 * @throws UnknownHostException
	 */
	private DrawRecord addGtDrawActityRecord(String tranSeqNo, DrawActivityRequest body) throws ParseException, UnknownHostException {
		DrawRecord gtDrawRecord = new DrawRecord();
		gtDrawRecord.setUSERID(body.getUserId());
		gtDrawRecord.setCREATETIMESTAMP(new Date());
		gtDrawRecord.setLASTUPDATETIMESTAMP(new Date());
		gtDrawRecord.setDRAWTIME(DateUtils.parseDate(body.getDrawTime(), "yyyyMMddHHmmssSSS"));
		gtDrawRecord.setDRAWRESULT(Const.DRAW_RECORD_RESULT_NONE);
		gtDrawRecord.setCHECKINGDATE(new Date());
		gtDrawRecord.setCHANNEL(body.getChannel());
		gtDrawRecord.setUSERNAME(body.getUserName());
		gtDrawRecord.setDRAWCODE(gtDrawInfo.getDRAWCODE());
		gtDrawRecord.setSOURCE(body.getSource());
		gtDrawRecord.setPHONE(body.getPhone());
		gtDrawRecord.setDRAWTRANSEQNO(tranSeqNo);
		InetAddress addr = InetAddress.getLocalHost();
		String ip = addr.getHostAddress().toString(); // ��ȡ����ip
		gtDrawRecord.setEXTAREA(ip);
		drawRecordService.insertDrawRecord(gtDrawRecord);
		String drawRecordId = gtDrawRecord.getDRAWRECORDID();
		gtDrawRecord.setDRAWRECORDID(drawRecordId);
		return gtDrawRecord;
	}

	/***
	 * 
	 * @param userId
	 * @return 0,���״α��У�2��û���������3���ǵ�N�γ齱������У�10��������齱
	 * @throws ParseException
	 */
	public int checkRule(String userId) throws ParseException {
		if ("1".equals(gtDrawRule.getFIRSTFLAG())) {
			// ��ѯ�齱�ܴ���
			DrawRecord drawRecordParams = new DrawRecord();
			drawRecordParams.setDRAWCODE(gtDrawInfo.getDRAWCODE());
			drawRecordParams.setUSERID(userId);
			long drawRecordTotalNumber = drawRecordService.selectDrawRecordCount(drawRecordParams);
			if (new BigDecimal(drawRecordTotalNumber).compareTo(BigDecimal.ZERO) == 0) {
				// �״γ齱������Ҫ�����������
				return 0;
			}
		}
		if ("1".equals(gtDrawRule.getDAILYFLAG())) {
			// ���״γ飬���ʱ�γ齱����
			Date now = new Date();
			String currentDateStr = DateUtils.getDate();
			String currentStartTimeStr = currentDateStr + " " + gtDrawRule.getDAILYSTARTTIME();
			String currentEndTimeStr = currentDateStr + " " + gtDrawRule.getDAILYENDTIME();
			Date startTime = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").parse(currentStartTimeStr);
			Date endTime = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").parse(currentEndTimeStr);
			if (now.getTime() > startTime.getTime() && now.getTime() <= endTime.getTime()) {
				// ʱ����н�����������Ч
				DrawRecord drawRecordParams = new DrawRecord();
				drawRecordParams.setDRAWCODE(gtDrawInfo.getDRAWCODE());
				drawRecordParams.setUSERID(userId);
				Map<String, Object> params = new HashMap<>();
				params.put("startTime", currentStartTimeStr);
				params.put("endTime", currentEndTimeStr);
				drawRecordParams.setParams(params);
				long drawRecordDailyNumber = drawRecordService.selectDrawRecordCount(drawRecordParams);
				if (new Long(drawRecordDailyNumber).compareTo(gtDrawRule.getDAILYNUMBER()) != -1) {
					// �ﵽʱ��γ齱�������ޣ�������齱
					return 10;
				}
			}
		}
		//N�γ齱����
		if ("1".equals(gtDrawRule.getWILLDRAWFLAG())) {
			// ��ѯ�ܴ���
			Long willDrawAwardNumber = gtDrawRule.getWILLDRAWAWARDNUMBER();
			if (willDrawAwardNumber.compareTo(new Long(1)) == 0) {
				// ����Ϊ1�α��У���ÿ�ζ��н�
				return 1;
			} else {
				DrawRecord drawRecordParams = new DrawRecord();
				drawRecordParams.setDRAWCODE(gtDrawInfo.getDRAWCODE());
				drawRecordParams.setUSERID(userId);
				long drawRecordTotalSize = drawRecordService.selectDrawRecordCount(drawRecordParams);
				// ���齱����Ϊ0�����״γ齱����n��Ϊ1��ȡ����
				if (new BigDecimal(drawRecordTotalSize).compareTo(BigDecimal.ZERO) == 1) {
					int n = gtDrawRule.getWILLDRAWAWARDNUMBER().intValue();
					long m = drawRecordTotalSize % n;
					if (new BigDecimal(m).compareTo(new BigDecimal(n - 1)) == 0) {
						// ��ѯ
						DrawRecord queryParams = new DrawRecord();
						queryParams.setDRAWCODE(gtDrawInfo.getDRAWCODE());
						queryParams.setUSERID(userId);
						Map<String, Object> params = new HashMap<>();
						params.put("start", 0);
						params.put("end", m+1);
						queryParams.setParams(params);
						List<DrawRecord> gtDrawRecordList = drawRecordService.selectDrawRecordList(queryParams);
						for (DrawRecord gtDrawRecord : gtDrawRecordList) {
							if (!Const.DRAW_RECORD_RESULT_NONE.equals(gtDrawRecord.getDRAWRESULT())) {
								// n�γ齱���Ѿ��н�������Ҫ����
								return 2;
							}
							// ��N�γ齱����
							return 3;
						}
					}
				}
			}
		}
		return 2;
	}

	/**
	 * ��֯��Ӧ����ͷ��Ϣ
	 * 
	 * @param request
	 * @param resultCode
	 * @param resultInfo
	 * @return
	 */
	private DrawResult processResp(DrawActivityRequest request, String resultCode, String resultInfo) {
		DrawResult response = new DrawResult();
		response.setRespCode(resultCode);
		response.setRespMsg(resultInfo);
		return response;
	}

	/**
	 * ����֧����Ӧxml���Ľ���
	 * 
	 * @return
	 * @throws DocumentException
	 */
	@SuppressWarnings("unchecked")
//	public DealWorkingWebServiceResponse parseIntegralDealResponse(String responseText) throws DocumentException {
//		DealWorkingWebServiceResponse response = new DealWorkingWebServiceResponse();
//		Document doc = DocumentHelper.parseText(responseText);
//		Element rootElt = doc.getRootElement();
//		Iterator<Element> it = rootElt.elementIterator();
//		while (it.hasNext()) {
//			Element element = it.next();
//			if (element.getName().equals("resultCode")) {
//				response.setResultCode(element.getTextTrim());
//			}
//			if (element.getName().equals("resultInfo")) {
//				response.setResultInfo(element.getTextTrim());
//			}
//			if (element.getName().equals("serialNum")) {
//				response.setSerialNum(element.getTextTrim());
//			}
//			if (element.getName().equals("trade__order")) {
//				response.setTrade_order(element.getTextTrim());
//			}
//			if (element.getName().equals("trade__transNo")) {
//				response.setTrade_transNo(element.getTextTrim());
//			}
//			if (element.getName().equals("merchantCode")) {
//				response.setMerchantCode(element.getTextTrim());
//			}
//			if (element.getName().equals("result")) {
//				response.setResult(element.getTextTrim());
//			}
//			if (element.getName().equals("settleDate")) {
//				response.setSettleDate(element.getTextTrim());
//			}
//		}
//		return response;
//	}

	/**
	 * ���ֶ���xml������װ
	 * 
	 * @param billStr
	 * @param integralStr
	 * @param merchantCodeStr
	 * @param userIdStr
	 * @param userTypeStr
	 * @param platformStr
	 * @param channelStr
	 * @param sysCodeStr
	 * @return
	 */
//	public String parseXml(String billStr, String integralStr, String merchantCodeStr, String userIdStr, String userTypeStr, String platformStr, String channelStr, String sysCodeStr) {
//		Document document = DocumentHelper.createDocument();
//		Element request = DocumentHelper.createElement("request");
//		Element dealWorkingRequestBody = DocumentHelper.createElement("dealWorkingRequestBody");
//		Element bill = DocumentHelper.createElement("bill");
//		bill.addText(billStr);
//		dealWorkingRequestBody.add(bill);
//		Element integral = DocumentHelper.createElement("integral");
//		integral.addText(integralStr);
//		dealWorkingRequestBody.add(integral);
//		Element merchantCode = DocumentHelper.createElement("merchantCode");
//		merchantCode.addText(merchantCodeStr);
//		dealWorkingRequestBody.add(merchantCode);
//
//		Element platform = DocumentHelper.createElement("platform");
//		platform.addText(platformStr);
//		dealWorkingRequestBody.add(platform);
//
//		Element productCode = DocumentHelper.createElement("productCode");
//		productCode.addText(gtDrawInfo.getDRAWCODE());
//		dealWorkingRequestBody.add(productCode);
//
//		Element productName = DocumentHelper.createElement("productName");
//		productName.addText(gtDrawInfo.getDrawName());
//		dealWorkingRequestBody.add(productName);
//
//		Element productType = DocumentHelper.createElement("productType");
//		productType.addText(gtDrawInfo.getDrawType());
//		dealWorkingRequestBody.add(productType);
//
//		// ����ǩ��
//		Element signature = DocumentHelper.createElement("signature");
//		Md5 md5 = new Md5();
//		String str = md5.toMD5(userIdStr + "_" + userTypeStr + "_" + integralStr + "_" + platformStr);
//		signature.addText(str);
//		dealWorkingRequestBody.add(signature);
//
//		Element trade_order = DocumentHelper.createElement("trade_order");
//		String tradeOrder = new SimpleDateFormat("yyyyMMdd").format(new Date()) + sequenceService.getDrawActivirtTradeOrderSeq();
//		trade_order.addText(tradeOrder);
//		dealWorkingRequestBody.add(trade_order);
//
//		Element trade_transNo = DocumentHelper.createElement("trade_transNo");
//		trade_transNo.addText(gtDrawInfo.getDRAWCODE() + tradeOrder);
//		dealWorkingRequestBody.add(trade_transNo);
//
//		Element userId = DocumentHelper.createElement("userId");
//		userId.addText(userIdStr);
//		dealWorkingRequestBody.add(userId);
//
//		Element userType = DocumentHelper.createElement("userType");
//		userType.addText(userTypeStr);
//		dealWorkingRequestBody.add(userType);
//
//		Element dealWorkingRequestHander = DocumentHelper.createElement("dealWorkingRequestHander");
//
//		Element channel = DocumentHelper.createElement("channel");
//		channel.addText(channelStr);
//		dealWorkingRequestHander.add(channel);
//
//		Element password = DocumentHelper.createElement("password");
//		password.addText(PropertiesUtil.getProperties("sysConfig.properties", "INTEGRAL_INTERFACE_PASS_HANDER"));
//		dealWorkingRequestHander.add(password);
//
//		Element serialNo = DocumentHelper.createElement("serialNo");
//		serialNo.addText(new SimpleDateFormat("yyyyMMddHHmmssSSS").format(new Date()));
//		dealWorkingRequestHander.add(serialNo);
//
//		Element sysCode = DocumentHelper.createElement("sysCode");
//		sysCode.addText(sysCodeStr);
//		dealWorkingRequestHander.add(sysCode);
//
//		Element sysName = DocumentHelper.createElement("sysName");
//		sysName.addText(PropertiesUtil.getProperties("sysConfig.properties", "INTEGRAL_INTERFACE_SYS_NAME"));
//		dealWorkingRequestHander.add(sysName);
//
//		Element transCode = DocumentHelper.createElement("transCode");
//		transCode.addText(PropertiesUtil.getProperties("sysConfig.properties", "INTEGRAL_INTERFACE_TRANSCODE_DEALWORKINGWEBSERVICE"));
//		dealWorkingRequestHander.add(transCode);
//
//		Element userName = DocumentHelper.createElement("userName");
//		userName.addText(PropertiesUtil.getProperties("sysConfig.properties", "INTEGRAL_INTERFACE_USER_HANDER"));
//		dealWorkingRequestHander.add(userName);
//
//		request.add(dealWorkingRequestHander);
//		request.add(dealWorkingRequestBody);
//		document.add(request);
//		return document.asXML();
//	}

	/**
	 * ����֧����֯xml����
	 * 
	 * @param trade_order_str
	 * @param trade_seq_no_str
	 * @param serialNumStr
	 * @param integralStr
	 * @param merchantCodeStr
	 * @param userIdStr
	 * @param userTypeStr
	 * @param platformStr
	 * @param channelStr
	 * @param sysCodeStr
	 * @param operationTypeStr
	 * @return
	 */
//	public String parseIntegralPaymentXml(String trade_order_str, String trade_seq_no_str, String serialNumStr, String integralStr, String merchantCodeStr, String userIdStr, String userTypeStr, String platformStr, String channelStr, String sysCodeStr, String operationTypeStr) {
//		Document document = DocumentHelper.createDocument();
//		Element request = DocumentHelper.createElement("request");
//		Element dealWorkingRequestBody = DocumentHelper.createElement("dealWorkingRequestBody");
//
//		Element userId = DocumentHelper.createElement("userId");
//		userId.addText(userIdStr);
//		dealWorkingRequestBody.add(userId);
//
//		Element userType = DocumentHelper.createElement("userType");
//		userType.addText(userTypeStr);
//		dealWorkingRequestBody.add(userType);
//
//		Element operationType = DocumentHelper.createElement("operationType");
//		operationType.addText(operationTypeStr);
//		dealWorkingRequestBody.add(operationType);
//
//		Element serialNum = DocumentHelper.createElement("serialNum");
//		serialNum.addText(serialNumStr);
//		dealWorkingRequestBody.add(serialNum);
//
//		Element integral = DocumentHelper.createElement("integral");
//		integral.addText(integralStr);
//		dealWorkingRequestBody.add(integral);
//
//		Element platform = DocumentHelper.createElement("platform");
//		platform.addText(platformStr);
//		dealWorkingRequestBody.add(platform);
//
//		Element trade_order = DocumentHelper.createElement("trade_order");
//		trade_order.addText(trade_order_str);
//		dealWorkingRequestBody.add(trade_order);
//
//		Element trade_transNo = DocumentHelper.createElement("trade_transNo");
//		trade_transNo.addText(trade_seq_no_str);
//		dealWorkingRequestBody.add(trade_transNo);
//
//		Element tranTime = DocumentHelper.createElement("tranTime");
//		tranTime.addText(new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date()));
//		dealWorkingRequestBody.add(tranTime);
//
//		Element merchantCode = DocumentHelper.createElement("merchantCode");
//		merchantCode.addText(merchantCodeStr);
//		dealWorkingRequestBody.add(merchantCode);
//
//		// ����ǩ��
//		Element signature = DocumentHelper.createElement("signature");
//		Md5 md5 = new Md5();
//		String str = md5.toMD5(userIdStr + "_" + userTypeStr + "_" + operationTypeStr + "_" + channelStr);
//		signature.addText(str);
//		dealWorkingRequestBody.add(signature);
//
//		Element channel = DocumentHelper.createElement("channel");
//		channel.addText(channelStr);
//		dealWorkingRequestBody.add(channel);
//
//		Element dealWorkingRequestHander = DocumentHelper.createElement("dealWorkingRequestHander");
//
//		Element headerChannel = DocumentHelper.createElement("channel");
//		headerChannel.addText(channelStr);
//		dealWorkingRequestHander.add(headerChannel);
//
//		Element password = DocumentHelper.createElement("password");
//		password.addText(PropertiesUtil.getProperties("sysConfig.properties", "INTEGRAL_INTERFACE_PASS_HANDER"));
//		dealWorkingRequestHander.add(password);
//
//		Element serialNo = DocumentHelper.createElement("serialNo");
//		serialNo.addText(new SimpleDateFormat("yyyyMMddHHmmssSSS").format(new Date()));
//		dealWorkingRequestHander.add(serialNo);
//
//		Element sysCode = DocumentHelper.createElement("sysCode");
//		sysCode.addText(sysCodeStr);
//		dealWorkingRequestHander.add(sysCode);
//
//		Element sysName = DocumentHelper.createElement("sysName");
//		sysName.addText(PropertiesUtil.getProperties("sysConfig.properties", "INTEGRAL_INTERFACE_SYS_NAME"));
//		dealWorkingRequestHander.add(sysName);
//
//		Element transCode = DocumentHelper.createElement("transCode");
//		transCode.addText(PropertiesUtil.getProperties("sysConfig.properties", "INTEGRAL_INTERFACE_TRANSCODE_DEALWORKINGWEBSERVICE"));
//		dealWorkingRequestHander.add(transCode);
//
//		Element userName = DocumentHelper.createElement("userName");
//		userName.addText(PropertiesUtil.getProperties("sysConfig.properties", "INTEGRAL_INTERFACE_USER_HANDER"));
//		dealWorkingRequestHander.add(userName);
//
//		request.add(dealWorkingRequestHander);
//		request.add(dealWorkingRequestBody);
//		document.add(request);
//		return document.asXML();
//	}

	/**
	 * ��Ʒ���������Լ���������
	 * 
	 * @param gtDrawConfig
	 * @return
	 */
	public int prizeProcess(DrawConfig gtDrawConfig) {
		DrawConfig queryParams = new DrawConfig();
		queryParams.setDRAWCODE(gtDrawConfig.getDRAWCODE());
		queryParams.setPRIZELEVEL(gtDrawConfig.getPRIZELEVEL());
		queryParams.setPRIZECODE(gtDrawConfig.getPRIZECODE());
		queryParams.setSTATUS(Const.DRAW_CONFIG_STATUS_EFFECTIVE);
		queryParams.setAVAILABLENUMBER(0L);
		DrawConfig drawConfig = drawConfigService.selectDrawConfigByDraw(queryParams);
		if (drawConfig == null) {
			return 0;
		} else {
			return drawConfigService.updateDrawConfigNumAndStatus(drawConfig);
		}

	}

	/**
	 * ����ʧ�ܺ�Ʒ������
	 * 
	 * @param gtDrawConfig
	 * @return
	 */
	public int rollBackPrizeProcess(DrawConfig gtDrawConfig) {
		DrawConfig queryParams = new DrawConfig();
		queryParams.setDRAWCODE(gtDrawConfig.getDRAWCODE());
		queryParams.setPRIZELEVEL(gtDrawConfig.getPRIZELEVEL());
		queryParams.setPRIZECODE(gtDrawConfig.getPRIZECODE());
		DrawConfig drawConfig = drawConfigService.selectDrawConfigByDraw(queryParams);
		return drawConfigService.updateDrawConfigRollback(drawConfig);
	}

	/**
	 * �齱�ӿ���Ӧ��������װ
	 * 
	 * @param gateWayFlow
	 * @param gtPrizeInfo
	 * @param gtDrawConfig
	 * @return
	 */
	public DrawResult parseResponseBody(String gateWayFlow, DrawPrizeInfo gtPrizeInfo, DrawConfig gtDrawConfig, String extId, DrawRecord gtDrawRecord) {
		DrawResult responseBody = new DrawResult();
		responseBody.setUserId(request.getUserId());
		responseBody.setPrizeType(gtPrizeInfo.getPRIZETYPE());
		responseBody.setPrizeName(gtPrizeInfo.getPRIZENAME());
		responseBody.setPrizeCode(gtPrizeInfo.getPRIZECODE());
		responseBody.setGateWayTime(new SimpleDateFormat("yyyyMMddHHmmsssSSS").format(new Date()));
		responseBody.setDrawCode(gtDrawInfo.getDRAWCODE());
		responseBody.setDisplayOrder(gtDrawConfig.getDISPLAYORDER());
		if (gtDrawConfig.getCUE() != null) {
			responseBody.setCue(gtDrawConfig.getCUE());
		}
		responseBody.setGatewayFlow(gateWayFlow);
		responseBody.setPrizeLevel(gtDrawConfig.getPRIZELEVEL());
		responseBody.setExtId(extId);
		responseBody.setSource(request.getSource());
		if (gtPrizeInfo.getPRIZETYPE().equals("empty")) {
			responseBody.setResult("0");
		} else {
			responseBody.setResult("1");
		}
		//1654 �ս������������ս�
		if (Const.PRIZE_LEVEL_BLANK.equals(gtDrawConfig.getPRIZELEVEL())) {
			extId = awardBlank(gtPrizeInfo, gtDrawConfig, gtDrawRecord);
			responseBody.setExtId(extId);
		}
		return responseBody;
	}

	/**
	 * �ս������������ս�
	 * @author huayue
	 * @since 2020-08-11
	 * @param gtPrizeInfo
	 * @param gtDrawConfig
	 * @param gtDrawRecord
	 * @version 1654
	 */
	private String awardBlank(DrawPrizeInfo gtPrizeInfo, DrawConfig gtDrawConfig, DrawRecord gtDrawRecord) {
		String extId = null;
		try {
			String prizeType = gtPrizeInfo.getPRIZETYPE();
			if (Const.PRIZE_TYPE_WELFARE.equals(prizeType)) {
//				extId = getAccount(gtPrizeInfo, gtDrawRecord);
			} else if (Const.PRIZE_TYPE_PCOUPON.equals(prizeType) || Const.PRIZE_TYPE_SCOUPON.equals(prizeType)) {
//				extId = getDiscountCode(gtPrizeInfo, gtDrawRecord);
			} else if (Const.PRIZE_TYPE_VCOUPON.equals(prizeType)) {
//				extId = awardCoupon(gtPrizeInfo, gtDrawRecord);
			} else if (Const.PRIZE_TYPE_INTEGRAL.equals(prizeType) || Const.PRIZE_TYPE_IEMALL.equals(prizeType)
					|| Const.PRIZE_TYPE_VOCHER.equals(prizeType) || Const.PRIZE_TYPE_CASH.equals(prizeType)) {
				gtDrawRecord.setPRIZECODE(gtPrizeInfo.getPRIZECODE());
				gtDrawRecord.setPRIZETYPE(prizeType);
				gtDrawRecord.setPRIZELEVEL(gtDrawConfig.getPRIZELEVEL());
				gtDrawRecord.setPROJECTCODE(gtPrizeInfo.getINTEGRALPROJECTCODE());
				awardService.award(gtDrawRecord, request, gtDrawInfo, request.getPhone(), gtDrawConfig.getAWARDMETHOD());
			}
		} catch (Exception e) {
			logger.error("�������ս������쳣��", e);
		}
		return extId;
	}


	/**
	 * ���³齱���
	 * 
	 * @param id
	 * @param result
	 * @param prizeCode
	 * @param prizeType
	 * @param prizeLevel
	 */
	public void updateGtDrawRecordResult(String id, String result, String prizeCode, String prizeType, String prizeLevel, String projectCode) {
		DrawRecord record = drawRecordService.selectDrawRecordById(id);
		record.setDRAWRESULT(result);
		record.setPRIZECODE(prizeCode);
		record.setPRIZETYPE(prizeType);
		record.setPROJECTCODE(projectCode);
		record.setPRIZELEVEL(prizeLevel);
		drawRecordService.updateDrawRecord(record);
	}
}
