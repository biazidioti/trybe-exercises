let a = 7;
let b = 7;
let c = 6;

if (a > b && a > c) {
    console.log("a" , a);
}
else if (b > a && b > c) {
    console.log("b", b);
}
else if (c > a && c > b) {
    console.log("c", c);
}
else if (a == b && a == c && b == c) {
    console.log("números iguais");
} 
else if (a = b && a > c) {
    console.log("a é igual a b")
}
else if (a = c && a > b) {
    console.log("a é igual a b")
}
else if (b = c && b > a) {
    console.log("a é igual a b")
}
else {
    console.log("Operação inválida");
}

