package com.ruoyi.system.mapper;

import com.ruoyi.system.domain.BusUserBrowse;
import java.util.List;	

/**
 * 用户浏览足迹 数据层
 * 
 * @author ruoyi
 * @date 2021-01-07
 */
public interface BusUserBrowseMapper 
{
	/**
     * 查询用户浏览足迹信息
     * 
     * @param browseId 用户浏览足迹ID
     * @return 用户浏览足迹信息
     */
	public BusUserBrowse selectBusUserBrowseById(Long browseId);
	
	/**
     * 查询用户浏览足迹列表
     * 
     * @param busUserBrowse 用户浏览足迹信息
     * @return 用户浏览足迹集合
     */
	public List<BusUserBrowse> selectBusUserBrowseList(BusUserBrowse busUserBrowse);
	
	/**
     * 新增用户浏览足迹
     * 
     * @param busUserBrowse 用户浏览足迹信息
     * @return 结果
     */
	public int insertBusUserBrowse(BusUserBrowse busUserBrowse);
	
	/**
     * 修改用户浏览足迹
     * 
     * @param busUserBrowse 用户浏览足迹信息
     * @return 结果
     */
	public int updateBusUserBrowse(BusUserBrowse busUserBrowse);
	
	/**
     * 删除用户浏览足迹
     * 
     * @param browseId 用户浏览足迹ID
     * @return 结果
     */
	public int deleteBusUserBrowseById(Long browseId);
	
	/**
     * 批量删除用户浏览足迹
     * 
     * @param browseIds 需要删除的数据ID
     * @return 结果
     */
	public int deleteBusUserBrowseByIds(String[] browseIds);
	
}