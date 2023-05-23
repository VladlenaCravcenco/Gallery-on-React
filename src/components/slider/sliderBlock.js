import React, { Component } from 'react';
//import arrowl from '../../resources/svg/arrow-l.svg';
//import arrowr from '../../resources/svg/arrow-r.svg';
import work1 from '../../resources/works/work1.jpg';
import work2 from '../../resources/works/work2.jpg';
import work3 from '../../resources/works/work3.jpg';
import work4 from '../../resources/works/work4.jpg';
import work5 from '../../resources/works/work5.jpg';
import work6 from '../../resources/works/work6.jpg';
import work7 from '../../resources/works/work7.jpg';
import work8 from '../../resources/works/work8.jpg';
import work9 from '../../resources/works/work9.jpg';
import work10 from '../../resources/works/work10.jpg';
import work11 from '../../resources/works/work11.jpg';

import CustomCarousel from '../helpers/custom-carousel.js';
import './styles.css';

const productsMock = [
    {
        data: '01.10.2023',
        tittle: '1-54 Marrakech',
        description: '1-54 Contemporary African Art Fair, the leading international art fair dedicated to contemporary art from Africa and the African diaspora, is delighted to announce the return of 1-54 Marrakech at La Mamounia hotel, recently voted the Best Hotel in the World by Condé Nast Traveller. The fourth  … ',
        images: [work1, work2, work3, work4, work5]
    },
    {
        data: '06.13.2023',
        tittle: 'Jam',
        description: '1-54 Contemporary African Art Fair, the leading international art fair dedicated to contemporary art from Africa and the African diaspora, is delighted to announce the return of 1-54 Marrakech at La Mamounia hotel, recently voted the Best Hotel in the World by Condé Nast Traveller. The fourth  …  ',
        images: [work9, work4, work5, work6, work7]
    },
    {
        data: '07.01.2023',
        tittle: 'New Gallery in Chișinau',
        description: '1-54 Contemporary African Art Fair, the leading international art fair dedicated to contemporary art from Africa and the African diaspora, is delighted to announce the return of 1-54 Marrakech at La Mamounia hotel, recently voted the Best Hotel in the World by Condé Nast Traveller. The fourth  … ',
        images: [work10, work11, work7, work8, work9]
    }
]


export default class SliderBlock extends Component {

    renderImages = (imagesList) => {
        const content = imagesList.map((img, i) => {
            return (
                <img src={img} alt="" />
            )
        })
        return content
    }

    renderOneItem = ({ data, tittle, description, images }, i) => {
        return (
            <a href='/'> 
            <div className="eveniment" key={i}>
                <div className="about-evenim">
                    <h5>{data}</h5>
                    <h2>{tittle}</h2>
                    <h4>{description}</h4>
                </div>
                <div className="photos-evenim">
                    {this.renderImages(images)}

                </div>
            </div>
            </a>
        )
    }

    renderProductsItems = (products) => {
        let arr = []
        products.forEach((oneProduct, index) => {
            arr.push({
                oneProduct: this.renderOneItem(oneProduct, index),
            })
        })
        return arr
    }

    render() {
        return (
            <div className="slider-conteiner">
                <div className="bg-image"/>
                <div className="slidereveniments">
                    <CustomCarousel
                        swipeable={true}
                        draggable={true}
                        showDots={false}
                        arrows={true}
                        infinite={true}
                        autoPlay={true}
                        desktopItems={1}
                        autoPlaySpeedInSec={3}
                        carouselItems={this.renderProductsItems(productsMock)}
                    />
                </div>
            </div>
        );
    }
};