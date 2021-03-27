import React from 'react'
import BooksList from '../components/BooksList';
import SearchBar from '../components/SearchBar';

//Home page - first page displayed with the search bar and lists of books
export default function Home() {
    return(
        <main>
            <SearchBar/> 
            <BooksList/>
        </main>
    )
}