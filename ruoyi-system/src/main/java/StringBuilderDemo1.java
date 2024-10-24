/**
 * @ClassName: StringBuilderDemo1
 * @Description: StringBuilder 拼接字符串
 * 单线程操作大量数据，用StringBuilder。
 * StringBuilder 并没有对方法进行加synchronized（同步锁），所以是非线程安全的。
 * StringBuffer和StringBuilder这两个可变类的原理和操作基本相同。
 * @author: Zh
 * @date: 2024/4/8 16:41
 */

public class StringBuilderDemo1 {

    public static void main(String[] args) {
        // StringBuilder的字符串拼接.append
        StringBuilder sb = new StringBuilder();

        /**
         * 字符
         */

        sb.append("a");

        /**
         * 整数
         */

        sb.append(1);

        /**
         * 布尔类型
         */

        sb.append(false);

        /**
         * 小数
         */

        sb.append(3.3);

        /**
         * 字符串
         */

        sb.append("abc");

        /**
         * append的应用：a1false3.3abc
         */

        System.out.println("append的应用：" + sb);

        StringBuilder sb1 = new StringBuilder();

        /**
         * 支持链式编程
         */

        sb1.append("a").append("b").append("c").append("我爱你中国");

        /**
         * append支持链式编程：abc我爱你中国
         */

        System.out.println("append支持链式编程：" + sb1);

        /**
         * reverse反转
         */

        sb1.reverse();

        /**
         * reverse反转：国中你爱我cba
         */

        System.out.println("reverse反转：" + sb1);

        /**
         * 字符串长度length
         * 字符串长度length：8
         */

        System.out.println("字符串长度length：" + sb1.length());

        /**
         * 注意：StringBuilder只是拼接字符串的手段：效率好。
         * 最终的目的还是要恢复成String类型。
         */

        StringBuilder sb2 = new StringBuilder();
        sb2.append("123").append("阿拉伯数字");

        /**
         * check(sb2); // 报错，因为sb2不是String类型
         * 拼接字符串：123阿拉伯数字
         */

        System.out.println("拼接字符串：" + sb2);

        /**
         * 恢复成String类型
         */

        String rs = sb2.toString();

        /**
         * String类型：123阿拉伯数字
         */

        check(rs);
    }

    /**
     * 检查传入的参数是否是String类型
     *
     * @param abc
     */

    public static void check(String abc) {
        System.out.println("String类型：" + abc);
    }
}
