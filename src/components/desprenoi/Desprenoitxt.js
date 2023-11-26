import React, { Component } from 'react';
import './style.css'
import photo1 from '../../resources/eveniments/event1.jpg'
import photo2 from '../../resources/eveniments/event1_1.jpg'
import photo3 from '../../resources/eveniments/event1_2.jpg'
import photo4 from '../../resources/eveniments/event1_3.jpg'
import arrowr from '../../resources/svg/Arrow-r-white.svg'

export default class Desprenoitxt extends Component {

    render() {
        return (
            <>
                <div className='about-block'>


                    <div className='block'>
                        <div className='photo'> <img src={photo1}></img> </div>
                        <div className='text-block'>
                        <p>Site-ul Galeria de Artă Moldova este o platformă virtuală în care iubitorii și cunoscătorii de artă se pot bucura de o varietate de opere de artă. Galeria noastră oferă o gamă largă de lucrări de artă într-o varietate de genuri și stiluri, inclusiv pictură, sculptură, fotografie și multe altele.</p>
 </div>

                    </div>

                    <div className='block'>
                        <a href='/tablouripopulare'>
                            <div className='text-block'>
                                Găsește arta pe care o iubești
                                <img src={arrowr}></img>
                            </div>
                        </a>
                        <div className='photo'> <img src={photo2}></img> </div>
                    </div>

                    <div className='block'>
                        <div className='photo'> <img src={photo3}></img> </div>
                        <div className='text-block'>      
                                      <p>Publicul site-ului nostru include atât artiști și colecționari locali, cât și oameni din întreaga lume care sunt interesați de artă. Ne propunem să creăm o comunitate în care oamenii să-și poată împărtăși realizările creative, să discute despre artă și să se inspire reciproc.</p>
</div>

                    </div>
                    <div className='block'>
                        <a href='/artistii'>
                            <div className='text-block'>
                                Follow your favorite artists
                                <img src={arrowr}></img>
                            </div>
                        </a>
                        <div className='photo'> <img src={photo4}></img> </div>
                    </div>
                    <p>Mesajul principal al dezvoltării culturii artistice în Moldova este acela de a face arta accesibilă și de înțeles pentru toate păturile societății. Susținem arta și creativitatea ca mijloc de auto-exprimare și credem că toată lumea are dreptul de a accesa și de a înțelege arta.</p>


                    <p>„Artiștii sunt magicieni ale căror pensule creează lumi invizibile pentru ochi, dar tangibile pentru suflet.”</p>


                </div>
            </>
        );
    }
};