let nomeDoHeroi = "Junior"
let xp = [" ", " ", " "]

let inimigos = ["Lobo", "Zumbi", "Guerreiro", "Urso", "Behemooth", "Hydra"]
let inimigoDiaUm = inimigos[0]
let inimigoDiaDois = inimigos[3]
let inimigoDiaTres = inimigos[2]




switch(inimigoDiaUm) {
    case "Lobo":
        xp[0] = 1000
        break

    case "Zumbi":
        xp[0] = 5000
        break

    case "Guerreiro":
        xp[0] = 7000
        break

    case "Urso":
        xp[0] = 12000
        break

    case "Behemooth":
        xp[0] = 20000
        break

    case "Hydra":
        xp[0] = 30000
        break

    default : console.log("Erro")

}

console.log (
    `No primeiro dia ${nomeDoHeroi} enfrentou ${inimigoDiaUm} e ganhou ${xp[0]} Pontos de XP!
`)


switch(inimigoDiaDois) {
    case "Lobo":
        xp[1] = 1000
        break

    case "Zumbi":
        xp[1] = 5000
        break

    case "Guerreiro":
        xp[1] = 7000
        break

    case "Urso":
        xp[1] = 12000
        break

    case "Behemooth":
        xp[1] = 20000
        break

    case "Hydra":
        xp[1] = 30000
        break

    default : console.log("Erro")

}

console.log (
    `No primeiro dia ${nomeDoHeroi} enfrentou ${inimigoDiaDois} e ganhou ${xp[1]} Pontos de XP!
`)


switch(inimigoDiaTres) {
    case "Lobo":
        xp[2] = 1000
        break

    case "Zumbi":   
        xp[2] = 5000
        break

    case "Guerreiro":
        xp[2] = 7000
        break

    case "Urso":
        xp[2] = 12000
        break

    case "Behemooth":
        xp[2] = 20000
        break

    case "Hydra":
        xp[2] = 30000
        break

    default : console.log("Erro")

}

console.log (
    `No primeiro dia ${nomeDoHeroi} enfrentou ${inimigoDiaTres} e ganhou ${xp[2]} Pontos de XP!
`)

let xpTotal = soma(xp[0], xp[1], xp[2])

function soma(DiaUm, DiaDois, DiaTres) {

    let somatorio = DiaUm + DiaDois + DiaTres 

    return somatorio
}


console.log (
    `Juntando os Três dias, ${nomeDoHeroi} conseguiu um Total de ${xpTotal}! Com isso ${nomeDoHeroi} está no *Ranking*
`)