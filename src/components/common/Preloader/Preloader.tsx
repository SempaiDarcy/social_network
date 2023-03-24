import React from 'react';
import loader from "../../assets/loader.gif";

const Preloader = () => {
    return (
        <div>
            <img style={{width:'20%'}} src={loader} alt={'img'}/>
        </div>
    );
};

export default Preloader;