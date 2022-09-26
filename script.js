let prize = document.querySelector('.prize');
let tip = document.querySelector('.money-given');
let output = document.querySelector('.tip');
let button = document.querySelector('.button');

button.addEventListener('click', function(){
    let giveMoney = Math.abs(prize - tip);
    output.innerHTML = giveMoney;
})