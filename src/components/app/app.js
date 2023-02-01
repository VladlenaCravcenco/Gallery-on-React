import React, { Component } from 'react';
import search from "../../resources/assets/search.png"
import shop from "../../resources/assets/shop.png"
import favorites from "../../resources/assets/favorites.png"
import login from "../../resources/assets/login.png"


import './app.css';

export default class App extends Component {


    render() {
        return (
            <>
                <div className="header">
                    <div className="container">
                        <div className="header-line">
                            <div className="header-logo">
                                <a href="/" className="head-logo">
                                    Gallery Sentiment
                                </a>
                            </div>

                            <div className="nav">
                                <a href="/">
                                    <img src={search} alt="" />
                                </a>

                                <a href="/">
                                    <img src={shop} alt="" />
                                </a>
                                <a href="/">
                                    <img src={favorites} alt="" />

                                </a>
                                <a href="/">
                                    <img src={login} alt="" />
                                </a>

                                <div className="log-in">
                                    <a style={{ fontSize: 18 }} href="/">
                                        a întra
                                    </a>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className="slider-conteiner">
                        <div className="slider">
                            <div className="left-arrow">

                                <button>
                                    <img src="resources/Arrow l.png" alt="" />
                                </button>

                            </div>

                            <div className="hed-title">
                                Activități în această vară!
                            </div>

                            <div className="right-arrow">
                                <button>
                                    <img src="resources/Arrow r.png" alt="" />
                                </button>
                            </div>

                            <div className="header-button">
                                <a href="/" className="head-btn"><span>mai multe</span></a>
                            </div>

                            <svg version="1.1" xmlns="">
                                <filter id="blur">
                                    <feGaussianBlur stdDeviation="5"> </feGaussianBlur>
                                </filter>
                            </svg>

                        </div>
                    </div>

                </div>

                <div className="about">
                    <div className="container">
                        <div className="about-us">
                            <div className="photo-us">
                                <img src="resources/photo-us.png" alt="" />
                            </div>

                            <div className="text-description">
                                <span>Galeria Sentiment</span> este un spațiu creativ în care toată lumea își poate împărtăși
                                sentimentele și emoțiile întruchipate prin desen. Un loc în care îți poți cumpăra un element din
                                sufletul unui scriitor modern. <br /> <br />

                                Pe lângă faptul că este inspirat de idei și direcții noi în domeniul creativității.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="cards">
                    <div className="container">
                        <div className="title-cards">
                            <h1>Artiști noi</h1>
                        </div>

                        <div className="popular-cards">
                            <div id="1" className="card">
                                <div className="art">
                                    <img src="resources/pic1.png" alt="" />
                                    <img src="resources/heart.png" alt="" />
                                </div>
                                <div className="art-descrip">
                                    <h4 className="price">€100</h4>
                                    <div className="linksprof">
                                        <a href="/" className="verify"><img src="resources/Stroke 2/badge-verified.png" alt="" /></a>
                                        <a href="/" className="profile-name">@profile-name</a>
                                    </div>
                                </div>
                                <div className="button-room">
                                    <button>mergi la studio</button>
                                </div>
                            </div>

                            <div id="2" className="card">
                                <div className="art">
                                    <img src="resources/pic2.png" alt="" />
                                    <img src="resources/heart.png" alt="" />
                                </div>
                                <div className="art-descrip">
                                    <h4 className="price">€100</h4>
                                    <div className="linksprof">
                                        <a href="/" className="verify"><img src="resources/Stroke 2/badge-verified.png" alt="" /></a>
                                        <a href="/" className="profile-name">@profile-name</a>
                                    </div>
                                </div>
                                <div className="button-room">
                                    <button>mergi la studio</button>
                                </div>
                            </div>

                            <div id="3" className="card">
                                <div className="art">
                                    <img src="resources/pic3.png" alt="" />
                                    <img src="resources/heart.png" alt="" />
                                </div>
                                <div className="art-descrip">
                                    <h4 className="price">€100</h4>
                                    <div className="linksprof">
                                        <a href="/" className="verify"><img src="resources/Stroke 2/badge-verified.png" alt="" /></a>
                                        <a href="/" className="profile-name">@profile-name</a>
                                    </div>
                                </div>
                                <div className="button-room">
                                    <button>mergi la studio</button>
                                </div>
                            </div>
                        </div>

                        <div>
                            <button className="maivreaubtn">
                                <h4>mai vreau</h4>
                                <img src="resources/Arrowdown.png" alt="" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="form-subscribe">
                    <div className="container">
                        <div className="bg-form">
                            <div className="mail-form">
                                <input type="email" placeholder="Introduceți e-mail" form="" />
                            </div>
                            <div className="subscribe-button">
                                <button className="sub-button">
                                    Abonament
                                </button>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="footer">
                    <div className="container-footer">
                        <hr />
                        <div className="footer-line">
                            <div className="arrowup">
                                <a href="/"><img src="resources/Arrowup.png" alt="" /></a>
                            </div>
                            <div className="footer-logo">
                                Gallery Sentiment
                            </div>
                            <div className="socials">
                                <a href="/"><img src="resources/gmail.png" alt="" /></a>
                                <a href="/"><img src="resources/insta.png" alt="" /></a>
                                <a href="/"><img src="resources/facebook.png" alt="" /></a>

                            </div>
                        </div>


                        <hr />
                    </div>
                    <div className="copyright">
                        <h6>Gallery Sentiment 2023 © | Toate drepturile rezervate</h6>
                    </div>
                </div>
            </>
        )

    }

};



