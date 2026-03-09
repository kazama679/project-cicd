import TodoItem from './TodoItem.jsx'

function TodoList({ todos, onToggle, onDelete }) {
  if (!todos.length) {
    return <div className="empty-state">Chưa có việc nào. Hãy thêm việc mới!</div>
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  )
}

export default TodoList
