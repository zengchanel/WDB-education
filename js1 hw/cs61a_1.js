function a_plus_abs_b(a, b) {
    return a + Math.abs(b);
}

function two_of_three(x, y, z) {
    return x ** 2 + y ** 2 + z ** 2 - (Math.max(x, y, z)) ** 2;
}

function largest_factor(n) {
    for (let x = 2; x <= n; x++) {
        if (n % x === 0) {
            return n / x;
        }
    }
    return n / x;
}

function with_if_statement() {

    if (cond()) {
        return true_func();
    }
    else {
        return false_func();
    }
}

function if_function(condition, true_result, false_result) {
    if (condition) {
        return true_result;
    }
    else {
        return false_result;
    }
}

function with_if_function() {
    return if_function(cond(), true_func(), false_func());
}

function cond() {
    return false;
}

function true_func() {
    console.log("Welcome to");
}

function false_func() {
    console.log("61A");
}

function hailstone(n) {
    let length = 1;
    while (n !== 1) {
        console.log(n);
        if (n % 2 === 0) {
            n = Math.floor(n/2);
        } else {
            n = n * 3 + 1;
        }
        length++;
    }
    console.log(n);
    return length;
}