import { useState } from "react"
import Todo from "./components/Todo"

function App() {
  interface Atodo {
    id: number,
    task: string,
    description: string,
};


  const [todo, setTodo] = useState<Atodo[]>([]);
  const [task, setTask] = useState<string>("");
  const [description, setDescription] = useState<string>("");


  const addTodo = () :void => {
    setTodo(todos => [...todos, {id:2,task,description}]);
  }

  return (
    <>
    <div>
      <h2>Enter Task</h2>
      <input type="text" value={task} onChange={e => setTask(e.target.value)}/>
      <h2>Enter Description</h2>
      <input type="text" value={description} onChange={e => setDescription(e.target.value)} />
      <button className="border 2px" onClick={addTodo}>Add Todo</button>
    </div>
    <div className="flex justify-around">
      {/* <Todo todo={{id:1, task: "Exercise", description: "Go to the gym and workout."}} /> */}
      {todo.map(t => (
        <Todo todo={{id:todo.length, task: t.task, description: t.description}}/>
      ))}
    </div>
      
    </>
  )
}

export default App
