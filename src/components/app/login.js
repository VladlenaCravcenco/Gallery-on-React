import React, { Component } from 'react';
import HeaderBlock from '../header/headerBlock';
import LoginForm from '../loginform/loginform.js';

import FooterBlock from '../footer/footer.js';


export default class Login extends Component {

    render() {
        return (
            <>
            <HeaderBlock/>
            <LoginForm/>
            <FooterBlock/>
            </>
        );
    }
};