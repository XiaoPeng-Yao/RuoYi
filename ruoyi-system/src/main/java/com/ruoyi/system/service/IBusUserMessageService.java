package com.ruoyi.system.service;

import com.ruoyi.system.domain.BusUserMessage;
import java.util.List;

/**
 * 用户消息 服务层
 * 
 * @author ruoyi
 * @date 2021-01-07
 */
public interface IBusUserMessageService 
{
	/**
     * 查询用户消息信息
     * 
     * @param messageId 用户消息ID
     * @return 用户消息信息
     */
	public BusUserMessage selectBusUserMessageById(Long messageId);
	
	/**
     * 查询用户消息列表
     * 
     * @param busUserMessage 用户消息信息
     * @return 用户消息集合
     */
	public List<BusUserMessage> selectBusUserMessageList(BusUserMessage busUserMessage);
	
	/**
     * 新增用户消息
     * 
     * @param busUserMessage 用户消息信息
     * @return 结果
     */
	public int insertBusUserMessage(BusUserMessage busUserMessage);
	
	/**
     * 修改用户消息
     * 
     * @param busUserMessage 用户消息信息
     * @return 结果
     */
	public int updateBusUserMessage(BusUserMessage busUserMessage);
		
	/**
     * 删除用户消息信息
     * 
     * @param ids 需要删除的数据ID
     * @return 结果
     */
	public int deleteBusUserMessageByIds(String ids);
	
}
