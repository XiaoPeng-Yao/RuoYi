public class TestTop {
    public static void main(String[] args){
        /**
         * 创建top对象
         */
        Top topPerson = new Top("xx","20","2");
        /**
         * 输出
         */
        topPerson.name();
        topPerson.age();
        topPerson.ranking();

        Top topPer = new Top("cc","21","1");
        /**
         * 输出
         */
        topPer.name();
        topPer.age();
        topPer.ranking();
    }
}
