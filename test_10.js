function pow(x, n) {
    return x ** n;
}

let x = prompt("Enter x:", 0);
let n = prompt("Enter n:", 0);

if (n < 1) {
    alert(`Power ${n} is not supported. Please, use a positive integer.`);
} else {
    alert(pow(x, n));
}