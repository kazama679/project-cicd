function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        aria-label={`Đánh dấu hoàn thành: ${todo.text}`}
      />
      <p className={`todo-text ${todo.completed ? 'completed' : ''}`}>
        {todo.text}
      </p>
      <button className="delete-btn" onClick={() => onDelete(todo.id)}>
        Xóa
      </button>
    </li>
  )
}

export default TodoItem
