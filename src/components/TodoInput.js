import { useState } from "react"

export default function TodoInput({ addTodo }) {
  const [input, setInput] = useState('')

  const handleInput = event => {
    setInput(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (input) {
      addTodo(input)
      setInput('')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={input} onChange={handleInput} />
      <button>Add Todo</button>
    </form>
  )
}
