package com.ruoyi.thread;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class ThreadPool {
	// �����̳߳�--�齱�߼�
	public static final ExecutorService drawActivityExecutorService = Executors.newFixedThreadPool(1000);
	public static final ExecutorService awardExecutorService = Executors.newFixedThreadPool(1000);
	//���ŷ����̳߳�
	public static final ExecutorService smsExecutorService= Executors.newFixedThreadPool(100);
}
