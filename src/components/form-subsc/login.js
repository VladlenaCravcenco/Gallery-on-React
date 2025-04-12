import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from '../modal/modal';
import { supabase } from '../../supabaseClient';
import './../modal/modal.css';

const LoginBtn = () => {
    const [modalActive, setModalActive] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        setLoading(true);
        setErrorMessage('');
        console.log("🔐 Пытаемся войти с email:", email);
      
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
      
        console.log("📦 Данные от Supabase:", data);
        console.log("❌ Ошибка от Supabase:", error);
      
        if (error) {
          setErrorMessage('Datele introduse nu sunt corecte. Încearcă din nou.');
        } else {
          alert('Autentificat cu succes!');
          setModalActive(false);
          setEmail('');
          setPassword('');
          navigate('/myroom');
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
                            <h1>Log in</h1>
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
                                <div className="error-message" style={{ color: 'crimson', marginBottom: '1rem' }}>
                                    <p>{errorMessage}</p>
                                    <button
                                        type="button"
                                        style={{
                                            marginTop: '0.5rem',
                                            padding: '0.3rem 0.7rem',
                                            backgroundColor: '#eee',
                                            border: '1px solid #aaa',
                                            borderRadius: '4px',
                                            cursor: 'pointer'
                                        }}
                                        onClick={() => setErrorMessage('')}
                                    >
                                        Încearcă din nou
                                    </button>
                                </div>
                            )}

                            <div className="pass">Ați pierdut parola?</div>

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