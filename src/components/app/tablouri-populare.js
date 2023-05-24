import React, { Component } from 'react';
import HeaderBlock from '../header/headerBlock.js';


import SubscribeBlock from '../form-subsc/subscribeBlock.js';
import FooterBlock from '../footer/footer.js';

export default class TablouriPopulare extends Component {

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