package com.ruoyi.system.api.impl;

import cn.hutool.json.JSONUtil;
import com.ruoyi.common.utils.http.RestTemplateUtils;
import com.ruoyi.system.api.ITronApi;
import com.ruoyi.system.dto.TronGridResponse;
import com.ruoyi.system.service.ISysConfigService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.util.UriComponentsBuilder;

@Component
@Slf4j
public class TronApiImpl implements ITronApi {

    @Autowired
    private ISysConfigService configService;

    @Override
    public TronGridResponse getTronGridTrc20Response(String monitorAddress, boolean only_to,boolean only_from, String apiKey,Long min_timestamp) {
        HttpHeaders headers = new HttpHeaders();
        headers.add("TRON-PRO-API-KEY", apiKey);
        //监听
        UriComponentsBuilder builder = UriComponentsBuilder.fromUriString("https://api.trongrid.io/v1/accounts/" + monitorAddress + "/transactions/trc20");
//        builder.queryParam("only_confirmed", true);
        builder.queryParam("only_to", only_to);
        builder.queryParam("only_from", only_from);
        builder.queryParam("limit", 200);
//        String sysTransferBetween = configService.selectConfigByKey("sys.transfer.between");
////
//        DateTime min_timestamp = DateUtil.offset(new Date(), DateField.MINUTE, Integer.valueOf(sysTransferBetween));
//        long time = min_timestamp.getTime();
        builder.queryParam("min_timestamp", min_timestamp);

        String uriString = builder.toUriString();
        ResponseEntity responseEntity = RestTemplateUtils.get(uriString, headers, String.class);

        Object responseEntityBody = getResponseEntityBody(responseEntity, monitorAddress);
        if (responseEntityBody == null) return null;
        TronGridResponse tronGridResponse = JSONUtil.toBean((String) responseEntityBody, TronGridResponse.class);
        if (log.isInfoEnabled()) {
            log.info("{}responseEntityBody:{}", monitorAddress, JSONUtil.toJsonStr(tronGridResponse));
        }
        return tronGridResponse;
    }


    /**
     * 获取响应体
     *
     * @param responseEntity
     * @param address
     * @return
     */
    private static Object getResponseEntityBody(ResponseEntity responseEntity, String address) {
        if (responseEntity == null) {
            log.warn("{}:responseEntity is null", address);
            return null;
        }
        HttpStatus statusCode = responseEntity.getStatusCode();
        if (statusCode != HttpStatus.OK) {
            log.error("获取trx交易信息失败:{}", address);
            return null;
        }
        Object responseEntityBody = responseEntity.getBody();
        if (responseEntityBody == null) {
            log.warn("{}:responseEntityBody is null", address);
            return null;
        }
        return responseEntityBody;
    }
}
