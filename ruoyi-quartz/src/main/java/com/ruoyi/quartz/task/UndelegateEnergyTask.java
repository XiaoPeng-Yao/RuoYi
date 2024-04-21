package com.ruoyi.quartz.task;


import cn.hutool.core.date.DateUtil;
import com.ruoyi.common.core.domain.entity.TrxExchangeInfo;
import com.ruoyi.common.utils.DictUtils;
import com.ruoyi.system.service.ITrxExchangeInfoService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.List;

@Component("undelegateEnergyTask")
@Slf4j
public class UndelegateEnergyTask {

    @Autowired
    private ITrxExchangeInfoService trxExchangeInfoService;



    public void doUndelegateEnergy() {

        String dictValue = DictUtils.getDictValue("sys_delegate_status", "已委托");

        TrxExchangeInfo trxExchangeInfoExample = TrxExchangeInfo.builder()
                                                        .delegateStatus(dictValue)
                                                        .fcd(DateUtil.offsetDay(new Date(),-1))
                                                        .build();

        List<TrxExchangeInfo> trxExchangeInfoList = trxExchangeInfoService.selectTrxExchangeInfoList(trxExchangeInfoExample);
        for (TrxExchangeInfo trxExchangeInfo : trxExchangeInfoList) {
            trxExchangeInfoService.doUndelegateEnergyByTrxExchangeInfo(trxExchangeInfo);
        }


    }
}