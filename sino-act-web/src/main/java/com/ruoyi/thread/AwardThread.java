package com.ruoyi.thread;

import com.ruoyi.common.utils.spring.SpringUtils;
import com.ruoyi.dto.DrawActivityRequest;
import com.ruoyi.system.service.ISysDictDataService;
import com.ruoyi.web.vo.Const;
import com.sinosoft.activity.domain.DrawRecord;
import com.sinosoft.activity.service.IDrawAwardRecordService;
import com.sinosoft.activity.service.IDrawPrizeInfoService;
import com.sinosoft.activity.service.IDrawRecordService;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class AwardThread implements Runnable {
	protected static Logger logger = LoggerFactory.getLogger(AwardThread.class);
	private String mobile;
	private DrawActivityRequest request;
	private IDrawPrizeInfoService gtPrizeInfoService;
	private IDrawAwardRecordService gtAwardRecordService;
	private ISysDictDataService inCodeService;
	private DrawRecord gtDrawRecord;
	private String awardMethod;
	private IDrawRecordService gtDrawRecordService;
/**
 * �����߼�������
 */
	@Override
	public void run() {
		String prizeType = gtDrawRecord.getPRIZETYPE();
		try {
			//�����ཱƷ����
			if (prizeType.equals(Const.PRIZE_TYPE_INTEGRAL)) {
//				GetIntegralResponse getIntegralResponse = getIntegral(gtDrawRecord);
//				if (getIntegralResponse == null) {
//					throw new Exception("���ַ��Žӿ��쳣");
//				}
//				GtAwardRecord gtAwardRecord = new GtAwardRecord();
//				gtAwardRecord.setUserName(gtDrawRecord.getUserName());
//				gtAwardRecord.setUserId(gtDrawRecord.getUserId());
//				gtAwardRecord.setCreateTimeStamp(new Date());
//				gtAwardRecord.setDrawCode(gtDrawRecord.getDrawCode());
//				gtAwardRecord.setDrawRecordId(gtDrawRecord.getDrawRecordId());
//				gtAwardRecord.setLastUpdateTimeStamp(new Date());
//				gtAwardRecord.setPrizeCode(gtDrawRecord.getPrizeCode());
//				gtAwardRecord.setPrizeType(gtDrawRecord.getPrizeType());
//				gtAwardRecord.setPrizeLevel(gtDrawRecord.getPrizeLevel());
//				gtAwardRecord.setReturnCode(getIntegralResponse.getResultCode());
//				gtAwardRecord.setReturnMessage(getIntegralResponse.getResultInfo());
//				gtAwardRecord.setMerchantCode(request.getBody().getMerchantCode());
//				gtAwardRecord.setMerchantSysCode(request.getBody().getMerchantSysCode());
//				gtAwardRecord.setChannel(request.getBody().getChannel());
//				gtAwardRecord.setBusinessArea(request.getBody().getBusinessArea());
//				gtAwardRecord.setDrawTranseqNo(gtDrawRecord.getDrawTranseqNo());
//				gtAwardRecord.setExtId(gtDrawRecord.getProjectCode());
//				if (getIntegralResponse.getResultCode().endsWith(WebServiceResult.SUCCESS)) {
//					gtAwardRecord.setAwardResult(Const.AWARD_RESULT_SUCCESS);
//					gtAwardRecord.setAwardTime(new Date());
//				}else{
//					gtAwardRecord.setAwardResult(Const.AWARD_RESULT_FAIL);
//					logger.info("����ƽ̨���ַ���ʧ�ܣ�"+gtDrawRecord.getDrawTranseqNo()+"&ʧ��ԭ��"+getIntegralResponse.getResultInfo());
//				}
//				gtAwardRecordService.addGtAwardRecord(gtAwardRecord);
			} else if (prizeType.equals(Const.PRIZE_TYPE_CASH)) {
				//1654 ����һ��ͨ�ֽ���
//				getCash();
			} else if (prizeType.equals(Const.PRIZE_TYPE_VOCHER)) {
//				QueryRule queryRule=QueryRule.getInstance();
//				queryRule.addEqual("prizeCode", gtDrawRecord.getPrizeCode());
//				GtPrizeInfo gtPrizeInfo=gtPrizeInfoService.queryUniqueGtPrizeInfo(queryRule);
//				Map<String, String> coupon_config=inCodeService.findAllCodeAndName("INTERFACE_COUPON");
//				if(coupon_config==null||gtPrizeInfo==null){
//					throw new Exception("��ȯ���ò����쳣");
//				}
//				StringBuffer param = new StringBuffer();
//				param.append("service_id=" + PropertiesUtil.getProperties("sysConfig.properties", "INTERFACE_COUPON_SERVICE_ID"));
//				param.append("&accessToken="+coupon_config.get("ACCESS_TOKEN"));
//				Map<String, Object> dataMap=new HashMap<String, Object>();
//				Map<String, Object> requestMap=new HashMap<String, Object>();
//				requestMap.put("oldUserId", gtDrawRecord.getUserId());
//				requestMap.put("bonusCode", gtPrizeInfo.getIntegralProjectCode());
//				requestMap.put("channelType", "3");
//				requestMap.put("platformLimit", "3");
//				dataMap.put("request", requestMap);
//				JSONObject jsonObject=JSONObject.fromObject(dataMap);
//				param.append("&data="+jsonObject.toString());
//				long  iemallStart= System.currentTimeMillis();
//				logger.info("һ��ͨ��ȯ����:"+gtDrawRecord.getDrawTranseqNo()+"&���Ͳ���:"+param.toString()+"&����ʱ��:"+iemallStart);
//				String responseStr=HttpRequestUtil.sendHttpPostRequest(PropertiesUtil.getProperties("sysConfig.properties", "INTERFACE_COUPON_URL"), param.toString());
//				long iemallEnd= System.currentTimeMillis();
//				long iemallProct=iemallEnd-iemallStart;
//				logger.info("һ��ͨ��ȯ��Ӧ:" +gtDrawRecord.getDrawTranseqNo()+"&��Ӧ����:"+responseStr+"&��Ӧʱ��:"+ System.currentTimeMillis()+"&����ʱ��:"+iemallProct);
//				JSONObject responseJson=JSONObject.fromObject(responseStr);
//				GtAwardRecord gtAwardRecord = new GtAwardRecord();
//				gtAwardRecord.setUserName(gtDrawRecord.getUserName());
//				gtAwardRecord.setUserId(gtDrawRecord.getUserId());
//				gtAwardRecord.setCreateTimeStamp(new Date());
//				gtAwardRecord.setDrawCode(gtDrawRecord.getDrawCode());
//				gtAwardRecord.setDrawRecordId(gtDrawRecord.getDrawRecordId());
//				gtAwardRecord.setLastUpdateTimeStamp(new Date());
//				gtAwardRecord.setPrizeCode(gtDrawRecord.getPrizeCode());
//				gtAwardRecord.setPrizeType(gtDrawRecord.getPrizeType());
//				gtAwardRecord.setPrizeLevel(gtDrawRecord.getPrizeLevel());
//				gtAwardRecord.setReturnCode(responseJson.getJSONObject("response").get("errorCode").toString());
//				gtAwardRecord.setReturnMessage(responseJson.getJSONObject("response").get("errorMsg").toString());
//				gtAwardRecord.setDrawTranseqNo(gtDrawRecord.getDrawTranseqNo());
//				gtAwardRecord.setExtId(gtDrawRecord.getProjectCode());
//				gtAwardRecord.setAwardTranseqNo(responseJson.getJSONObject("response").get("batchNo").toString());
//				if (responseJson.getJSONObject("response").get("errorCode").toString().endsWith(WebServiceResult.SUCCESS)) {
//					gtAwardRecord.setAwardResult(Const.AWARD_RESULT_SUCCESS);
//					gtAwardRecord.setAwardTime(new Date());
//				} else{
//					gtAwardRecord.setAwardResult(Const.AWARD_RESULT_FAIL);
//					logger.info("һ��ͨ��ȯʧ��"+gtDrawRecord.getDrawTranseqNo()+"&ʧ��ԭ��"+responseJson.getJSONObject("response").get("errorCode")+responseJson.getJSONObject("response").get("errorMsg"));
//				}
//				gtAwardRecord.setReturnCode(responseJson.getJSONObject("response").get("errorCode").toString());
//				gtAwardRecord.setReturnMessage(responseJson.getJSONObject("response").get("errorMsg").toString());
//				gtAwardRecord.setDrawTranseqNo(gtDrawRecord.getDrawTranseqNo());
//				gtAwardRecordService.addGtAwardRecord(gtAwardRecord);
//				InPortalTransmessage message = new InPortalTransmessage();
//				message.setTransCode("EXT00001");
//				message.setTransRefGuid(new SimpleDateFormat("yyyyMMddHHmmssSSS").format(new Date()));
//				message.setRequestTime(new Date());
//				message.setResponseTime(new Date());
//				message.setRequestMessage(jsonObject.toString());
//				message.setResponseMessage(responseStr);
//				message.setProct(iemallProct);
//				transRecordService.offer(message);
			}else if(prizeType.equals(Const.PRIZE_TYPE_IEMALL)){
				if(StringUtils.isNotBlank(mobile)){
					//����i��
//					QueryRule queryRule=QueryRule.getInstance();
//					queryRule.addEqual("prizeCode", gtDrawRecord.getPrizeCode());
//					GtPrizeInfo gtPrizeInfo=gtPrizeInfoService.queryUniqueGtPrizeInfo(queryRule);
//					Map<String, String> iemall_config=inCodeService.findAllCodeAndName("iemallConfig");
//					if(iemall_config==null||gtPrizeInfo==null){
//						throw new Exception("��ȯ���ò����쳣");
//					}
//					String key=iemall_config.get("key");
//					String timestamp=new SimpleDateFormat("yyyyMMddHHmmssSSS").format(new Date());
//					long voucherId= Long.parseLong(gtPrizeInfo.getIntegralProjectCode());
//					Md5 md5 = new Md5();
//					String str="mobile="+mobile+"&timestamp="+timestamp+"&voucherId="+voucherId+"&key="+key;
//					String sign=md5.toMD5(str);
//					int source=8;
//					String request="mobile="+mobile+"&voucherId="+voucherId+"&timestamp="+timestamp+"&source="+source+"&sign="+sign;
//					URL url = new URL(PropertiesUtil.getProperties("sysConfig.properties", "INTERFACE_IEMALL_URL")+"?"+request);
//					long start1= System.currentTimeMillis();
//					logger.info("I��ȯ��ȯ����:"+gtDrawRecord.getDrawTranseqNo()+"&���Ͳ���:"+url.toString()+"&����ʱ��:"+start1);
//					InetSocketAddress addr=new InetSocketAddress(iemall_config.get("proxy"), Integer.parseInt(iemall_config.get("port")));
//					HttpURLConnection conn=null;
//					if(iemall_config.get("isProxy").equals("1")){
//						Proxy proxy=new Proxy(Proxy.Type.HTTP, addr);
//						logger.info("���ô������i��IP"+proxy.address());
//						conn = (HttpURLConnection) url.openConnection(proxy);
//					}else{
//						conn = (HttpURLConnection) url.openConnection();
//					}
//					conn.setRequestProperty("contentType", "utf-8");
//					conn.setConnectTimeout(5 * 1000);
//					conn.setRequestMethod("POST");
//					InputStream inStream = conn.getInputStream();
//					BufferedReader in = new BufferedReader(new InputStreamReader(inStream, "utf-8"));
//					StringBuffer buffer = new StringBuffer();
//					String line = "";
//					while ((line = in.readLine()) != null) {
//						buffer.append(line);
//					}
//					String responseStr = buffer.toString();
//					logger.info("I��ȯ��ȯ��Ӧ:" +gtDrawRecord.getDrawTranseqNo()+"&��Ӧ����:"+responseStr+"&��Ӧʱ��:"+ System.currentTimeMillis()+"&����ʱ��:"+(System.currentTimeMillis()-start1));
//					JSONObject responseJson=JSONObject.fromObject(responseStr);
//					GtAwardRecord gtAwardRecord = new GtAwardRecord();
//					gtAwardRecord.setUserName(gtDrawRecord.getUserName());
//					gtAwardRecord.setUserId(gtDrawRecord.getUserId());
//					gtAwardRecord.setCreateTimeStamp(new Date());
//					gtAwardRecord.setDrawCode(gtDrawRecord.getDrawCode());
//					gtAwardRecord.setPhone(mobile);
//					gtAwardRecord.setDrawRecordId(gtDrawRecord.getDrawRecordId());
//					gtAwardRecord.setLastUpdateTimeStamp(new Date());
//					gtAwardRecord.setPrizeCode(gtDrawRecord.getPrizeCode());
//					gtAwardRecord.setPrizeType(gtDrawRecord.getPrizeType());
//					gtAwardRecord.setPrizeLevel(gtDrawRecord.getPrizeLevel());
//					gtAwardRecord.setExtId(gtDrawRecord.getProjectCode());
//					boolean result=responseJson.getBoolean("success");
//					String awawrState="1";
//					if(result){
//						gtAwardRecord.setAwardResult(Const.AWARD_RESULT_SUCCESS);
//						gtAwardRecord.setAwardTime(new Date());
//						gtAwardRecord.setReturnCode("0000");
//						awawrState="2";
//					}else{
//						logger.info("I��ȯ��ȯʧ��:"+gtDrawRecord.getDrawTranseqNo()+"&ʧ��ԭ��:"+responseJson.getString("message").toString());
//						gtAwardRecord.setReturnCode(String.valueOf(result));
//						gtAwardRecord.setAwardResult(Const.AWARD_RESULT_FAIL);
//					}
//					gtAwardRecord.setReturnMessage(responseJson.get("message").toString());
//					gtAwardRecord.setDrawTranseqNo(gtDrawRecord.getDrawTranseqNo());
// 					gtAwardRecordService.addGtAwardRecord(gtAwardRecord);
//
// 					if(awardMethod.equals(Const.AWARD_METHOD_MANAL)){
// 						gtDrawRecord.setDrawResult(awawrState);
// 						gtDrawRecordService.updateGtDrawRecord(gtDrawRecord);
// 					}
//
//					InPortalTransmessage message = new InPortalTransmessage();
//					message.setTransCode("EXT00002");
//					message.setTransRefGuid(new SimpleDateFormat("yyyyMMddHHmmssSSS").format(new Date()));
//					message.setRequestTime(new Date());
//					message.setResponseTime(new Date());
//					message.setRequestMessage(request);
//					message.setResponseMessage(responseStr);
//					transRecordService.offer(message);
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
			logger.error("�첽�����쳣���쳣ԭ��:", e);
		}
	}


	/**
	 * һ��ͨ�ֽ������Žӿ�
	 * @author huayue
	 * @since 2020-08-11
	 * @version 1654
	 * @throws Exception
	 */
//	private void getCash() throws Exception {
//		String url= PropertiesUtil.getProperties("sysConfig.properties", "ecUrl");
//		String isProxyStr=PropertiesUtil.getProperties("sysConfig.properties", "isProxy");
//		String serviceCode=PropertiesUtil.getProperties("sysConfig.properties", "cashServiceCode");
//		String partnerId=PropertiesUtil.getProperties("sysConfig.properties", "partnerId");
//		String key=PropertiesUtil.getProperties("sysConfig.properties", "key");
//		boolean isProxy = false;
//		if("1".equals(isProxyStr)){
//			isProxy = true;
//		}
//		String currentTime = DateUtil.getCurrentDate("yyyyMMddHHmmss");
//		String userId = gtDrawRecord.getUserId();
//		//��ȯ����id
//		String bonusCode = gtDrawRecord.getProjectCode();
//		//���Ϲ���app�˴�1��΢�Ŷ˴�2
//		String type = "2";
//		if ("APP".equals(gtDrawRecord.getChannel())) {
//			type = "1";
//		}
//		StringBuffer params = new StringBuffer();
//		params.append("serviceCode=").append(serviceCode).append("&");
//		params.append("type=").append(type).append("&");
//		params.append("ecNo=").append(userId).append("&");
//		params.append("bonusCode=").append(bonusCode).append("&");
//		params.append("currentTime=").append(currentTime).append("&");
//		params.append("partnerId=").append(partnerId).append("&");
//		//��ǩ���ַ���= md5(type + ecNo + currentTime + partnerId + key)
//		params.append("sign=").append(Md5Util.digestByMd5(type+userId+currentTime+partnerId+key));
//		logger.info("һ��ͨ�ֽ������Žӿ���Σ�" + params);
//		long start = System.currentTimeMillis();
//		String responseStr= HttpRequestUtil.sendPost(url, params.toString(), isProxy);
//		long proct = System.currentTimeMillis()-start;
//		logger.info("һ��ͨ�ֽ������Žӿ���Ӧ��" + responseStr + "����ʱ��"+proct);
//		JSONObject respJson = JSONObject.fromObject(responseStr);
//		String errorCode = respJson.optString("errorCode");
//		String errorMsg = respJson.optString("errorMsg");
//		if ("0".equals(errorCode)) {
//			errorCode = WebServiceResult.SUCCESS;
//		}
//		saveAwardRecord(errorCode, errorMsg);
//		saveTransRecord("EXT00004", params.toString(), responseStr, proct);
//	}
	/**
	 * �洢���ױ���
	 * @author huayue
	 * @since 2020-08-11
	 * @version 1654
	 */
//	private void saveTransRecord(String transCode, String reqMsg, String respMsg, long proct) {
//		InPortalTransmessage message = new InPortalTransmessage();
//		message.setTransCode(transCode);
//		message.setTransRefGuid(new SimpleDateFormat("yyyyMMddHHmmssSSS").format(new Date()));
//		message.setRequestTime(new Date());
//		message.setResponseTime(new Date());
//		message.setRequestMessage(reqMsg);
//		message.setProct(proct);
//		message.setResponseMessage(respMsg);
//		transRecordService.offer(message);
//	}
	/**
	 * �洢�н���¼
	 * @author huayue
	 * @since 2020-08-11
	 * @version 1654
	 */
//	private void saveAwardRecord(String returnCode, String returnInfo) {
//		GtAwardRecord gtAwardRecord = new GtAwardRecord();
//		gtAwardRecord.setUserName(gtDrawRecord.getUserName());
//		gtAwardRecord.setUserId(gtDrawRecord.getUserId());
//		gtAwardRecord.setCreateTimeStamp(new Date());
//		gtAwardRecord.setDrawCode(gtDrawRecord.getDrawCode());
//		gtAwardRecord.setDrawRecordId(gtDrawRecord.getDrawRecordId());
//		gtAwardRecord.setLastUpdateTimeStamp(new Date());
//		gtAwardRecord.setPrizeCode(gtDrawRecord.getPrizeCode());
//		gtAwardRecord.setPrizeType(gtDrawRecord.getPrizeType());
//		gtAwardRecord.setPrizeLevel(gtDrawRecord.getPrizeLevel());
//		gtAwardRecord.setReturnCode(returnCode);
//		gtAwardRecord.setReturnMessage(returnInfo);
//		gtAwardRecord.setMerchantCode(request.getBody().getMerchantCode());
//		gtAwardRecord.setMerchantSysCode(request.getBody().getMerchantSysCode());
//		gtAwardRecord.setChannel(request.getBody().getChannel());
//		gtAwardRecord.setBusinessArea(request.getBody().getBusinessArea());
//		gtAwardRecord.setDrawTranseqNo(gtDrawRecord.getDrawTranseqNo());
//		gtAwardRecord.setExtId(gtDrawRecord.getProjectCode());
//		if (WebServiceResult.SUCCESS.equals(returnCode)) {
//			gtAwardRecord.setAwardResult(Const.AWARD_RESULT_SUCCESS);
//			gtAwardRecord.setAwardTime(new Date());
//		}else{
//			gtAwardRecord.setAwardResult(Const.AWARD_RESULT_FAIL);
//			logger.error("����ƽ̨���ַ���ʧ�ܣ�"+gtDrawRecord.getDrawTranseqNo()+"&ʧ��ԭ��"+returnInfo);
//		}
//		gtAwardRecordService.addGtAwardRecord(gtAwardRecord);
//	}

	public AwardThread(DrawRecord gtDrawRecord, DrawActivityRequest request, String mobile, String awardMethod) {
		this.mobile=mobile;
		this.request = request;
		this.gtDrawRecord=gtDrawRecord;
		this.awardMethod=awardMethod;
		this.gtPrizeInfoService = (IDrawPrizeInfoService) SpringUtils.getBean("drawPrizeInfoService");
		this.gtAwardRecordService = (IDrawAwardRecordService) SpringUtils.getBean("drawAwardRecordService");
		this.inCodeService=(ISysDictDataService) SpringUtils.getBean("inCodeService");
		this.gtDrawRecordService=(IDrawRecordService) SpringUtils.getBean("drawRecordService");
	}

//	public GetIntegralResponse getIntegral(GtDrawRecord gtDrawRecord) throws RemoteException {
//		JsonBinder jsonBinder = JsonBinder.buildNormalBinder();
//		DrawActivityRequestBody drawActivityRequestBody = request.getBody();
//		GetIntegralServiceStub getIntegralServiceStub = new GetIntegralServiceStub(
//				PropertiesUtil.getProperties("sysConfig.properties", "URL_INTERFACE_INTEGRAL_GETINTEGRALSERVICE"));
//		GetIntegralServiceStub.GetIntegral getIntegral = new GetIntegralServiceStub.GetIntegral();
//		GetIntegralServiceStub.GetIntegralRequest getIntegralRequest = new GetIntegralServiceStub.GetIntegralRequest();
//		GetIntegralServiceStub.GetIntegralRequestBody getIntegralRequestBody = new GetIntegralServiceStub.GetIntegralRequestBody();
//		GetIntegralServiceStub.GetIntegralRequestHander getIntegralRequestHander = new GetIntegralServiceStub.GetIntegralRequestHander();
//		getIntegralRequestHander.setUserName(PropertiesUtil.getProperties("sysConfig.properties", "INTEGRAL_INTERFACE_USER_HANDER"));
//		getIntegralRequestHander.setTransCode(PropertiesUtil.getProperties("sysConfig.properties", "INTEGRAL_INTERFACE_TRANSCODE_GETINTEGRALSERVICE"));
//		getIntegralRequestHander.setSysName(PropertiesUtil.getProperties("sysConfig.properties", "INTEGRAL_INTERFACE_SYS_NAME"));
//		getIntegralRequestHander.setPassword(PropertiesUtil.getProperties("sysConfig.properties", "INTEGRAL_INTERFACE_PASS_HANDER"));
//		getIntegralRequestHander.setChannel(drawActivityRequestBody.getChannel());
//		getIntegralRequestHander.setSysCode(drawActivityRequestBody.getMerchantSysCode());
//		getIntegralRequestHander.setSerialNo(new SimpleDateFormat("yyyyMMddHHmmssSSS").format(new Date()));
//		getIntegralRequest.setHander(getIntegralRequestHander);
//		getIntegralRequestBody.setClassCode("A");
//		getIntegralRequestBody.setMerchantCode(drawActivityRequestBody.getMerchantCode());
//		getIntegralRequestBody.setUserId(drawActivityRequestBody.getUserId());
//		getIntegralRequestBody.setUserType(drawActivityRequestBody.getUserType());
//		getIntegralRequestBody.setBusiness(drawActivityRequestBody.getBusinessArea());
//		getIntegralRequestBody.setUserName(drawActivityRequestBody.getUserName());
//		// ��ѯ��Ʒ��Ϣ
//		QueryRule prizeQueryRule = QueryRule.getInstance();
//		prizeQueryRule.addEqual("prizeCode", gtDrawRecord.getPrizeCode());
//		GtPrizeInfo gtPrizeInfo = gtPrizeInfoService.queryUniqueGtPrizeInfo(prizeQueryRule);
//		getIntegralRequestBody.setIntegralProjectCode(gtPrizeInfo.getIntegralProjectCode());
//		getIntegralRequestBody.setFunction(gtPrizeInfo.getIntegralProjectCode());
//		getIntegralRequest.setBody(new GetIntegralServiceStub.GetIntegralRequestBody[] { getIntegralRequestBody });
//		getIntegral.setRequest(getIntegralRequest);
//		GetIntegralServiceStub.GetIntegralResponseE responseE = getIntegralServiceStub.getIntegral(getIntegral);
//		GetIntegralServiceStub.GetIntegralResponse response = responseE.get_return();
//		InPortalTransmessage message = new InPortalTransmessage();
//		message.setTransCode("IN0001");
//		message.setTransRefGuid(new SimpleDateFormat("yyyyMMddHHmmssSSS").format(new Date()));
//		message.setRequestTime(new Date());
//		message.setResponseTime(new Date());
//		message.setRequestMessage(jsonBinder.toJson(getIntegralRequest));
//		message.setResponseMessage(jsonBinder.toJson(response));
//		transRecordService.offer(message);
//		return response;
//	}
	

}
