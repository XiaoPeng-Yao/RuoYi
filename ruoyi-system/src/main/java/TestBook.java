/**
 * 测试多态性的类
 */

import java.util.ArrayList;
import java.util.List;

/**
 * 测试类 演示多样性
 */
public class TestBook {
    public static void main (String[] args) {
        List<Book> books = new ArrayList<>();
        Book literatureBook = new Literature();
        Book historyBook = new History();
        books.add(literatureBook);
        books.add(historyBook);
        for (Book book : books){
            System.out.println(book.name());
        }
    }
}
