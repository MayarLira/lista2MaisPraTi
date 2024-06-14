let vetorA = Array.from({length: 100}, () => Math.floor(Math.random() * 201) - 100);
let vetorB = vetorA.filter(num => num > 0);

console.log("Vetor A: ", vetorA);
console.log("Vetor B (compactado): ", vetorB);