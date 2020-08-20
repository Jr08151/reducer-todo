// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React, {useReducer} from 'react';
import './App.css';
// reducers
import { initialState, todoReducer } from './reducers/todoreducer';

// components
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  
  const addTodo = (item)=>dispatch({type:"ADD_ITEM", payload: item})
  const toggleTodo = (id)=>dispatch({type: "TOGGLE_ITEM", payload: id})
  const clearComplete = ()=>dispatch({type: "CLEAR_COMPLETE"})

  return (
    <div className="App">
      <h1>To Do List</h1>
        <TodoForm 
        addTodo={addTodo}
        clearComplete={clearComplete}
        />
        <TodoList 
        todosArr={state.todosArr}
        toggleTodo={toggleTodo}
        /> 
    </div>
  );
}

export default App;