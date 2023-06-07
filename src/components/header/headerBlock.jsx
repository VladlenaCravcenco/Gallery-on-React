import { React, useState } from 'react';
import styles from './header.css'
import { AiOutlineMenu, AiOutlineClose, AiOutlineSearch, AiOutlineUser } from 'react-icons/ai'
const HeaderBlock = () => {
    const [nav, setNav] = useState(false);


    return (
        <header className='navbar'>
            <a href="/" className='head-logo'>GALLERY SENTIMENT</a>

            <nav>
                <ul className={nav ? ['menu', 'active'].join(' ') : ['menu']}>
                    {["despre noi", "evenimente", "licitaţie", "artiștii", "opere de artă", "contacte"].map(item =>
                        <li key={item}><a href='/'>{item}</a></li>
                    )}
                    {/* <li><a href="/desprenoi">despre noi</a></li>
                    <li><a href="/evenimente">evenimente</a></li>
                    <li><a href="/licitatie">licitaţie</a></li>
                    <li><a href="/artistii">artiștii</a></li>
                    <li><a href="/tablouripopulare">opere de artă</a></li>
                    <li><a href="/contacte">contacte</a></li>
                    <li></li> */}
                </ul>
            </nav>
                    <div className='right-nav'>
                        <input type='search' name='search' />
            <a className='btn-conectare' href="/login">conectare</a>
            </div>
            
            <div onClick={() => setNav(!nav)} className='mobile_btn'>
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>

        </header>
    );

};
export default HeaderBlock;