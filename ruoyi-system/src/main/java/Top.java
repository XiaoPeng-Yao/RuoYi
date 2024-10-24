/**
 * 表示排名的类
 */
public class Top {
    /**
     * 名字
     */
    private String name;
    /**
     *年龄
     */
    private String age;
    /**
     * 名次
     */
    private String ranking;
    /**
     * 构造法
     * @param name
     * @param age
     * @param ranking
     */
    public Top(String name,String age,String ranking){
        this.name=name;
        this.age=age;
        this.ranking=ranking;
    }

    /**
     * 获取名字
     */
    public void java1() {
        System.out.println("名字: " + name);
    }

    /**
     * 获取年龄
     */
    public void java2() {
        System.out.println("年龄: " + age);
    }

    /**
     * 获取名次
     */
    public void java3() {
        System.out.println("名次: " + ranking);
    }
}
