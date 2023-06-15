import { React, useState } from "react";
import work3 from '../../resources/works/work3.jpg';
import work4 from '../../resources/works/work4.jpg';
import work5 from '../../resources/works/work5.jpg';
import work6 from '../../resources/works/work6.jpg';
import work7 from '../../resources/works/work7.jpg';
import work8 from '../../resources/works/work8.jpg';
import work9 from '../../resources/works/work9.jpg';
import work10 from '../../resources/works/work10.jpg';
import heartcolor from '../../resources/svg/heart-color.svg';
import heartEmpty from '../../resources/svg/heart-empty.svg';
import arrowr from '../../resources/svg/arrow-r-black.svg'

const ArtistiiArr = [
    {
        img: work3,
        nameArtist: 'Bobbi Brown',
        local: 'Chisinau, 2009',
    },
    {
        img: work4,
        nameArtist: 'Kate Frost',
        local: 'Chisinau, 2020',
    },
    {
        img: work5,
        nameArtist: 'Willie Maye',
        local: 'Chisinau, 2012',
    },
    {
        img: work6,
        nameArtist: 'Justin Bieber',
        local: 'Chisinau, 2003',
    },
    {
        img: work7,
        nameArtist: 'Ted Mosbi',
        local: 'Chisinau, 2012',
    },
    {
        img: work8,
        nameArtist: 'Miley Sirus',
        local: 'Chisinau, 2002',
    },
    {
        img: work9,
        nameArtist: 'Willie Maye',
        local: 'Chisinau, 2004',
    },
    {
        img: work10,
        nameArtist: 'Sirius Black',
        local: 'Chisinau, 20091',
    },
]

const ArtistiiBlock = () => {
    const renderArtsy = () => {
        
        const arr = ArtistiiArr
        const content = arr.map(({ img, nameArtist, local }, index) => {
            return (
                <>
                    <a href='random'>
                        <div className={`card${index + 1}`}>
                            <div className="art">
                                <img src={img} alt="" />
                                <div >
                                    <img src={heartcolor} alt="" />
                                </div>
                            </div>
                            <div className="button-room">
                                <div className="art-descrip">
                                    <a href='random' >{nameArtist}</a>
                                    <h4 >{local}</h4>
                                </div>
                                <button className="right-arrow">
                                    <img src={arrowr} alt="" />
                                </button>
                            </div>
                        </div>
                    </a>

                </>
            )
        })
        return content
    }


    return (
        <>
            <div className="cards">
                <div className="container">
                    <div className="title-cards">
                        <h1>Artiști noi</h1>
                    </div>

                    <div className="popular-cards">
                        {renderArtsy()}
                    </div>
                </div>
            </div>


        </>
    );
}

export default ArtistiiBlock;