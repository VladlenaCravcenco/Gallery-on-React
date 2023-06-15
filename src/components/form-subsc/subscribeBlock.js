import React from 'react';

import LoginBtn from '../form-subsc/login';
import SignupBtn from '../form-subsc/Signup';

const SubscribeBlock = () => {

    return (
        <>
            <div className="form-subscribe">
                <div className="bg-pic">

                    <div className="bgleft"></div>
                    <div className="bg_form">

                        <h2>Înscrieți-vă pentru a colecta artă de la cei mai importanți artiști din Moldova</h2>
                        <div className="subscribe-button">
                            <LoginBtn />
                            <SignupBtn />
                        </div>
                    </div>
                    <div className="bgright"></div>
                </div>


            </div>
        </>
    );
};
export default SubscribeBlock;