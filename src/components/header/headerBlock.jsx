import { React, useState } from 'react';
import styles from './header.css'
import { AiOutlineMenu, AiOutlineClose, AiOutlineSearch, AiOutlineUser } from 'react-icons/ai'
const HeaderBlock = () => {
    const [nav, setNav] = useState(false);

    return (
        <header className={`${ nav && 'navbar'}`}>
            <a href="/" class="head-logo">GALLERY SENTIMENT</a>
            <nav>
                <ul className={nav ? [styles.menu, styles.active].join(' ') : [styles.menu]}>
                    <li><a href="/desprenoi">despre noi</a></li>
                    <li><a href="/evenimente">evenimente</a></li>
                    <li><a href="/licitatie">licitaţie</a></li>
                    <li><a href="/artistii">artiștii</a></li>
                    <li><a href="/tablouripopulare">opere de artă</a></li>
                    <li><a href="/contacte">contacte</a></li>
                    <li><input type='search' name='search'/></li>
                </ul>
            </nav>
            <a href="/login">conectare</a>
            <div onClick={() => setNav(!nav)} className={`${ nav && 'mobile_btn'}`}>
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>

        </header>
    );

};
export default HeaderBlock;