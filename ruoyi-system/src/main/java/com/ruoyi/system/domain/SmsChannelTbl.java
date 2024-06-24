package com.ruoyi.system.domain;

import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;
import com.ruoyi.common.annotation.Excel;
import com.ruoyi.common.core.domain.BaseEntity;

/**
 * 短信渠道管理对象 sms_channel_tbl
 *
 * @author dorion
 * @date 2024-06-09
 */
public class SmsChannelTbl extends BaseEntity
{
    private static final long serialVersionUID = 1L;

    /** 主键 */
    private Long idSmsChannel;

    /** 渠道id */
    @Excel(name = "渠道id")
    private String channelId;

    /** appid */
    @Excel(name = "appid")
    private String appId;

    /** 口令 */
    @Excel(name = "口令")
    private String secret;

    /** 公钥 */
    @Excel(name = "公钥")
    private String publicKey;

    /** 短信支持类型 */
    @Excel(name = "短信支持类型")
    private String smsBusiType;

    /** 是否有效 */
    @Excel(name = "是否有效")
    private String isValid;

    public void setIdSmsChannel(Long idSmsChannel)
    {
        this.idSmsChannel = idSmsChannel;
    }

    public Long getIdSmsChannel()
    {
        return idSmsChannel;
    }
    public void setChannelId(String channelId)
    {
        this.channelId = channelId;
    }

    public String getChannelId()
    {
        return channelId;
    }
    public void setAppId(String appId)
    {
        this.appId = appId;
    }

    public String getAppId()
    {
        return appId;
    }
    public void setSecret(String secret)
    {
        this.secret = secret;
    }

    public String getSecret()
    {
        return secret;
    }
    public void setPublicKey(String publicKey)
    {
        this.publicKey = publicKey;
    }

    public String getPublicKey()
    {
        return publicKey;
    }
    public void setSmsBusiType(String smsBusiType)
    {
        this.smsBusiType = smsBusiType;
    }

    public String getSmsBusiType()
    {
        return smsBusiType;
    }
    public void setIsValid(String isValid)
    {
        this.isValid = isValid;
    }

    public String getIsValid()
    {
        return isValid;
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this,ToStringStyle.MULTI_LINE_STYLE)
                .append("idSmsChannel", getIdSmsChannel())
                .append("channelId", getChannelId())
                .append("appId", getAppId())
                .append("secret", getSecret())
                .append("publicKey", getPublicKey())
                .append("smsBusiType", getSmsBusiType())
                .append("isValid", getIsValid())
                .append("createBy", getCreateBy())
                .append("createTime", getCreateTime())
                .append("updateBy", getUpdateBy())
                .append("updateTime", getUpdateTime())
                .toString();
    }
}
