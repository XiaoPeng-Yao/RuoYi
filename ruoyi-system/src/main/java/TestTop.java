public class TestTop {
    public static void main(String[] args){
        Top topPerson = new Top("xx","20","2");//创建top对象
        topPerson.name();
        topPerson.age();
        topPerson.ranking();//输出

        Top topPer = new Top("cc","21","1");//创建top对象
        topPer.name();
        topPer.age();
        topPer.ranking();//输出
    }
}
