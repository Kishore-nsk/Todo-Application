interface Atodo {
    id: number,
    task: string,
    description: string,
};

function Todo({todo}: {todo: Atodo}) {
    return (
        <>
        <div>
            <h3 className="text-pink-500">{todo.id}</h3>
            <h4>{todo.task}</h4>
            <h4>{todo.description}</h4>
        </div>
        </>
    )
}

export default Todo;