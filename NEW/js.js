let score = 0;
let autoclick 
let c = 0;
let rubli = 1;

let fps = setInterval(() => document.getElementById("click").innerHTML = score, 100);

function foo(){
    score += rubli
}

function rub(){
    rubli++
}

function aut(){
    if (score >= 10){
        score -= 10;
        autoclick  = setInterval(() => score+=1, 1000);
        document.getElementById("up").innerHTML = "Up";
    }
} 

