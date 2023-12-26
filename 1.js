"use strict";

/*
###Задание 1
Необходимо создать класс Library. Конструктор класса, должен принимать начальный 
список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив 
не содержит дубликатов; в противном случае необходимо выбросить ошибку.
1. Класс должен содержать приватное свойство #books, которое должно хранить 
книги, переданные при создании объекта.
2. Реализуйте геттер-функцию allBooks, которая возвращает текущий список книг.
3. Реализуйте метод addBook(title), который позволяет добавлять книгу в список. 
Если книга с таким названием уже существует в списке, выбросьте ошибку с 
соответствующим сообщением.
4. Реализуйте метод removeBook(title), который позволит удалять книгу из списка 
по названию. Если книги с таким названием нет в списке, выбросьте ошибку с 
соответствующим сообщением.
5. Реализуйте метод hasBook(title), который будет проверять наличие книги в 
библиотеке и возвращать true или false в зависимости от того, есть ли такая 
книга в списке или нет.
*/

class Library {
    #books = [];

    constructor(books) {
        this.books = books;
        if (this.hasDuplicates(this.books)) {
            throw new Error("Дубликаты в списке");
        }
    }

    allBooks() {
        return this.books;
    }

    addBook(title) {
        if (this.hasBook(title)) {
            throw new Error("Книга с таким названием уже существует");
        }
        this.books.push(title);
    }
    removeBook(title) {
        if(this.hasBook(title)) {
            this.books.splice(this.books.indexOf(title), 1);
        } else  {
            throw new Error("Книги с таким названием не существует");
        }
    }

    hasBook(title) {
        return this.books.includes(title);
    }
    
    hasDuplicates(array) {
        return (new Set(array)).size !== array.length;
    }
}

const library = new Library(["Книга 1", "Книга 2", "Книга 3"]);

console.log(library.allBooks());
library.addBook("Книга 4");
console.log(library.allBooks());
library.removeBook("Книга 2");
console.log(library.allBooks());
library.addBook("Книга 4");

const library1 = new Library(["Книга 1", "Книга 2", "Книга 3", "Книга 2"]);

    