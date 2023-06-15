import React, { Component } from 'react';
import Youtube from '../../resources/svg/youtube-video.svg';
import Telegram from '../../resources/svg/send-message-dm.svg';
import Instaw from '../../resources/svg/instagram-white.svg';
import './myroomstyle.css'


class Myroomheader extends Component {

    render() {
        return (

            <div className="header-profile_r">
                <div className="container">
                    
                        <div className='photo-name_r'>
                            <div className="photo-profile_r">
                            </div>
                            <div className="painter-name_r">
                                <h3>CRAVCENCO VLADLENA</h3>
                            </div>
                        </div>
                        <div className='user-folow-socials_r'>
                            <div className="user-name_r">
                                @cravcencoART
                            </div>
                            <div className="followers_r">
                                următori 123
                            </div>
                            <div className="socials_r">
                                <a href="#"><img src={Youtube} alt="" /></a>
                                <a href="#"><img src={Telegram} alt="" /></a>
                                <a href="#"><img src={Instaw} alt="" /></a>
                            </div>
                        </div>
                        <a href='/setings'><div className="button_setari_r">
                            setări
                        </div></a>
                   

                </div>
            </div>
        );
    }
}

export default Myroomheader;