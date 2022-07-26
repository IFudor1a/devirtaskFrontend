import React, {useEffect, useState} from 'react';
import './Slider.css';
import {LeftArrow, RightArrow} from "../../Exports/svg";

const slides = [
    {id: 1, url: 'https://sportyakutia.ru/images/1fotoposel/1posel2022/may22/CSGO_Tournaments_2.jpg', title: 'CS GO'},
    {id: 2, url: 'https://cloudfront-us-east-1.images.arcpublishing.com/infobae/ZK2DY4ZBWZHAPD3ZQHROY22C6A.jpg', title: 'League of Legends'},
    {id: 3, url: 'https://img.championat.com/news/big/d/v/patch-7-29-dlya-dota-2-dobavil-novogo-geroya-izmenil-kartu-i-balans_1618040102852038523.jpg', title: 'DOTA 2'},
    {id: 4, url: 'https://imgame.kz/wp-content/uploads/2021/08/R6SIEGE.jpg', title: 'Rainbow Six Siege'},

];

const Slider = () => {
    const [current, setCurrent] = useState(1);
    useEffect(() => {
        const delay = setTimeout(()=> {
            current < slides.length ? setCurrent(current + 1): setCurrent(1)
        }, 5000);
        return () => {clearTimeout(delay);}
    }, [current]);
    const handleClick = (direction) => {
        if(direction === 'right') {
            current < slides.length ? setCurrent(current + 1): setCurrent(1)
        } else {
            current <= 1? setCurrent(slides.length): setCurrent(current - 1)
        }
    }
    return (
        <div className='slider'>
            {slides.map(slide => {
                if(slide.id === current) return(
                <div className='slide' key={slide.id}>
                    <img src={slide.url} alt={slide.title}/>
                    <div className='info'>
                        <h2 className='title'>{slide.title}</h2>
                    </div>
                </div>)
            })}
            <div className='navigation'>
                <span className='prev-btn' onClick={() => handleClick('left')} >{LeftArrow}</span>
                <span className='next-btn' onClick={() => handleClick('right')}>{RightArrow}</span>
            </div>
        </div>
    );
};

export default Slider;