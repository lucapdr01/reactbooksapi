import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'
import { bookAuthors } from './utils'
import axios from 'axios';
 
// App context to share data across modules and pages
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('dante')
  const [books, setBooks] = useState([])

  //function that queries the API and builts an object with the data to pass to components
  const fetchBooks = useCallback( async () => {
    setLoading(true)
    try {
        axios.get('https://www.googleapis.com/books/v1/volumes?q='+ searchTerm)
        .then(data => {
          console.log(data.data.items);
          if (data.data.items) {
            const newBooks = data.data.items.map((item) =>{
                const {
                    volumeInfo,
                    id,
                } = item
                 
                //build the object to deconstruct in components
                const thumb = volumeInfo.imageLinks && volumeInfo.imageLinks.thumbnail;

                return {
                    id: id,
                    authors: bookAuthors(volumeInfo.authors),
                    title: volumeInfo.title,
                    thumb: thumb,
                }
            })
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
