import React, { Component } from 'react';

import MainPage from './Mainpage.js';
import Login from './Login.js';
import MyRoom from './Myroom.js';
import randomProf from './Randomprofile.js';
import Setings from './Setings.js';

import './app.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default class App extends Component {

    render() {
        return (
            <>
                <BrowserRouter>

                    <Routes>
                        <Route path='/' Component={MainPage} />
                        <Route path='/login' Component={Login} />
                        <Route path='/myroom' Component={MyRoom} />
                        <Route path='/random' Component={randomProf} />
                        <Route path='/setings' Component={Setings} />

                    </Routes>


                </BrowserRouter>

            </>
        )
    }
};
