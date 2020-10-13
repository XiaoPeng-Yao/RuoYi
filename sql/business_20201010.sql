-- ----------------------------
-- 1、服务组织代码生成业务表字段
-- ----------------------------
drop table if exists service_organization;
create table service_organization (
  id  int(4)  not null auto_increment  comment 'ID',
  name   varchar(120) not null  comment '企业名称',
  contacts   varchar(50) not null  comment '联系人',
  phone  varchar(12)  not null  comment '联系电话',
  license_url  varchar(500)  not null  comment '营业执照图片地址（多个地址用，分隔）',
  title  varchar(50) not null  comment '标题',
  introduction  text not null comment '简介',
  content  text  not null comment '机构详情内容',
  hits  int (6)  comment '点击量',
  status  char(1)  default '0'  comment '状态（0:待审核，1：审核不通过，2：审核通过）',
  create_by  varchar(64)  default '' comment '创建者',
  create_time  datetime    comment '创建时间',
  update_by  varchar(64)  default ''  comment '更新者',
  update_time  datetime  comment '更新时间',
  check_by  varchar(64)  default ''  comment '审核者',
  check_time  datetime  comment '审核时间',
  remark  varchar(255)    default null  comment '备注',
  primary key (id)
) engine=innodb auto_increment=10 comment = '服务组织表';


-- ----------------------------
-- 2、 合同代码生成业务表字段
-- ----------------------------
drop table if exists contract;
create table contract (
  id  int(4)  not null auto_increment  comment 'ID',
  kind varchar(100)  not null comment '合同分类(来至于字典表)',
  template  varchar(100)  not null  comment '合同模板(来至于字典表)',
  title  varchar(50) not null  comment '标题',
  introduction  text not null comment '简介',
  content  text  not null comment '详情内容',
  hits  int (6)  comment '点击量',
  enclosure_url  varchar(500)  not null  comment '附件下载（多个地址用，分隔）',
  create_by  varchar(64)  default '' comment '创建者',
  create_time  datetime    comment '创建时间',
  update_by  varchar(64)  default ''  comment '更新者',
  update_time  datetime  comment '更新时间',
  remark  varchar(255)    default null  comment '备注',
  primary key (id)
) engine=innodb auto_increment=10 comment = '合同表';


-- ----------------------------
-- 3、 典型案例代码生成业务表字段
-- ----------------------------
drop table if exists typical_case;
create table typical_case (
  id  int(4) not null auto_increment  comment 'ID',
  title  varchar(50) not null  comment '标题',
  introduction  text not null comment '简介',
  content  text  not null comment '详情内容',
  hits  int (6)  comment '点击量',
  create_by  varchar(64)  default '' comment '创建者',
  create_time  datetime    comment '创建时间',
  update_by  varchar(64)  default ''  comment '更新者',
  update_time  datetime  comment '更新时间',
  primary key (id)
) engine=innodb auto_increment=10 comment = '典型案例表';