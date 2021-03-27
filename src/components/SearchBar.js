import React from 'react'
import { useGlobalContext } from '../context'

export default function SearchBar() {
  const { setSearchTerm } = useGlobalContext()
  const searchValue = React.useRef('')

  React.useEffect(() => {
    searchValue.current.focus()
  }, [])

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