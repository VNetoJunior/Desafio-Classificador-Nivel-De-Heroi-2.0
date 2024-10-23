let nomeDoHeroi = "Junior"
let xp = [" ", " ", " "]
let nivelDoHeroi = " "
let inimigos = ["Lobo", "Zumbi", "Guerreiro", "Urso", "Behemooth", "Hydra"]
let inimigoDiaUm = inimigos[0]
let inimigoDiaDois = inimigos[3]
let inimigoDiaTres = inimigos[2]




switch(inimigoDiaUm) {
    case "Lobo":
        xp[0] = 1000
        break

    case "Zumbi":
        xp[0] = 1500
        break

    case "Guerreiro":
        xp[0] = 2000
        break

    case "Urso":
        xp[0] = 3000
        break

    case "Behemooth":
        xp[0] = 7000
        break

    case "Hydra":
        xp[0] = 10000
        break

    default : console.log("Erro")

}

console.log (
    `No Primeiro dia ${nomeDoHeroi} enfrentou ${inimigoDiaUm} e ganhou ${xp[0]} Pontos de XP!
`)


switch(inimigoDiaDois) {
    case "Lobo":
        xp[1] = 1000
        break

    case "Zumbi":
        xp[1] = 1500
        break

    case "Guerreiro":
        xp[1] = 2000
        break

    case "Urso":
        xp[1] = 3000
        break

    case "Behemooth":
        xp[1] = 7000
        break

    case "Hydra":
        xp[1] = 10000
        break

    default : console.log("Erro")

}

console.log (
    `No Segundo dia ${nomeDoHeroi} enfrentou ${inimigoDiaDois} e ganhou ${xp[1]} Pontos de XP!
`)


switch(inimigoDiaTres) {
    case "Lobo":
        xp[2] = 1000
        break

    case "Zumbi":   
        xp[2] = 1500
        break

    case "Guerreiro":
        xp[2] = 2000
        break

    case "Urso":
        xp[2] = 3000
        break

    case "Behemooth":
        xp[2] = 7000
        break

    case "Hydra":
        xp[2] = 10000
        break

    default : console.log("Erro")

}

console.log (
    `No Terceiro dia ${nomeDoHeroi} enfrentou ${inimigoDiaTres} e ganhou ${xp[2]} Pontos de XP!
`)

let xpTotal = soma(xp[0], xp[1], xp[2])

function soma(DiaUm, DiaDois, DiaTres) {

    let somatorio = DiaUm + DiaDois + DiaTres 

    return somatorio
}


switch(true) {
    
    case (xpTotal >= 0 && xpTotal <= 1000) : 
    nivelDoHeroi = "Ferro"
    break

    case (xpTotal >= 1001 && xpTotal <= 2000) : 
    nivelDoHeroi = "Bronze"
    break

    case (xpTotal >= 2001 && xpTotal <= 5000) : 
    nivelDoHeroi = "Prata"
    break

    case (xpTotal >= 5001 && xpTotal <= 7000) : 
    nivelDoHeroi = "Ouro"
    break

    case (xpTotal >= 7001 && xpTotal <= 8000) : 
    nivelDoHeroi = "Platina"
    break

    case (xpTotal >= 8001 && xpTotal <= 9000) : 
    nivelDoHeroi = "Ascendente"
    break

    case (xpTotal >= 9001 && xpTotal <= 10000) : 
    nivel = "Imortal"
    break

    case (xpTotal >= 10001) : 
    nivelDoHeroi = "Radiante"
    break

    default: (console.log("Erro, esse nível não é válido!"))
}


console.log (
    `Juntando os Três dias, ${nomeDoHeroi} conseguiu um Total de ${xpTotal}! Com isso ${nomeDoHeroi} está no Nível de ${nivelDoHeroi}!
`)