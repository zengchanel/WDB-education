function product(n, term) {
    let total = 1;
    let k = 1;
    while (k <= n) {
        total = term(k) * total;
        k++;
    }
    return total;
}

function accumulate(combiner, base, n, term) {
    let total = base;
    let k = 1;
    while (k <= n) {
        total = combiner(total, term(k));
        k++;
    }
    return total;
}

function summation_using_accumulate(n, term) {
    return accumulate(add, 0, n, term);
}

function product_using_accumulate(n, term) {
    return accumulate(mul, 1, n, term);
}

function make_repeater(func, n) {
    let g = identity;
    while (n > 0) {
        g = compose1(func, g);
        n = n - 1;
    }
    return g;
}

function identity(x) {
    return x;
}

function compose1(f1, f2) {
    function blah(x) {
        return f1(f2(x));
    }
    return blah;
}