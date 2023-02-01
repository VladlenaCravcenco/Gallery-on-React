import React from "react";
import './todo-filter-search.css'

const SearchPanel = () => {

    const searchStyle = {
        fontSize: '18px'
    };
   
    return <input 
        style={searchStyle}
        
        placeholder='search' />;
    
};

export default SearchPanel;
