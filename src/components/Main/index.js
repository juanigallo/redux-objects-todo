import React, { useState } from 'react'
import { addTask, removeTask } from '../../store'
import { useSelector, useDispatch, useStore } from 'react-redux'

function Main() {
  const [message, setMessage] = useState({ id: 1, text: '' })
  const dispatch = useDispatch();

  const store = useStore();

  console.log(store.getState())
  // const tasks = useSelector(state => state.tasks)

  // function handleChange(e) {
  //   const { value } = e.target
  //   setMessage({
  //     ...message,
  //     text: value
  //   })
  // }

  // function handleClick() {
  //   setMessage({
  //     id: message.id + 1,
  //     text: ''
  //   })
  //   dispatch(addTask(message.id, message.text))
  // }

  // function handleRemove(id) {
  //   dispatch(removeTask(id))
  // }

  return (
    <div>
      {/* <div>
        <input value={message.text} type="text" onChange={(e) => handleChange(e)} />
        <button onClick={handleClick}>Agregar</button>
      </div>
      <ul>
        {Object.keys(tasks).map((task) => {
          const currentTask = tasks[task]
          return (
            <li key={task} >
              <span onClick={() => handleRemove(task)}>{currentTask.message}</span>
              <button>Marcar como: {currentTask.status == 'completed' ? 'incompleto' : 'completo'}</button>
            </li>
          )
        })}
      </ul> */}
    </div>
  )
}

export default Main;