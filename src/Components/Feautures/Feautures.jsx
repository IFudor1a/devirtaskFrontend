import React from 'react';
import './Feautures.css'
import {TopArrow} from "../../Exports/svg";
const feautures = [{id: 1, img: "https://img.icons8.com/ios/50/000000/low-price-euro.png", title: 'Low Price'},
    {id: 2, img: "https://img.icons8.com/dotty/80/000000/conference-background-selected.png", title: 'Excellent Staff'},
    {id: 3, img: "https://img.icons8.com/dotty/80/000000/marker.png", title: 'Reliable location'},
    {id: 4, img: "https://img.icons8.com/external-outline-andi-nur-abdillah/64/000000/external-Games-virtual-reality-(outline)-outline-andi-nur-abdillah.png", title: 'Uncounted amount of games'},
    {id: 5, img: "https://img.icons8.com/ios/50/000000/take-away-food.png", title: "Camp with food"},
    {id: 6, img: "https://img.icons8.com/external-line-zulfa-mahendra/48/000000/external-level-up-video-game-line-zulfa-mahendra.png", title: "Rank system"}]

const Feautures = () => {
    return (
        <div>
        <div className='feautures'>
                {feautures.map(feauture => (
                    <div className='item'>
                        <img src={feauture.img} alt={feauture.title}/>
                        <div>
                            <h3 className='title'>{feauture.title}</h3>
                        </div>
                    </div>
                ))}
        </div>
            <div className='content'>{TopArrow}</div>
        </div>
    );
};

export default Feautures;