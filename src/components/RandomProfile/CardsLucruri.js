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

const CardsArr = [
    {
        img: work3,
        nameArtist: 'Nume prenume1',
        denumire: 'denumire',
        price: '€999',
        isBijuterie: true,
        isAcril: true
    },
    {
        img: work4,
        nameArtist: 'Nume prenume2',
        denumire: 'denumire',
        price: '€999',
        isBijuterie: true,
        isAcril: true
    },
    {
        img: work5,
        nameArtist: 'Nume prenume',
        denumire: 'denumire',
        price: '€999',
        isBijuterie: true,
        isAcril: true
    },
    {
        img: work6,
        nameArtist: 'Nume prenume',
        denumire: 'denumire',
        price: '€999',
        isBijuterie: true,
        isAcril: false
    },
    {
        img: work7,
        nameArtist: 'Nume prenume',
        denumire: 'denumire',
        price: '€999',
        isBijuterie: true,
        isAcril: false
    },
    {
        img: work8,
        nameArtist: 'Nume prenume',
        denumire: 'denumire',
        price: '€999',
        isBijuterie: false,
        isAcril: false
    },
    {
        img: work9,
        nameArtist: 'Nume prenume',
        denumire: 'denumire',
        price: '€999',
        isBijuterie: false,
        isAcril: true
    },
    {
        img: work10,
        nameArtist: 'Nume prenume123',
        denumire: 'denumire',
        price: '€999',
        isBijuterie: true,
        isAcril: false
    }
]

const CardsLucruri = (props) => {

    const renderImages = () => {
        const { isAcrilProp, isBijuterieProp } = props
        const arr = isAcrilProp ? CardsArr.filter(card => card.isAcril === isAcrilProp) : CardsArr

        const content = arr.map(({ img, nameArtist, denumire, price, isAcril = false, isBijuterieProp = false },index) => {
           
        return (
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