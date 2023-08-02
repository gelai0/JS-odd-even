let inputNum = document.getElementById("inputNumber")
let displayResult = document.getElementById("display")



function check() {
    let num = inputNum.value
    
     if (num % 2 == 0 && num != '') {
        displayResult.innerHTML = "EVEN"

    }else if (num % 2 > 0 && num != '') {
        displayResult.innerHTML = "ODD"

    }else if (num == "") {
        displayResult.innerHTML = "Invalid Number"
    }
    else {
        displayResult.innerHTML = "Input a number"
    }
}