import React, {useState} from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios';
import { bookAuthors } from '../utils'

export default function Bookspec() {
    const { id } = useParams()
    const [loading, setLoading] = React.useState(false)
    const [book, setBook] = React.useState(null)
    const [apiKey, setApiKey] = useState("AIzaSyDr7NU-o9HvgsKSZLwkVVCTvsYE3oaN8aY");
    console.log('https://www.googleapis.com/books/v1/volumes/'+id);
    React.useEffect(() => {
      setLoading(true)
      async function getBook() {
        try {
          axios.get('https://www.googleapis.com/books/v1/volumes/'+id)
          .then(data => {
              console.log(data.data);
              if (data.data) {
                const {
                    volumeInfo,
                    id,
                    } = data.data 
                const thumb = volumeInfo.imageLinks && volumeInfo.imageLinks.thumbnail;
                
                const newBook = {
                    id: id,
                    volumeInfo: volumeInfo, 
                    authors: bookAuthors(volumeInfo.authors),
                    title: volumeInfo.title,
                    thumb: thumb,
                    pages: volumeInfo.pageCount,
                    date: volumeInfo.publishedDate,
                    publisher: volumeInfo.publisher,
                }
                
                console.log('success');
                setBook(newBook);
              } else {
                setBook([])
              }
            });
          setLoading(false)
        } 
        catch (error) {
          console.log(error)
          }
          setLoading(false)
        }
        getBook()
      },[id])
    if (loading) {
      return <Loading/>
    }
    if (!book) {
      return <h2 className='section-title'>no book to display</h2>
    } else {
      const {
        id,
        volumeInfo,
        authors,
        title,
        thumb,
        pages,
        date,
        publisher
      } = book
      return (
        <section className='section page-section'>
          <Link to='/' className='btn btn-primary'>
            back home
          </Link>
         <p>
         </p>
          <div className='page'>
              <div className="imagepage-container"> <img src={thumb} alt={title}></img></div>
         
            <div className='page-info'>
              <p className='font-italic'>
                <span className='page-data'>title :</span> {title}
              </p>
              <p>
                <span className='page-data'>authors :</span> {authors}
              </p>
              <p>
                <span className='page-data'>date :</span> {date}
              </p>
              <p>
                <span className='page-data'>pages :</span> {pages}
              </p>
              <p>
                <span className='page-data'>publisher :</span> {publisher}
              </p>

            </div>
          </div>
        </section>
        
      )
    }
}
