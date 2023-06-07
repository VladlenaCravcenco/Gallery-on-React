import { React} from 'react';
import heartEmpty from '../../resources/svg/heart-empty.svg';
import work3 from '../../resources/works/work3.jpg';
import work5 from '../../resources/works/work5.jpg';
import work6 from '../../resources/works/work6.jpg';
import work7 from '../../resources/works/work7.jpg';
import work8 from '../../resources/works/work8.jpg';
import work9 from '../../resources/works/work9.jpg';
import work10 from '../../resources/works/work10.jpg';
import work11 from '../../resources/works/work11.jpg';
import arrowr from '../../resources/svg/arrow-r.svg';
import heartcolor from '../../resources/svg/heart-color.svg';

const CardsBlock = () => {


    return (
        <div className="cards">
            <div className="container">
                <div className="title-cards">
                    <h1 onClick={() => console.log('done: ')}

                    >Artiști noi</h1>
                </div>

                <div className="popular-cards">

                    <a href='random'><div id="1" className="card">
                        <div className="art">
                            <img src={work6} alt="" />
                            <div >
                                <img src={heartcolor} alt="" />
                            </div>
                        </div>
                        <div className="button-room">
                            <div className="art-descrip">
                                <a href='random' >Bobbi Brown</a>
                                <h4 >Chisinau, 2009</h4>
                            </div>
                            <button className="right-arrow">
                                <img src={arrowr} alt="" />
                            </button>
                        </div>
                    </div>
                    </a>
                    <a href='random'><div id="1" className="card">
                        <div className="art">
                            <img src={work7} alt="" />
                            <div className="like">
                                <img src={heartEmpty} alt="" />
                            </div>
                        </div>
                        <div className="button-room">
                            <div className="art-descrip">
                                <a href="random">Kate Frost</a>
                                <h4 >Chisinau, 2001</h4>
                            </div>
                            <button className="right-arrow">
                                <img src={arrowr} alt="" />
                            </button>
                        </div>
                    </div>
                    </a>
                    <a href='random'>
                        <div id="1" className="card">
                            <div className="art">
                                <img src={work9} alt="" />
                                <div className="like">
                                    <img src={heartEmpty} alt="" />
                                </div>
                            </div>
                            <div className="button-room">
                                <div className="art-descrip">
                                    <a href="random">Willie Maye</a>
                                    <h4 >Chisinau, 2006</h4>
                                </div>
                                <button className="right-arrow">
                                    <img src={arrowr} alt="" />
                                </button>
                            </div>
                        </div>
                    </a>
                    <a href='random'>
                        <div id="1" className="card">
                            <div className="art">
                                <img src={work3} alt="" />
                                <div className="like">
                                    <img src={heartEmpty} alt="" />
                                </div>
                            </div>
                            <div className="button-room">
                                <div className="art-descrip">
                                    <a href="random">Justin Bieber</a>
                                    <h4 >Chisinau, 2004</h4>
                                </div>
                                <button className="right-arrow">
                                    <img src={arrowr} alt="" />
                                </button>
                            </div>
                        </div>
                    </a>
                    <a href='random'>
                        <div id="1" className="card">
                            <div className="art">
                                <img src={work8} alt="" />
                                <div className="like">
                                    <img src={heartEmpty} alt="" />
                                </div>
                            </div>
                            <div className="button-room">
                                <div className="art-descrip">
                                    <a href="random">Ted Mosbi</a>
                                    <h4 >Chisinau, 2009</h4>
                                </div>
                                <button className="right-arrow">
                                    <img src={arrowr} alt="" />
                                </button>
                            </div>
                        </div>
                    </a>
                    <a href='random'>
                        <div id="2" className="card">
                            <div className="art">
                                <img src={work10} alt="" />


                                <div className="like">
                                    <img src={heartEmpty} alt="" />
                                </div>

                            </div>
                            <div className="button-room">
                                <div className="art-descrip">
                                    <a href="random">Carolina Herrera</a>
                                    <h4 >Chisinau, 2000</h4>
                                </div>
                                <button className="right-arrow">
                                    <img src={arrowr} alt="" />
                                </button>
                            </div>
                        </div>
                    </a>
                    <a href='random'>
                        <div id="3" className="card">
                            <div className="art">
                                <img src={work11} alt="" />
                                <div className="like">
                                    <img src={heartEmpty} alt="" />
                                </div>
                            </div>
                            <div className="button-room">
                                <div className="art-descrip">
                                    <a href="random">Miley Sirus</a>
                                    <h4 >Chisinau, 2010</h4>
                                </div>
                                <button className="right-arrow">
                                    <img src={arrowr} alt="" />
                                </button>
                            </div>
                        </div>
                    </a>
                    <a href='random'>
                        <div id="4" className="card">
                            <div className="art">
                                <img src={work5} alt="" />
                                <div className="like">
                                    <img src={heartEmpty} alt="" />
                                </div>
                            </div>

                            <div className="button-room">
                                <div className="art-descrip">
                                    <a href="random">Sirius Black</a>
                                    <h4 >Chisinau, 1994</h4>
                                </div>
                                <button className="right-arrow">
                                    <img src={arrowr} alt="" />
                                </button>
                            </div>
                        </div>
                    </a>
                    <a href='random'>
                        <div id="5" className="card">
                            <div className="art">
                                <img src={work6} alt="" />
                                <div className="like">
                                    <img src={heartEmpty} alt="" />
                                </div>
                            </div>
                            <div className="button-room">
                                <div className="art-descrip">
                                    <a href="random">Willie Maye</a>
                                    <h4 >Chisinau, 2006</h4>
                                </div>
                                <button className="right-arrow">
                                    <img src={arrowr} alt="" />
                                </button>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );

};

export default CardsBlock;