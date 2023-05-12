import React, { Component } from 'react';

import Work1 from '../../resources/works/work1.jpg';
import Work4 from '../../resources/works/work4.jpg';
import Work5 from '../../resources/works/work5.jpg';
import Work6 from '../../resources/works/work6.jpg';
import Work7 from '../../resources/works/work7.jpg';
import Work8 from '../../resources/works/work8.jpg';
import Work9 from '../../resources/works/work9.jpg';
import Work10 from '../../resources/works/work10.jpg';
import Work11 from '../../resources/works/work11.jpg';


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
                        <div className="opere-photos">
                            <div className="grid">
                                <img className="grid-photo1" src={Work4} alt="" />
                                <img className="grid-photo2" src={Work5} alt="" />
                                <img className="grid-photo3" src={Work6} alt="" />
                                <img className="grid-photo4" src={Work7} alt="" />
                                <img className="grid-photo5" src={Work8} alt="" />
                                <img className="grid-photo6" src={Work9} alt="" />
                                <img className="grid-photo7" src={Work10} alt="" />
                                <img className="grid-photo8" src={Work11} alt="" />
                                <img className="grid-photo9" src={Work1} alt="" />

                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default OpereBlock;