import React, { Component } from 'react';
import HeaderBlock from '../header/headerBlock.js';
import SignUpBlock from '../signup/SignUpBlock.js';
import FooterBlock from '../footer/footer.js';

export default class Signup extends Component {

    render() {
        return (
            <>
            <HeaderBlock/>
            <SignUpBlock/>
            <FooterBlock/>
            </>
        );
    }
};