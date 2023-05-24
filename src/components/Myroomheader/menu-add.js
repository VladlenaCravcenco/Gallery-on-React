import React, { Component, useState } from 'react';

import work4 from '../../resources/works/work4.jpg';
import heartEmpty from '../../resources/svg/heart-empty.svg';


class MenuAdd extends Component {



    render() {

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
                                <button type='submit'>Adăugare</button>
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
}

export default MenuAdd;