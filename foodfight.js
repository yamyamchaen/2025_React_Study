function solution(food) {
    var answer = '';
    let leftSide = "";
    
    
    for (let i = 1; i < food.length; i++) {
        let count = Math.floor(food[i] / 2);
        leftSide += i.toString().repeat(count);
    }
    
    answer = leftSide + "0" + [...leftSide].reverse().join("");
    
    return answer;
}
