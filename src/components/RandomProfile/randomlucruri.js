import React, { Component } from 'react';

import './main';
import './style.css';
import CardsLucruri from './CardsLucruri';


export default class RandomLucruri extends Component {

    state = {
        isAcril: false,
        isBijuterie: false,
    }

    render() {
        const { isAcril, isBijuterie } = this.state
        return (
            <>
                <div className="lucruri">
                    <div className="filter">
                        <div className="tittle">Filtru</div>
                        <div className="separator"></div>

                        <div className="Marimea">
                            <div className="tittle">Marimea</div>

                            <div className="checkbox"><input type="checkbox" id="mic" /> <label for="mic">mic (sub 40cm)</label></div>
                            <div className="checkbox"> <input type="checkbox" id="mediu" /> <label for="mediu">mediu (40-100cm)</label>
                            </div>
                            <div className="checkbox"> <input type="checkbox" id="mare" /> <label for="mare">mare (peste 100cm)</label>
                            </div>

                        </div>

                        <div className="separator"></div>

                        <div className="Pret">
                            <div className="tittle">Pret</div>
                            <div className="price_input">
                                <div className="field"><span>Min</span>
                                    <input type="number" name="" id="min" value="50" />
                                </div>

                                <div className="field">
                                    <span>Max</span>
                                    <input type="number" name="" id="max" value="999999" />
                                </div>
                            </div>

                            <div className="slider-pret">
                                <div className="progress"></div>
                            </div>

                            <div className="range-input">
                                <input type="range" class="range-min" min="0" max="10000" value="50" />
                                <input type="range" class="range-max" min="0" max="10000" value="999999" />

                            </div>

                        </div>

                        <div className="separator"></div>

                        <div className="Material">
                            <div className="tittle">Material</div>
                            <div className="checkbox"><input type="checkbox" id="Acril" value={isAcril}  onChange={(e) => this.setState({ isAcril: e.target.checked})}/> <label for="Acril">Acril</label></div>
                            <div className="checkbox"><input type="checkbox" id="Bijuterii" value={isBijuterie} onChange={(e) => this.setState({ isBijuterie: e.target.checked})}/> <label for="Bijuterii">Bijuterii</label>
                            </div>
                            <div className="checkbox"><input type="checkbox" id="Canvas" /> <label for="Canvas">Canvas</label></div>
                            <div className="checkbox"><input type="checkbox" id="Instalatii" /> <label for="Instalatii">Instalatii</label>
                            </div>

                        </div>

                        <div className="separator"></div>

                        <div className="Anexe">
                            <input type="checkbox" id="Ediție limitată" /> <label for="Ediție limitată">Ediție limitată</label>

                        </div>
                    </div>
                    <CardsLucruri 
                        isAcrilProp={isAcril}
                        isBijuterieProp={isBijuterie}
                    />
                </div>

            </>
        );
    }
};