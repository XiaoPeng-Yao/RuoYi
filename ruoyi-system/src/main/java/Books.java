public class Books implements BookInterface {
    private String name;
    private String author;
    private String isbn;

    @Override
    public String BookName() {
        return name;
    }

    @Override
    public String BookAuthor() {
        return author;
    }

    @Override
    public String BookISBN() {
        return isbn;
    }

    @Override
    public void setBookInfo(String name, String author, String isbn) {
        this.name = name;
        this.author = author;
        this.isbn = isbn;
    }
}
