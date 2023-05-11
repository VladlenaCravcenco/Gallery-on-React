import React, { Component } from 'react';
import HeaderBlock from '../header/headerBlock.js';
import heartEmpty from "../../resources/svg/heart-empty.svg"

import './app.css';

export default class App extends Component {


    render() {
        return (
            <>
            <HeaderBlock />
                {/* <div className="header">
                    <div className="container">
                        <div className="header-line">
                            <div className="header-logo">
                                <a href="#" class="head-logo">
                                    GALLERY SENTIMENT
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
                </div> */}
                <div className="slider-conteiner">


                    <div className="bg-slider"></div>

                    <div className="slidereveniments">
                        <button className="left-arrow">
                            <img src="../resources/svg/arrow-l.svg" alt="" />
                        </button>

                        <div className="eveniments">
                            <div className="eveniment">
                                <div className="about-evenim">
                                    <h5>01.10.2023</h5>
                                    <h2>1-54 Marrakech</h2>
                                    <h6>1-54 Contemporary African Art Fair, the leading international art fair dedicated to contemporary art from Africa and the African diaspora, is delighted to announce the return of 1-54 Marrakech at La Mamounia hotel, recently voted the Best Hotel in the World by Condé Nast Traveller. The fourth  …  <a class="a-mai-multe" href="#">mai multe</a></h6>


                                </div>
                                <div className="photos-evenim">
                                    <a href="#"><img src="../resources/works/work4.jpg" alt="" /></a>
                                    <a href="#"><img src="../resources/works/work5.jpg" alt="" /></a>
                                    <a href="#"><img src="../resources/works/work6.jpg" alt="" /></a>
                                    <a href="#"><img src="../resources/works/work7.jpg" alt="" /></a>
                                    <a href="#"><img src="../resources/works/work8.jpg" alt="" /></a>

                                </div>
                            </div>

                            <div className="eveniment">
                                <div className="about-evenim">
                                    <h5>06.13.2023</h5>
                                    <h2>Jam</h2>
                                    <h6>1-54 Contemporary African Art Fair, the leading international art fair dedicated to contemporary art from Africa and the African diaspora, is delighted to announce the return of 1-54 Marrakech at La Mamounia hotel, recently voted the Best Hotel in the World by Condé Nast Traveller. The fourth  …  <a class="a-mai-multe" href="#">mai multe</a></h6>


                                </div>
                                <div className="photos-evenim">
                                    <a href="#"><img src="../resources/works/work9.jpg" alt="" /></a>
                                    <a href="#"><img src="../resources/works/work10.jpg" alt="" /></a>
                                    <a href="#"><img src="../resources/works/work11.jpg" alt="" /></a>
                                    <a href="#"><img src="../resources/works/work8.jpg" alt="" /></a>
                                    <a href="#"><img src="../resources/works/work7.jpg" alt="" /></a>

                                </div>
                            </div>

                            <div className="eveniment">
                                <div className="about-evenim">
                                    <h5>07.01.2023</h5>
                                    <h2>New Gallery in Chișinau</h2>
                                    <h6>1-54 Contemporary African Art Fair, the leading international art fair dedicated to contemporary art from Africa and the African diaspora, is delighted to announce the return of 1-54 Marrakech at La Mamounia hotel, recently voted the Best Hotel in the World by Condé Nast Traveller. The fourth  …  <a class="a-mai-multe" href="#">mai multe</a></h6>


                                </div>
                                <div className="photos-evenim">
                                    <a href="#"><img src="../resources/works/work1.jpg" alt="" /></a>
                                    <a href="#"><img src="../resources/works/work2.jpg" alt="" /></a>
                                    <a href="#"><img src="../resources/works/work3.jpg" alt="" /></a>
                                    <a href="#"><img src="../resources/works/work4.jpg" alt="" /></a>
                                    <a href="#"><img src="../resources/works/work5.jpg" alt="" /></a>

                                </div>
                            </div>
                        </div>

                        <button className="right-arrow">
                            <img src="../resources/svg/arrow-r.svg" alt="" />
                        </button>
                    </div>

                </div>





                <div class="cards">
                    <div className="container">
                        <div className="title-cards">
                            <h1>Artiști noi</h1>
                        </div>

                        <div className="popular-cards">
                            <div id="1" className="card">
                                <div className="art">
                                    <img src="../resources/works/work8.jpg" alt="" />
                                    <div className="like">
                                        <img src={heartEmpty} alt="" />
                                    </div>
                                </div>
                                <div className="button-room">
                                    <div className="art-descrip">
                                        <a href="#">Bobbi Brown</a>
                                        <h4 >Chisinau, 2009</h4>
                                    </div>
                                    <button className="right-arrow">
                                        <img src="../resources/svg/arrow-r-black.svg" alt="" />
                                    </button>
                                </div>
                            </div>

                            <div id="1" className="card">
                                <div className="art">
                                    <img src="../resources/works/work7.jpg" alt="" />
                                    <div className="like">
                                        <img src="../resources/svg/heart-empty.svg" alt="" />
                                    </div>
                                </div>
                                <div className="button-room">
                                    <div className="art-descrip">
                                        <a href="#">Kate Frost</a>
                                        <h4 >Chisinau, 2001</h4>
                                    </div>
                                    <button className="right-arrow">
                                        <img src=".../resources/svg/arrow-r-black.svg" alt="" />
                                    </button>
                                </div>
                            </div>

                            <div id="1" className="card">
                                <div className="art">
                                    <img src="../resources/works/work9.jpg" alt="" />
                                    <div className="like">
                                        <img src="../resources/svg/heart-empty.svg" alt="" />
                                    </div>
                                </div>
                                <div className="button-room">
                                    <div className="art-descrip">
                                        <a href="#">Willie Maye</a>
                                        <h4 >Chisinau, 2006</h4>
                                    </div>
                                    <button className="right-arrow">
                                        <img src="../resources/svg/arrow-r-black.svg" alt="" />
                                    </button>
                                </div>
                            </div>

                            <div id="1" className="card">
                                <div className="art">
                                    <img src="../resources/works/work3.jpg" alt="" />
                                    <div className="like">
                                        <img src="../resources/svg/heart-empty.svg" alt="" />
                                    </div>
                                </div>
                                <div className="button-room">
                                    <div className="art-descrip">
                                        <a href="#">Justin Bieber</a>
                                        <h4 >Chisinau, 2004</h4>
                                    </div>
                                    <button className="right-arrow">
                                        <img src="../resources/svg/arrow-r-black.svg" alt="" />
                                    </button>
                                </div>
                            </div>

                            <div id="1" className="card">
                                <div className="art">
                                    <img src="../resources/works/work8.jpg" alt="" />
                                    <div className="like">
                                        <img src="../resources/svg/heart-empty.svg" alt="" />
                                    </div>
                                </div>
                                <div className="button-room">
                                    <div className="art-descrip">
                                        <a href="#">Ted Mosbi</a>
                                        <h4 >Chisinau, 2009</h4>
                                    </div>
                                    <button className="right-arrow">
                                        <img src="../resources/svg/arrow-r-black.svg" alt="" />
                                    </button>
                                </div>
                            </div>

                            <div id="2" className="card">
                                <div className="art">
                                    <img src="../resources/works/work10.jpg" alt="" />


                                    <div className="like">
                                        <img src="../resources/svg/heart-empty.svg" alt="" />
                                    </div>

                                </div>
                                <div className="button-room">
                                    <div className="art-descrip">
                                        <a href="#">Carolina Herrera</a>
                                        <h4 >Chisinau, 2000</h4>
                                    </div>
                                    <button className="right-arrow">
                                        <img src="../resources/svg/arrow-r-black.svg" alt="" />
                                    </button>
                                </div>
                            </div>

                            <div id="3" className="card">
                                <div className="art">
                                    <img src="../resources/works/work7.jpg" alt="" />
                                    <div className="like">
                                        <img src="../resources/svg/heart-empty.svg" alt="" />
                                    </div>
                                </div>
                                <div className="button-room">
                                    <div className="art-descrip">
                                        <a href="#">Miley Sirus</a>
                                        <h4 >Chisinau, 2010</h4>
                                    </div>
                                    <button className="right-arrow">
                                        <img src="../resources/svg/arrow-r-black.svg" alt="" />
                                    </button>
                                </div>
                            </div>
                            <div id="4" className="card">
                                <div className="art">
                                    <img src="../resources/works/work9.jpg" alt="" />
                                    <div className="like">
                                        <img src="../resources/svg/heart-empty.svg" alt="" />
                                    </div>
                                </div>

                                <div className="button-room">
                                    <div className="art-descrip">
                                        <a href="#">Sirius Black</a>
                                        <h4 >Chisinau, 1994</h4>
                                    </div>
                                    <button className="right-arrow">
                                        <img src="../vlada_templates/resurses/icons/arrow-r-black.svg" alt="" />
                                    </button>
                                </div>
                            </div>

                            <div id="5" className="card">
                                <div className="art">
                                    <img src="../vlada_templates/resurses/work6.jpg" alt="" />
                                    <div className="like">
                                        <img src="../vlada_templates/resurses/icons/heart.svg" alt="" />
                                    </div>
                                </div>
                                <div className="button-room">
                                    <div className="art-descrip">
                                        <a href="#">Willie Maye</a>
                                        <h4 >Chisinau, 2006</h4>
                                    </div>
                                    <button className="right-arrow">
                                        <img src="../vlada_templates/resurses/icons/arrow-r-black.svg" alt="" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="block3">
                    <div className="container3">
                        <div className="opere-info">
                            <h1>Opere de Artă</h1>
                            <p>Desenul are multe beneficii importante. În primul rând, dezvoltă creativitatea și imaginația, ajutând la îmbunătățirea gândirii creative și a capacității de a inova. În al doilea rând, desenul îmbunătățește abilitățile motorii fine și coordonarea ochi-mână, ceea ce poate ajuta în viața de zi cu zi. În al treilea rând, desenul poate ajuta, de asemenea, la ameliorarea stresului și la îmbunătățirea stării de spirit. În cele din urmă, pentru mulți oameni, desenul este o modalitate de a-și exprima gândurile, sentimentele și emoțiile prin limbaj vizual și crearea de opere de artă unice.</p>
                            <button>mai multe lucruri</button>
                        </div>
                        <div className="opere-photos">
                            <div className="grid">
                                <img className="grid-photo1" src="../vlada_templates/resurses/work4.jpg" alt="" />
                                <img className="grid-photo2" src="../vlada_templates/resurses/work5.jpg" alt="" />
                                <img className="grid-photo3" src="../vlada_templates/resurses/work6.jpg" alt="" />
                                <img className="grid-photo4" src="../vlada_templates/resurses/work7.jpg" alt="" />
                                <img className="grid-photo5" src="../vlada_templates/resurses/work8.jpg" alt="" />
                                <img className="grid-photo6" src="../vlada_templates/resurses/work9.jpg" alt="" />
                                <img className="grid-photo7" src="../vlada_templates/resurses/work10.jpg" alt="" />
                                <img className="grid-photo8" src="../vlada_templates/resurses/work11.jpg" alt="" />
                                <img className="grid-photo9" src="../vlada_templates/resurses/work1.jpg" alt="" />

                            </div>
                        </div>
                    </div>
                </div>




                <div className="form-subscribe">
                    <div className="bg-pic">

                        <div className="bgleft"></div>
                        <div className="bg-form">

                            <h2>Înscrieți-vă pentru a colecta artă de la cei mai importanți artiști din Moldova</h2>
                            <div className="subscribe-button">
                                <button className="btn-conect">
                                    conectare
                                </button>
                                <button className="btn-registr">
                                    registrare
                                </button>
                            </div>
                        </div>
                        <div className="bgright"></div>
                    </div>


                </div>



                <div className="footer">
                    <div className="container-footer">
                        <div className="footer-bar">
                            <a href="#">despre noi</a>
                            <a href="#">contacte</a>
                            <a href="#">sprijin</a>
                        </div>
                        <div className="footer-line">
                            <div className="logo-copy">
                                <div class="footer-logo">Gallery Sentiment </div>

                                <div className="copyright">
                                    <h6>Gallery Sentiment 2023 © | Toate drepturile rezervate</h6>
                                </div>
                            </div>

                            <div className="socials">

                                <a href="#"><img src="../vlada_templates/resurses/icons/email.svg" alt="" /></a>
                                <a href="#"><img src="../vlada_templates/resurses/icons/instagram.svg" alt="" /></a>
                                <a href="#"><img src="../vlada_templates/resurses/icons/facebook.svg" alt="" /></a>

                            </div>
                        </div>
                    </div>
                </div>


            </>
        )

    }

};



