import React, { useState } from 'react';
import heartcolor from '../../resources/svg/heart-color.svg';

function HookCounter() {
    const [count, setCount] = useState(0);

    const someFunc = (e) => {
        e.stopPropagation();
        setCount(count+1)
    }
    return (

        <div 
        
        onClick =  {(e) => someFunc(e) } className="like">
            <img src={heartcolor} alt="" />
            {count}
        </div>

    )
}
export default HookCounter;