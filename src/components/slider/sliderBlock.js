import React, { Component } from 'react';
import arrowl from '../../resources/svg/arrow-l.svg';
import arrowr from '../../resources/svg/arrow-r.svg';
import work1 from '../../resources/works/work1.jpg';
import work2 from '../../resources/works/work2.jpg';
import work3 from '../../resources/works/work3.jpg';
import work4 from '../../resources/works/work4.jpg';
import work5 from '../../resources/works/work5.jpg';
import work6 from '../../resources/works/work6.jpg';
import work7 from '../../resources/works/work7.jpg';
import work8 from '../../resources/works/work8.jpg';
import work9 from '../../resources/works/work9.jpg';
import work10 from '../../resources/works/work10.jpg';
import work11 from '../../resources/works/work11.jpg';



class SliderBlock extends Component {

    render() {
        return (
            <div className="slider-conteiner">

 
                    <div className="bg-slider">
                    </div>

                    <div className="slidereveniments">
                        <button className="left-arrow">
                            <img src={arrowl} alt="" />
                        </button>

                        <div className="eveniments">
                            <div className="eveniment">
                                <div className="about-evenim">
                                    <h5>01.10.2023</h5>
                                    <h2>1-54 Marrakech</h2>
                                    <h6>1-54 Contemporary African Art Fair, the leading international art fair dedicated to contemporary art from Africa and the African diaspora, is delighted to announce the return of 1-54 Marrakech at La Mamounia hotel, recently voted the Best Hotel in the World by Condé Nast Traveller. The fourth  …  <a class="a-mai-multe" href="#">mai multe</a></h6>


                                </div>
                                <div className="photos-evenim">
                                    <a href="#"><img src={work4} alt="" /></a>
                                    <a href="#"><img src={work5} alt="" /></a>
                                    <a href="#"><img src={work6} alt="" /></a>
                                    <a href="#"><img src={work7} alt="" /></a>
                                    <a href="#"><img src={work8} alt="" /></a>

                                </div>
                            </div>

                            <div className="eveniment">
                                <div className="about-evenim">
                                    <h5>06.13.2023</h5>
                                    <h2>Jam</h2>
                                    <h6>1-54 Contemporary African Art Fair, the leading international art fair dedicated to contemporary art from Africa and the African diaspora, is delighted to announce the return of 1-54 Marrakech at La Mamounia hotel, recently voted the Best Hotel in the World by Condé Nast Traveller. The fourth  …  <a class="a-mai-multe" href="#">mai multe</a></h6>


                                </div>
                                <div className="photos-evenim">
                                    <a href="#"><img src={work9} alt="" /></a>
                                    <a href="#"><img src={work10} alt="" /></a>
                                    <a href="#"><img src={work11} alt="" /></a>
                                    <a href="#"><img src={work8} alt="" /></a>
                                    <a href="#"><img src={work7} alt="" /></a>

                                </div>
                            </div>

                            <div className="eveniment">
                                <div className="about-evenim">
                                    <h5>07.01.2023</h5>
                                    <h2>New Gallery in Chișinau</h2>
                                    <h6>1-54 Contemporary African Art Fair, the leading international art fair dedicated to contemporary art from Africa and the African diaspora, is delighted to announce the return of 1-54 Marrakech at La Mamounia hotel, recently voted the Best Hotel in the World by Condé Nast Traveller. The fourth  …  <a class="a-mai-multe" href="#">mai multe</a></h6>


                                </div>
                                <div className="photos-evenim">
                                    <a href="#"><img src={work1} alt="" /></a>
                                    <a href="#"><img src={work2} alt="" /></a>
                                    <a href="#"><img src={work4} alt="" /></a>
                                    <a href="#"><img src={work3} alt="" /></a>
                                    <a href="#"><img src={work5} alt="" /></a>

                                </div>
                            </div>
                        </div>

                        <button className="right-arrow">
                            <img src={arrowr} alt="" />
                        </button>
                    </div> 

                </div>
        );
    }
}

export default SliderBlock;