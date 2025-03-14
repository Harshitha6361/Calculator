let number = 0;
let number2 = 0;
let result = 0;

document.getElementById("add").onclick = function () {
    console.log("add was clicked");
    number = number + 1;
    document.getElementById("num").innerHTML = number;
    console.log(number);
};

document.getElementById("reset").onclick = function () {
    console.log("reset was clicked");
    number = 0;
    document.getElementById("num").innerHTML = number;
    console.log(number);
};

document.getElementById("sub").onclick = function () {
    console.log("sub was clicked");
    number = number - 1;
    document.getElementById("num").innerHTML = number;
    console.log(number);
    if (number <= 0) {
        console.log("its a negative value");
        document.getElementById("num").innerHTML = "error";
        number = 0;
    }
};

document.getElementById("add2").onclick = function () {
    console.log("add2 was clicked");
    number2 = number2 + 1;
    document.getElementById("num2").innerHTML = number2;
    console.log(number2);
};

document.getElementById("reset2").onclick = function () {
    console.log("reset2 was clicked");
    number2 = 0;
    document.getElementById("num2").innerHTML = number2;
    console.log(number2);
};

document.getElementById("sub2").onclick = function () {
    console.log("sub2 was clicked");
    number2 = number2 - 1;
    document.getElementById("num2").innerHTML = number2;
    console.log(number2);
    if (number2 <= 0) {
        console.log("its a negative value");
        document.getElementById("num2").innerHTML = "error";
        number2 = 0;
    }
};

document.getElementById("result4").onclick = function () {
    console.log("btn clicked");

    const checkbox = document.getElementById("inp");
    const checkbox2 = document.getElementById("inp2");
    const checkbox3 = document.getElementById("inp3");
    const checkbox4 = document.getElementById("inp4");

    if (checkbox.checked) {
        console.log("addition selected");
        result = number + number2;
        document.getElementById("num3").innerHTML = result;
    } else if (checkbox2.checked) {
        console.log("subtraction selected");
        result = number - number2;
        document.getElementById("num3").innerHTML = result;
    } else if (checkbox3.checked) {
        console.log("multiplication selected");
        result = number * number2;
        document.getElementById("num3").innerHTML = result;
    } else if (checkbox4.checked) {
        console.log("Division selected");
        if (number2 == 0) {
            console.log("cannot divide by Zero");
            document.getElementById("num3").innerHTML = "error";
            result = 0;
        } else {
            result = number / number2;
            document.getElementById("num3").innerHTML = result;
        }
    } else {
        console.log("No Operation selected");
        document.getElementById("num3").innerHTML = result;
    }
};


