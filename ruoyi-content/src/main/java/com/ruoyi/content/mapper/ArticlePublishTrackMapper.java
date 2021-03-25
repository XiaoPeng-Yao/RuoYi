package com.ruoyi.content.mapper;

import com.ruoyi.content.domain.ArticlePublishTrack;
import com.ruoyi.content.domain.ArticlePublishTrackExample;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ArticlePublishTrackMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table article_publish_track
     *
     * @mbggenerated Fri Jul 27 10:31:00 CST 2018
     */
    int countByExample(ArticlePublishTrackExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table article_publish_track
     *
     * @mbggenerated Fri Jul 27 10:31:00 CST 2018
     */
    int deleteByExample(ArticlePublishTrackExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table article_publish_track
     *
     * @mbggenerated Fri Jul 27 10:31:00 CST 2018
     */
    int deleteByPrimaryKey(String publishId);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table article_publish_track
     *
     * @mbggenerated Fri Jul 27 10:31:00 CST 2018
     */
    int insert(ArticlePublishTrack record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table article_publish_track
     *
     * @mbggenerated Fri Jul 27 10:31:00 CST 2018
     */
    int insertSelective(ArticlePublishTrack record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table article_publish_track
     *
     * @mbggenerated Fri Jul 27 10:31:00 CST 2018
     */
    List<ArticlePublishTrack> selectByExample(ArticlePublishTrackExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table article_publish_track
     *
     * @mbggenerated Fri Jul 27 10:31:00 CST 2018
     */
    ArticlePublishTrack selectByPrimaryKey(String publishId);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table article_publish_track
     *
     * @mbggenerated Fri Jul 27 10:31:00 CST 2018
     */
    int updateByExampleSelective(@Param("record") ArticlePublishTrack record, @Param("example") ArticlePublishTrackExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table article_publish_track
     *
     * @mbggenerated Fri Jul 27 10:31:00 CST 2018
     */
    int updateByExample(@Param("record") ArticlePublishTrack record, @Param("example") ArticlePublishTrackExample example);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table article_publish_track
     *
     * @mbggenerated Fri Jul 27 10:31:00 CST 2018
     */
    int updateByPrimaryKeySelective(ArticlePublishTrack record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table article_publish_track
     *
     * @mbggenerated Fri Jul 27 10:31:00 CST 2018
     */
    int updateByPrimaryKey(ArticlePublishTrack record);
}