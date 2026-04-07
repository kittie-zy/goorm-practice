const modalButton = document.querySelector('#modal_bt');
const catImage = document.querySelector('.cat');

modalButton.addEventListener("click",()=>{
    console.log('버튼을 누르셨어요');
    catImage.classList.toggle('on');
}, false);


// function greet(name){
//    return console.log(`안녕, ${name}님 반가워요!`);
// }

// let greet = function (name) {
//     return console.log(`안녕, ${name}님 반가워요!`);
// }

let greet = (name) => console.log(`안녕, ${name}님 반가워요!`);

greet('민진')

