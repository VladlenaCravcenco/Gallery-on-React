import React, { Component } from 'react';

import HeaderBlock from '../header/headerBlock.js';
import SliderBlock from '../slider/sliderBlock.js';

import FooterBlock from '../footer/footer.js';

export class MainPage extends Component {

    render() {
        return (
            <>
<HeaderBlock />
<SliderBlock/>


<FooterBlock />

            </>
        );
    }
}

