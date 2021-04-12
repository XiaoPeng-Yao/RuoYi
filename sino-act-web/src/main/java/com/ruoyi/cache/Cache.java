package com.ruoyi.cache;

import java.util.Date;
import java.util.Hashtable;

public class Cache {
	
	private static Hashtable<String, Object> __cacheList = new Hashtable<String, Object>();

	public Cache() {
		super();
	}

	// ���cache,������
	public synchronized static void add(String key, Object value) {
		Cache.add(key, value, -1);
	}

	// ���cache�й���ʱ��
	public synchronized static void add(String key, Object value, long timeOut) {
		if (timeOut > 0) {
			timeOut += System.currentTimeMillis();
		}
		CacheItem item = new CacheItem(key, value, timeOut);
		Cache.__cacheList.put(key, item);
	}

	// ��ȡcache
	public synchronized static Object get(String key) {
		Object obj = Cache.__cacheList.get(key);
		if (obj == null) {
			return null;
		}
		CacheItem item = (CacheItem) obj;
		boolean expired = Cache.cacheExpired(key);
		if (expired == true) // �ѹ���
		{
			Cache.remove(key);
			return null;
		}
		return item.getValue();
	}

	// �Ƴ�cache
	public synchronized static void remove(String key) {
		Object obj = Cache.__cacheList.get(key);
		if (obj != null) {
			obj = null;
		}
		Cache.__cacheList.remove(key);
	}

	// �ж��Ƿ����
	private static boolean cacheExpired(String key) {
		CacheItem item = (CacheItem) Cache.__cacheList.get(key);
		if (item == null) {
			return false;
		}
		long milisNow = System.currentTimeMillis();
		long milisExpire = item.getTimeOut();
		if (milisExpire <= 0) { // ������
			return false;
		} else if (milisNow >= milisExpire) {
			return true;
		} else {
			return false;
		}
	}
}
