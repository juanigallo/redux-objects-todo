import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import { pokemon } from './reducers/pokemon'
import { user } from './reducers/user'

const InitialState = {
  tasks: {}
}

export const reducer = (state = InitialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state, tasks: {
          ...state.tasks, [action.payload.id]: {
            message: action.payload.message,
            status: 'incomplete'
          }
        }
      }
    case "REMOVE_TASK":
      let id = action.payload.id
      let { [id]: deleted, ...newTasks } = state.tasks;

      return {
        ...state, tasks: newTasks
      }
    case "TOGGLE_STATUS":
      return state;
    default:
      return state;
  }
}

export const addTask = (id, message) => (dispatch) => {
  return dispatch({
    type: "ADD_TASK",
    payload: {
      id,
      message
    }
  })
}

export const removeTask = (id) => (dispatch) => {
  return dispatch({
    type: "REMOVE_TASK",
    payload: {
      id
    }
  })
}

export const toggleStatus = (id) => (dispatch) => {
  return dispatch({
    type: "TOGGLE_STATUS",
    payload: {
      id
    }
  })
}

export function initializeStore() {
  return createStore(
    combineReducers({ user, pokemon }),
    InitialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}