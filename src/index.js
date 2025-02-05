import React from "react";
import ReactDOM from 'react-dom/client';
import TodoList from "./component/todo-list";
import SearchPanel from "./component/SearchPanel";
import AppHeader from "./component/AppHeader";
import ItemStatusFilter from "./component/item-status-filter";

const App = () => {

    const todoData = [
        { label: 'Drink Coffee', important: false, id: 1 },
        { label: 'Implement React Application', important: true, id: 2 },
        { label: 'Make notes from your stud', important: false, id: 3 },
        { label: 'Do not drink alchohol', important: false, id: 4 },
    ];   
    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <TodoList todos = {todoData} />
            <ItemStatusFilter/>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>);
