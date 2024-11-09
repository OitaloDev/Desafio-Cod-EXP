// Entrada de dados
let nivelMonstro = parseInt(gets());
let dificuldadeBatalha = parseInt(gets());

// Constante de multiplicador
const multiplicador = 100;

// Cálculo do XP ganho
const xpGanho = nivelMonstro * dificuldadeBatalha * multiplicador;

// Exibe a quantidade de XP ganho (sem acento em "Voce")
print("Voce ganhou " + xpGanho + " XP!");
