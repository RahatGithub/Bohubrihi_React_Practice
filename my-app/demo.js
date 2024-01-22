import React, { Component } from 'react';
import './App.css';
import Book from './components/Book';

class App extends Component {
    state = {
        books: [
            { bookName: "1984", writer: "George Orwell" },
            { bookName: "The Da Vinci Code", writer: "Dan Brown" },
            { bookName: "The Alchemist", writer: "Paulo Coelho" }
        ],
    }

    deleteBookState = index => {
        const books = [...this.state.books];
        books.splice(index, 1);
        this.setState({
            books: books
        });
    };

    render() {
        const style = {
            border: "1px solid red",
            borderRadius: "5px",
            backgroundColor: "black",
            color: "white",
        };

        const books = this.state.books.map((book, index) => {
            return (
                <Book
                    bookName={book.bookName}
                    writer={book.writer}
                    delete={() => this.deleteBookState(index)}
                />
            );
        });

        return (
            <div className="App">
                <h1 style={style}>Book List</h1>
                {books}
            </div>
        );
    }
}

export default App;
