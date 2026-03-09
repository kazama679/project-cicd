import { useState } from 'react'
import TodoList from './components/TodoList.jsx'
import './index.css'

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Học React', completed: false },
    { id: 2, text: 'Viết một ứng dụng Todo đơn giản', completed: false },
  ])
  const [input, setInput] = useState('')

  const handleAdd = (event) => {
    event.preventDefault()
    const trimmed = input.trim()
    if (!trimmed) return
    setTodos((prev) => [
      { id: Date.now(), text: trimmed, completed: false },
      ...prev,
    ])
    setInput('')
  }

  const handleToggle = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    )
  }

  const handleDelete = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  return (
    <main className="app-shell">
      <section className="card">
        <header className="card__header">
          <div>
            <p className="eyebrow">Todo List</p>
            <h1>Quản lý công việc hằng ngày</h1>
            <p className="subhead">
              Thêm, đánh dấu hoàn thành và xóa công việc. Dữ liệu chỉ lưu trên
              trình duyệt hiện tại.
            </p>
          </div>
        </header>

        <form className="add-form" onSubmit={handleAdd}>
          <input
            type="text"
            placeholder="Nhập việc cần làm..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            aria-label="Thêm việc cần làm"
          />
          <button type="submit">Thêm</button>
        </form>

        <TodoList todos={todos} onToggle={handleToggle} onDelete={handleDelete} />
      </section>
    </main>
  )
}

export default App
