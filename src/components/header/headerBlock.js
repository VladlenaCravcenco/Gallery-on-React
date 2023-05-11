import React, { Component } from 'react';

class HeaderBlock extends Component { //command +D

    render() {
        return (
            <div className="header">
            <div className="container">
                <div className="header-line">
                    <div className="header-logo">
                        <a href="#" class="head-logo">
                            GALLERY SENTIMENT123
                        </a>
                    </div>
                    <div className="navbar">
                        <div className="nav">
                            <a href="#">
                                despre noi
                            </a>
                            <a href="#">
                                evenimente
                            </a>
                            <a href="#">
                                licitaţie
                            </a>
                            <a href="#">
                                artiștilor
                            </a>
                            <a href="#">
                                opere de artă
                            </a>
                            <a href="#">
                                contacte
                            </a>

                        </div>
                        <button><img src="../resurses/icons/search.svg" alt="" /></button>

                        <div className="log-in">
                            <a href="#">
                                conectare
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default HeaderBlock;