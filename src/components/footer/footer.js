import React, { Component } from 'react';

import Email from '../../resources/svg/email.svg';
import Insta from '../../resources/svg/instagram.svg';
import Facebook from '../../resources/svg/facebook-empty.svg';


class FooterBlock extends Component {

    render() {
        return (
            <div className="footer">
                    <div className="container-footer">
                        <div className="footer-bar">
                            <a href="#">despre noi</a>
                            <a href="#">contacte</a>
                            <a href="#">sprijin</a>
                        </div>
                        <div className="footer-line">
                            <div className="logo-copy">
                                <div class="footer-logo">Gallery Sentiment </div>

                                <div className="copyright">
                                    <h6>Gallery Sentiment 2023 © | Toate drepturile rezervate</h6>
                                </div>
                            </div>

                            <div className="socials">

                                <a href="#"><img src={Email} alt="" /></a>
                                <a href="#"><img src={Insta} alt="" /></a>
                                <a href="#"><img src={Facebook} alt="" /></a>

                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default FooterBlock;