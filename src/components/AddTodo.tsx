import { Button } from './ui/button';
import { Input } from './ui/input';
import { ChangeEvent, FormEvent, useState } from 'react';

type AddTodoProps = {
  onAddTodo: (todoText: string) => void;
};

const AddTodo: React.FC<AddTodoProps> = (props) => {
  const [text, setText] = useState<string>('');

  const changeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    props.onAddTodo(text);
    setText('');
  };

  return (
    <form onSubmit={submitHandler} className='flex items-center gap-5'>
      <Input
        onChange={changeEventHandler}
        type='text'
        placeholder='Write a new todo'
        className='w-fit h-11'
        value={text}
      />
      <Button type='submit'>Add Todo</Button>
    </form>
  );
};

export default AddTodo;
