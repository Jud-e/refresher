import { useState } from 'react'
import './App.css'
import AddStudent from './components/addStudent'
import Student from './components/student'
import StudentList from './components/studentList'

function App() {
  const [students, setStudents] = useState([
    {
      "name": "A",
      "attendance": false
    },
    {
      "name": "B",
      "attendance": true
    },
    {
      "name": "C",
      "attendance": true
    }
    , {
      "name": "D",
      "attendance": true
    }
  ])

  const add = (name) => {
    const newStudent = { name, attendance: false }
    setStudents([...students, newStudent]);
  }

  return (
    <>
      <StudentList array={students} />
      <AddStudent add={add} />
    </>
  )
}

export default App
