// retirar GC$ 50,00 basta entregar uma única nota de cinquenta GrowCoins.
// Se o Édson deseja retirar GC$ 72,00 será necessário entregar uma nota de
// GC$ 50,00, duas de GC$ 10,00 e duas de GC$ 1,00

let saldo = parseInt(prompt("Valor a retirar"));
let notas50 = 0;

console.log(`Valor = GC$ ${saldo}`);

while (saldo >= (notas50 + 1) * 50) {
  notas50++;
}
console.log(`Quantidade de notas de cinquenta: ${notas50}`);

let cinquenta = 50 * notas50;

let sobra50 = saldo - cinquenta;

// console.log(sobra50);

let notas10 = 0;

while (sobra50 >= (notas10 + 1) * 10) {
  notas10++;
}
console.log(`Quantidade de notas de dez: ${notas10}`);

let dez = 10 * notas10;

let sobra10 = sobra50 - dez;

// console.log(sobra10);

let notas1 = 0;

while (sobra10 >= (notas1 + 1) * 1) {
  notas1++;
}

console.log(`Quantidade de notas de um: ${notas1}`);

let sobra1 = sobra10 - notas1;

// console.log(sobra1);
