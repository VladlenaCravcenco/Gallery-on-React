import React, { Component } from 'react';
// import React from 'react';
import SliderBlock from '../slider/sliderBlock.js';
import OpereBlock from '../opere/opereBlock.js';
import SubscribeBlock from '../form-subsc/subscribeBlock.js';
import CardsBlock from '../cards/cards.js';
import RandomProfileBlock from '../RandomProfile/RandomProfileBlock.js';
import Myroomheader from '../Myroomheader/Myroomheader.js';
import MenuAdd from '../Myroomheader/menu-add.js';

import './app.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default class App extends Component { 

    render() {
        return (
            <>
          <BrowserRouter>
                
                <Routes>
                <Route path='/'Component={Myroomheader}/>
                <Route path='/events'Component={SliderBlock}/>
                <Route path='/myroom'Component={RandomProfileBlock}/>
                <Route path='/myroom'Component={MenuAdd}/>
                {/* <CardsBlock />
                <OpereBlock />
                <SubscribeBlock /> */}

</Routes>
                

                </BrowserRouter> 
               
            </>
        )
    }
};