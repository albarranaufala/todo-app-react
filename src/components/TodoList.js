import TodoItem from "./TodoItem";

export default function TodoList({ todos, toggleIsDoneTodo, removeTodo }) {
  return (
    <ul>
      {todos.map(todo => <TodoItem todo={todo} key={todo.id} toggleIsDoneTodo={toggleIsDoneTodo} removeTodo={removeTodo} />)}
    </ul>
  )
}
