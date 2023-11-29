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
    RubUpCost = RubUpCost*1.75;
    document.getElementById("UpCost").innerHTML = RubUpCost + " Рублёф";
    }
}

function bomj(){
    if (score >= BomjCost){
    rubli+=10;
    score -= BomjCost;
    // k+=0.5;
    BomjCost = BomjCost*1.75;
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

function save(){


    localStorage.setItem('save_rubli', score);
    localStorage.setItem('save_up1', rubli);
    localStorage.setItem('save_up2', RubUpCost);
    localStorage.setItem('save_bomj1', BomjCost);
    }
function load(){

    score = JSON.parse(localStorage.getItem('save_rubli'));
    rubli = JSON.parse(localStorage.getItem('save_up1'));
    RubUpCost = JSON.parse(localStorage.getItem('save_up2'));
    BomjCost = JSON.parse(localStorage.getItem('save_bomj1'));
    document.getElementById("UpCost").innerHTML = RubUpCost + " Рублёф";
    document.getElementById("BomjCost").innerHTML = BomjCost + " Рублёф";
    
}

if (localStorage.getItem('save_rubli')  == undefined){
    localStorage.setItem('save_rubli', score);
}
if (localStorage.getItem('save_up1') == undefined){
    localStorage.setItem('save_up1', rubli);
}
if (localStorage.getItem('save_up2') == undefined ){
    localStorage.setItem('save_up2', RubUpCost);
}
if (localStorage.getItem('save_bomj1') == undefined) {
    localStorage.setItem('save_bomj1', BomjCost);
}

// document.getElementById('todownload').onclick = function() {
//     let text = [score, rubli, RubUpCost, BomjCost];
//     let myData = 'data:application/txt;charset=utf-8,' + encodeURIComponent(text);
//     this.href = myData;
//     this.download = 'data.txt';
// }
