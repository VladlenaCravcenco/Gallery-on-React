import { React, useState } from 'react';
import Modal from '../modal/modal'
import heartEmpty from '../../resources/svg/heart-empty.svg';
import work3 from '../../resources/works/work3.jpg';
import work4 from '../../resources/works/work4.jpg';
import work5 from '../../resources/works/work5.jpg';
import work6 from '../../resources/works/work6.jpg';
import work7 from '../../resources/works/work7.jpg';
import work8 from '../../resources/works/work8.jpg';
import work9 from '../../resources/works/work9.jpg';
import work10 from '../../resources/works/work10.jpg';
import heartcolor from '../../resources/svg/heart-color.svg';
import './randomstyle.css'
import '../modal/modal.css'



const materials = [
    'acril',
    'bijuterie',
    'canvas',
    'instalatii',
];
const price = [
    'mic (sub 40)',
    'mediu (40-100)',
    'mare(peste 100)',
];

const CardsArr = [
    {
        img: work3,
        nameArtist: '111Nume prenume1',
        denumire: 'denumire',
        price: '€999',
        materials: 'acril',
        options: {
            isBijuterie: true,
            isAcril: null,
            isCanvas: null,
            isInstalatii: null,
        }
    },
    {
        img: work4,
        nameArtist: '222Nume prenume2',
        denumire: 'denumire',
        price: '€999',
        options: {
            isBijuterie: true,
            isAcril: true,
            isCanvas: null,
            isInstalatii: null,
        }
    },
    {
        img: work5,
        nameArtist: '333Nume prenume',
        denumire: 'denumire',
        price: '€999',
        isBijuterie: true,
        options: {
            isBijuterie: true,
            isAcril: null,
            isCanvas: true,
            isInstalatii: null,
        }
    },
    {
        img: work6,
        nameArtist: '444Nume prenume',
        denumire: 'denumire',
        price: '€999',
        options: {
            isBijuterie: true,
            isAcril: null,
            isCanvas: true,
            isInstalatii: true,
        }
    },
    {
        img: work7,
        nameArtist: '555Nume prenume',
        denumire: 'denumire',
        price: '€999',
        options: {
            isBijuterie: true,
            isAcril: null,
            isCanvas: null,
            isInstalatii: true,
        }
    },
    {
        img: work8,
        nameArtist: '666Nume prenume',
        denumire: 'denumire',
        price: '€999',
        options: {
            isBijuterie: null,
            isAcril: true,
            isCanvas: null,
            isInstalatii: null,
        }
    },
    {
        img: work9,
        nameArtist: '777Nume prenume',
        denumire: 'denumire',
        price: '€999',
        options: {
            isBijuterie: null,
            isAcril: true,
            isCanvas: null,
            isInstalatii: true,
        }
    },
    {
        img: work10,
        nameArtist: '888Nume prenume123',
        denumire: 'denumire',
        price: '€999',
        options: {
            isBijuterie: null,
            isAcril: null,
            isCanvas: true,
            isInstalatii: true,
        }
    }
]


const CardsLucruri = (props) => {
    const [modalActive, setModalActive] = useState(false)
    const renderImages = () => {

        const { filters } = props

        let filteredArr = []
        CardsArr.forEach(card => {
            let i = 0
            Object.keys(card.options).forEach(key => {
                if (card.options[key] === filters[0][key] && i === 0) {
                    i++;
                    filteredArr.push(card);
                }
            })
        })

        const arr = filteredArr.length === 0 ? CardsArr : filteredArr

        const content = arr.map(({ img, nameArtist, denumire, price }, index) => {

            return (
                <>
                    <a onClick={() => setModalActive(true)}>

                        <div className={`xcard_${index + 1}`}>
                            <div className="photo_x">
                                <img src={img} alt="" />
                            </div>
                            <div className="nume_x">
                                <div className="x-name">
                                    {nameArtist}
                                    <div className="like_x">
                                        <img src={heartEmpty} alt="" />
                                    </div>

                                </div>
                                <div className="denumirea">
                                    {denumire}
                                </div>
                                <div className="xprice">
                                    {price}
                                </div>
                            </div>
                        </div>

                    </a>
                    <Modal active={modalActive} setActive={setModalActive}>
                        
                            <div className="photo_x_mod">
                                <img src={img} alt="" />
                            </div>
                            <div className="nume_x_mod">
                                <div className="x-name_mod">
                                    {nameArtist}
                                    <div className="like_x">
                                        <img src={heartEmpty} alt="" />
                                    </div>

                                </div>
                                <div className="denumirea_mod">
                                    {denumire}
                                </div>
                                <div className="xprice_mod">
                                    {price}
                                </div>
                            </div>
                     
                    </Modal>
                </>
            )

        })
        return content
    }


    return (
        <div className="cards_lucruri">
            <div className="tittle-x">76 de lucrări de artă:</div>
            <div className="container-x">
                <div className="grid-x">
                    {renderImages()}
                </div>
            </div>
        </div>
    )
}

export default CardsLucruri;