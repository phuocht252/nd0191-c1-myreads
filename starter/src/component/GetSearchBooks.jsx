import React from 'react'
import {Book} from './Book';

export const GetSearchBooks = ({searchedBooks, fetchedBooks, onShelfBookChange}) => {
    return (
        <ol className='books-grid'>
            {fetchedBooks && fetchedBooks.length > 0 &&
                fetchedBooks.map((book) => {
                    const bookShelf = searchedBooks.find(
                        (foundBook) => foundBook.id === book.id
                    );
                    bookShelf ? (book.shelf = bookShelf.shelf) : (book.shelf = "none");
                    return (
                        <Book
                            key={book.id}
                            book={book}
                            onShelfBookChange={onShelfBookChange}
                        />
                    );
                })}
            {(!fetchedBooks || fetchedBooks.length === 0) && <h2>No books found</h2>}
        </ol>
    );
};
 