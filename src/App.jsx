import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import { useState } from 'react'


function App() {

  // step 6 making use state to life the data from blog to bookmarks

  const [bookmarks, setBookmarks] = useState([]);



  // step 17
  const [readingTime, setReadingTime] = useState(0);
  // step 18
  const handleMarkAsRead = time =>{
    // console.log('marking as read', time);
    // step 21
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
  }

  // step 7 handleAdd to bookmark it means we adding a blog to bookmark
  const handleAddToBookmark = blog =>{
    // console.log(blog);
    // step 12 ager bookmarks gula ke nei and set kore dei
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
    // step 8 since we dont have blog in the bottom send it to blogs
  }
  return (
    <>
    <Header></Header>
    <div className='md:flex  max-w-6xl mx-auto'>
    <Blogs 
    handleAddToBookmark={handleAddToBookmark}
    handleMarkAsRead={handleMarkAsRead}
    ></Blogs>
    {/* step13 then step 19*/}
    <Bookmarks bookmarks={bookmarks}
    readingTime={readingTime}></Bookmarks>
    </div>
    </>
  )
}

export default App
