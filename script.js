
let myNumberStr = '';
let myNumberInt = 0;

let inputWindow = document.querySelector('#inputWindow');
inputWindow.disabled = true;

const outppuText = document.querySelector('.text')
outppuText.textContent = 'For Start press Start Button'

// ---- clearing ----
document.querySelector('.btn_del').addEventListener('click', function () {
    inputWindow.value = inputWindow.value.substr(0,inputWindow.value.length-1);
})



// ---- Start functiion ----
document.querySelector('.btn_start').addEventListener('click', start);
function start(){
    outppuText.textContent = 'The computer has hidden a number from ' + lowNumber + ' to ' + greatNumber + ', try to guess!';

    //  ---- random() ----
    compNumber = Math.round(Math.random() * (greatNumber - lowNumber) + lowNumber);
    console.log(compNumber)
    inputWindow.disabled = false;
}

let compNumber = 0;
let greatNumber = 50;
let lowNumber = 20;
let count = 0;
let attempts = 5;

// ---- Game body ----
document.querySelector('.btn_set').addEventListener('click', game)
function game(){
    myNumberStr += inputWindow.value;
    myNumberInt = parseInt(myNumberStr);
    count++;
        if (myNumberInt < compNumber){
            outppuText.textContent = 'The hidden number is greater';
            myNumberInt = 0;
            myNumberStr = ''
            inputWindow.value = '';
        }
        if (myNumberInt > compNumber){
            outppuText.textContent = 'The hidden number is less';
            myNumberInt = 0;
            myNumberStr = ''
            inputWindow.value = '';
        }
        if (myNumberInt === compNumber){
            outppuText.textContent = 'You won !';
            compNumber = 0;
            myNumberInt = 0;
            myNumberStr = ''
            inputWindow.value = '';
            start = false;
            inputWindow.disabled = true;
            count = 0;
        }
        if (count === attempts){
            outppuText.textContent = 'You lose !';
            compNumber = 0;
            myNumberInt = 0;
            myNumberStr = ''
            inputWindow.value = '';
            start = false;
            inputWindow.disabled = true;
            count = 0;

        }
}
console.log(inputWindow)
