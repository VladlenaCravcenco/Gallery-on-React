import React, { Component } from 'react';

class MenuAdd extends Component {

    render() {
        return (

            <div className="menu_adaugari">
    <div className="container">
        <div className="navbar_adaugari">
            <div className="lucruri">
                <div className="tittle">Lucruri</div>
                <div className="grid_adaugari">
                <div className="adaugare">
                    <button>Adăugare</button>
                </div>
                </div>
            </div>
            <div className="statistici">
                <div className="tittle">Statistici</div>
               <p> Nimic încă.</p>
            </div>
            <div className="salvat">
                <div className="tittle">Salvat</div>

                <p>Nimic încă.</p>
            </div>

            <div className="urmari">
                <div className="tittle">Urmări</div>

                <p>Nimic încă.</p>
            </div>
        </div>
    </div>
</div>
        );
    }
}

export default MenuAdd;