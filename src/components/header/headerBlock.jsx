import { React, useState } from 'react';
import './header.css';
import { AiOutlineMenu, AiOutlineClose, AiOutlineSearch, AiOutlineUser } from 'react-icons/ai'
const HeaderBlock = () => {
    const [nav, setNav] = useState(false);
    /*
    так как мы перебираем простой массив и показываем меню..у нас все работает..
    но для того чтоб у каждого айтема меню был линк свой.. нам нужен не простой массив..а чтоб
    его каждый айтем был как объект.. делаем вот так<div className="следишь за рукой?)
    да"></div>)
    я в шоке... чтоб поменять язык на маке надо сделать звук громче)) фузуаузазза)а)за
    фу)
ой да ладно<div className=""></div>
смотри
подправь там соответственно что чему
тут?
дая удмала потом))) сек тогда аааа

    */

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
        const content = newMenuArr.map(({link, label}) => {
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
                <a className='btn-conectare' href="/login">conectare</a>
            </div>

            <div onClick={() => setNav(!nav)} className='mobile_btn'>
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>

        </header>
    );

};
export default HeaderBlock;