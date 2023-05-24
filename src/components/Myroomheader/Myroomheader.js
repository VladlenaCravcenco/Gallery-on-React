import React, { Component } from 'react';
import Youtube from '../../resources/svg/youtube-video.svg';
import Telegram from '../../resources/svg/send-message-dm.svg';
import Instaw from '../../resources/svg/instagram-white.svg';



class Myroomheader extends Component {

    render() {
        return (

            <div className="header-profile">
                <div className="container-head-prof-room">
                    <div className="creative-header-room">
                        <div className='photo-name'>
                            <div className="photo-profile-room">
                            </div>
                            <div className="painter-name-room">
                                <h3>CRAVCENCO VLADLENA</h3>
                            </div>
                        </div>
                        <div className='user-folow-socials'>
                            <div className="user-name-room">
                                @cravcencoART
                            </div>
                            <div className="followers-room">
                                următori 123
                            </div>
                            <div className="socials-room">
                                <a href="#"><img src={Youtube} alt="" /></a>
                                <a href="#"><img src={Telegram} alt="" /></a>
                                <a href="#"><img src={Instaw} alt="" /></a>
                            </div>
                        </div>
                        <a href='/setings'><div className="button_setari">
                            setări
                        </div></a>
                    </div>

                </div>
            </div>
        );
    }
}

export default Myroomheader;