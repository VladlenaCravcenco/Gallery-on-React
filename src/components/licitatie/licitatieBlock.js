import { React, useState } from 'react';
import "./styles.css"
import work1 from '../../resources/works/work1.jpg'
import work2 from '../../resources/works/work2.jpg'
import work3 from '../../resources/works/work3.jpg'
import work4 from '../../resources/works/work4.jpg'
import work5 from '../../resources/works/work5.jpg'
import work6 from '../../resources/works/work6.jpg'
import work7 from '../../resources/works/work7.jpg'
import work8 from '../../resources/works/work8.jpg'
import work9 from '../../resources/works/work9.jpg'
import work10 from '../../resources/works/work10.jpg'
import work11 from '../../resources/works/work11.jpg'
import work12 from '../../resources/works/work12.jpg'

const licitatieArr = [
    {
        img: work1,
        denumire: 'denumire, ',
        since: '2001',
        price: '€999'

    }, {
        img: work2,
        denumire: 'denumire, ',
        since: '2001',
        price: '€999'
    }, {
        img: work3,
        denumire: 'denumire, ',
        since: '2001',
        price: '€999',
    }, {
        img: work4,
        denumire: 'denumire, ',
        since: '2001',
        price: '€999',
    }, {
        img: work5,
        denumire: 'denumire, ',
        since: '2001',
        price: '€999',
    }, {
        img: work6,
        denumire: 'denumire, ',
        since: '2001',
        price: '€999',
    }, {
        img: work7,
        denumire: 'denumire, ',
        since: '2001',
        price: '€999',
    }, {
        img: work8,
        denumire: 'denumire, ',
        since: '2001',
        price: '€999',
    }, {
        img: work9,
        denumire: 'denumire, ',
        since: '2001',
        price: '€999',
    }, {
        img: work10,
        denumire: 'denumire, ',
        since: '2001',
        price: '€999',
    }, {
        img: work11,
        denumire: 'denumire, ',
        since: '2001',
        price: '€999',
    }, {
        img: work12,
        denumire: 'denumire, ',
        since: '2001',
        price: '€999',
    },
    {
        img: work1,
        denumire: 'denumire, ',
        since: '2001',
        price: '€999'

    }, {
        img: work2,
        denumire: 'denumire, ',
        since: '2001',
        price: '€999'
    }, {
        img: work3,
        denumire: 'denumire, ',
        since: '2001',
        price: '€999',
    }, {
        img: work4,
        denumire: 'denumire, ',
        since: '2001',
        price: '€999',
    }, {
        img: work5,
        denumire: 'denumire, ',
        since: '2001',
        price: '€999',
    }, {
        img: work6,
        denumire: 'denumire, ',
        since: '2001',
        price: '€999',
    }, {
        img: work7,
        denumire: 'denumire, ',
        since: '2001',
        price: '€999',
    }, {
        img: work8,
        denumire: 'denumire, ',
        since: '2001',
        price: '€999',
    }, {
        img: work9,
        denumire: 'denumire, ',
        since: '2001',
        price: '€999',
    }, {
        img: work10,
        denumire: 'denumire, ',
        since: '2001',
        price: '€999',
    }, {
        img: work11,
        denumire: 'denumire, ',
        since: '2001',
        price: '€999',
    }, {
        img: work12,
        denumire: 'denumire, ',
        since: '2001',
        price: '€999',
    },
]

const licitatieBlock = () => {
    const licitatierender = () => {

        const arr = licitatieArr
        const content = arr.map(({ img, denumire, since, price }, index) => {

            return (
                <div className='licitatie'>
                            <img src={img} alt="" />
                            <div className="denumirea">
                                {denumire}{since}
                            </div>
                            <div className="xprice">
                                {price}
                            </div>
                        </div>
            )
        })
        return content
    }


    return (
        <div className='licitatie-main'>
            <div className='licitatie-container'>
                <div className='licit-timer'>
                    <p className='tittle-timer'>Denumirea art, 2021</p>
                    <p className='final-price'>€8,000</p>
                    <p>a rămas</p>
                    <p className='timer'>12 : 45 : 10</p>
                    <div className='button-licit'>
                        <input type='text'></input>
                        <div className='ridica'>a ridica</div>
                    </div>
                </div>
                <div className='licit-photo-descr'>
                    <div className='licit-photo'>
                        <img src={work12}></img>
                    </div>
                    <div className='licit-descr'>
                        Inspired by the covers of prominent fashion magazines and the rich cultural history of her own Kenyan heritage, Thandiwe Muriu aims to highlight the natural beauty of women with whom she identifies. Muriu photographs her subjects in striking, intricately patterned fabrics that often resemble the traditional textiles of various African countries and cultures.
                    </div>
                </div>
            </div>
            <div className='top10licitatie'>
                <div className='container-top10'>
                    {licitatierender()}
                </div>

            </div>
        </div>

    )
};

export default licitatieBlock;
