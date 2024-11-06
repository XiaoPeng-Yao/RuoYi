/**
 * 定义一个表示书本类型的接口
 */
public interface BookInterface {
    String BookName();
    String BookAuthor();
    String BookISBN();
    void setBookInfo(String name, String author, String isbn);
}