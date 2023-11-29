let score = 0;
let autoclick 
let c = 0;
let rubli = 1;
// let k = 1;
let RubUpCost = 100;
let BomjCost = 1000;
document.getElementById("UpCost").innerHTML = RubUpCost + " Рублёф"
document.getElementById("BomjCost").innerHTML = BomjCost + " Рублёф"

let fps = setInterval(() => document.getElementById("click").innerHTML = score, 100);


function foo(){
    score += rubli;
}

function rubup(){
    if (score >= RubUpCost){
    rubli++;
    score-= RubUpCost;
    // k+=0.5;
    RubUpCost = RubUpCost*1.5;
    document.getElementById("UpCost").innerHTML = RubUpCost + " Рублёф";
    }
}

function bomj(){
    if (score >= BomjCost){
    rubli+=10;
    score -= BomjCost;
    // k+=0.5;
    BomjCost = BomjCost*1.5;
    document.getElementById("BomjCost").innerHTML =  BomjCost + " Рублёф";
    }
}

function aut(){
    if (score >= 10){
        score -= 10;
        autoclick  = setInterval(() => score+=1, 1000);
        document.getElementById("up").innerHTML = "Up";
    }
} 

document.getElementById('todownload').onclick = function() {
    let text = [score, rubli, RubUpCost, BomjCost];
    let myData = 'data:application/txt;charset=utf-8,' + encodeURIComponent(text);
    this.href = myData;
    this.download = 'data.txt';
}
