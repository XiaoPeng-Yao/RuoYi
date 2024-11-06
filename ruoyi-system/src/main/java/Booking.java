public class Booking {
    public static void main(String[] args) {
        // 创建图书对象
        Books books = new Books();

        // 设置图书信息
        books.setBookInfo("安德的游戏", "安德", "978-7-111-60453-3");

        // 获取并打印图书名称
        System.out.println("名称: " + books.BookName());

        // 获取并打印图书作者
        System.out.println("作者: " + books.BookAuthor());

        // 获取并打印图书ISBN
        System.out.println("ISBN: " + books.BookISBN());

        // 使用多态形式调用图书信息类的方法
        BookInterface bookInterface = new Books();
        bookInterface.setBookInfo("中华上下五千年", "袁堂欣", "978-0-13-468599-1");
        System.out.println("名称: " + bookInterface.BookName());
        System.out.println("作者: " + bookInterface.BookAuthor());
        System.out.println("ISBN: " + bookInterface.BookISBN());
    }
}
