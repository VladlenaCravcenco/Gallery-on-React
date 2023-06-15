import React, { useState } from 'react';
import Modal from '../modal/modal'
import apple from '../../resources/svg/Apple.svg';
import google from '../../resources/svg/Google.svg';
import facebook from '../../resources/svg/Facebook.svg';
import '../modal/modal.css'


const SignupBtn = () => {

    const [modalActive, setModalActive] = useState(false)
    return (
        <>
            <button id='login' className="btn-registr" onClick={() => setModalActive(true)}>
                registrare
            </button>
            <Modal id="login" active={modalActive} setActive={setModalActive}>
                <div className='signup-mod'>
                    <div className="motiv_text">Înscrieți-vă pentru a colecta artă de la cei mai importanți artiști din Moldova</div>

                    <div className='container-signup'>

                        <div className="signup_boxl">
                            <div className="input_nume">
                                <input type="text" placeholder="Nume de utilizator sau email" required />
                            </div>
                            <div className="input_parola">
                                <input type="password" placeholder="********" required />
                            </div>
                            <div className="subtext">Parola trebuie să aibă cel puțin 8 caractere și să includă <br /> o literă minusculă, literă mare și o cifră.</div>
                            <div className="button_registra">Înregistrează</div>
                        </div>

                        <div className='signup_boxr'>
                            <div className="sau">sau</div>
                            <div className="variante-signup">
                                <div className="cuApple"> <img src={apple} alt="" /> Continuă cu Apple</div>
                                <div className="google"> <img src={google} alt="" /> Continuă cu Google</div>
                                <div className="facebook"> <img src={facebook} alt="" /> Continuă cu Facebook</div>
                            </div>
                            <div className="link_login">Ai deja un cont? <a href="/login">Conectare</a></div>
                        </div>
                    </div>
                    <div className="termen_de_util">Făcând clic pe Înscrieți-vă sau Continuați cu Apple, Google sau Facebook, sunteți de acord cu Termenii de utilizare și Politica de confidențialitate a Artsy și să primiți e-mailuri de la Artsy.</div>

                </div>

            </Modal>
        </>
    );

};

export default SignupBtn;