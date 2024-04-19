import "./App.css";
import {useEffect, useState} from "react";
import * as BooksAPI from "./BooksAPI";
import {SearchBook} from "./component/SearchBook";
import {Link, Route, Routes} from "react-router-dom";
import {ListBook} from "./component/ListBook";

function App() {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        BooksAPI.getAll().then(value => {
            setBooks(value);
        }).catch(error => {
            console.log(`Error: ${error}`);
        })
    }, []);

    const onShelfBookChange = (book, shelf) => {
        BooksAPI.update(book, shelf);
        if (shelf === "none") {
            setBooks(books.filter((b) => b.id !== book.id));
        } else {
            const existingBookIndex = books.findIndex((b) => b.id === book.id);
            if (existingBookIndex !== -1) {
                const updatedBooks = [...books];
                updatedBooks[existingBookIndex].shelf = shelf;
                setBooks(updatedBooks);
            } else {
                setBooks([...books, {...book, shelf}]);
            }
        }
    };


    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<ListBook books={books} onShelfBookChange={onShelfBookChange}/>}/>
                <Route path="/search" element={<SearchBook onShelfBookChange={onShelfBookChange} books={books}/>}/>
            </Routes>
            <div className="open-search">
                <Link to="/search" className="add-book">
                    Add a book
                </Link>
            </div>
        </div>
    );
}

export default App;
