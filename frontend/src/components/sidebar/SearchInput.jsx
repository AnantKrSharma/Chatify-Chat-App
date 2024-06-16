import React from 'react'
import { IoSearch } from "react-icons/io5";

function SearchInput() {
  return <form className='flex items-center justify-center gap-2'>
        <input type="text" placeholder='Search..' className='input rounded-full border-blue-600 '/>
      
        <button type='submit' className='btn btn-circle bg-sky-600 text-white'>
          <IoSearch className='w-6 h-6 outline-none'/>
        </button>
  </form>
}

export default SearchInput
