import { useState } from 'react';
import { useContext } from 'react'
import { TasksDispatchContext } from './TasksContext'
function handleAddTask(dispatch, text) {
  dispatch({
    type: "added",
    id: nextId++,
    text: text,
  });
}
let nextId = 3;

export default function AddTask({ onAddTask }) {
  const [text, setText] = useState('');
  const dispatch = useContext(TasksDispatchContext);
  return (
    <>
      <input
        placeholder="Add task"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button onClick={() => {
        setText('');
        handleAddTask(dispatch, text);
      }}>Add</button>
    </>
  )
}
