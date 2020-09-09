package com.ruoyi.bend.service;

import java.util.List;
import com.ruoyi.bend.domain.ScrcuOfflineOrders;

/**
 * 线下订单Service接口
 * 
 * @author bend
 * @date 2020-09-01
 */
public interface IScrcuOfflineOrdersService 
{
    /**
     * 查询线下订单
     * 
     * @param id 线下订单ID
     * @return 线下订单
     */
    public ScrcuOfflineOrders selectScrcuOfflineOrdersById(Long id);

    /**
     * 查询线下订单列表
     * 
     * @param scrcuOfflineOrders 线下订单
     * @return 线下订单集合
     */
    public List<ScrcuOfflineOrders> selectScrcuOfflineOrdersList(ScrcuOfflineOrders scrcuOfflineOrders);

    /**
     * 新增线下订单
     * 
     * @param scrcuOfflineOrders 线下订单
     * @return 结果
     */
    public int insertScrcuOfflineOrders(ScrcuOfflineOrders scrcuOfflineOrders);

    /**
     * 修改线下订单
     * 
     * @param scrcuOfflineOrders 线下订单
     * @return 结果
     */
    public int updateScrcuOfflineOrders(ScrcuOfflineOrders scrcuOfflineOrders);

    /**
     * 批量删除线下订单
     * 
     * @param ids 需要删除的数据ID
     * @return 结果
     */
    public int deleteScrcuOfflineOrdersByIds(String ids);

    /**
     * 删除线下订单信息
     * 
     * @param id 线下订单ID
     * @return 结果
     */
    public int deleteScrcuOfflineOrdersById(Long id);
}
