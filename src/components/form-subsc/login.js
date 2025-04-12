import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../supabaseClient';
import Modal from '../modal/modal';

import apple from '../../resources/svg/Apple.svg';
import google from '../../resources/svg/Google.svg';
import facebook from '../../resources/svg/Facebook.svg';
import './../modal/modal.css';

const LoginBtn = () => {
  const [modalActive, setModalActive] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert('Eroare la conectare: ' + error.message);
    } else {
      alert('Autentificare reușită!');
      setModalActive(false);
      setEmail('');
      setPassword('');
      navigate('/myroom', { replace: true });
    }

    setLoading(false);
  };

  return (
    <>
      <button onClick={() => setModalActive(true)} className="btn-registr">
        conectare
      </button>
      <Modal active={modalActive} setActive={setModalActive}>
        <div className="login-place">
          <div className="log-container">
            <div className="form-to-fill">
              <h1>Log in</h1>
              <div className="txt-field">
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <label>Nume de utilizator sau email</label>
              </div>
              <div className="txt-field">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <label>Parolă</label>
              </div>
              <div className="pass">Ați pierdut parola?</div>
              <button onClick={handleLogin} disabled={loading}>
                {loading ? 'Se conectează...' : 'conectare'}
              </button>

              <div className="signup-link">
                Don't have an account? <a href="#">Creează un cont nou</a>
              </div>

              <div className="variante">
                <div className="cuApple">
                  <img src={apple} alt="" /> Continuă cu Apple
                </div>
                <div className="google">
                  <img src={google} alt="" /> Continuă cu Google
                </div>
                <div className="facebook">
                  <img src={facebook} alt="" /> Continuă cu Facebook
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default LoginBtn;