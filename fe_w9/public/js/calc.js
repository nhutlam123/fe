let experssion = '';
let operation = document.getElementsByClassName('calc-operation');
let result = document.getElementsByClassName('calc-typed');

let buttons = document.getElementsByTagName("button");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        if (buttons[i].innerHTML == 'Enter') {
            result.innerHTML = eval(experssion);
            
        }
        else if (buttons[i].innerHTML == 'C') {
            experssion = '';
            operation.innerHTML = 0;
            result.innerHTML = 0;
        }
        else {
            experssion += buttons[i].innerHTML;
            operation.innerHTML = experssion;
        }
    }
    
}