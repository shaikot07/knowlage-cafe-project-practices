

import { useState } from 'react'
import './App.css'
import Blogs from './Component/Blogs/Blogs'
import Bookmarks from './Component/Bookmarks/Bookmarks'
import Header from './Component/Header/Header'

function App() {
  const [bookmarks, setBookmark] = useState([]);
  const [readingTime, setReadingTime] = useState(0)

  const handleAddBookmark =(blog) =>{
    const newBookmarks=[...bookmarks,blog];
    setBookmark(newBookmarks)
  }

  const handleMarkAsRead = (time,id) =>{
    const newReadingTime =readingTime + time;
    setReadingTime(newReadingTime)
    // remove the read form bookmarks 
     const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !==id );
     setBookmark(remainingBookmarks)
  }
  return (
    <>
      
      
      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
      <Blogs handleAddBookmark={handleAddBookmark}
      handleMarkAsRead={handleMarkAsRead}
      ></Blogs>
      <Bookmarks 
      bookmarks={bookmarks}
      readingTime={readingTime}
      ></Bookmarks>
      </div>
      
    </>
  )
}

export default App
