import React, { Component, useState } from 'react';
import Modal from '../../components/modal/modal';
import work4 from '../../resources/works/work4.jpg';
import heartEmpty from '../../resources/svg/heart-empty.svg';
import './../modal/modal.css'

import './../Myroomheader/myroomstyle.css'


const MenuAdd = () => {

        const MyroomSets = () => {

            const sets = [
                { name: "Lucruri", p: 'nimic încă' },
                { name: "Statistici", p: 'nimic încă' },
                { name: "Salvat", p: 'nimic încă' },
                { name: "Urmări", p: 'nimic încă' },
            ];

            const [selectedSet, setSelectedSet] = useState(null);
            const [transition, setTransition] = useState(null);


            const handleChange = (event) => {
                setTransition(true);
                setSelectedSet(sets.find((set) => set.name === event.target.value));

                setTimeout(() => {
                    setTransition(false);
                }, 500);
            };
        };

        const [modalActive, setModalActive] = useState(false)
        

        return (

            <div className="menu_adaugari">
                <div className="container">
                    <div className="navbar_adaugari">
                        <div className="lucruri-sets">
                            <div className="tittle">Lucruri</div>
                            <div className="tittle">Statistici</div>
                            <div className="tittle">Salvat</div>
                            <div className="tittle">Urmări</div>

                        </div>

                        <div className='lucruri-set'>
                            <div className="adaugare">
                                <button type='submit' onClick={() => setModalActive(true)}>Adăugare</button>
                                <Modal active={modalActive} setActive={setModalActive} >
                                    <div className='import_art'>
                                        import
                                    </div>
                                    <div className='inputs-descrip'>
                                        <input placeholder='denumire'></input>
                                    <input placeholder='price'></input>
                                    </div>
                                    <button>Adăuga</button>
                                    
                                </Modal>
                            </div>
                            <div className="grid_adaugari">

                                <div className='adaugat'>


                                    <div className="add_xcard_2">
                                        <div className="photo_x">
                                            <img src={work4} alt="" />
                                        </div>
                                        <div className="nume_x">
                                            <div className="x-name">
                                                <div className="numePrenume">Nume prenume</div>
                                                <div className="like_x">
                                                    <img src={heartEmpty} alt="" />
                                                </div>
                                            </div>

                                            <div className="denumirea">
                                                Denumirea
                                            </div>
                                            <div className="xprice">
                                                €10,000
                                            </div>
                                        </div>
                                    </div>

                                    <div className="add_xcard_3">
                                        <div className="photo_x">
                                            <img src={work4} alt="" />
                                        </div>
                                        <div className="nume_x">
                                            <div className="x-name">
                                                <div className="numePrenume">Nume prenume</div>
                                                <div className="like_x">
                                                    <img src={heartEmpty} alt="" />
                                                </div>
                                            </div>

                                            <div className="denumirea">
                                                Denumirea
                                            </div>
                                            <div className="xprice">
                                                €10,000
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    
}

export default MenuAdd;