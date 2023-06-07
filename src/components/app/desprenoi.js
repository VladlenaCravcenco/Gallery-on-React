import React, { Component } from 'react';
import HeaderBlock from '../header/headerBlock';
import Desprenoitxt from '../desprenoi/Desprenoitxt';

import SubscribeBlock from '../form-subsc/subscribeBlock.js';
import FooterBlock from '../footer/footer.js';
export default class DespreNoi extends Component {

    render() {
        return (
            <>
                <HeaderBlock />
                <Desprenoitxt />

                <SubscribeBlock />
                <FooterBlock />
            </>
        );
    }
};