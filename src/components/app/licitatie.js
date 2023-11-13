import React, { Component } from 'react';
import HeaderBlock from '../header/headerBlock';

import LicitatieBlock from '../licitatie/licitatieBlock';

import SubscribeBlock from '../form-subsc/subscribeBlock.js';
import FooterBlock from '../footer/footer.js';
export default class Licitatie extends Component {

    render() {
        return (
            <>
                <HeaderBlock />
                <LicitatieBlock />


                <SubscribeBlock />
                <FooterBlock />
            </>
        );
    }
};