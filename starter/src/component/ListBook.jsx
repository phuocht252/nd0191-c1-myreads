import React from 'react'
import {Book} from "./Book";

const BookShelf = ({books, title, onShelfBookChange}) => {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books.map((book) => {
                        return <Book key={book.id} book={book} onShelfBookChange={onShelfBookChange}/>
                    })}
                </ol>
            </div>
        </div>
    )
}

export const ListBook = ({books, onShelfBookChange}) => {
    const currentlyReading = books.filter((book) => book.shelf === "currentlyReading"
    );
    const wantToRead = books.filter((book) => book.shelf === "wantToRead"
    );
    const read = books.filter((book) => book.shelf === "read"
    );
    return (
        <div className="list-books-content">
            <div>
                <BookShelf books={currentlyReading} title="Currently Reading" onShelfBookChange={onShelfBookChange}/>
                <BookShelf books={wantToRead} title="Want to Read" onShelfBookChange={onShelfBookChange}/>
                <BookShelf books={read} title="Read" onShelfBookChange={onShelfBookChange}/>
            </div>
        </div>
    )
}
