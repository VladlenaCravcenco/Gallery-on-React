import React, { Component } from 'react';

class SubscribeBlock extends Component {

    render() {
        return (
            <div className="form-subscribe">
                    <div className="bg-pic">

                        <div className="bgleft"></div>
                        <div className="bg-form">

                            <h2>Înscrieți-vă pentru a colecta artă de la cei mai importanți artiști din Moldova</h2>
                            <div className="subscribe-button">
                               <a href='/login'><button className="btn-conect"> 
                                    conectare
                                </button></a>
                               <a href='/signup'> <button className="btn-registr"> 
                                    registrare
                                </button></a>
                            </div>
                        </div>
                        <div className="bgright"></div>
                    </div>


                </div>
        );
    }
}

export default SubscribeBlock;