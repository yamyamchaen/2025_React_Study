import React, {useState} from 'react';

function Introduce({name, age, hobby}){
    const favoriteFood =['육회', '고기', '찌개', '달달한고'];
    const [food, setFood] = useState(0);

    const foodChange = () => {
        setFood(cfood => (cfood + 1) % favoriteFood.length);
    }

    return (
        <div>
            <h4>이름 : {name}</h4>
            <h4>나이 : {age}</h4>
            <h4>취미 : {hobby}</h4>
            <h4>좋아하는 음식 : {favoriteFood[food]}</h4>
            <button onClick = {foodChange}>음식 바꾸기</button>
        </div>
    )
}
export default Introduce;