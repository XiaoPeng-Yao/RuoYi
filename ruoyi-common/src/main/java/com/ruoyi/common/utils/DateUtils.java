package com.ruoyi.common.utils;

import org.apache.commons.lang3.time.DateFormatUtils;

import java.lang.management.ManagementFactory;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.*;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.concurrent.ConcurrentHashMap;

/**
 * 时间工具类
 * 
 * @author ruoyi
 */
public final class DateUtils extends org.apache.commons.lang3.time.DateUtils
{

    public static final String YYYY_MM_DD = "yyyy-MM-dd";

    public static final String YYYYMMDDHHMMSS = "yyyyMMddHHmmss";

    public static final String YYYY_MM_DD_HH_MM_SS = "yyyy-MM-dd HH:mm:ss";

    private static String[] parsePatterns = {
            "yyyy-MM-dd", "yyyy-MM-dd HH:mm:ss", "yyyy-MM-dd HH:mm", "yyyy-MM", 
            "yyyy/MM/dd", "yyyy/MM/dd HH:mm:ss", "yyyy/MM/dd HH:mm", "yyyy/MM",
            "yyyy.MM.dd", "yyyy.MM.dd HH:mm:ss", "yyyy.MM.dd HH:mm", "yyyy.MM"};

    /**
     * 线程安全的 Map，用于缓存不同格式的 DateTimeFormatter 实例
     * 建议构建时间日期格式类工具时使用
     */
    private static final ConcurrentHashMap<String, DateTimeFormatter> datetimeFormatterMap = new ConcurrentHashMap<>();

    /**
     * 获取当前Date型日期
     * 
     * @return Date() 当前日期
     */
    public static Date getNowDate()
    {
        return new Date();
    }

    /**
     * 获取当前日期, 默认格式为yyyy-MM-dd
     * 
     * @return String
     */
    public static String getDate()
    {
        return dateTimeNow(YYYY_MM_DD);
    }

    public static  String getTime()
    {
        return dateTimeNow(YYYY_MM_DD_HH_MM_SS);
    }

    public static  String dateTimeNow()
    {
        return dateTimeNow(YYYYMMDDHHMMSS);
    }

    public static  String dateTimeNow(final String format)
    {
        return parseDateToStr(format, new Date());
    }

    public static  String dateTime(final Date date)
    {
        return parseDateToStr(YYYY_MM_DD, date);
    }
    /**
     * 将 java.util.Date 对象格式化为指定格式的字符串。
     *
     * @param format 日期时间格式字符串
     * @param date 要格式化的 java.util.Date 对象
     * @return 格式化后的日期时间字符串
     */
    public static String parseDateToStr(final String format, final Date date){
        return toLocalDateTime(date).format(getDateTimeFormatter(format));
    }

    /**
     * 将 java.util.Date 对象转换为 java.time.LocalDateTime 对象。
     *
     * @param date 要转换的 java.util.Date 对象
     * @return 转换后的 java.time.LocalDateTime 对象
     */
    public static LocalDateTime toLocalDateTime(Date date) {
        // 将 java.util.Date 对象转换为 java.time.Instant 对象
        return date.toInstant()
                // 将 Instant 对象转化为带有时区信息的 ZonedDateTime 对象，时区使用系统默认时区
                .atZone(ZoneId.systemDefault())
                // 将 ZonedDateTime 对象转换为 LocalDateTime 对象
                .toLocalDateTime();
    }

    /**
     * 获取指定格式的 DateTimeFormatter 实例。
     * 如果指定格式的 DateTimeFormatter 不存在，则创建并缓存它。
     *
     * @param format 日期时间格式字符串
     * @return 指定格式的 DateTimeFormatter 实例
     */
    public static DateTimeFormatter getDateTimeFormatter(String format){
        return datetimeFormatterMap.computeIfAbsent(format, DateTimeFormatter::ofPattern);
    }


    public static  Date dateTime(final String format, final String ts)
    {
        try
        {
            return new SimpleDateFormat(format).parse(ts);
        }
        catch (ParseException e)
        {
            throw new RuntimeException(e);
        }
    }

    /**
     * 日期路径 即年/月/日 如2018/08/08
     */
    public static  String datePath()
    {
        Date now = new Date();
        return DateFormatUtils.format(now, "yyyy/MM/dd");
    }

    /**
     * 日期路径 即年/月/日 如20180808
     */
    public static  String dateTime()
    {
        Date now = new Date();
        return DateFormatUtils.format(now, "yyyyMMdd");
    }

    /**
     * 日期型字符串转化为日期 格式
     */
    public static Date parseDate(Object str)
    {
        if (str == null)
        {
            return null;
        }
        try
        {
            return parseDate(str.toString(), parsePatterns);
        }
        catch (ParseException e)
        {
            return null;
        }
    }

    /**
     * 获取服务器启动时间
     */
    public static Date getServerStartDate()
    {
        long time = ManagementFactory.getRuntimeMXBean().getStartTime();
        return new Date(time);
    }

    /**
     * 计算相差天数
     */
    public static int differentDaysByMillisecond(Date date1, Date date2)
    {
        return Math.abs((int) ((date2.getTime() - date1.getTime()) / (1000 * 3600 * 24)));
    }

    /**
     * 计算时间差
     *
     * @param endDate 最后时间
     * @param startTime 开始时间
     * @return 时间差（天/小时/分钟）
     */
    public static String timeDistance(Date endDate, Date startTime)
    {
        long nd = 1000 * 24 * 60 * 60;
        long nh = 1000 * 60 * 60;
        long nm = 1000 * 60;
        // long ns = 1000;
        // 获得两个时间的毫秒时间差异
        long diff = endDate.getTime() - startTime.getTime();
        // 计算差多少天
        long day = diff / nd;
        // 计算差多少小时
        long hour = diff % nd / nh;
        // 计算差多少分钟
        long min = diff % nd % nh / nm;
        // 计算差多少秒//输出结果
        // long sec = diff % nd % nh % nm / ns;
        return day + "天" + hour + "小时" + min + "分钟";
    }

    /**
     * 增加 LocalDateTime ==> Date
     */
    public static Date toDate(LocalDateTime temporalAccessor)
    {
        ZonedDateTime zdt = temporalAccessor.atZone(ZoneId.systemDefault());
        return Date.from(zdt.toInstant());
    }

    /**
     * 增加 LocalDate ==> Date
     */
    public static Date toDate(LocalDate temporalAccessor)
    {
        LocalDateTime localDateTime = LocalDateTime.of(temporalAccessor, LocalTime.of(0, 0, 0));
        ZonedDateTime zdt = localDateTime.atZone(ZoneId.systemDefault());
        return Date.from(zdt.toInstant());
    }
}
