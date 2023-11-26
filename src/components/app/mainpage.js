import React from 'react';

import HeaderBlock from '../header/headerBlock';
import SliderBlock from '../slider/sliderBlock.js';
import CardsBlock from '../cards/cards.js';
import OpereBlock from '../opere/opereBlock.js';
import SubscribeBlock from '../form-subsc/subscribeBlock.js';
import FooterBlock from '../footer/footer.js';


const MainPage = () => {


    return (
        <>
            <HeaderBlock />
            <SliderBlock />
            <CardsBlock />
            <OpereBlock />
            <SubscribeBlock />
            <FooterBlock />

        </>
    );

};

export default MainPage;
