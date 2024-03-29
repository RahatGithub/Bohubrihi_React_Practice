import React, { Component } from 'react';
import BookList from './lists/BookList';
import bookList from '../assets/books';
import NewBook from './representational/NewBook';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import BookDetail from './representational/BookDetail';

class MainComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			books: bookList,
			selectedBook: null,
		};
	}

	selectedBookHandler = (bookId) => {
		const book = this.state.books.filter((book) => book.id === bookId)[0];
		this.setState({
			selectedBook: book,
		});
	};

	render() {
		const books = <BookList books={this.state.books} selectedBookHandler={this.selectedBookHandler} />;

		return (
			<div className="App">
				<nav className="nav-bar">
					<ul>
						<li>
							<NavLink to="/">Home</NavLink>
						</li>
						<li>
							<NavLink to="/new-book">New Book</NavLink>
						</li>
					</ul>
				</nav>
				<Routes>
					<Route path="/" element={<Navigate to="/books"/>}></Route>
					<Route path="/books" element={books}></Route>
					<Route path="/new-book" element={<NewBook />}></Route>
					<Route path="/:id" element={<BookDetail book={this.state.selectedBook} />}></Route>
				</Routes>
			</div>
		);
	}
}

export default MainComponent;
