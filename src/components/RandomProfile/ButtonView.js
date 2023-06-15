import { React, useState } from 'react';
import Modal from '../modal/modal'
import './../modal/modal.css'
import emptyroom from '../../resources/bg/emptyroom.jpg'
import work from '../../resources/works/work7.jpg'
import eyepassword from '../../resources/svg/eye-password-show.svg';


const ButtonView = () => {
    const [modalActive, setModalActive] = useState(false)
    return (
        <>
        <div className='view_btn'>
<a onClick={() => setModalActive(true)}><img src={eyepassword} alt="" /> vedere in camera</a>
        </div>
            
            <Modal active={modalActive} setActive={setModalActive}>
                <div className='view-room'>
                        <img className='empty' src={emptyroom}></img>
                        <img className='work' src={work}></img>
                </div>
            </Modal>

        </>
    );
}

export default ButtonView;