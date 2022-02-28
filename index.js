console.log('To create a calculator')

const screen = document.getElementById('screen');
const buttons = document.querySelectorAll('button');
let screenValue = '';
for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText = e.target.innerText;
        console.log('Buttoon text is',buttonText);
        if(buttonText=='X'){
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'C'){
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '='){
            screen.value = eval(screenValue);
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;

        }
    })
}