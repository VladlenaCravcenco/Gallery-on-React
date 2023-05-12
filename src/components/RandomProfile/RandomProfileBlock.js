import React, { Component } from 'react';

import alarm from '../../resources/svg/notification-bell-alarm.svg';
import youtube from '../../resources/svg/youtube-video.svg';
import telegram from '../../resources/svg/send-message-dm.svg';
import instaw from '../../resources/svg/instagram-white.svg';
import eyepassword from '../../resources/svg/eye-password-show.svg';
import work7 from '../../resources/works/work7.jpg';
import arrowl from '../../resources/svg/arrow-l.svg';
import arowr from '../../resources/svg/arrow-r.svg';


class RandomProfileBlock extends Component {

    render() {
        return (
            <div className="header-profile">
        {/* <div className="container-head-prof">
            <div className="creative-header">

                <div className="photo-profile"> </div>
                <div className="painter-name">
                    <h3>CRAVCENCO VLADLENA</h3>
                </div>
                <div className="user-name">
                    <h4>@cravcencoART</h4>
                </div>
                <div className="button_urma">
                    urmă
                </div>
                <div className="followers">
                    <h5>următori 123</h5>
                </div>
                <div className="alerta">
                    <img src={Alarm} alt=""/>
                    creați alertă
                </div>
                <div className="socials">
                    <a href="#"><img src={Youtube} alt=""/></a>
                    <a href="#"><img src={Telegram} alt=""/></a>
                    <a href="#"><img src={Instaw} alt=""/></a>
                </div>
            </div>
            <div className="popular_art">
                <div className="popular_art_info">
                    <div className="art-name">
                        DENUMIRE
                    </div>
                    <div className="art-info">
                        Imprimare cu cerneală cu jet de Fine Art RAG+ MATT 310g
                    </div>
                    <div className="art-price">
                        €8,000
                    </div>
                    <div className="art-button-view">
                        <img src={Eyepassword} alt=""/> vedere in
                        camera
                    </div>
                    <div className="arrow-left">
                        <img src={Arrowl} alt=""/>
                    </div>
                    <div className="art-descrip">
                        Inspired by the covers of prominent fashion magazines and the rich cultural history of her own
                        Kenyan heritage, Thandiwe Muriu aims to highlight the natural beauty of women with whom she
                        identifies. Muriu photographs her subjects in striking, intricately patterned fabrics that often
                        resemble the traditional textiles of various African countries and cultures.<br/><br/>

                        Backdropping the subjects using the same vibrant pattern, Muriu creates hypnotizing illusions.
                        Muriu has increasingly gained recognition for her distinctive images and was ...
                    </div>
                    <div className="art-button-detalii">
                        detalii
                    </div>
                </div>
                <div className="art-frame">
                    <div className="art-main">
                        <img src={Work7} alt=""/>
                    </div>
                </div>
                <div className="arrow-right">
                    <img src={Arrowr} alt=""/>
                </div>
            </div>
        </div> */}
    </div>
        );
    }
}

export default RandomProfileBlock;