import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

// useEffect hook
function App() {
  const [todos, setTodos] = useState([]);

 useEffect(() => {
   fetch("http://localhost:3000/todos")
    .then(async function(res) {
      const json = await res.json();
      
      if(json.todos &&  Array.isArray(json.todos)){
        setTodos(json.todos);
      }
    })
 }, [])

  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos={todos}></Todos>
    </div>
  )
}

export default App