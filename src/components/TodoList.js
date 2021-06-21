import TodoItem from "./TodoItem";

export default function TodoList({ todos, toggleIsDoneTodo, removeTodo, className }) {
  if (todos.length) {
    return (
      <ul className={`divide-y ${className}`}>
        {todos.map(todo => <TodoItem todo={todo} key={todo.id} toggleIsDoneTodo={toggleIsDoneTodo} removeTodo={removeTodo} />)}
      </ul>
    )
  } else {
    return (<p className={`italic text-center ${className}`}>Anda tidak memiliki tugas</p>)
  }
}
