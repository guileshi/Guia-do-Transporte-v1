var result
var myValue

const object1 = document.querySelector('#sumNumber1')
const object2 = document.querySelector('#sumNumber2')

const number1 = Math.floor(Math.random() * 9 + 1)
const number2 = Math.floor(Math.random() * 9 + 1)

object1.innerHTML = number1
object2.innerHTML = number2

function sum(){
    result = Number(number1) + Number(number2);
}

function getValue(value){

    myValue = value.value

}

function getSumResult(){

    if(myValue == result){
        // 
    }

}

$(window).load(function () {
    sum()
});
