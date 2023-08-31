///constants
const ADD_TODO = 'ADD_TODO';
const COMPLETE_TODO = 'COMPLETE_TODO';
const DELETE_TODO = 'DELETE_TODO';

/// Tipos
interface Todo {
  id: string;
  text: string;
  completed?: boolean;
}

interface AppState {
  todo: Todo[];
}

/// State inicial
const stateInitial: AppState = {
  todo: []
}

/// Selectores
export const appSelector = {
  todo: (state: AppState) => state.todo
}

/// Acciones
interface AddTodoAction {
  type: typeof ADD_TODO;
  payload: Todo;
}

interface CompleteTodoAction {
  type: typeof COMPLETE_TODO;
  payload: {
    id: string;
    completed: boolean;
  };
}

interface DeleteTodoAction {
  type: typeof DELETE_TODO;
  id: string;
}

type AppActionTypes = AddTodoAction | CompleteTodoAction | DeleteTodoAction;

export const appActions = {
  addTodo: (payload: { text: string; id: string }): AddTodoAction => ({
    type: ADD_TODO,
    payload
  }),

  setCompletedTodo: (payload: { id: string; completed: boolean }): CompleteTodoAction => ({
    type: COMPLETE_TODO,
    payload
  }),

  deleteTodo: (id: string): DeleteTodoAction => ({
    type: DELETE_TODO,
    id
  })
}

/// Reducer
export const appReducer = (state: AppState = stateInitial, action: AppActionTypes): AppState => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todo: [...state.todo,
          {
            id: action.payload.id,
            text: action.payload.text,
            completed: false
          }
        ]
      }
    case COMPLETE_TODO:
      return {
        ...state,
        todo: state.todo.map((t) => {
          if (t.id === action.payload.id) {
            return {
              ...t,
              completed: action.payload.completed
            }
          }
          return t
        })
      }
    case DELETE_TODO:
      return {
        ...state,
        todo: state.todo.filter(t => t.id !== action.id)
      }
    default:
      return state;
  }
}