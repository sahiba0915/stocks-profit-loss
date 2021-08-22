const initialPrice = document.querySelector('#initial-price');
const stocks = document.querySelector('#stocks');
const currentPrice = document.querySelector('#current-price');
const submitBtn = document.querySelector('.submit-btn');
const output = document.querySelector('#output-box');


submitBtn.addEventListener('click', submitHandler);

function submitHandler(){

    var ip = Number(initialPrice.value);
    var st = Number(stocks.value);
    var curr = Number(currentPrice.value);

    calculate(ip, st, curr);

}

function calculate(initial, stock, current){
    if(initial > current){
        var loss = (initial-current)* stock;
        var lossPercent = (loss/ initial)* 100;
        
       output.style.display = "block";
       output.innerHTML = ` Uhhuh, you got a loss of ${loss} by ${lossPercent}% 😔`;
}else {
    if(initial < current){
        var profit = (current- initial)* stock;
        var profitPercent = (profit/ initial)* 100;
        
       output.style.display = "block";
       output.innerHTML = ` Hurrahh, you got a profit of ${profit} by ${profitPercent}% 🎉`;
}else {
    output.style.display = "block";
    output.innerHTML = ` No loss, No Profit😑`;
}
}
}