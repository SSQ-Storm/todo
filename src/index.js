import React from "react";
import ReactDOM from 'react-dom/client';
import AppHeader from './component/app-header';
import SearchPanel from './component/search-panel';
import TodoList from './component/todo-list';
import ItemStatusFilter from './component/item-status-filter';
import './component/index.css';

const App = () => {

    const todoData = [
    { label: 'Drink Coffee', important: false,  id: 1},
    { label: 'React Application', important: true, id: 2 },
    { label: 'Make notes from your stud', important: false, id: 3 },
    { label: 'Do not drink alchohol', important: false, id: 4 },
];

    return (
        <div className="todo-app">
            <AppHeader toDo={1} done={3} />
            <div className="top-panel d-flex">
                <SearchPanel />
                <ItemStatusFilter />
            </div>

            <TodoList todos={todoData} />
        </div>
    );
};
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>);
