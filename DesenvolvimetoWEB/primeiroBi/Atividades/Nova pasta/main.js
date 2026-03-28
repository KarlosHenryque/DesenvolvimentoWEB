const valorConta = 100;
const percentualGorjeta = 15;

const valorGorjeta = (valorConta * percentualGorjeta) / 100;
const valorTotal = valorConta + valorGorjeta;

console.log(`O valor da conta é R$${valorConta.toFixed(2)}, a gorjeta é R$${valorGorjeta.toFixed(2)} e o total a pagar: R$${valorTotal.toFixed(2)}`);