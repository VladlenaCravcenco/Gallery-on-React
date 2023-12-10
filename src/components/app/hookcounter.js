import React, { useState } from 'react';
import heartcolor from '../../resources/svg/heart-color.svg';
import heartEmpty from '../../resources/svg/heart-empty.svg';
import axiosFetch from "../../helpers/axios"
import CookieHelper from "../../helpers/cookie-helper";

import { SET_LIKE } from "../../helpers/constants"

function HookCounter({ likeCount, like = false, id }) {
    const [count, setCount] = useState(likeCount || 0);
    const [checked, setChecked] = useState(like);
    const token = CookieHelper("get", "token");
    const setLike = () => {

        const formData = new FormData()
        formData.append("token", token)
        formData.append("productId", id)
        axiosFetch(SET_LIKE, formData).then(action => {
            if (action === "up") {
                setCount(count + 1)
                setChecked(true)
            } else {
                setCount(count - 1)
                setChecked(false)
            }
        })
    }
    const heart = checked ? heartcolor : heartEmpty
    return (

        <div onClick={() => setLike()} className="like">
            <img src={heart} alt="" />
            {count}
        </div>

    )
}
export default HookCounter;