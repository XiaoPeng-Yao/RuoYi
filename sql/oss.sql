CREATE TABLE `sys_oss` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `file_name` varchar(64) NOT NULL DEFAULT '' COMMENT '�ļ���',
  `file_suffix` varchar(10) NOT NULL DEFAULT '' COMMENT '�ļ���׺��',
  `url` varchar(200) NOT NULL COMMENT 'URL��ַ',
  `create_time` datetime DEFAULT NULL COMMENT '����ʱ��',
  `create_by` varchar(64) NOT NULL DEFAULT '' COMMENT '�ϴ���',
  `service` tinyint(2) NOT NULL DEFAULT '1' COMMENT '������',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COMMENT='�ļ��ϴ�';

INSERT INTO `ry`.`sys_config` (`config_id`, `config_name`, `config_key`, `config_value`, `config_type`, `create_by`, `create_time`, `update_by`, `update_time`, `remark`) VALUES ('3', 'oss�洢����', 'sys.oss.cloudStorage', '{\"aliyunAccessKeyId\":\"\",\"aliyunAccessKeySecret\":\"\",\"aliyunBucketName\":\"\",\"aliyunDomain\":\"\",\"aliyunEndPoint\":\"\",\"aliyunPrefix\":\"\",\"qcloudBucketName\":\"\",\"qcloudDomain\":\"\",\"qcloudPrefix\":\"\",\"qcloudSecretId\":\"\",\"qcloudSecretKey\":\"\",\"qiniuAccessKey\":\"\",\"qiniuBucketName\":\"ios-app\",\"qiniuDomain\":\"\",\"qiniuPrefix\":\"upload\",\"qiniuSecretKey\":\"\",\"type\":1}', 'Y', 'admin', '2018-03-16 11:33:00', '', '2018-03-16 11:33:00', 'oss�洢����');
