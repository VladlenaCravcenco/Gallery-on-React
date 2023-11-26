import React, { Component } from 'react';
import HeaderBlock from '../header/headerBlock';
import NavSetings from '../navsetings/Navsettings.js'; 
import EditProfile from '../navsetings/editprofile.js';

import FooterBlock from '../footer/footer.js';

export default class Setings extends Component {

    render() {
        return (
            <>
            <HeaderBlock/>
            <NavSetings/>
            <EditProfile/>
            <FooterBlock/>
            </>
        );
    }
};