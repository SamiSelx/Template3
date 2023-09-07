// countdown Event

let boxDate = document.querySelectorAll(".event-date .box-date h3");
let eventDate = new Date("01-01-2024").getTime();
let counter = setInterval(()=>{
    let seconds = Math.floor((eventDate -  Date.now()) /1000%60);
    let minutes = Math.floor((eventDate -  Date.now()) /1000/60%60);
    let hours = Math.floor((eventDate -  Date.now()) /1000/60/60%24)
    let days = Math.floor((eventDate -  Date.now()) /1000/60/60/24)

    boxDate[0].innerHTML = days<10? "0" + days : days;
    boxDate[1].innerHTML = hours<10?  "0" + hours : hours;
    boxDate[2].innerHTML = minutes<10? "0" + minutes  : minutes;
    boxDate[3].innerHTML = seconds<10? "0" + seconds : seconds;
    if(eventDate - Date.now() === 0){
        clearInterval(counter);
    }
},1000)


let prog = document.getElementsByClassName("progress");

let stats = document.querySelectorAll(".stats-box");

let elem1= Number(stats[0].children[1].innerHTML);
let elem2= Number(stats[1].children[1].innerHTML);
let elem3= Number(stats[2].children[1].innerHTML);
let elem4= Number(stats[3].children[1].innerHTML);
let elem =[elem1,elem2,elem3,elem4];
console.log(elem)
for (i=0;i<4;i++){
    stats[i].children[1].innerHTML = 0;
}

let btnUp = document.getElementById("btn-up");


window.onscroll = function() {

    //Stats

    if(scrollY >= 11574){

         setInterval(() => {
            // for(let i=0;i<3;i++){
            //     if(elem[i] !== Number(stats[i].children[1].innerHTML)){
            //         stats[i].children[1].innerHTML = Number(stats[i].children[1].innerHTML) + 1;
            //     }
            // }
            if(elem[0] !== Number(stats[0].children[1].innerHTML)){
                stats[0].children[1].innerHTML = Number(stats[0].children[1].innerHTML) + 1;
            }

        }, 167);
        setInterval(()=>{
            if(elem[1] !== Number(stats[1].children[1].innerHTML)){
                stats[1].children[1].innerHTML = Number(stats[1].children[1].innerHTML) + 1;
            }
        },185)
        setInterval(()=>{
            if(elem[2] !== Number(stats[2].children[1].innerHTML)){
                stats[2].children[1].innerHTML = Number(stats[2].children[1].innerHTML) + 1;
            }
        },200)
        setInterval(() =>{
            if(elem[3] !== Number(stats[3].children[1].innerHTML)){
                stats[3].children[1].innerHTML = Number(stats[3].children[1].innerHTML) + 1;
            }
        },50)
        
    }

    //progress Bar

    if(scrollY >= 6864 ){
        for(i=0;i<=3;i++){
            prog[i].classList.add("progress2");
        }
    }

    // Scroll Btn Up

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

// scrollTo({
//     top: 10,
//     left : 0,
//     behavior: "smooth"
// });

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



let regEmail = /^\w+[^\^-\W]@\w+\.\w{2,3}$/ig
let regName = /^[A-Z]\w+$/ig
let regPhone = /^0\d{9}$/g
let inputName = document.querySelectorAll(".login-content form input")[0]
let inputEmail = document.querySelectorAll(".login-content form input")[1]
let inputPhone = document.querySelectorAll(".login-content form input")[2]

var validName = false;
var validPhone = false;
var validEmail = false;
inputName.onblur = function(){
    validName = regName.test(this.value);
    check(validName,this)
    regName.test(this.value)
}
inputName.addEventListener("input",function(){
    validName = regName.test(this.value);
    check(validName,this)
    regName.test(this.value)
})
//**********************//
// 2 methode pour changes

 inputEmail.onblur = function(){
    validEmail = regEmail.test(this.value);
    check(validEmail,this)
    regEmail.test(this.value)

}

inputEmail.addEventListener("input",function(){
    validEmail = regEmail.test(this.value);
    check(validEmail,this)
    regEmail.test(this.value)
})


//**********************//
inputPhone.onblur = function(){
    validPhone = regPhone.test(this.value);
    check(validPhone,this)
    regPhone.test(this.value)
}
inputPhone.addEventListener("input",function(){
    validPhone = regPhone.test(this.value);
    check(validPhone,this)
    regPhone.test(this.value)
})

//**********************//

function check(valid,input){
    if(valid){
        input.classList.remove("fail")
        input.classList.add("succes")
            
    }else{
        input.classList.add("fail")
        input.classList.remove("succes")
            
    }
        
}
let formP = document.querySelector(".login-content form")
document.querySelector(".login-content form").onsubmit = function(){
    formP.remove()
    if(!(validName && validPhone && validEmail)){
        if(!validName){
            inputName.classList.add("fail-animation")
            
        }else{
            inputName.classList.remove("fail-animation")
        } 
        if(!validEmail){
            inputEmail.classList.add("fail-animation")
        }else{
            inputEmail.classList.remove("fail-animation")
        }
        if(!validPhone){
            inputPhone.classList.add("fail-animation")
        }else{
            inputPhone.classList.remove("fail-animation")
        }
        document.querySelector(".login-content").appendChild(formP)
        return false;
    }
    document.querySelector(".login-content").appendChild(formP)
}
