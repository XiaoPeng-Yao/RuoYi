package com.ruoyi.content.domain;

import java.util.ArrayList;
import java.util.List;

public class ArticlePersonalConfigExample {
    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database table article_personal_config
     *
     * @mbggenerated Wed May 20 09:55:58 CST 2020
     */
    protected String orderByClause;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database table article_personal_config
     *
     * @mbggenerated Wed May 20 09:55:58 CST 2020
     */
    protected boolean distinct;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database table article_personal_config
     *
     * @mbggenerated Wed May 20 09:55:58 CST 2020
     */
    protected List<Criteria> oredCriteria;

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table article_personal_config
     *
     * @mbggenerated Wed May 20 09:55:58 CST 2020
     */
    public ArticlePersonalConfigExample() {
        oredCriteria = new ArrayList<Criteria>();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table article_personal_config
     *
     * @mbggenerated Wed May 20 09:55:58 CST 2020
     */
    public void setOrderByClause(String orderByClause) {
        this.orderByClause = orderByClause;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table article_personal_config
     *
     * @mbggenerated Wed May 20 09:55:58 CST 2020
     */
    public String getOrderByClause() {
        return orderByClause;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table article_personal_config
     *
     * @mbggenerated Wed May 20 09:55:58 CST 2020
     */
    public void setDistinct(boolean distinct) {
        this.distinct = distinct;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table article_personal_config
     *
     * @mbggenerated Wed May 20 09:55:58 CST 2020
     */
    public boolean isDistinct() {
        return distinct;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table article_personal_config
     *
     * @mbggenerated Wed May 20 09:55:58 CST 2020
     */
    public List<Criteria> getOredCriteria() {
        return oredCriteria;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table article_personal_config
     *
     * @mbggenerated Wed May 20 09:55:58 CST 2020
     */
    public void or(Criteria criteria) {
        oredCriteria.add(criteria);
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table article_personal_config
     *
     * @mbggenerated Wed May 20 09:55:58 CST 2020
     */
    public Criteria or() {
        Criteria criteria = createCriteriaInternal();
        oredCriteria.add(criteria);
        return criteria;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table article_personal_config
     *
     * @mbggenerated Wed May 20 09:55:58 CST 2020
     */
    public Criteria createCriteria() {
        Criteria criteria = createCriteriaInternal();
        if (oredCriteria.size() == 0) {
            oredCriteria.add(criteria);
        }
        return criteria;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table article_personal_config
     *
     * @mbggenerated Wed May 20 09:55:58 CST 2020
     */
    protected Criteria createCriteriaInternal() {
        Criteria criteria = new Criteria();
        return criteria;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table article_personal_config
     *
     * @mbggenerated Wed May 20 09:55:58 CST 2020
     */
    public void clear() {
        oredCriteria.clear();
        orderByClause = null;
        distinct = false;
    }

    /**
     * This class was generated by MyBatis Generator.
     * This class corresponds to the database table article_personal_config
     *
     * @mbggenerated Wed May 20 09:55:58 CST 2020
     */
    protected abstract static class GeneratedCriteria {
        protected List<Criterion> criteria;

        protected GeneratedCriteria() {
            super();
            criteria = new ArrayList<Criterion>();
        }

        public boolean isValid() {
            return criteria.size() > 0;
        }

        public List<Criterion> getAllCriteria() {
            return criteria;
        }

        public List<Criterion> getCriteria() {
            return criteria;
        }

        protected void addCriterion(String condition) {
            if (condition == null) {
                throw new RuntimeException("Value for condition cannot be null");
            }
            criteria.add(new Criterion(condition));
        }

        protected void addCriterion(String condition, Object value, String property) {
            if (value == null) {
                throw new RuntimeException("Value for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value));
        }

        protected void addCriterion(String condition, Object value1, Object value2, String property) {
            if (value1 == null || value2 == null) {
                throw new RuntimeException("Between values for " + property + " cannot be null");
            }
            criteria.add(new Criterion(condition, value1, value2));
        }

        public Criteria andIdIsNull() {
            addCriterion("ID is null");
            return (Criteria) this;
        }

        public Criteria andIdIsNotNull() {
            addCriterion("ID is not null");
            return (Criteria) this;
        }

        public Criteria andIdEqualTo(Integer value) {
            addCriterion("ID =", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotEqualTo(Integer value) {
            addCriterion("ID <>", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdGreaterThan(Integer value) {
            addCriterion("ID >", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdGreaterThanOrEqualTo(Integer value) {
            addCriterion("ID >=", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdLessThan(Integer value) {
            addCriterion("ID <", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdLessThanOrEqualTo(Integer value) {
            addCriterion("ID <=", value, "id");
            return (Criteria) this;
        }

        public Criteria andIdIn(List<Integer> values) {
            addCriterion("ID in", values, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotIn(List<Integer> values) {
            addCriterion("ID not in", values, "id");
            return (Criteria) this;
        }

        public Criteria andIdBetween(Integer value1, Integer value2) {
            addCriterion("ID between", value1, value2, "id");
            return (Criteria) this;
        }

        public Criteria andIdNotBetween(Integer value1, Integer value2) {
            addCriterion("ID not between", value1, value2, "id");
            return (Criteria) this;
        }

        public Criteria andPublishIdIsNull() {
            addCriterion("PUBLISH_ID is null");
            return (Criteria) this;
        }

        public Criteria andPublishIdIsNotNull() {
            addCriterion("PUBLISH_ID is not null");
            return (Criteria) this;
        }

        public Criteria andPublishIdEqualTo(String value) {
            addCriterion("PUBLISH_ID =", value, "publishId");
            return (Criteria) this;
        }

        public Criteria andPublishIdNotEqualTo(String value) {
            addCriterion("PUBLISH_ID <>", value, "publishId");
            return (Criteria) this;
        }

        public Criteria andPublishIdGreaterThan(String value) {
            addCriterion("PUBLISH_ID >", value, "publishId");
            return (Criteria) this;
        }

        public Criteria andPublishIdGreaterThanOrEqualTo(String value) {
            addCriterion("PUBLISH_ID >=", value, "publishId");
            return (Criteria) this;
        }

        public Criteria andPublishIdLessThan(String value) {
            addCriterion("PUBLISH_ID <", value, "publishId");
            return (Criteria) this;
        }

        public Criteria andPublishIdLessThanOrEqualTo(String value) {
            addCriterion("PUBLISH_ID <=", value, "publishId");
            return (Criteria) this;
        }

        public Criteria andPublishIdLike(String value) {
            addCriterion("PUBLISH_ID like", value, "publishId");
            return (Criteria) this;
        }

        public Criteria andPublishIdNotLike(String value) {
            addCriterion("PUBLISH_ID not like", value, "publishId");
            return (Criteria) this;
        }

        public Criteria andPublishIdIn(List<String> values) {
            addCriterion("PUBLISH_ID in", values, "publishId");
            return (Criteria) this;
        }

        public Criteria andPublishIdNotIn(List<String> values) {
            addCriterion("PUBLISH_ID not in", values, "publishId");
            return (Criteria) this;
        }

        public Criteria andPublishIdBetween(String value1, String value2) {
            addCriterion("PUBLISH_ID between", value1, value2, "publishId");
            return (Criteria) this;
        }

        public Criteria andPublishIdNotBetween(String value1, String value2) {
            addCriterion("PUBLISH_ID not between", value1, value2, "publishId");
            return (Criteria) this;
        }

        public Criteria andConfigArticleIsNull() {
            addCriterion("CONFIG_ARTICLE is null");
            return (Criteria) this;
        }

        public Criteria andConfigArticleIsNotNull() {
            addCriterion("CONFIG_ARTICLE is not null");
            return (Criteria) this;
        }

        public Criteria andConfigArticleEqualTo(String value) {
            addCriterion("CONFIG_ARTICLE =", value, "configArticle");
            return (Criteria) this;
        }

        public Criteria andConfigArticleNotEqualTo(String value) {
            addCriterion("CONFIG_ARTICLE <>", value, "configArticle");
            return (Criteria) this;
        }

        public Criteria andConfigArticleGreaterThan(String value) {
            addCriterion("CONFIG_ARTICLE >", value, "configArticle");
            return (Criteria) this;
        }

        public Criteria andConfigArticleGreaterThanOrEqualTo(String value) {
            addCriterion("CONFIG_ARTICLE >=", value, "configArticle");
            return (Criteria) this;
        }

        public Criteria andConfigArticleLessThan(String value) {
            addCriterion("CONFIG_ARTICLE <", value, "configArticle");
            return (Criteria) this;
        }

        public Criteria andConfigArticleLessThanOrEqualTo(String value) {
            addCriterion("CONFIG_ARTICLE <=", value, "configArticle");
            return (Criteria) this;
        }

        public Criteria andConfigArticleLike(String value) {
            addCriterion("CONFIG_ARTICLE like", value, "configArticle");
            return (Criteria) this;
        }

        public Criteria andConfigArticleNotLike(String value) {
            addCriterion("CONFIG_ARTICLE not like", value, "configArticle");
            return (Criteria) this;
        }

        public Criteria andConfigArticleIn(List<String> values) {
            addCriterion("CONFIG_ARTICLE in", values, "configArticle");
            return (Criteria) this;
        }

        public Criteria andConfigArticleNotIn(List<String> values) {
            addCriterion("CONFIG_ARTICLE not in", values, "configArticle");
            return (Criteria) this;
        }

        public Criteria andConfigArticleBetween(String value1, String value2) {
            addCriterion("CONFIG_ARTICLE between", value1, value2, "configArticle");
            return (Criteria) this;
        }

        public Criteria andConfigArticleNotBetween(String value1, String value2) {
            addCriterion("CONFIG_ARTICLE not between", value1, value2, "configArticle");
            return (Criteria) this;
        }

        public Criteria andConfigProductIsNull() {
            addCriterion("CONFIG_PRODUCT is null");
            return (Criteria) this;
        }

        public Criteria andConfigProductIsNotNull() {
            addCriterion("CONFIG_PRODUCT is not null");
            return (Criteria) this;
        }

        public Criteria andConfigProductEqualTo(String value) {
            addCriterion("CONFIG_PRODUCT =", value, "configProduct");
            return (Criteria) this;
        }

        public Criteria andConfigProductNotEqualTo(String value) {
            addCriterion("CONFIG_PRODUCT <>", value, "configProduct");
            return (Criteria) this;
        }

        public Criteria andConfigProductGreaterThan(String value) {
            addCriterion("CONFIG_PRODUCT >", value, "configProduct");
            return (Criteria) this;
        }

        public Criteria andConfigProductGreaterThanOrEqualTo(String value) {
            addCriterion("CONFIG_PRODUCT >=", value, "configProduct");
            return (Criteria) this;
        }

        public Criteria andConfigProductLessThan(String value) {
            addCriterion("CONFIG_PRODUCT <", value, "configProduct");
            return (Criteria) this;
        }

        public Criteria andConfigProductLessThanOrEqualTo(String value) {
            addCriterion("CONFIG_PRODUCT <=", value, "configProduct");
            return (Criteria) this;
        }

        public Criteria andConfigProductLike(String value) {
            addCriterion("CONFIG_PRODUCT like", value, "configProduct");
            return (Criteria) this;
        }

        public Criteria andConfigProductNotLike(String value) {
            addCriterion("CONFIG_PRODUCT not like", value, "configProduct");
            return (Criteria) this;
        }

        public Criteria andConfigProductIn(List<String> values) {
            addCriterion("CONFIG_PRODUCT in", values, "configProduct");
            return (Criteria) this;
        }

        public Criteria andConfigProductNotIn(List<String> values) {
            addCriterion("CONFIG_PRODUCT not in", values, "configProduct");
            return (Criteria) this;
        }

        public Criteria andConfigProductBetween(String value1, String value2) {
            addCriterion("CONFIG_PRODUCT between", value1, value2, "configProduct");
            return (Criteria) this;
        }

        public Criteria andConfigProductNotBetween(String value1, String value2) {
            addCriterion("CONFIG_PRODUCT not between", value1, value2, "configProduct");
            return (Criteria) this;
        }

        public Criteria andConfigCardIsNull() {
            addCriterion("CONFIG_CARD is null");
            return (Criteria) this;
        }

        public Criteria andConfigCardIsNotNull() {
            addCriterion("CONFIG_CARD is not null");
            return (Criteria) this;
        }

        public Criteria andConfigCardEqualTo(String value) {
            addCriterion("CONFIG_CARD =", value, "configCard");
            return (Criteria) this;
        }

        public Criteria andConfigCardNotEqualTo(String value) {
            addCriterion("CONFIG_CARD <>", value, "configCard");
            return (Criteria) this;
        }

        public Criteria andConfigCardGreaterThan(String value) {
            addCriterion("CONFIG_CARD >", value, "configCard");
            return (Criteria) this;
        }

        public Criteria andConfigCardGreaterThanOrEqualTo(String value) {
            addCriterion("CONFIG_CARD >=", value, "configCard");
            return (Criteria) this;
        }

        public Criteria andConfigCardLessThan(String value) {
            addCriterion("CONFIG_CARD <", value, "configCard");
            return (Criteria) this;
        }

        public Criteria andConfigCardLessThanOrEqualTo(String value) {
            addCriterion("CONFIG_CARD <=", value, "configCard");
            return (Criteria) this;
        }

        public Criteria andConfigCardLike(String value) {
            addCriterion("CONFIG_CARD like", value, "configCard");
            return (Criteria) this;
        }

        public Criteria andConfigCardNotLike(String value) {
            addCriterion("CONFIG_CARD not like", value, "configCard");
            return (Criteria) this;
        }

        public Criteria andConfigCardIn(List<String> values) {
            addCriterion("CONFIG_CARD in", values, "configCard");
            return (Criteria) this;
        }

        public Criteria andConfigCardNotIn(List<String> values) {
            addCriterion("CONFIG_CARD not in", values, "configCard");
            return (Criteria) this;
        }

        public Criteria andConfigCardBetween(String value1, String value2) {
            addCriterion("CONFIG_CARD between", value1, value2, "configCard");
            return (Criteria) this;
        }

        public Criteria andConfigCardNotBetween(String value1, String value2) {
            addCriterion("CONFIG_CARD not between", value1, value2, "configCard");
            return (Criteria) this;
        }

        public Criteria andConfigRecruitIsNull() {
            addCriterion("CONFIG_RECRUIT is null");
            return (Criteria) this;
        }

        public Criteria andConfigRecruitIsNotNull() {
            addCriterion("CONFIG_RECRUIT is not null");
            return (Criteria) this;
        }

        public Criteria andConfigRecruitEqualTo(String value) {
            addCriterion("CONFIG_RECRUIT =", value, "configRecruit");
            return (Criteria) this;
        }

        public Criteria andConfigRecruitNotEqualTo(String value) {
            addCriterion("CONFIG_RECRUIT <>", value, "configRecruit");
            return (Criteria) this;
        }

        public Criteria andConfigRecruitGreaterThan(String value) {
            addCriterion("CONFIG_RECRUIT >", value, "configRecruit");
            return (Criteria) this;
        }

        public Criteria andConfigRecruitGreaterThanOrEqualTo(String value) {
            addCriterion("CONFIG_RECRUIT >=", value, "configRecruit");
            return (Criteria) this;
        }

        public Criteria andConfigRecruitLessThan(String value) {
            addCriterion("CONFIG_RECRUIT <", value, "configRecruit");
            return (Criteria) this;
        }

        public Criteria andConfigRecruitLessThanOrEqualTo(String value) {
            addCriterion("CONFIG_RECRUIT <=", value, "configRecruit");
            return (Criteria) this;
        }

        public Criteria andConfigRecruitLike(String value) {
            addCriterion("CONFIG_RECRUIT like", value, "configRecruit");
            return (Criteria) this;
        }

        public Criteria andConfigRecruitNotLike(String value) {
            addCriterion("CONFIG_RECRUIT not like", value, "configRecruit");
            return (Criteria) this;
        }

        public Criteria andConfigRecruitIn(List<String> values) {
            addCriterion("CONFIG_RECRUIT in", values, "configRecruit");
            return (Criteria) this;
        }

        public Criteria andConfigRecruitNotIn(List<String> values) {
            addCriterion("CONFIG_RECRUIT not in", values, "configRecruit");
            return (Criteria) this;
        }

        public Criteria andConfigRecruitBetween(String value1, String value2) {
            addCriterion("CONFIG_RECRUIT between", value1, value2, "configRecruit");
            return (Criteria) this;
        }

        public Criteria andConfigRecruitNotBetween(String value1, String value2) {
            addCriterion("CONFIG_RECRUIT not between", value1, value2, "configRecruit");
            return (Criteria) this;
        }

        public Criteria andShowAdIsNull() {
            addCriterion("SHOW_AD is null");
            return (Criteria) this;
        }

        public Criteria andShowAdIsNotNull() {
            addCriterion("SHOW_AD is not null");
            return (Criteria) this;
        }

        public Criteria andShowAdEqualTo(String value) {
            addCriterion("SHOW_AD =", value, "showAd");
            return (Criteria) this;
        }

        public Criteria andShowAdNotEqualTo(String value) {
            addCriterion("SHOW_AD <>", value, "showAd");
            return (Criteria) this;
        }

        public Criteria andShowAdGreaterThan(String value) {
            addCriterion("SHOW_AD >", value, "showAd");
            return (Criteria) this;
        }

        public Criteria andShowAdGreaterThanOrEqualTo(String value) {
            addCriterion("SHOW_AD >=", value, "showAd");
            return (Criteria) this;
        }

        public Criteria andShowAdLessThan(String value) {
            addCriterion("SHOW_AD <", value, "showAd");
            return (Criteria) this;
        }

        public Criteria andShowAdLessThanOrEqualTo(String value) {
            addCriterion("SHOW_AD <=", value, "showAd");
            return (Criteria) this;
        }

        public Criteria andShowAdLike(String value) {
            addCriterion("SHOW_AD like", value, "showAd");
            return (Criteria) this;
        }

        public Criteria andShowAdNotLike(String value) {
            addCriterion("SHOW_AD not like", value, "showAd");
            return (Criteria) this;
        }

        public Criteria andShowAdIn(List<String> values) {
            addCriterion("SHOW_AD in", values, "showAd");
            return (Criteria) this;
        }

        public Criteria andShowAdNotIn(List<String> values) {
            addCriterion("SHOW_AD not in", values, "showAd");
            return (Criteria) this;
        }

        public Criteria andShowAdBetween(String value1, String value2) {
            addCriterion("SHOW_AD between", value1, value2, "showAd");
            return (Criteria) this;
        }

        public Criteria andShowAdNotBetween(String value1, String value2) {
            addCriterion("SHOW_AD not between", value1, value2, "showAd");
            return (Criteria) this;
        }
    }

    /**
     * This class was generated by MyBatis Generator.
     * This class corresponds to the database table article_personal_config
     *
     * @mbggenerated do_not_delete_during_merge Wed May 20 09:55:58 CST 2020
     */
    public static class Criteria extends GeneratedCriteria {

        protected Criteria() {
            super();
        }
    }

    /**
     * This class was generated by MyBatis Generator.
     * This class corresponds to the database table article_personal_config
     *
     * @mbggenerated Wed May 20 09:55:58 CST 2020
     */
    public static class Criterion {
        private String condition;

        private Object value;

        private Object secondValue;

        private boolean noValue;

        private boolean singleValue;

        private boolean betweenValue;

        private boolean listValue;

        private String typeHandler;

        public String getCondition() {
            return condition;
        }

        public Object getValue() {
            return value;
        }

        public Object getSecondValue() {
            return secondValue;
        }

        public boolean isNoValue() {
            return noValue;
        }

        public boolean isSingleValue() {
            return singleValue;
        }

        public boolean isBetweenValue() {
            return betweenValue;
        }

        public boolean isListValue() {
            return listValue;
        }

        public String getTypeHandler() {
            return typeHandler;
        }

        protected Criterion(String condition) {
            super();
            this.condition = condition;
            this.typeHandler = null;
            this.noValue = true;
        }

        protected Criterion(String condition, Object value, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.typeHandler = typeHandler;
            if (value instanceof List<?>) {
                this.listValue = true;
            } else {
                this.singleValue = true;
            }
        }

        protected Criterion(String condition, Object value) {
            this(condition, value, null);
        }

        protected Criterion(String condition, Object value, Object secondValue, String typeHandler) {
            super();
            this.condition = condition;
            this.value = value;
            this.secondValue = secondValue;
            this.typeHandler = typeHandler;
            this.betweenValue = true;
        }

        protected Criterion(String condition, Object value, Object secondValue) {
            this(condition, value, secondValue, null);
        }
    }
}