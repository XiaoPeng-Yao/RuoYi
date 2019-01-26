package com.ruoyi.vip.domain.vo;

import com.ruoyi.vip.domain.VipUserOrders;

/**
 * 用户订单自定义实体类
 * @author zhujj
 */
public class VipUserOrdersVO extends VipUserOrders {

    private String vipUserName;
    private String trainCourseName;

    public String getVipUserName() {
        return vipUserName;
    }

    public void setVipUserName(String vipUserName) {
        this.vipUserName = vipUserName;
    }

    public String getTrainCourseName() {
        return trainCourseName;
    }

    public void setTrainCourseName(String trainCourseName) {
        this.trainCourseName = trainCourseName;
    }
}
