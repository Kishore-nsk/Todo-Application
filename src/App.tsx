import { useState } from "react"
import Todo from "./components/Todo"

function App() {
  interface Atodo {
    id: number,
    task: string,
    description: string,
};

  const [todo, setTodos] = useState<Atodo>([]);
  const [task, setTask] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const addTodo = () :void => {

  }

  return (
    <>
    <div>
      <h2>Enter Task</h2>
      <input type="text" value={task} onChange={e => setTask(e.target.value)}/>
      <h2>Enter Description</h2>
      <input type="text" value={description} onChange={e => setDescription(e.target.value)} />
      <button>Add Todo</button>
    </div>
    <div className="flex justify-around">
      <Todo todo={{id:1, task: "Exercise", description: "Go to the gym and workout."}} />
    </div>
      
    </>
  )
}

export default App
