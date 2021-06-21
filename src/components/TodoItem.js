export default function TodoItem({ todo, toggleIsDoneTodo, removeTodo }) {
  return (
    <li>
      <input type="checkbox" checked={todo.isDone} onChange={() => toggleIsDoneTodo(todo.id)} />
      <span style={{ textDecoration: todo.isDone ? 'line-through' : 'none' }}>{todo.text}</span>
      <button onClick={() => removeTodo(todo.id)}>&#10006;</button>
    </li>
  )
}
