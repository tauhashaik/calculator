document.getElementById("butt1").addEventListener("click", function() {
    appendToInput("7");
});

document.getElementById("butt2").addEventListener("click", function() {
    appendToInput("8");
});

document.getElementById("butt3").addEventListener("click", function() {
    appendToInput("9");
});

document.getElementById("butt4").addEventListener("click", function() {
    appendToInput("4");
});

document.getElementById("butt5").addEventListener("click", function() {
    appendToInput("5");
});

document.getElementById("butt6").addEventListener("click", function() {
    appendToInput("6");
});

document.getElementById("butt7").addEventListener("click", function() {
    appendToInput("1");
});

document.getElementById("butt8").addEventListener("click", function() {
    appendToInput("2");
});

document.getElementById("butt9").addEventListener("click", function() {
    appendToInput("3");
});

document.getElementById("butt0").addEventListener("click", function() {
    appendToInput("0");
});

document.getElementById("buttx").addEventListener("click", function() {
    appendToInput("*");
});

document.getElementById("butt-").addEventListener("click", function() {
    appendToInput("-");
});

document.getElementById("buttp").addEventListener("click", function() {
    appendToInput("+");
});

document.getElementById("buttE").addEventListener("click", function() {
    calculateResult();
});

document.getElementById("buttdt").addEventListener("click", function() {
    appendToInput(".");
});

document.getElementById("buttD").addEventListener("click", function() {
    appendToInput("/");
});

document.getElementById("Delete").addEventListener("click", function() {
    clearInput();
});

function appendToInput(value) {
    document.getElementById("space").value += value;
}

function calculateResult() {
    try {
        document.getElementById("space").value = eval(document.getElementById("space").value);
    } catch (error) {
        document.getElementById("space").value = "Error";
    }
}

function clearInput() {
    document.getElementById("space").value = "";
}




// let btn = document.querySelectorAll('.num')
// const Display = document.getElementById('#space')

// btn.forEach(button => {
//     button.addEventListener('click', function(){
//         Display.value += button.getAttribute('data-value')
//     })
// })