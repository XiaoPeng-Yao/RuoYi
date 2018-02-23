package com.ruoyi.project.system.logininfor.domain;

import java.io.Serializable;

/**
 * 系统访问日志情况信息 sys_logininfor
 * 
 * @author yangzz
 */
public class Logininfor implements Serializable
{
    private static final long serialVersionUID = 1L;

    // ID
    private Integer infoId;
    // 用户账号
    private String loginName;
    // 登录状态 0成功 1失败
    private String status;
    // 登录IP地址
    private String ipaddr;
    // 浏览器类型
    private String browser;
    // 操作系统
    private String os;
    // 提示消息
    private String msg;
    // 访问时间
    private String loginTime;

    public Integer getInfoId()
    {
        return infoId;
    }

    public void setInfoId(Integer infoId)
    {
        this.infoId = infoId;
    }

    public String getLoginName()
    {
        return loginName;
    }

    public void setLoginName(String loginName)
    {
        this.loginName = loginName;
    }

    public String getStatus()
    {
        return status;
    }

    public void setStatus(String status)
    {
        this.status = status;
    }

    public String getIpaddr()
    {
        return ipaddr;
    }

    public void setIpaddr(String ipaddr)
    {
        this.ipaddr = ipaddr;
    }

    public String getBrowser()
    {
        return browser;
    }

    public void setBrowser(String browser)
    {
        this.browser = browser;
    }

    public String getOs()
    {
        return os;
    }

    public void setOs(String os)
    {
        this.os = os;
    }

    public String getMsg()
    {
        return msg;
    }

    public void setMsg(String msg)
    {
        this.msg = msg;
    }

    public String getLoginTime()
    {
        return loginTime;
    }

    public void setLoginTime(String loginTime)
    {
        this.loginTime = loginTime;
    }

    @Override
    public String toString()
    {
        return "{\"infoId\":\"" + infoId + "\",\"loginName\":\"" + loginName + "\",\"status\":\"" + status
                + "\",\"ipaddr\":\"" + ipaddr + "\",\"browser\":\"" + browser + "\",\"os\":\"" + os + "\",\"msg\":\""
                + msg + "\",\"loginTime\":\"" + loginTime + "\"}  ";
    }

}