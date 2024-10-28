/**
 * 测试多态性的类
 */

import java.util.ArrayList;
import java.util.List;

/**
 * 测试类 演示多样性
 */
public class TestShape {
    public static void main(String[] args) {
        List<Shape> shapes = new ArrayList<>();
        Shape circleShape = new Circle(); // 创建Circle
        Shape squareShape = new Square(); // 创建Square
        shapes.add(circleShape); // 将Circle添加到列表中
        shapes.add(squareShape); // 将Square添加到列表中
        for (Shape shape : shapes) { // 遍历列表中的每个Shape对象
            System.out.println(shape.name()); // 打印
        }
    }
}