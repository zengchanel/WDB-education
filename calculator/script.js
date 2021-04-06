const result = document.querySelector(".result");
let output = "0";
let total = 0;
let operation = "";
let nextOutput = "";
let prevOutput = "";


document.querySelector(".buttons").addEventListener("click", function(event) {
    const clicked = event.target.innerHTML;
    if (isNaN(clicked)) {
        isOperation(clicked);
    } else {
        isNumber(clicked);
    }
    result.innerHTML = output;
});

function isOperation(clicked) {
    if (clicked === "C") {
        output = "0";
        total = 0;
        operation = "";
        nextOutput = "";
        prevOutput = "";
    } else if (clicked === "←") {
        if (output.length > 1) {
            output = output.slice(0, -1);
        } else {
            output = "0";
        }
    } else if (clicked === "=") {
        if (operation) {
            doMath();
        } else {
            return;
        }
    // +, - , *, /
    } else {
        // if there is a previous operation waiting, do that first
        if (operation) {
            doMath();
        }
        operation = clicked;
        console.log(operation);
    }
}

function doMath() {
    // need second number
    if (nextOutput === "") {
        return;
    }

    let intPrev = parseInt(prevOutput);
    let intCurr = parseInt(output);

    if (operation === "+") {
        total = intPrev + intCurr;
    } else if (operation === "-") {
        total = intPrev - intCurr;
    } else if (operation === "×") {
        total = intPrev * intCurr;
    } else {
        total = intPrev / intCurr;
    }
    operation = "";
    prevOutput = "";
    nextOutput = "";
    output = total + "";
}

function isNumber(clicked) {
    if (output === "0") {
        output = clicked;
    // refresh screen right after operation click
    } else if (operation != false && nextOutput === "") {
        prevOutput = output;
        nextOutput = clicked;
        output = nextOutput;
    } else if (operation != false && nextOutput) {
        nextOutput += clicked;
        output = nextOutput;
    } else {
        output += clicked;
    }
}
