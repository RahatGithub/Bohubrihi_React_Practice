import React, { Component } from 'react';
import BookList from './lists/BookList';
import bookList from '../assets/books';
import NewBook from './representation/NewBook';
import { Routes, Route, Navlink, Navigate } from 'react-router-dom';
import BookDetail from './representational/BookDetail';

class MainComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: bookList,
            selectedBook: null,
        };
    }


    render() {
        const books = <BookList books={this.state.books} />;

        return (
            <div className="App">
                <nav className="nav-bar">

                </nav>
            </div>
        )
    }

}