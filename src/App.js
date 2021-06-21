import TodoApp from './components/TodoApp'

export default function App() {
  return (
    <div className="flex flex-col items-center bg-gray-100 min-h-screen p-4">
      <h1 className="text-center text-4xl uppercase font-bold mt-6">
        Todo App
      </h1>
      <p className="text-center mb-8">
        Build by Albarra with ReactJS
      </p>
      <TodoApp />
    </div>
  )
}
