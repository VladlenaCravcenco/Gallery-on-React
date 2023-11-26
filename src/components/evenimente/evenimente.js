import './style.css'
import alerta from '../../resources/svg/alarm-black.svg'
import eventphoto from '../../resources/bg/bg.jpg'
import event0 from '../../resources/eveniments/event1.jpg'
import event1 from '../../resources/eveniments/event1_1.jpg'
import event2 from '../../resources/eveniments/event1_2.jpg'
import event3 from '../../resources/eveniments/event1_3.jpg'


const EvenimenteBlock = () => {
    return (
        <>
            <div className="eveniment-back">
                <div className='evenx'>
                    <div className='main-info'>
                        <div className='main-photo'>
                            <img src={eventphoto}></img>
                        </div>
                        <div className='main-descrip'>
                            <div className='data'>01.10.2023 </div>
                            <div className='main-tittle'>1-54 Marrakech</div>
                            <button type='submit'> <img src={alerta}></img>Alerta </button>
                            <div className='descrip'>
                                <p>Inspired by the covers of prominent fashion magazines and the rich cultural history of her own Kenyan heritage, Thandiwe Muriu aims to highlight the natural beauty of women with whom she identifies. Muriu photographs her subjects in striking, intricately patterned fabrics that often resemble the traditional textiles of various African countries and cultures. </p> <br />
                                <p>Backdropping the subjects using the same vibrant pattern, Muriu creates hypnotizing illusions. Muriu has increasingly gained recognition for her distinctive images and was ...</p>

                            </div>
                        </div>
                    </div>
                    <div className='carousel'>
                        <div className='container-carousel'>
                            <div className='photo-block'>
                                <img src={event0}></img>
                                <img src={event1}></img>
                                <img src={event2}></img>
                                <img src={event3}></img>
                                <img src={event0}></img>
                                <img src={event1}></img>
                                <img src={event2}></img>
                                <img src={event3}></img>
                                
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default EvenimenteBlock;