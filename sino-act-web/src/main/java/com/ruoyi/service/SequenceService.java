package com.ruoyi.service;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/***
 * 
 * @ClassName: SequenceService 
 * @Description: �������к�
 * @author liuyaoyao
 * @date 2018��2��8�� ����4:24:32 
 *
 */
public class SequenceService {
	
	private static Logger logger = LoggerFactory.getLogger(SequenceService.class);
	
	public synchronized String getPrizeSequence(){
		try{
			String sql = "select lpad(sequenec_prize.nextval,8,0) from dual";
			return null;
		}catch(Exception e){
			logger.error("ͨ�����ݿ����л�ȡ�ʻ�ID��������ԭ��", e);
			return null;
		}
	}
	
	public String getDrawActivirtSeq(){
		try{
			String sql = "select lpad(gt_draw_activity_seq.nextval,7,0) from dual";
			return null;
		}catch(Exception e){
			logger.error("ͨ�����ݿ����л�ȡ�ʻ�ID��������ԭ��", e);
			return null;
		}
	}
	public String getDrawActivirtTradeOrderSeq(){
		try{
			String sql = "select lpad(gt_draw_activity_tradeorder.nextval,10,0) from dual";
			return null;
		}catch(Exception e){
			logger.error("ͨ�����ݿ����л�ȡ�ʻ�ID��������ԭ��", e);
			return null;
		}
	}
	
	public String getGtReqFlagSeq(){
		try{
			String sql = "select lpad(gt_req_flag_seq.nextval,10,0) from dual";
			return null;
		}catch(Exception e){
			logger.error("ͨ�����ݿ����л�ȡ�ʻ�ID��������ԭ��", e);
			return null;
		}
	}
	
}
