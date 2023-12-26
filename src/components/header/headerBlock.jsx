import { React, useState } from 'react';
import './header.css';
import { AiOutlineMenu, AiOutlineClose, AiOutlineSearch, AiOutlineUser } from 'react-icons/ai'
import Modal from '../modal/modal'
import apple from '../../resources/svg/Apple.svg';
import google from '../../resources/svg/Google.svg';
import facebook from '../../resources/svg/Facebook.svg';
import axiosFetch from "../../helpers/axios"
import { AUTH } from "../../helpers/constants"
import { Navigate  } from 'react-router-dom'

const HeaderBlock = () => {
    const [nav, setNav] = useState(false);
    const [modalActive, setModalActive] = useState(false)
    const [redirect, setRedirect] = useState(false)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const newMenuArr = [
        {
            label: "despre noi",
            link: "/desprenoi"
        },
        {
            label: "evenimente",
            link: "/evenimente"
        },
        {
            label: "licitaţie",
            link: "/licitatie"
        },
        {
            label: "artiștii",
            link: "/artistii"
        },
        {
            label: "contacte",
            link: "/contacte"
        },
    ]

    const renderMenuItems = () => {
        const content = newMenuArr.map(({ link, label }) => {
            //item // вот тут у нас наш объект в цилк
            // const {link, label } = item
            return (
                <li key={label}><a href={link}>{label}</a></li>
            )
        })
        return content
    }

    const auth = () => {

        const formData = new FormData()

        formData.append("email", email)
        formData.append("password", password)

        axiosFetch(AUTH, formData).then(action => {
            console.log("action", action)
            setRedirect(true)
        })

    }

    return (
        <header className={`navbar ${nav && 'pos-absolute'}`}>
            {redirect && <Navigate  to="/myroom" />}
            <a href="/" className='head-logo'>GALLERY SENTIMENT</a>

            <nav>
                <ul className={`menu ${nav && 'active'}`}>

                    {renderMenuItems()}
                </ul>
            </nav>
            <div className='right-nav'>
                <input type='search' name='search' />
                <a className='btn-conectare' onClick={() => setModalActive(true)} >conectare</a>
                <Modal id="signup" active={modalActive} setActive={setModalActive}>
                    <div className="login-place">
                        <div className="log-container">

                            <div className="form-to-fill">
                                <h1>Log in</h1>
                                <form method="post">
                                    <div className="txt-field">
                                        <input value={email} type="text" required onChange={(e) => setEmail(e.target.value)} />
                                        <label>Nume de utilizator sau email</label>
                                    </div>
                                    <div className="txt-field">
                                        <input value={password} type="password" required onChange={(e) => setPassword(e.target.value)} />
                                        <label>Parolă</label>
                                    </div>
                                    <div className="pass">Ați pierdut parola?</div>
                                    {/* <a href='/myroom' > */}
                                        <input type="button" value="conectare" onClick={() => auth()} />
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