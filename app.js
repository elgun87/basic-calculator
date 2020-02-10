
let operator = '';
let firstNumber = '';
let secondNumber = '';
let result = '';
let lockTheKeyboard = true;


$('.number').on('click', function(){
    if(lockTheKeyboard == false){
        return false;
        
    }
    if(!operator){
        firstNumber += this.value;
        $('#first-number').html(firstNumber);
    }
    else {
        secondNumber += this.value;
        $('#second-number').html(secondNumber);
    }
});

$('.operator').on('click', function(){
    if(!firstNumber && !secondNumber){
        return false;
    }
    operator = this.value;
    if(operator == 'plus'){
        $('#operator').html('+');
    }else if (operator == 'minus'){
        $('#operator').html('-');
    }else if( operator == 'times'){
        $('#operator').html('*');
    }else if(operator == 'power'){
        $('#operator').html('^');
    }else if(operator == 'divide'){
        $('#operator').html('/');
    }
});

$('.equal').on('click', function(){
    if($('#operator').html() === '+'){
        result = parseInt(firstNumber) + parseInt(secondNumber);
        $('#result').html(result);
    }else if($('#operator').html() === '-'){
        result = parseInt(firstNumber) - parseInt(secondNumber);
        $('#result').html(result);
    }else if($('#operator').html() === '*'){
        result = parseInt(firstNumber) * parseInt(secondNumber);
        $('#result').html(result);
    }else if($('#operator').html() === '^'){
        result = parseInt(firstNumber) ** parseInt(secondNumber);
        $('#result').html(result);
    }else if($('#operator').html() === '/'){
        result = parseInt(firstNumber) / parseInt(secondNumber);
        $('#result').html(result);
    }
    lockTheKeyboard = false;
});

document.querySelector('.clear').addEventListener('click', function(){
    firstNumber = '';
    secondNumber = '';
    operator = '';
    result = '';
    document.querySelector('#first-number').innerHTML= '';
    document.querySelector('#second-number').innerHTML= '';
    document.querySelector('#operator').innerHTML= '';
    document.querySelector('#result').innerHTML= '';
    lockTheKeyboard = true;
});
