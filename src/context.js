import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'
import { bookAuthors } from './utils'
import axios from 'axios';


const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('a')
  const [books, setBooks] = useState([])
  const [apiKey, setApiKey] = useState("AIzaSyDr7NU-o9HvgsKSZLwkVVCTvsYE3oaN8aY");

  const fetchBooks = useCallback( async () => {
    setLoading(true)
    try {
        axios.get('https://www.googleapis.com/books/v1/volumes?q='+ searchTerm+'&key='+apiKey+'&maxResults=40')
        .then(data => {
          console.log(data.data.items);
          if (data.data.items) {
            const newBooks = data.data.items.map((item) =>{
                const {
                    volumeInfo,
                    id,
                } = item
                 
                const thumb = volumeInfo.imageLinks && volumeInfo.imageLinks.thumbnail;

                return {
                    id: id,
                    volumeInfo: volumeInfo, 
                    authors: bookAuthors(volumeInfo.authors),
                    title: volumeInfo.title,
                    thumb: thumb,
                }
            })
            console.log('success');
            setBooks(newBooks);
          } else {
            setBooks([])
          }
        });
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  },[searchTerm])
  useEffect(() => {
    fetchBooks()
  }, [searchTerm,fetchBooks])
  return (
    <AppContext.Provider
      value={{ loading, books, searchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
