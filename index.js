let nickNameHero = "cyberNinja "
let xpHero = 2300
const fraseInicial = "O Herói de nome "

if (xpHero <= 1000){
    console.log(fraseInicial + nickNameHero + "está no nivel de: Ferro")
} else if (xpHero >= 1001 && xpHero <= 2000){
    console.log(fraseInicial + nickNameHero + "está no nivel de: Bronze")
} else if (xpHero >= 2001 && xpHero <= 5000){
    console.log(fraseInicial + nickNameHero + "está no nivel de: Prata")
} else if (xpHero >= 5001 && xpHero <= 7000){
    console.log(fraseInicial + nickNameHero + "está no nivel de: Ouro")
} else if (xpHero >= 7001 && xpHero <= 8000){
    console.log(fraseInicial + nickNameHero + "está no nivel de: Platina")
} else if (xpHero >= 8001 && xpHero <= 9000){
    console.log(fraseInicial + nickNameHero + "está no nivel de: Ascendente")
} else if (xpHero >= 9001 && xpHero <= 10000){
    console.log(fraseInicial + nickNameHero + "está no nivel de: Imortal")
} else if (xpHero >= 10001){
    console.log(fraseInicial + nickNameHero + "está no nivel de: Radiante")
}