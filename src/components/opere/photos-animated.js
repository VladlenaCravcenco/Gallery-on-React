import React, { Component } from 'react'
import './styles.css';
import AOS from 'aos';
import 'aos/dist/aos.css'

import Work1 from '../../resources/works/work1.jpg';
import Work4 from '../../resources/works/work4.jpg';
import Work5 from '../../resources/works/work5.jpg';
import Work6 from '../../resources/works/work6.jpg';
import Work7 from '../../resources/works/work7.jpg';
import Work8 from '../../resources/works/work8.jpg';
import Work9 from '../../resources/works/work9.jpg';
import Work10 from '../../resources/works/work10.jpg';
import Work11 from '../../resources/works/work11.jpg';


    export default class PhotosAnimated extends Component {
    
    componentDidMount(){
        
        AOS.init({ duration: 2000 }); 
    }
    render(){
        return (
            <div className="grid">
                <div className="grid-photo1" data-aos="fade-down"><a href='/'><img className="grid-photo1" src={Work4} alt="" /></a></div>
                <div data-aos="fade-down" className="grid-photo2"><a href='/'><img className="grid-photo2" src={Work5} alt="" /></a></div>
                <div data-aos="fade-down" className="grid-photo3"><a href='/'><img className="grid-photo3" src={Work6} alt="" /></a></div>
                <div data-aos="fade-down" className="grid-photo4"><a href='/'><img className="grid-photo4" src={Work7} alt="" /></a></div>
                <div data-aos="fade-down" className="grid-photo5"><a href='/'><img className="grid-photo5" src={Work8} alt="" /></a></div>
                <div data-aos="fade-down" className="grid-photo6"><a href='/'><img className="grid-photo6" src={Work9} alt="" /></a></div>
                <div data-aos="fade-down" className="grid-photo7"><a href='/'><img className="grid-photo7" src={Work10} alt="" /></a></div>
                <div data-aos="fade-down" className="grid-photo8"><a href='/'><img className="grid-photo8" src={Work11} alt="" /></a></div>
                <div data-aos="fade-down" className="grid-photo9"><a href='/'><img className="grid-photo9" src={Work1} alt="" /></a></div>
            </div>

        );
    }
        
};

