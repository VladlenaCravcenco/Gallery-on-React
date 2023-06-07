import React, { Component } from 'react';
import HeaderBlock from '../header/headerBlock';


import SubscribeBlock from '../form-subsc/subscribeBlock.js';
import FooterBlock from '../footer/footer.js';
export default class Artistii extends Component {

    render() {
        return (
            <>
                <HeaderBlock />


                <SubscribeBlock />
                <FooterBlock />
            </>
        );
    }
};