import React, { useState } from 'react';
import Modal from '../modal/modal'

import apple from '../../resources/svg/Apple.svg';
import google from '../../resources/svg/Google.svg';
import facebook from '../../resources/svg/Facebook.svg';
import './../modal/modal.css'


const LoginBtn = () => {
    const [modalActive, setModalActive] = useState(false)

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        rassword: ''
    })

    const [errors, setErrors] = useState({})


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData, [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const validationErrors = {}
        if (!formData.username.trim()) {
            validationErrors.username = 'username is required'
        }
        if (!formData.email.trim()) {
            validationErrors.email = 'email is required'
        } else if (!/\S+@\S+\.\S+/.text(formData.email)) { validationErrors.email = 'email is not valid' }

        if (!formData.password.trim()) {
            validationErrors.password = 'password is required'
        } else if (!(formData.password.length < 6)) { validationErrors.password = 'password shhould be at least 6 char' }

        setErrors(validationErrors)

        if (Object.keys(validationErrors).length === 0) {
            alert("Form Submitted successfully")
        }
    }

    return (
        <>
            <button onClick={() => setModalActive(true)} className="btn-registr">
                conectareg
            </button>
            <Modal active={modalActive} setActive={setModalActive}>
                <div className="login-place">
                    <div className="log-container">

                        <div className="form-to-fill">
                            <h1>Log in</h1>
                            <form onSubmit={handleSubmit} method="post">
                                <div className="txt-field">
                                    {errors.email && <span>{errors.email}</span>}
                                    <input onChange={handleChange} name='email' type="text" required />
                                    <label>Nume de utilizator sau email</label>
                                </div>
                                <div className="txt-field">
                                    {errors.password && <span>{errors.password}</span>}

                                    <input onChange={handleChange} name='password' type="password" required />
                                    <label>Parolă</label>
                                </div>
                                <div className="pass">Ați pierdut parola?</div>
                                <a href='/myroom' ><input type="submit" value="conectare" /></a>

                                <div className="signup-link">
                                    Don't have an account? <a href="signup">Creează un cont nou</a>
                                </div>

                                <div className="variante">
                                    <div className="cuApple"> <img src={apple} alt="" /> Continuă cu Apple</div>
                                    <div className="google"> <img src={google} alt="" /> Continuă cu Google</div>
                                    <div className="facebook"> <img src={facebook} alt="" /> Continuă cu Facebook</div>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </Modal>
        </>
    );

};

export default LoginBtn;