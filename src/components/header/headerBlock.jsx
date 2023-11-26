import { React, useState } from 'react';
import './header.css';
import { AiOutlineMenu, AiOutlineClose, AiOutlineSearch, AiOutlineUser } from 'react-icons/ai'
import Modal from '../modal/modal'
import apple from '../../resources/svg/Apple.svg';
import google from '../../resources/svg/Google.svg';
import facebook from '../../resources/svg/Facebook.svg';
const HeaderBlock = () => {
    const [nav, setNav] = useState(false);
    const [modalActive, setModalActive] = useState(false)

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
    return (
        <header className={`navbar ${nav && 'pos-absolute'}`}>
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
                                        <input type="text" required />
                                        <label>Nume de utilizator sau email</label>
                                    </div>
                                    <div className="txt-field">
                                        <input type="password" required />
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
            </div>

            <div onClick={() => setNav(!nav)} className='mobile_btn'>
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>

        </header>
    );

};
export default HeaderBlock;