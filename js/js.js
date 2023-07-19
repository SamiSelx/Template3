// countdown

let box = document.querySelectorAll(".event-date .box-date h3");



let second = setInterval(countdown, 1000, box[0]);
let minut = setInterval(countdown , 59000 , box[0]);

function countdown(boxDate) {
    boxDate.innerHTML -= 1;
    if(boxDate.innerHTML <= 9){
        boxDate.innerHTML = `0${boxDate.innerHTML}`; 
    }
    if(boxDate.innerHTML === 1){
        boxDate.innerHTML = 59;
        console.log(boxDate.innerHTML)
        
    }

}
let prog = document.getElementsByClassName("progress");



let stats = document.querySelectorAll(".stats-box");

let elem1= Number(stats[0].children[1].innerHTML);
let elem2= Number(stats[1].children[1].innerHTML);
let elem3= Number(stats[2].children[1].innerHTML);
let elem4= Number(stats[3].children[1].innerHTML);
let elem =[elem1,elem2,elem3,elem4];

for (i=0;i<4;i++){
    stats[i].children[1].innerHTML = 0;
}
let btnUp = document.getElementById("btn-up");
console.log(btnUp)
window.onscroll = function() {
    if(scrollY >= 11618){
         setInterval(() => {
            for(let i=0;i<3;i++){
                if(elem[i] !== Number(stats[i].children[1].innerHTML)){
                    stats[i].children[1].innerHTML = Number(stats[i].children[1].innerHTML) + 1;
                }
            }
        }, 233);
        setInterval(() =>{
            if(elem[3] !== Number(stats[3].children[1].innerHTML)){
                stats[3].children[1].innerHTML = Number(stats[3].children[1].innerHTML) + 1;
            }
        },70)
        
    }
    if(scrollY >= 6864 ){
        for(i=0;i<=3;i++){
            prog[i].classList.add("progress2");
        }
    }
    
    if(scrollY >= 500){
        btnUp.style.display = "block";
    }else{
        btnUp.style.display = "none";
    }

}

btnUp.onclick = function () {
    scrollTo({
        top:0,
        left: 0,
        behavior: "smooth"
    })
}
//لازم تحطها في onscroll لانه
// في حالة سكرول تطبق function
// if(scrollY >= 7009){
//     console.log('hey');
// }

scrollTo({
     top:10,
    left : 0,
    behavior: "smooth"
});

// let count = setInterval(counter , 10 ,elem); 
// function counter (elem){
//     stats[0].children[1].innerHTML = Number(stats[0].children[1].innerHTML) + 1;
//     if(Number(stats[0].children[1].innerHTML) === elem[0]){
//         clearInterval(count);
//     }
    
// }
// let count1 = setInterval(counter , 10 ,elem); 
// function counter (elem){
//     stats[1].children[1].innerHTML = Number(stats[1].children[1].innerHTML) + 1;
//     if(Number(stats[1].children[1].innerHTML) === elem[1]){
//         clearInterval(count1);
//     }
// }
// function counter (elem){
//     stats[2].children[1].innerHTML = Number(stats[2].children[1].innerHTML) + 1;
//     if(Number(stats[2].children[1].innerHTML) === elem[2]){
//         clearInterval(count);
//     }
    
// }
// function counter (elem){
//     stats[0].children[1].innerHTML = Number(stats[0].children[1].innerHTML) + 1;
//     if(Number(stats[0].children[1].innerHTML) === elem[0]){
//         clearInterval(count);
//     }
    
// }

