import React, { Component } from 'react';
import exit from '../../resources/svg/x-close-delete.svg';
import apple from '../../resources/svg/Apple.svg';
import google from '../../resources/svg/Google.svg';
import facebook from '../../resources/svg/Facebook.svg';

export default class SignUpBlock extends Component {

    render() {
        return (

            <>
                <div className='container-signup'>
                    <div clasNames="signup_box">
                        <div className="exit"><img src={exit} alt="" /></div>
                        <div className="motiv_text">Înscrieți-vă pentru a colecta artă <br /> de la cei mai importanți artiști <br />din Moldova</div>
                        <div className="input_nume"><div className="tittle">Nume</div><input type="text" name="" id="" placeholder="Nume de utilizator sau email" required /></div>
                        <div className="input_parola"><div className="tittle">Parola</div><input type="password" name="ghgh" id="" placeholder="********" required /></div>
                        <div className="subtext">Parola trebuie să aibă cel puțin 8 caractere și să includă <br /> o literă minusculă, literă mare și o cifră.</div>
                        <div className="button_registra">Înregistrează</div>
                        <div className="sau">sau</div>
                        <div className="variante-signup">
                            <div className="cuApple"> <img src={apple} alt="" /> Continuă cu Apple</div>
                            <div className="google"> <img src={google} alt="" /> Continuă cu Google</div>
                            <div className="facebook"> <img src={facebook} alt="" /> Continuă cu Facebook</div>
                        </div>
                        <div className="link_login">Ai deja un cont? <a href="/login">Conectare</a></div>
                        <div className="termen_de_util">Făcând clic pe Înscrieți-vă sau Continuați cu Apple, Google sau Facebook, sunteți de acord cu Termenii de utilizare și Politica de confidențialitate a Artsy și să primiți e-mailuri de la Artsy.</div>
                    </div>
                </div>
            </>
        );
    }
};