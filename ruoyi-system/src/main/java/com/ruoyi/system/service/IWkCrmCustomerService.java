package com.ruoyi.system.service;

import java.util.List;
import com.ruoyi.system.domain.WkCrmCustomer;

/**
 * 客户Service接口
 * 
 * @author ruoyi
 * @date 2021-04-06
 */
public interface IWkCrmCustomerService 
{
    /**
     * 查询客户
     * 
     * @param customerId 客户ID
     * @return 客户
     */
    public WkCrmCustomer selectWkCrmCustomerById(Long customerId);

    /**
     * 查询客户列表
     * 
     * @param wkCrmCustomer 客户
     * @return 客户集合
     */
    public List<WkCrmCustomer> selectWkCrmCustomerList(WkCrmCustomer wkCrmCustomer);

    /**
     * 新增客户
     * 
     * @param wkCrmCustomer 客户
     * @return 结果
     */
    public int insertWkCrmCustomer(WkCrmCustomer wkCrmCustomer);

    /**
     * 修改客户
     * 
     * @param wkCrmCustomer 客户
     * @return 结果
     */
    public int updateWkCrmCustomer(WkCrmCustomer wkCrmCustomer);

    /**
     * 批量删除客户
     * 
     * @param ids 需要删除的数据ID
     * @return 结果
     */
    public int deleteWkCrmCustomerByIds(String ids);

    /**
     * 删除客户信息
     * 
     * @param customerId 客户ID
     * @return 结果
     */
    public int deleteWkCrmCustomerById(Long customerId);
}
