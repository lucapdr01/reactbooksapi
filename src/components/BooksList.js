import React from 'react'
import Book from './Book'
import Loading from './Loading'
import { useGlobalContext } from '../context'

export default function BooksList() {
  const { books, loading } = useGlobalContext()
  if (loading) {
    return <Loading/>
  }
  if (books.length < 1) {
    return (
      <h2 className='section-title'>
        no books matched your search criteria
      </h2>
    )
  }
  return (
    <section className='section'>
      <h2 className='section-title'>Books List</h2>
      <div className='books-center'>
        {books.map((item) => {
          return <Book key={item.id} {...item} />
        })}
      </div>
    </section>
  )
}
