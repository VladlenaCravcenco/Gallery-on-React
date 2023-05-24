import React, { Component } from 'react';
import './styles.css';
import PhotosAnimated from '../opere/photos-animated'

class OpereBlock extends Component {


    render() {

        return (
            <div className="block3">
                <div className="container3">
                    <div className="opere-info">
                        <h1>Tablouri populare</h1>
                        <p>Desenul are multe beneficii importante. În primul rând, dezvoltă creativitatea și imaginația, ajutând la îmbunătățirea gândirii creative și a capacității de a inova. În al doilea rând, desenul îmbunătățește abilitățile motorii fine și coordonarea ochi-mână, ceea ce poate ajuta în viața de zi cu zi. În al treilea rând, desenul poate ajuta, de asemenea, la ameliorarea stresului și la îmbunătățirea stării de spirit. În cele din urmă, pentru mulți oameni, desenul este o modalitate de a-și exprima gândurile, sentimentele și emoțiile prin limbaj vizual și crearea de opere de artă unice.</p>
                        <a href='/tablouripopulare'>mai multe lucruri</a>
                    </div>
                    <div className="opere-photos">
                        <PhotosAnimated />

                    </div>
                </div>
            </div>
        );
    }
}

export default OpereBlock;