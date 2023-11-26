import React from 'react';
import HeaderBlock from '../header/headerBlock';
import SubscribeBlock from '../form-subsc/subscribeBlock.js';
import FooterBlock from '../footer/footer.js';
import EvenimenteBlock from '../evenimente/evenimente';

const EveniMente = () => {

    return (
        <>
            <HeaderBlock />

            <EvenimenteBlock />
            <SubscribeBlock />
            <FooterBlock />
        </>
    );
};

export default EveniMente;