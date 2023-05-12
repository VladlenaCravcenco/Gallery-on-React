import React, { Component } from 'react';
import heartEmpty from '../../resources/svg/heart-empty.svg';
import Work3 from '../../resources/works/work3.jpg';
import Work5 from '../../resources/works/work5.jpg';
import Work6 from '../../resources/works/work6.jpg';
import Work7 from '../../resources/works/work7.jpg';
import Work8 from '../../resources/works/work8.jpg';
import Work9 from '../../resources/works/work9.jpg';
import Work10 from '../../resources/works/work10.jpg';
import Work11 from '../../resources/works/work11.jpg';
import Arrowr from '../../resources/svg/arrow-r.svg';
import Heartcolor from '../../resources/svg/heart-color.svg';

class CardsBlock extends Component {

    render() {
        return (
            <div class="cards">
                    <div className="container">
                        <div className="title-cards">
                            <h1>Artiști noi</h1>
                        </div>

                        <div className="popular-cards">
                            <div id="1" className="card">
                                <div className="art">
                                    <img src={Work6} alt="" />
                                    <div className="like">
                                        <img src={Heartcolor} alt=""/>
                                    </div>
                                </div>
                                <div className="button-room">
                                    <div className="art-descrip">
                                        <a href="#">Bobbi Brown</a>
                                        <h4 >Chisinau, 2009</h4>
                                    </div>
                                    <button className="right-arrow">
                                        <img src={Arrowr} alt="" />
                                    </button>
                                </div>
                            </div>

                            <div id="1" className="card">
                                <div className="art">
                                    <img src={Work7} alt="" />
                                    <div className="like">
                                        <img src={heartEmpty} alt="" />
                                    </div>
                                </div>
                                <div className="button-room">
                                    <div className="art-descrip">
                                        <a href="#">Kate Frost</a>
                                        <h4 >Chisinau, 2001</h4>
                                    </div>
                                    <button className="right-arrow">
                                        <img src={Arrowr} alt="" />
                                    </button>
                                </div>
                            </div>

                            <div id="1" className="card">
                                <div className="art">
                                    <img src={Work9} alt="" />
                                    <div className="like">
                                        <img src={heartEmpty} alt="" />
                                    </div>
                                </div>
                                <div className="button-room">
                                    <div className="art-descrip">
                                        <a href="#">Willie Maye</a>
                                        <h4 >Chisinau, 2006</h4>
                                    </div>
                                    <button className="right-arrow">
                                        <img src={Arrowr} alt="" />
                                    </button>
                                </div>
                            </div>

                            <div id="1" className="card">
                                <div className="art">
                                    <img src={Work3} alt="" />
                                    <div className="like">
                                        <img src={heartEmpty}alt="" />
                                    </div>
                                </div>
                                <div className="button-room">
                                    <div className="art-descrip">
                                        <a href="#">Justin Bieber</a>
                                        <h4 >Chisinau, 2004</h4>
                                    </div>
                                    <button className="right-arrow">
                                        <img src={Arrowr} alt=""/>
                                    </button>
                                </div>
                            </div>

                            <div id="1" className="card">
                                <div className="art">
                                    <img src={Work8} alt=""/>
                                    <div className="like">
                                        <img src={heartEmpty} alt=""/>
                                    </div>
                                </div>
                                <div className="button-room">
                                    <div className="art-descrip">
                                        <a href="#">Ted Mosbi</a>
                                        <h4 >Chisinau, 2009</h4>
                                    </div>
                                    <button className="right-arrow">
                                        <img src={Arrowr} alt=""/>
                                    </button>
                                </div>
                            </div>

                            <div id="2" className="card">
                                <div className="art">
                                    <img src={Work10} alt=""/>


                                    <div className="like">
                                        <img src={heartEmpty} alt=""/>
                                    </div>

                                </div>
                                <div className="button-room">
                                    <div className="art-descrip">
                                        <a href="#">Carolina Herrera</a>
                                        <h4 >Chisinau, 2000</h4>
                                    </div>
                                    <button className="right-arrow">
                                        <img src={Arrowr} alt=""/>
                                    </button>
                                </div>
                            </div>

                            <div id="3" className="card">
                                <div className="art">
                                    <img src={Work11} alt=""/>
                                    <div className="like">
                                        <img src={heartEmpty} alt=""/>
                                    </div>
                                </div>
                                <div className="button-room">
                                    <div className="art-descrip">
                                        <a href="#">Miley Sirus</a>
                                        <h4 >Chisinau, 2010</h4>
                                    </div>
                                    <button className="right-arrow">
                                        <img src={Arrowr}alt=""/>
                                    </button>
                                </div>
                            </div>
                            <div id="4" className="card">
                                <div className="art">
                                    <img src={Work5} alt=""/>
                                    <div className="like">
                                        <img src={heartEmpty} alt=""/>
                                    </div>
                                </div>

                                <div className="button-room">
                                    <div className="art-descrip">
                                        <a href="#">Sirius Black</a>
                                        <h4 >Chisinau, 1994</h4>
                                    </div>
                                    <button className="right-arrow">
                                        <img src={Arrowr} alt=""/>
                                    </button>
                                </div>
                            </div>

                            <div id="5" className="card">
                                <div className="art">
                                    <img src={Work6} alt=""/>
                                    <div className="like">
                                        <img src={heartEmpty} alt=""/>
                                    </div>
                                </div>
                                <div className="button-room">
                                    <div className="art-descrip">
                                        <a href="#">Willie Maye</a>
                                        <h4 >Chisinau, 2006</h4>
                                    </div>
                                    <button className="right-arrow">
                                        <img src={Arrowr} alt=""/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default CardsBlock;