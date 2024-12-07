const card = document.querySelectorAll(".card");
const btn = document.querySelectorAll(".button");
const back = document.querySelectorAll(".back");
const front = document.querySelectorAll(".front");

btn[0].onclick=function(){
    card[0].classList.toggle('flipped');
    setTimeout(function(){
        back[0].classList.toggle('d-none');
        front[0].classList.add('d-none');
    },300)
}
card[0].onmouseleave=function(){
    setTimeout(function(){
        card[0].classList.remove('flipped') 
        back[0].classList.add('d-none');
    },400)
    setTimeout(function(){
        front[0].classList.remove('d-none');
    },392)
}
btn[1].onclick=function(){
    card[1].classList.toggle('flipped')
    setTimeout(function(){
        back[1].classList.toggle('d-none');
        front[1].classList.add('d-none');
    },300)
}
card[1].onmouseleave=function(){
    setTimeout(function(){
        card[1].classList.remove('flipped') 
        back[1].classList.add('d-none');
    },400)
    setTimeout(function(){
        front[1].classList.remove('d-none');
    },392)
}
btn[2].onclick=function(){
    card[2].classList.toggle('flipped')
    setTimeout(function(){
        back[2].classList.toggle('d-none');
        front[2].classList.add('d-none');
    },300)
}
card[2].onmouseleave=function(){
    setTimeout(function(){
        card[2].classList.remove('flipped') 
        back[2].classList.add('d-none');
    },400)
    setTimeout(function(){
        front[2].classList.remove('d-none');
    },392)
}

const nav = document.querySelector("#nav");
const num1 = document.querySelector(".num1");
const num2 = document.querySelector(".num2");
const num3 = document.querySelector(".num3");
let intNum1 = 0;
let intNum2 = 0;
let intNum3 = 0;
let interval;
let interval2;
let interval3;

setInterval(function(){
    if(window.scrollY > 800){
        nav.style.backgroundColor="rgba(255, 179, 0, 1)";
        nav.classList.add("scrollOn");
    }else{
        nav.classList.remove("scrollOn");
        nav.style.backgroundColor="transparent";
    }
},100)

interval = setInterval(function(){
    if(nav.classList.contains("scrollOn")){
            intNum1++;
            num1.innerHTML="+"+intNum1;
    }
    if(intNum1==15){
        clearInterval(interval);
    }
},80);
interval2 = setInterval(function(){
    if(nav.classList.contains("scrollOn")){
            intNum2++;
            num2.innerHTML="+"+intNum2;
    }
    if(intNum2==25){
        clearInterval(interval2);
    }
},80)
interval3 = setInterval(function(){
    if(nav.classList.contains("scrollOn")){
            intNum3++;
            num3.innerHTML="+"+intNum3;
    }
    if(intNum3==10){
        clearInterval(interval3);
    }
},80)