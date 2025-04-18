import React, { useEffect } from 'react';

import MainPage from './mainpage.js';
import MyRoom from './myroom.js';
import RandomProf from './randomprofile.js';
import Setings from './Setings.js';
import TablouriPopulare from './tablouri-populare.js';
import Desprenoi from './desprenoi.js';
import Evenimente from './evenimente.js';
import Licitatie from './licitatie.js';
import Artistii from './artistii';
import Contacte from './contacte';

import './app.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import CookieHelper from "../../helpers/cookie-helper";
import { setToken } from "../../helpers/constants/functions";

const App = () => {
  useEffect(() => {
    const token = CookieHelper("get", "token");
    const generateToken = setToken();

    if (!token) {
      CookieHelper("set", "token", generateToken);
    }
  }, []);

  return (
    <HashRouter>
      <Routes>
        <Route path='/' Component={MainPage} />
        <Route path='/myroom' Component={MyRoom} />
        <Route path='/random' Component={RandomProf} />
        <Route path='/setings' Component={Setings} />
        <Route path='/tablouripopulare' Component={TablouriPopulare} />
        <Route path='/desprenoi' Component={Desprenoi} />
        <Route path='/evenimente' Component={Evenimente} />
        <Route path='/licitatie' Component={Licitatie} />
        <Route path='/artistii' Component={Artistii} />
        <Route path='/contacte' Component={Contacte} />
      </Routes>
    </HashRouter>
  );
};

export default App;