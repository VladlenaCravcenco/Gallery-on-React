import React, { Component } from 'react';

import './spinner.css'
import spinner from './spinner.gif'

export default class Spinner extends Component {

    render(){
        return(
            <div className="spinner" >
              <img src={spinner} alt=""/>
            </div>
        )
    };
}