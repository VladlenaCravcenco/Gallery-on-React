import React, { Component } from 'react';
import SVGsearch from '../../resources/svg/search.svg';
export default class HeaderBlock extends Component {

    render() {
        return (
            <div className="header">
                <div className="container">
                    <div className="header-line">
                        <div className="header-logo">
                            <a href="/" class="head-logo">GALLERY SENTIMENT</a>
                        </div>
                        <div className="navbar">
                            <div className="nav">
                                <a href="/desprenoi">despre noi</a>
                                <a href="/evenimente">evenimente</a>
                                <a href="/licitatie">licitaţie</a>
                                <a href="/artistii">artiștii</a>
                                <a href="/tablouripopulare">opere de artă</a>
                                <a href="/contacte">contacte</a>
                            </div>

                            <input type='search' name='search'/>

                            <div className="log-in">
                                <a href="/login">conectare </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};