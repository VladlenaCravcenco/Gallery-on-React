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
                                <a href="/">despre noi</a>
                                <a href="/">evenimente</a>
                                <a href="/">licitaţie</a>
                                <a href="/">artiștilor</a>
                                <a href="/">opere de artă</a>
                                <a href="/">contacte</a>
                            </div>

                            <button><img src={SVGsearch} alt="" /></button>

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