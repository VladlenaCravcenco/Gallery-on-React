import React, { Component } from 'react';
import HeaderBlock from '../header/headerBlock';
import ContacteBody from '../contacte/contactebody';

import SubscribeBlock from '../form-subsc/subscribeBlock.js';
import FooterBlock from '../footer/footer.js';
export default class Contacte extends Component {

    render() {
        return (
            <>
                <HeaderBlock />
                <ContacteBody />

                <SubscribeBlock />
                <FooterBlock />
            </>
        );
    }
};