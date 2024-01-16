import { React, useState } from 'react';
import './header.css';
import { AiOutlineMenu, AiOutlineClose, AiOutlineSearch, AiOutlineUser } from 'react-icons/ai'
import Modal from '../modal/modal'
import apple from '../../resources/svg/Apple.svg';
import google from '../../resources/svg/Google.svg';
import facebook from '../../resources/svg/Facebook.svg';
import axiosFetch from "../../helpers/axios"
import { AUTH } from "../../helpers/constants"
import { Navigate } from 'react-router-dom'
import { isEmailValid } from "../../helpers/constants/functions"
import { menu } from "../../helpers/constants/data-array"

const HeaderBlock = () => {
    const [nav, setNav] = useState(false);
    const [modalActive, setModalActive] = useState(false)
    const [redirect, setRedirect] = useState(false)
    const [formData, setFormData] = useState({ email: '', password: '' })
    const [errors, setErrors] = useState({})

    const renderMenuItems = () => {
        const content = menu.map(({ link, label }) => {
            //item // вот тут у нас наш объект в цилк
            // const {link, label } = item
            return (
                <li key={label}><a href={link}>{label}</a></li>
            )
        })
        return content
    }

    const auth = () => {

        const fd = new fd()
        fd.append("email", formData.email)
        fd.append("password", formData.password)

        axiosFetch(AUTH, fd).then(action => {
            setRedirect(true)
        })
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
        setErrors({})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const { email, password } = formData
        const validationErrors = {}

        if (!email) {
            validationErrors.email = 'email is required'
        } else if (!isEmailValid(email)) {
            validationErrors.email = 'email is not valid'
        }

        if (!password) {
            validationErrors.password = 'password is required'
        } else if (password.length < 6) {
            validationErrors.password = 'password shhould be at least 6 char'
        }

        setErrors(validationErrors)

        if (Object.keys(validationErrors).length === 0) {
            alert("Form Submitted successfully")
            auth()
        }
    }

    return (
        <header className={`navbar ${nav && 'pos-absolute'}`}>
            {redirect && <Navigate to="/myroom" />}
            <a href="/" className='head-logo'>GALLERY SENTIMENT</a>

            <nav>
                <ul className={`menu ${nav && 'active'}`}>

                    {renderMenuItems()}
                </ul>
            </nav>
            <div className='right-nav'>
                <input type='search' name='search' />
                <button className='btn-conectare' onClick={() => setModalActive(true)} >conectare</button>
                <Modal id="signup" active={modalActive} setActive={setModalActive}>
                    <div className="login-place">
                        <div className="log-container">

                            <div className="form-to-fill">
                                <h1>Log in</h1>
                                <form onSubmit={handleSubmit} method="post">
                                    <div className="txt-field">
                                        {errors.email && <span>{errors.email}</span>}
                                        <input onChange={handleChange} value={formData.email} name="email" type="text" />
                                        <label>Nume de utilizator sau email</label>
                                    </div>
                                    <div className="txt-field">
                                        {errors.password && <span>{errors.password}</span>}
                                        <input onChange={handleChange} value={formData.password} name="password" type="password" />
                                        <label>Parolă</label>
                                    </div>
                                    <div className="pass">Ați pierdut parola?</div>
                                    {/* <a href='/myroom' > */}
                                    <input type="submit" value="conectare" />
                                    {/* </a> */}

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
            </div>

            <div onClick={() => setNav(!nav)} className='mobile_btn'>
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>

        </header>
    );

};
export default HeaderBlock;