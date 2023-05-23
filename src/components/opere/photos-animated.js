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
                <div className="grid-photo1" data-aos='fade-down'><img className="grid-photo1" src={Work4} alt="" /></div>
                <div data-aos="fade-down" className="grid-photo2"><img className="grid-photo2" src={Work5} alt="" /></div>
                <div data-aos="fade-down" className="grid-photo3"><img className="grid-photo3" src={Work6} alt="" /></div>
                <div data-aos="fade-down" className="grid-photo4"><img className="grid-photo4" src={Work7} alt="" /></div>
                <div data-aos="fade-down" className="grid-photo5"><img className="grid-photo5" src={Work8} alt="" /></div>
                <div data-aos="fade-down" className="grid-photo6"><img className="grid-photo6" src={Work9} alt="" /></div>
                <div data-aos="fade-down" className="grid-photo7"><img className="grid-photo7" src={Work10} alt="" /></div>
                <div data-aos="fade-down" className="grid-photo8"><img className="grid-photo8" src={Work11} alt="" /></div>
                <div data-aos="fade-down" className="grid-photo9"><img className="grid-photo9" src={Work1} alt="" /></div>
            </div>

        );
    }
        
};

