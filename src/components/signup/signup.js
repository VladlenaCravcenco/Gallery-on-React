import React, { Component } from 'react';


export default class SignUp extends Component {

    render() {
        return (
        
            <>

            <div clasNames="signup_box">
        <div className="exit"><img src="../vlada_templates/resurses/Stroke 2/x-close-delete.svg" alt=""/></div>
        <div className="motiv_text">Înscrieți-vă pentru a colecta artă <br/> de la cei mai importanți artiști <br/>din Moldova</div>
        <div className="input_nume"><div class="tittle">Nume</div><input type="text" name="" id="" placeholder="Nume de utilizator sau email" required/><img src="../vlada_templates/resurses/Stroke 2/security-password-key.svg" alt=""/></div>
        <div className="input_parola"><div class="tittle">Parola</div><input type="password" name="ghgh" id="" placeholder="********" required/><img src="../vlada_templates/resurses/Stroke 2/eye-password-show.svg" alt=""/></div>
        <div className="subtext">Parola trebuie să aibă cel puțin 8 caractere și să includă <br/> o literă minusculă, literă mare și o cifră.</div>
        <div className="button_registra">Înregistrează</div>
        <div className="sau">sau</div>
        <div className="variante">
            <div className="cuApple"> <img src="../vlada_templates/resurses/Apple.svg" alt=""/> Continuă cu Apple</div>
            <div className="google"> <img src="../vlada_templates/resurses/Google.svg" alt=""/> Continuă cu Google</div>
            <div className="facebook"> <img src="../vlada_templates/resurses/Facebook.svg" alt=""/> Continuă cu Facebook</div>
        </div>
        <div className="link_login">Ai deja un cont? <a href="login">Conectare</a></div>
        <div className="termen_de_util">Făcând clic pe Înscrieți-vă sau Continuați cu Apple, Google sau Facebook, sunteți de acord cu Termenii de utilizare și Politica de confidențialitate a Artsy și să primiți e-mailuri de la Artsy.</div>
    </div>

            </>
        );
    }
};