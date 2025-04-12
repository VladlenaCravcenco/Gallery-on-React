import React, { useState } from 'react';
import Modal from '../modal/modal';
import { supabase } from '../../supabaseClient';
import apple from '../../resources/svg/Apple.svg';
import google from '../../resources/svg/Google.svg';
import facebook from '../../resources/svg/Facebook.svg';
import '../modal/modal.css';

const SignupBtn = () => {
  const [modalActive, setModalActive] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {
    setLoading(true);
    console.log("📤 Отправка запроса на регистрацию:", email);
  
    const { data, error } = await supabase.auth.signUp({
      email,
      password
    });
  
    console.log("📥 Ответ Supabase:", data, error);
  
    if (error) {
      alert('Eroare la înregistrare: ' + error.message);
    } else {
      alert('Cont creat! Verifică emailul pentru confirmare.');
      setModalActive(false);
      setEmail('');
      setPassword('');
    }
  
    setLoading(false);
  };

  
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
                <input
                  type="email"
                  placeholder="Nume de utilizator sau email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="input_parola">
                <input
                  type="password"
                  placeholder="********"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="subtext">Parola trebuie să aibă cel puțin 8 caractere și să includă o literă minusculă, literă mare și o cifră.</div>
              <button
                className="button_registra"
                onClick={handleSignup}
                disabled={loading}
              >
                {loading ? 'Se înregistrează...' : 'Înregistrează'}
              </button>
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
          <div className="termen_de_util">Făcând clic pe Înscrieți-vă sau Continuați cu Apple, Google sau Facebook, sunteți de acord cu Termenii de utilizare și Politica de confidențialitate a Artsy.</div>
        </div>
      </Modal>
    </>
  );
};

export default SignupBtn;