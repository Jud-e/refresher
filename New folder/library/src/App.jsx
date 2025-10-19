import { useState } from 'react'
import './App.css'
import Library from './components/library'
import { getBooks as bookies } from "./assets/bookService";

function App() {
  let [books, setCount] = useState(bookies());

  const onDelete = (id)=>{
    const newBooks = books.filter(book=>book._id!== id);
    setCount(newBooks);
  }
  const change = (id)=>{
    const updated = books.map(book=>book._id === id ? {...book,liked:!book.liked}:book)
    setCount(updated);
  }
  return (
    <>
      <h1>My Book Library</h1>
      <Library book={books} onDelete={onDelete} change={change}/>
    </>
  )
}

export default App
