import React from 'react'
import { useGlobalContext } from '../context'

// component that make the user search into the API
export default function SearchBar() {
  const { setSearchTerm } = useGlobalContext()
  const searchValue = React.useRef('')
  
  // serch bar focused - user able to query the api as fast as possible
  React.useEffect(() => {
    searchValue.current.focus()
  }, [])

  // triggered each time a letter is change in input - to show real time book list update
  function searchBook() {
    setSearchTerm(searchValue.current.value)
  }
  function handleSubmit(e) {
    e.preventDefault()
  }
  return ( 
    <section className='section search'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>Search a Book</label>
          <input
            type='text'
            name='name'
            id='name'
            ref={searchValue}
            onChange={searchBook}
          />
        </div>
      </form>
    </section>
  )
}