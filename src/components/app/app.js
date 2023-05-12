import React, { Component } from 'react';

import mainPage from './mainpage.js';
import Login from './login.js';
import MyRoom from './myroom.js';
import randomProf from './randomprofile.js';
import SliderBlock from '../slider/sliderBlock.js';
import RandomProfileBlock from '../RandomProfile/RandomProfileBlock.js';
import MenuAdd from '../Myroomheader/menu-add.js';

import './app.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default class App extends Component {

    render() {
        return (
            <>
                <BrowserRouter>

                    <Routes>
                        <Route path='/mainpage' Component={mainPage} />
                        <Route path='/login' Component={Login} />
                        <Route path='/myroom' Component={MyRoom} />
                        <Route path='/random' Component={randomProf} />

                    </Routes>


                </BrowserRouter>

            </>
        )
    }
};
