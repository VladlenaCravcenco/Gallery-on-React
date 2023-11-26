import React, { Component } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'

import Email from '../../resources/svg/email.svg';
import Insta from '../../resources/svg/instagram.svg';
import Facebook from '../../resources/svg/facebook-empty.svg';

export default class ContacteBody extends Component {


    componentDidMount() {

        AOS.init({ duration: 2000 });
    }

    render() {
        return (
            <>
                <div className='container-contacte'>
                    <h1>PUTEȚI SĂ GĂSIȚI PE NOI:</h1>
                    <div className='contacte-box'>
                        <div data-aos="flip-right" className='contacte insta'><img src={Insta} /></div>
                        <div data-aos="flip-right" className='contacte fb'><img src={Facebook} /></div>
                        <div data-aos="flip-right" className='contacte gmail'><img src={Email} /></div>

                    </div>

                </div>
            </>
        );
    }
};