import React, { Component } from "react";
import './todo-filter-search.css';

export default class TodoFilter extends Component {
    render () {

         return (
        <div className="btn-group btn-group-toggle">
            <button type="button" className="btn btn-outline-secondary active" aria-pressed="true" >All</button>
            <button type="button" className="btn btn-outline-secondary ">Active</button>
            <button type="button" className="btn btn-outline-secondary">Done</button>
        </div>
    );
    }
}


