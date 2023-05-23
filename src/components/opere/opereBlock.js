import React, { Component } from 'react';
//import styled, { keyframes } from 'styled-components';
//import { fadeInDown } from 'react-animations';
import './styles.css';
//import "animate.css/animate.min.css";
//import { AnimationOnScroll } from 'react-animation-on-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css'
import PhotosAnimated from '../opere/photos-animated'

import Work1 from '../../resources/works/work1.jpg';
import Work4 from '../../resources/works/work4.jpg';
import Work5 from '../../resources/works/work5.jpg';
import Work6 from '../../resources/works/work6.jpg';
import Work7 from '../../resources/works/work7.jpg';
import Work8 from '../../resources/works/work8.jpg';
import Work9 from '../../resources/works/work9.jpg';
import Work10 from '../../resources/works/work10.jpg';
import Work11 from '../../resources/works/work11.jpg';

//const FadeInDown = styled.div`animation: 3s ${keyframes`${fadeInDown}`}`;
class OpereBlock extends Component {


    render() {

        return (
            <div className="block3">
                <div className="container3">
                    <div className="opere-info">
                        <h1>Opere de Artă</h1>
                        <p>Desenul are multe beneficii importante. În primul rând, dezvoltă creativitatea și imaginația, ajutând la îmbunătățirea gândirii creative și a capacității de a inova. În al doilea rând, desenul îmbunătățește abilitățile motorii fine și coordonarea ochi-mână, ceea ce poate ajuta în viața de zi cu zi. În al treilea rând, desenul poate ajuta, de asemenea, la ameliorarea stresului și la îmbunătățirea stării de spirit. În cele din urmă, pentru mulți oameni, desenul este o modalitate de a-și exprima gândurile, sentimentele și emoțiile prin limbaj vizual și crearea de opere de artă unice.</p>
                        <button>mai multe lucruri</button>
                    </div>
                    <div className="opere-photos"  > <PhotosAnimated />




                       {/* <AnimationOnScroll initiallyVisible={true   } animateIn="animate__animate__flipInX" animateOut='animate__FadeOut'>
                            <div className="grid">

                                <div className="grid-photo1" data-aos='fade-down'><img className="grid-photo1" src={Work4} alt="" /></div>
                                <div data-aos="fade-down" className="grid-photo2"><img className="grid-photo2" src={Work5} alt="" /></div>
                                <div data-aos="fade-down" className="grid-photo3"><img className="grid-photo3" src={Work6} alt="" /></div>
                                <div data-aos="fade-down" className="grid-photo4"><img className="grid-photo4" src={Work7} alt="" /></div>
                                <div data-aos="fade-down" className="grid-photo5"><img className="grid-photo5" src={Work8} alt="" /></div>
                                <div data-aos="fade-down" className="grid-photo6"><img className="grid-photo6" src={Work9} alt="" /></div>
                                <div data-aos="fade-down" className="grid-photo7"><img className="grid-photo7" src={Work10} alt="" /></div>
                                <div data-aos="fade-down" className="grid-photo8"><img className="grid-photo8" src={Work11} alt="" /></div>
                                <div data-aos="fade-down" className="grid-photo9"><img className="grid-photo9" src={Work1} alt="" /></div>

                            </div>
                       </AnimationOnScroll>*/}

                    </div>
                </div>
            </div>
        );
    }
}

export default OpereBlock;