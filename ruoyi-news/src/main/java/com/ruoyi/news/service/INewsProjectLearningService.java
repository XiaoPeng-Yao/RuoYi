package com.ruoyi.news.service;

import java.util.List;
import com.ruoyi.news.domain.NewsProjectLearning;

/**
 * 【请填写功能名称】Service接口
 * 
 * @author admin@abdu.net.cn
 * @date 2022-07-19
 */
public interface INewsProjectLearningService 
{
    /**
     * 查询【请填写功能名称】
     * 
     * @param id 【请填写功能名称】主键
     * @return 【请填写功能名称】
     */
    public NewsProjectLearning selectNewsProjectLearningById(Long id);

    /**
     * 查询【请填写功能名称】列表
     * 
     * @param newsProjectLearning 【请填写功能名称】
     * @return 【请填写功能名称】集合
     */
    public List<NewsProjectLearning> selectNewsProjectLearningList(NewsProjectLearning newsProjectLearning);

    /**
     * 新增【请填写功能名称】
     * 
     * @param newsProjectLearning 【请填写功能名称】
     * @return 结果
     */
    public int insertNewsProjectLearning(NewsProjectLearning newsProjectLearning);

    /**
     * 修改【请填写功能名称】
     * 
     * @param newsProjectLearning 【请填写功能名称】
     * @return 结果
     */
    public int updateNewsProjectLearning(NewsProjectLearning newsProjectLearning);

    /**
     * 批量删除【请填写功能名称】
     * 
     * @param ids 需要删除的【请填写功能名称】主键集合
     * @return 结果
     */
    public int deleteNewsProjectLearningByIds(String ids);

    /**
     * 删除【请填写功能名称】信息
     * 
     * @param id 【请填写功能名称】主键
     * @return 结果
     */
    public int deleteNewsProjectLearningById(Long id);
}
