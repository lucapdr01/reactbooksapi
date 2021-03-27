import React from 'react'
import BooksList from '../components/BooksList';
import SearchBar from '../components/SearchBar';

export default function Home() {
    return(
        <main>
            <SearchBar/>
            <BooksList/>
        </main>
    )
}