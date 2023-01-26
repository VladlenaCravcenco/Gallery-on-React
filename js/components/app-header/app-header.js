import React from "react";
import './todo-header.css';

const AppHeader = ({ toDo, done }) => {

    return (
        <div className="app-header d-flex">
            <h1><i>Todo</i> List</h1>
            <h2>{toDo} more to do, {done} done</h2>

        </div>

    );
};

export default AppHeader;
