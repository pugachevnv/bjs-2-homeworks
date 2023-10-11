class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this._state = 100;
        this.type = null;
    }

    fix() {
        this._state = this._state * 1.5;
        if (this._state > 100) {
            this._state = 100;
        }
    }

    set state(value) {
        if (value < 0) {
            this.value = 0;
            return;
        }
        if (value > 100) {
            this.value = 100
            return;
        }
        this._state = value;
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super (name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super (name, releaseDate, pagesCount);
        this.type = "book";
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        const result = this.books.find(item => item[type] === value);
        if (result === undefined) {
            return null
        }
        return result;
    }

    giveBookByName(bookName) {
        const bookIndex = this.books.findIndex(item => item.name === bookName);

        if (bookIndex < 0) {
            return null;
        }

        const book = this.books[bookIndex];
        this.books.splice(bookIndex, 1);
        return book;
    }
}

// создайте библиотеку;

const library = new Library("Библиотека имени Ленина");

// добавьте в библиотеку несколько печатных изданий разных типов;

library.addBook(new DetectiveBook("Артур Конан Дойл", "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008));
library.addBook(new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168));
library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
library.addBook(new Magazine("Мурзилка", 1924, 60));
// создание книги 1919 года

library.addBook(new NovelBook("Марсель Пруст", "Под сенью девушек в цвету", 1919, 576));
// вывод библиотеки в консоль 
console.log("library", library);

// найдите книгу, изданную в 1919 году, или создайте её при необходимости;
console.log(library.findBookBy("releaseDate", 1919));

// выдайте любую книгу;

const givenBook = library.giveBookByName("Пикник на обочине");
console.log('given book', givenBook);

// повредите выданную книгу;

givenBook.state = 30;
console.log("выданая книга повреждена", givenBook);


// восстановите выданную книгу;
givenBook.fix();
console.log("выданая книга восстановлена", givenBook);

// попытайтесь добавить восстановленную книгу обратно в библиотеку.

library.addBook(givenBook);
console.log("восстановленную книгу вернули", library);


class Student {
    constructor(name){
        this.name = name;
        this.marks = {};
    }

    addMark(mark, subject) {
        if (mark < 2 || mark > 5) {
            return
        }

        if (!this.marks[subject]) {
            this.marks[subject] = [];
        }

        this.marks[subject].push(mark);
    }

    getAverageBySubject(subject) {
        if (!this.marks[subject]) {
            return 0;
        }

        return this.marks[subject].reduce((acc, item) => acc + item / this.marks[subject].length, 0);
    }

    getAverage () {
        const subjects = Object.keys(this.marks);
        if (subjects.length === 0) {
            return 0;
        }

        return subjects.reduce((acc, subject) => acc + this.getAverageBySubject(subject), 0) / subjects.length;
    }
}