import React, { Component } from 'react';
import youtube from '../../resources/svg/youtube-video.svg';
import telegram from '../../resources/svg/send-message-dm.svg';
import instagram from '../../resources/svg/instagram.svg';
import chekbox from '../../resources/svg/check-good-yes.svg';


export default class EditProfile extends Component {

    render() {
        return (
            <>
                <div className='editprof'>
                    <div className='container-edit'>
                        <div className='edit-photo'>

                        </div>
                        <div className='edit-input'>

                            <div className="txt-field">
                                <input type="text" placeholder='Nume Prenume' required />
                                <label>Full name*</label>
                            </div>
                            <div className="txt-field">
                                <input type="text" placeholder='@numenume' required />
                                <label>username</label>
                            </div>
                            <div className="txt-field">
                                <input type="text" placeholder='Chisinau' required />
                                <label>Locație</label>
                            </div><div className="txt-field">
                                <input type="text" placeholder='Artist' required />
                                <label>Profesie</label>
                            </div>

                        </div>

                        <div className='social-buttons'>
                            <title>social media</title>

                            <button><img src={youtube} /></button>
                            <button><img src={telegram} /></button>
                            <button><img src={instagram} /></button>

                            <div className='social-buttons active'><img src={instagram} /> <input type="text" placeholder='@numenume' required /></div>
                        </div>

                        <div className='edit-about'>
                            <title>Despre mine</title>
                            <div className='edit-about-place'>
                                <input type='text' placeholder='Niște cuvinte despre mine ...' />
                            </div>
                        </div>

                        <div className='verify-text'>
                            <div> <img src={chekbox} /> Verifica-ți email-ul
                                Securizează-ți contul și primești actualizări despre tranzacțiile tale pe Gallery Sentiment.</div>


                        </div>

                        <button className='save-btn'>Salvează</button>

                    </div>
                </div>

            </>
        );
    }
};