// components/auth/SignupBtn.jsx

import React, { useState } from 'react';
import { supabase } from '../../supabaseClient';
import Modal from '../modal/modal';
import '../../styles/auth.css';

const SignupBtn = () => {
  const [modalActive, setModalActive] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSignup = async () => {
    setLoading(true);
    setErrorMessage('');
    setSuccessMessage('');

    const { error } = await supabase.auth.signUp({ email, password });

    if (error) {
      setErrorMessage('Eroare la înregistrare: ' + error.message);
    } else {
      setSuccessMessage('Cont creat! Verifică emailul pentru confirmare.');
      setEmail('');
      setPassword('');
    }

    setLoading(false);
  };

  return (
    <>
      <button className="btn-registr" onClick={() => setModalActive(true)}>
        înregistrare
      </button>
      <Modal active={modalActive} setActive={setModalActive}>
        <div className="login-place">
          <div className="log-container">
            <div className="form-to-fill">
              <h1>Creare cont</h1>
              <div className="txt-field">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="txt-field">
                <input
                  type="password"
                  placeholder="Parolă"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              {errorMessage && <div className="error-message">{errorMessage}</div>}
              {successMessage && <div className="success-message">{successMessage}</div>}
              <button type="button" onClick={handleSignup} disabled={loading}>
                {loading ? 'Se înregistrează...' : 'Înregistrează'}
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default SignupBtn;
