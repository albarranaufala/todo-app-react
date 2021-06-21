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
    <form onSubmit={handleSubmit} className="flex w-full">
      <input type="text" value={input} onChange={handleInput} className="flex-1 border px-3 py-1 focus:outline-none focus:ring" />
      <button className="bg-blue-700 text-white px-3 py-1">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      </button>
    </form>
  )
}
