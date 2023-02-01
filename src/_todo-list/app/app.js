import React, { Component } from 'react';


import './app.css';
import AppHeader from '../app-header';
import SearchPanel from '../search-filter/search-pannel';
import TodoFilter from '../search-filter/todo-filter-search';
import TodoList from '../todo-list';
import ItemAddForm from '../item-add-form';

export default class App extends Component {

state = {
    todoData: [
                { label: 'Drink coffee',  id: 1 },
                { label: 'Build Awesome App', id: 2 },
                { label: 'gym time',   id: 3 }
            ]
        };

        deleteItem = (id) => {
            this.setState( ({ todoData }) => {
                const idx = todoData.findIndex((el) => el.id === id);
                
                const newArray = 
                [ ...todoData.slice (0, idx), 
                    ...todoData.slice (idx +1)
                ];

                return {
                    todoData: newArray
                };
            });
        };

addItem = (text) => {
    console.log ('Added', text);
};

render () {
    return (
                <div className='appBlock'>
                    
                    <AppHeader toDo={1} done={3}/>
                    <div className='top-panel d-flex'>
                        <SearchPanel />
                    <TodoFilter/>
                    </div>
                    
                    <TodoList 
                    todos={this.state.todoData} 
                    onDeleted = { this.deleteItem } />

                     <ItemAddForm addItem = {this.addItem}/>
                    

                </div>

            );
}

        };


   
