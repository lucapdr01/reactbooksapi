import React from 'react'
import { Link } from 'react-router-dom'

// Book card displayd in the list
export default function Book({ id, title, authors, thumb}) {

  return (
    <article className='book'>
      <div className='img-container'>
      <img src={thumb} alt={title}/>
      </div>
      <div className='book-footer'>
        <span>{title}</span>
        <p>{authors}</p>
        <p></p>
        <Link to={`/book/${id}`} className='btn btn-primary btn-details'>
           details
        </Link>
      </div>
    </article>
  )
}