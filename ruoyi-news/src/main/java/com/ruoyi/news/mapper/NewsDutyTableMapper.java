package com.ruoyi.news.mapper;

import java.util.List;
import com.ruoyi.news.domain.NewsDutyTable;

/**
 * 【请填写功能名称】Mapper接口
 * 
 * @author admin@abdu.net.cn
 * @date 2022-07-19
 */
public interface NewsDutyTableMapper 
{
    /**
     * 查询【请填写功能名称】
     * 
     * @param id 【请填写功能名称】主键
     * @return 【请填写功能名称】
     */
    public NewsDutyTable selectNewsDutyTableById(Long id);

    /**
     * 查询【请填写功能名称】列表
     * 
     * @param newsDutyTable 【请填写功能名称】
     * @return 【请填写功能名称】集合
     */
    public List<NewsDutyTable> selectNewsDutyTableList(NewsDutyTable newsDutyTable);

    /**
     * 新增【请填写功能名称】
     * 
     * @param newsDutyTable 【请填写功能名称】
     * @return 结果
     */
    public int insertNewsDutyTable(NewsDutyTable newsDutyTable);

    /**
     * 修改【请填写功能名称】
     * 
     * @param newsDutyTable 【请填写功能名称】
     * @return 结果
     */
    public int updateNewsDutyTable(NewsDutyTable newsDutyTable);

    /**
     * 删除【请填写功能名称】
     * 
     * @param id 【请填写功能名称】主键
     * @return 结果
     */
    public int deleteNewsDutyTableById(Long id);

    /**
     * 批量删除【请填写功能名称】
     * 
     * @param ids 需要删除的数据主键集合
     * @return 结果
     */
    public int deleteNewsDutyTableByIds(String[] ids);
}
