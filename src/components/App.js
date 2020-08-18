import React, { useState } from 'react';
import '../styles/App.css';
import UserList from './UserList';
import TodoList from './TodoList';

const App = () => {
    const [ viewTodo, setViewTodo ] = useState( true );

    return (
        <div>
            <TodoList/>
        </div>
);
};

export default App;
