package com.ruoyi.system.domain.vo;

import lombok.Data;
import lombok.experimental.Accessors;

import java.io.Serializable;

@Data
@Accessors(chain = true)
public class TransactionLogVO implements Serializable {

    private static final long serialVersionUID = 1L;
    /**
     * 交易地址
     */
    private String fromAddress;

    /**
     * 兑换类型
     */
    private String busiType;

    /**
     * 接收数量
     */
    private String count;
}
