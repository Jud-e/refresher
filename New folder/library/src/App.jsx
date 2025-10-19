import { useState } from 'react'
import './App.css'
import Library from './components/library'
import { books } from "./assets/bookService";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>My Book Library</h1>
      <Library book={books}/>
    </>
  )
}

export default App
