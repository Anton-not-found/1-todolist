import React from 'react';
import './App.css';
import TodoList, {TaskType} from "./TodoList";


function App() {
    const todoListTitle: string = "What to learn"
    const tasks: Array<TaskType> = [
        {id: 1, title: "HTML & CSS", isDone: true},
        {id: 2, title: "ES6 & TS", isDone: true},
        {id: 3, title: "React & Redux", isDone: false},
    ]


    return (
        <div className="App">
            <TodoList title={todoListTitle} tasks={tasks}/>
            <div>

            </div>
        </div>
    );
}

export default App;
