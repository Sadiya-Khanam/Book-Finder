import React from "react";
import "./SearchResults.css";

function SearchResults({ books, loading, error }) {
    if (loading) {
        return <p className="loading-text">Loading books...</p>;
    }

    if (error) {
        return <p className="error-text">{error}</p>;
    }

    return (
        <div className="books-container">
            {books.map((book) => (
                <div className="book-card" key={book.key}>
                    {book.cover_i ? (
                        <img
                            src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                            alt={book.title}
                        />
                    ) : (
                        <div className="no-cover">No Image</div>
                    )}
                    <h3>{book.title}</h3>
                    <p>Author: {book.author_name ? book.author_name.join(", ") : "Unknown"}</p>
                    <p>Year: {book.first_publish_year || "N/A"}</p>
                </div>
            ))}
        </div>
    );
}

export default SearchResults;
