import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SearchResults from "../../components/SearchResults/SearchResults";
import './ResultsPage.css';

function ResultsPage() {
    const [books, setBooks] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState("");

    const location = useLocation();
    const params = new URLSearchParams(location.search);

    const title = params.get("title") || "";
    const author = params.get("author") || "";
    const language = params.get("language") || "";

    useEffect(() => {
        if (!title && !author && !language) return;

        const getBooks = async () => {
            setIsLoading(true);
            setMessage("");
            setBooks([]);

            try {
                const queryParts = [];
                if (title) queryParts.push(`title=${encodeURIComponent(title)}`);
                if (author) queryParts.push(`author=${encodeURIComponent(author)}`);
                if (language) queryParts.push(`language=${encodeURIComponent(language)}`);
                const queryString = queryParts.join("&");

                const res = await fetch(`https://openlibrary.org/search.json?${queryString}`);
                const data = await res.json();

                if (!data.docs || data.docs.length === 0) {
                    setMessage("No results found.");
                } else {
                    setBooks(data.docs);
                }
            } catch (error) {
                setMessage("Something went wrong! Please try again.");
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        };

        getBooks();
    }, [title, author, language]);

    return (
        <SearchResults books={books} loading={isLoading} error={message} />
    );
}

export default ResultsPage;
