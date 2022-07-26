import React from 'react';
import Slider from "../Components/Slider/Slider";
import Feautures from "../Components/Feautures/Feautures";
import Credentials from "../Components/Credentials/Credentials";

const Home = () => {
    return (
        <div className='Home'>
            <Slider/>
            <Feautures/>
            <Credentials/>
        </div>
    );
};

export default Home;