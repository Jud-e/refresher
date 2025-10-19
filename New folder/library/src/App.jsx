import { useState } from 'react'
import './App.css'
import Library from './components/library'
import { getBooks as bookies } from "./assets/bookService";

function App() {
  let [books, setCount] = useState(bookies);

  const onDelete = (id)=>{
    const newBooks = books.filter(book=>book.id!==id);
    setCount(newBooks);
  }
  return (
    <>
      <h1>My Book Library</h1>
      <Library book={books} onDelete={onDelete}/>
    </>
  )
}

export default App
