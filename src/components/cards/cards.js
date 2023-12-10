import React, { useState, useEffect } from 'react';
import arrowr from '../../resources/svg/arrow-r.svg';
import HookCounter from '../app/hookcounter.js';
import { Link } from 'react-router-dom';
import { GET_PRODUCTS_LIST } from "../../helpers/constants"
import axiosFetch from "../../helpers/axios"
import Spinner from "../../helpers/spinner"
import CookieHelper from "../../helpers/cookie-helper";

import './styles.css'

const CardsBlock = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [produsctList, setProductList] = useState([])
    useEffect(() => {
       
        setIsLoading(true)
        const token = CookieHelper("get", "token");
        const formData = new FormData()
        formData.append("token", token)
        axiosFetch(GET_PRODUCTS_LIST, formData).then(res => {
            setIsLoading(false)
            setProductList(res)
        })
    }, [])

    const renderGallery = () => {
        const content = produsctList.map(item => {
            const { id, title, shortDescription, image, like, likeCount } = item
            return (
                <div className="card-container">
                    <HookCounter {...{ likeCount, like, id }} />
                    <Link to='/random'>
                        <div id={id} className="card">
                            <div className="art">
                                <img src={image} alt="" />

                            </div>
                            <div className="button-room">
                                <div className="art-descrip">
                                    <a href='random' >{title}</a>
                                    <h4 >{shortDescription}</h4>
                                </div>
                                <button className="right-arrow">
                                    <img src={arrowr} alt="" />
                                </button>
                            </div>
                        </div>
                    </Link>
                </div>
            )
        })
        return content
    }

    const content = isLoading ? <Spinner /> : renderGallery()

    return (
        <div className="cards">
            <div className="container">
                <div className="title-cards">
                    <h1>Artiști noi</h1>
                </div>

                <div className="popular-cards">
                    {content}
                </div>
            </div>
        </div>
    );

};

export default CardsBlock;