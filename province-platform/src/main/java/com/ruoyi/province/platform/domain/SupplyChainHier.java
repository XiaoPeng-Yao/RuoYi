package com.ruoyi.province.platform.domain;

import java.util.Date;
import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;
import com.ruoyi.common.annotation.Excel;
import com.ruoyi.common.core.domain.TreeEntity;

/**
 * 供应链层级对象 platf_supply_chain_hier
 * 
 * @author dalin
 * @date 2021-01-14
 */
public class SupplyChainHier extends TreeEntity
{
    private static final long serialVersionUID = 1L;

    /** 主键 */
    private Long supplyChainId;

    /** 名称 */
    @Excel(name = "名称")
    private String supplyChainName;

    /** 单据号 */
    @Excel(name = "单据号")
    private String docNum;

    /** 资料状态 */
    @Excel(name = "资料状态")
    private String status;

    /** 删除标志 */
    private String delFlag;

    /** 制单人 */
    @Excel(name = "制单人")
    private String createByuserName;

    /** 修改人 */
    @Excel(name = "修改人")
    private String updateByuserName;

    public void setSupplyChainId(Long supplyChainId) 
    {
        this.supplyChainId = supplyChainId;
    }

    public Long getSupplyChainId() 
    {
        return supplyChainId;
    }
    public void setSupplyChainName(String supplyChainName) 
    {
        this.supplyChainName = supplyChainName;
    }

    public String getSupplyChainName() 
    {
        return supplyChainName;
    }
    public void setDocNum(String docNum) 
    {
        this.docNum = docNum;
    }

    public String getDocNum() 
    {
        return docNum;
    }
    public void setStatus(String status) 
    {
        this.status = status;
    }

    public String getStatus() 
    {
        return status;
    }
    public void setDelFlag(String delFlag) 
    {
        this.delFlag = delFlag;
    }

    public String getDelFlag() 
    {
        return delFlag;
    }
    public void setCreateByuserName(String createByuserName) 
    {
        this.createByuserName = createByuserName;
    }

    public String getCreateByuserName() 
    {
        return createByuserName;
    }
    public void setUpdateByuserName(String updateByuserName) 
    {
        this.updateByuserName = updateByuserName;
    }

    public String getUpdateByuserName() 
    {
        return updateByuserName;
    }

    @Override
    public String toString() {
        return new ToStringBuilder(this,ToStringStyle.MULTI_LINE_STYLE)
            .append("supplyChainId", getSupplyChainId())
            .append("supplyChainName", getSupplyChainName())
            .append("parentId", getParentId())
            .append("ancestors", getAncestors())
            .append("docNum", getDocNum())
            .append("status", getStatus())
            .append("remark", getRemark())
            .append("delFlag", getDelFlag())
            .append("createByuserName", getCreateByuserName())
            .append("createBy", getCreateBy())
            .append("createTime", getCreateTime())
            .append("updateByuserName", getUpdateByuserName())
            .append("updateBy", getUpdateBy())
            .append("updateTime", getUpdateTime())
            .toString();
    }
}
