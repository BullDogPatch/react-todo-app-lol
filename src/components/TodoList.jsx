import TodoItem from './TodoItem';

function TodoList({ todos }) {
  return (
    <div>
      {todos.map((item) => (
        <TodoItem
          key={Math.random() * Date.now()}
          item={item}
        />
      ))}
      {/* Video 37 */}
    </div>
  );
}
export default TodoList;
