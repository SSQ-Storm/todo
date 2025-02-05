import React from "react";

const SearchPanel = () => {

    const searchText = 'Type here to search';
    const searchStyle = {
        fontSize: '20rem'
    };


    return <input
        style={searchStyle}
        placeholder={searchText}
        disabled={true} />;
};

export default SearchPanel
