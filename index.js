//Recebendo os dados
let nomeHeroi = "Batman";
let xpHeroi = 9000;
let nivelHeroi = "";

if (xpHeroi <= 1000) {
    nivelHeroi = "Ferro"
} else if (xpHeroi <= 2000) {
    nivelHeroi = "Bonze"
} else if (xpHeroi <= 5000) {
    nivelHeroi = "Prata"
} else if (xpHeroi <= 7000) {
    nivelHeroi = "Ouri"
} else if (xpHeroi <= 8000) {
    nivelHeroi = "Platina"
} else if (xpHeroi <= 9000) {
    nivelHeroi = "Ascendente"
} else if (xpHeroi <= 10000) {
    nivelHeroi = "Imortal"
} else {
    nivelHeroi = "Radiante"
}

console.log(`O heroi de nome ${nomeHeroi} está no nível de ${nivelHeroi}`)
