import { useState } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import { Todo } from './types/todo';

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    const id = Math.random().toString();
    setTodos([...todos, { id, text }]);
  };

  const removeTodoHandler = (todoId: string) => {
    const newTodo = todos.filter((t: Todo) => {
      return t.id !== todoId;
    });
    setTodos(newTodo);
  };

  return (
    <main className='max-w-6xl mx-auto my-10 px-5 md:px-0'>
      <AddTodo onAddTodo={addTodoHandler} />
      <TodoList onRemoveTodo={removeTodoHandler} items={todos} />
    </main>
  );
};

export default App;
