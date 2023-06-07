import React from 'react';

import MainPage from './mainpage.js';
import Login from './login.js';
import MyRoom from './myroom.js';
import RandomProf from './randomprofile.js';
import Setings from './Setings.js';
import Signup from './Signup.js';
import TablouriPopulare from './tablouri-populare.js'
import Desprenoi from './desprenoi.js'
import Evenimente from './evenimente.js'
import Licitatie from './licitatie.js'
import Artistii from './artistii'
import Contacte from './contacte'

import './app.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {

    return (
        <>
            <BrowserRouter>

                <Routes>
                    <Route path='/' Component={MainPage} />
                    <Route path='/login' Component={Login} />
                    <Route path='/myroom' Component={MyRoom} />
                    <Route path='/random' Component={RandomProf} />
                    <Route path='/setings' Component={Setings} />
                    <Route path='/signup' Component={Signup} />
                    <Route path='/tablouripopulare' Component={TablouriPopulare} />
                    <Route path='/desprenoi' Component={Desprenoi} />
                    <Route path='/evenimente' Component={Evenimente} />
                    <Route path='/licitatie' Component={Licitatie} />
                    <Route path='/artistii' Component={Artistii} />
                    <Route path='/contacte' Component={Contacte} />

                </Routes>


            </BrowserRouter>

        </>
    )

};
export default App;