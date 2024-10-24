/**
 * @ClassName: StringBufferDemo1
 * @Description: StringBuffer 拼接字符串
 * 多线程操作大量数据，用StringBuffer。
 * StringBuffer 对方法加了synchronized（同步锁）或者对调用的方法加了同步锁，所以是线程安全的。
 * StringBuffer和StringBuilder这两个可变类的原理和操作基本相同。
 * @author: Zh
 * @date: 2024/4/8 16:56
 */
public class StringBufferDemo1 {
    public static void main(String[] args) {

        /**
         * 创建StringBuffer对象
         */

        StringBuffer sb = new StringBuffer("孙悟空");

        /**
         * 在字符串后面追加新的字符串
         */

        sb.append("会龟派气功");

        /**
         * StringBuffer对象：孙悟空会龟派气功
         */

        System.out.println("StringBuffer对象：" + sb);

        /**
         * 删除指定位置上的字符串，从指定的下标开始和结束，下标从0开始
         */

        /**
         * 0 孙 1悟 2空 3会 4龟 5派 6气 7功
         */

        /**
         * 2空 3会
         */

        sb.delete(2, 4);

        /**
         * delete删除：孙悟龟派气功
         */

        System.out.println("delete删除：" + sb);

        /**
         * 在指定下标位置上添加指定的字符串
         */

        sb.insert(2, "123");
        System.out.println("insert新增：" + sb); // insert新增：孙悟123龟派气功

        /**
         * 将字符串翻转
         */

        sb.reverse();

        /**
         * reverse反转：功气派龟321悟孙
         */

        System.out.println("reverse反转：" + sb);


        /**
         * 将StringBuffer转换成String类型
         */


        String s = sb.toString();

        /**
         * String类型：功气派龟321悟孙
         */

        check(s); //

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

