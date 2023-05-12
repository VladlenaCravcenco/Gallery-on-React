import React, { Component } from 'react';
import heartEmpty from '../../resources/svg/heart-empty.svg';
import work3 from '../../resources/works/work3.jpg';
import work4 from '../../resources/works/work4.jpg';
import work5 from '../../resources/works/work5.jpg';
import work6 from '../../resources/works/work6.jpg';
import work7 from '../../resources/works/work7.jpg';
import work8 from '../../resources/works/work8.jpg';
import work9 from '../../resources/works/work9.jpg';
import work10 from '../../resources/works/work10.jpg';
import heartcolor from '../../resources/svg/heart-color.svg';



export default class RandomLucruri extends Component {

    render() {
        return (
            <>
            <div className="lucruri">
        <div className="filter">
            <div className="tittle">Filtru</div>
            <div className="separator"></div>

            <div className="Marimea">
                <div className="tittle">Marimea</div>

                <div className="radio"><input type="radio" id="mic"/> <label for="mic">mic (sub 40cm)</label></div>
                <div className="radio"> <input type="radio" id="mediu"/> <label for="mediu">mediu (40-100cm)</label>
                </div>
                <div className="radio"> <input type="radio" id="mare"/> <label for="mare">mare (peste 100cm)</label>
                </div>

            </div>

            <div className="separator"></div>

            <div className="Pret">
                <div className="tittle">Pret</div>
                <div className="price_input">
                    <div className="field"><span>Min</span>
                        <input type="number" name="" id="min" value="50"/>
                    </div>

                    <div className="field">
                        <span>Max</span>
                        <input type="number" name="" id="max" value="999999"/>
                    </div>
                </div>

                <div className="slider-pret">
                    <div className="progress"></div>
                </div>

                <div className="range-input">
                    <input type="range" class="range-min" min="0" max="10000" value="50"/>
                    <input type="range" class="range-max" min="0" max="10000" value="999999"/>

                </div>

            </div>

            <div className="separator"></div>

            <div className="Material">
                <div className="tittle">Material</div>
                <div className="radio"><input type="radio" id="Acril"/> <label for="Acril">Acril</label></div>
                <div className="radio"><input type="radio" id="Bijuterii"/> <label for="Bijuterii">Bijuterii</label>
                </div>
                <div className="radio"><input type="radio" id="Canvas"/> <label for="Canvas">Canvas</label></div>
                <div className="radio"><input type="radio" id="Instalatii"/> <label for="Instalatii">Instalatii</label>
                </div>

            </div>

            <div className="separator"></div>

            <div className="Anexe">
                <input type="radio" id="Ediție limitată"/> <label for="Ediție limitată">Ediție limitată</label>

            </div>
        </div>
        <div className="cards_lucruri">
            <div className="tittle-x">76 de lucrări de artă:</div>
            <div className="container-x">
                <div className="grid-x">
                    <div className="xcard_1">
                        <div className="photo_x">
                            <img src={work3} alt=""/>
                        </div>
                        <div className="nume_x">
                            <div className="x-name">
                                <div className="numePrenume">Nume prenume</div>
                                <div className="like_x">
                                    <img src={heartEmpty} alt=""/>
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

                    <div className="xcard_2">
                        <div className="photo_x">
                            <img src={work4} alt=""/>
                        </div>
                        <div className="nume_x">
                            <div className="x-name">
                                <div className="numePrenume">Nume prenume</div>
                                <div className="like_x">
                                    <img src={heartEmpty} alt=""/>
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

                    <div className="xcard_3">
                        <div className="photo_x">
                            <img src={work5} alt=""/>
                        </div>
                        <div className="nume_x">
                            <div className="x-name">
                                <div className="numePrenume">Nume prenume</div>
                                <div className="like_x">
                                    <img src={heartEmpty} alt=""/>
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

                    <div className="xcard_4">
                        <div className="photo_x">
                            <img src={work6} alt=""/>
                        </div>
                        <div className="nume_x">
                            <div className="x-name">
                                <div className="numePrenume">Nume prenume</div>
                                <div className="like_x">
                                    <img src={heartcolor} alt=""/>
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

                    <div className="xcard_5">
                        <div className="photo_x">
                            <img src={work7} alt=""/>
                        </div>
                        <div className="nume_x">
                            <div className="x-name">
                                <div className="numePrenume">Nume prenume</div>
                                <div className="like_x">
                                    <img src={heartEmpty} alt=""/>
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

                    <div className="xcard_6">
                        <div className="photo_x">
                            <img src={work8} alt=""/>
                        </div>
                        <div className="nume_x">
                            <div className="x-name">
                                <div className="numePrenume">Nume prenume</div>
                                <div className="like_x">
                                    <img src={heartEmpty} alt=""/>
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

                    <div className="xcard_7">
                        <div className="photo_x">
                            <img src={work9} alt=""/>
                        </div>
                        <div className="nume_x">
                            <div className="x-name">
                                <div className="numePrenume">Nume prenume</div>
                                <div className="like_x">
                                    <img src={heartEmpty} alt=""/>
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

                    <div className="xcard_8">
                        <div className="photo_x">
                            <img src={work10} alt=""/>
                        </div>
                        <div className="nume_x">
                            <div className="x-name">
                                <div className="numePrenume">Nume prenume</div>
                                <div className="like_x">
                                    <img src={heartEmpty} alt=""/>
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
            
            </>
        );
    }
};