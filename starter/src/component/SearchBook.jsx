import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import * as BooksAPI from "../BooksAPI";
import {GetSearchBooks} from './GetSearchBooks';

export const SearchBook = ({books, onShelfBookChange}) => {
    const [valueSearch, setValueSearch] = useState("");
    const [fetchedBooks, setFetchedBooks] = useState([]);
    useEffect(() => {
        if (valueSearch.length !== 0) {
            BooksAPI.search(valueSearch).then(value => {
                setFetchedBooks(value.error ? [] : value);
            }).catch(error => {
                console.log(`Error: ${error}`);
            })
        } else {
            setFetchedBooks([]);
        }
    }, [valueSearch]);
    return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link to='/' className="close-search">
                    Close
                </Link>
                <div className="search-books-input-wrapper">
                    <input
                        type="text"
                        value={valueSearch}
                        onChange={e => setValueSearch(e.target.value)}
                        placeholder="Search by title, author,c or ISBN"
                    />
                </div>
            </div>
            <GetSearchBooks
                searchedBooks={books}
                fetchedBooks={fetchedBooks}
                onShelfBookChange={onShelfBookChange}
            />
        </div>
    )
}
