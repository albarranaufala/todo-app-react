import { useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

export default function App() {
  const [todos, setTodos] = useState([{
    id: 1,
    text: 'Mandi',
    isDone: true
  }])

  const addTodo = todo => {
    const id = todos.length ? todos[todos.length - 1].id + 1 : 1
    setTodos([...todos, {
      id,
      text: todo,
      isDone: false
    }])
  }

  const toggleIsDoneTodo = id => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, isDone: !todo.isDone }
      }
      return todo
    }))
  }

  const removeTodo = id => {
    setTodos(todos.filter(todo => id !== todo.id))
  }

  return (
    <div>
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} toggleIsDoneTodo={toggleIsDoneTodo} removeTodo={removeTodo} />
    </div>
  );
}
