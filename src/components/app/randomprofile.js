import React, { Component } from 'react';
import HeaderBlock from '../header/headerBlock.js';
import RandomProfileBlock from '../RandomProfile/RandomProfileBlock.js';
import RandomLucruri from '../RandomProfile/randomlucruri.js';
import SubscribeBlock from '../form-subsc/subscribeBlock.js';
import FooterBlock from '../footer/footer.js';


export default class randomProf extends Component {

    render() {
        return (
            <>
            <HeaderBlock/>
            <RandomProfileBlock/>
            <RandomLucruri/>
            <SubscribeBlock/>
            <FooterBlock/>

            </>
        );
    }
};

