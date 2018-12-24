package com.ruoyi.train.course.service.impl;

import com.ruoyi.framework.web.base.AbstractBaseServiceImpl;
import com.ruoyi.train.course.domain.TrainCourseUser;
import com.ruoyi.train.course.mapper.TrainCourseUserMapper;
import com.ruoyi.train.course.service.ITrainCourseUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * 课程使用对象 服务层实现
 * 
 * @author zhujj
 * @date 2018-12-23
 */
@Service
public class TrainCourseUserServiceImpl extends AbstractBaseServiceImpl<TrainCourseUserMapper,TrainCourseUser> implements ITrainCourseUserService
{
	@Autowired
	private TrainCourseUserMapper trainCourseUserMapper;

	
	/**
     * 查询课程使用对象列表
     * 
     * @param trainCourseUser 课程使用对象信息
     * @return 课程使用对象集合
     */
	@Override
	public List<TrainCourseUser> selectTrainCourseUserList(TrainCourseUser trainCourseUser)
	{
        return trainCourseUserMapper.selectTrainCourseUserList(trainCourseUser);
	}
    /**
     * 查询课程使用对象分页列表
     *
     * @param trainCourseUser 课程使用对象信息
     * @return 课程使用对象集合
     */
    @Override
    public List<TrainCourseUser> selectTrainCourseUserPage(TrainCourseUser trainCourseUser)
    {
        startPage();
        return trainCourseUserMapper.selectTrainCourseUserList(trainCourseUser);
    }

}
