import React, { Component } from 'react';

import HeaderBlock from '../header/headerBlock.js';
import SliderBlock from '../slider/sliderBlock.js';
import CardsBlock from '../cards/cards.js';
import OpereBlock from '../opere/opereBlock.js';
import SubscribeBlock from '../form-subsc/subscribeBlock.js';

import FooterBlock from '../footer/footer.js';

export default class mainPage extends Component {

    render() {
        return (
            <>
<HeaderBlock />
<SliderBlock/>
<CardsBlock />
<OpereBlock />
<SubscribeBlock />
<FooterBlock />

            </>
        );
    }
};

