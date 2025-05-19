const counter =document.getElementById('count');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const resetNum = document.getElementById('reset');

let count = 0;
increaseBtn.addEventListener('click' , ()=>{
    count++;
    counter.innerText = count;
});
decreaseBtn.addEventListener('click', ()=>{
    count--;
    counter.innerText = count;
});
resetNum.addEventListener('click',()=>{
    count = 0;
    counter.innerText = count;
});
