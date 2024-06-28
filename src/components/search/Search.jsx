import React, { memo } from 'react'

const Search = () => {
  return (
    <form className='search__form' action="">
        <input placeholder='Search query...' type="text" />
        <button>Search</button>
    </form>
  )
}

export default memo(Search);