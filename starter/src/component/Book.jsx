import React from "react";
import {BookShelfChanger} from "./BookShelfChanger";

export const Book = ({book, onShelfBookChange}) => {
    return (
        <li key={book.id}>
            <div className='book'>
                <div className='book-top'>
                    <div
                        className='book-images'
                        style={{
                            width: 128,
                            height: 168,
                            backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail : ""})`,
                        }}
                    />
                    <BookShelfChanger book={book} onShelfBookChange={onShelfBookChange}/>
                </div>
                <div className='book-title'>{book.title ? book.title : ""}</div>
                <div className='book-authors'>{book.authors ? book.authors : ""}</div>
            </div>
        </li>
    );
};
