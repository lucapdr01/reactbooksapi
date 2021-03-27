import React from 'react'
import { Link } from 'react-router-dom'

export default function Book({ id, volumeInfo, title, authors, thumb}) {

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