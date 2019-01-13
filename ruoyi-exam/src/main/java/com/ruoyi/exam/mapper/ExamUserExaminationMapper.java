package com.ruoyi.exam.mapper;

import com.ruoyi.exam.domain.ExamUserExamination;
import java.util.List;
import com.ruoyi.framework.web.base.MyMapper;

/**
 * 我的考试记录 数据层
 * 
 * @author zhujj
 * @date 2019-01-12
 */
public interface ExamUserExaminationMapper  extends MyMapper<ExamUserExamination>
{

	/**
     * 查询我的考试记录列表
     * 
     * @param examUserExamination 我的考试记录信息
     * @return 我的考试记录集合
     */
	public List<ExamUserExamination> selectExamUserExaminationList(ExamUserExamination examUserExamination);

    List<ExamUserExamination> selectLastOne(ExamUserExamination examUserExamination);
}