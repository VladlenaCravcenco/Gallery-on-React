import { React, Component } from 'react';
import HeaderBlock from '../header/headerBlock';


import SubscribeBlock from '../form-subsc/subscribeBlock.js';
import FooterBlock from '../footer/footer.js';
import ArtistiiBlock from '../artistii/artistiiBlock';

const Artistii = () => {


    return (
        <>
            <HeaderBlock />
            <ArtistiiBlock />

            <SubscribeBlock />
            <FooterBlock />
        </>
    );

};
export default Artistii;