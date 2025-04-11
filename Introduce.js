import React, { useState } from 'react';
import './Introduce.css';

function Introduce({ name, age, hobby }) {
    const favoriteFood = ['육회', '고기', '찌개', '달달한 거'];
    const [food, setFood] = useState(0);

    const foodChange = () => {
        setFood(cfood => (cfood + 1) % favoriteFood.length);
    }

    return (
        <div className="intro-card">
            <h2>🌼 자기소개 🌼</h2>
            <p><span className="label">이름:</span> {name}</p>
            <p><span className="label">나이:</span> {age}</p>
            <p><span className="label">취미:</span> {hobby}</p>
            <p><span className="label">좋아하는 음식:</span> {favoriteFood[food]}</p>
            <button className="yellow-button" onClick={foodChange}>🍳 음식 바꾸기</button>
        </div>
    )
}

export default Introduce;
