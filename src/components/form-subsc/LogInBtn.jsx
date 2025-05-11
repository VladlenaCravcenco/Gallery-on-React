// components/auth/LoginBtn.jsx

import React, { useState } from 'react';
import { supabase } from '../../supabaseClient';
import Modal from '../modal/modal';
import '../../styles/auth.css';

const LoginBtn = () => {
  const [modalActive, setModalActive] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
    setLoading(true);
    setErrorMessage('');

    const { data, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setErrorMessage('Email sau parola incorectă. Încearcă din nou.');
    } else {
      setModalActive(false);
      setEmail('');
      setPassword('');
    }

    setLoading(false);
  };

  return (
    <>
      <button className="btn-registr" onClick={() => setModalActive(true)}>
        conectare
      </button>
      <Modal active={modalActive} setActive={setModalActive}>
        <div className="login-place">
          <div className="log-container">
            <div className="form-to-fill">
              <h1>Autentificare</h1>
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
              {errorMessage && (
                <div className="error-message">
                  <p>{errorMessage}</p>
                  <button onClick={() => setErrorMessage('')}>Încearcă din nou</button>
                </div>
              )}
              <button type="button" onClick={handleLogin} disabled={loading}>
                {loading ? 'Se conectează...' : 'Conectare'}
              </button>
              <div className="signup-link">
                Nu ai un cont? <a href="#">Înregistrează-te</a>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default LoginBtn;
