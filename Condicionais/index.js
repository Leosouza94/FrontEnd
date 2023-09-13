
let concluiuEnsinoMedio = prompt("Você concluiu o ensino médio?")
let idade = Number(prompt("Qual a sua idade?"))
let cursandoFacul = prompt("Você está cursando a facul?")




function podeEntrarNaFacul (concluiuEnsinoMedio, idade, cursandoFacul){
    if (concluiuEnsinoMedio === "Sim" && idade >= 18 && cursandoFacul === "Não"){
        console.log("Você pode cursar a faculdade")
    } else {
        console.log("Você não pode cursar a faculdade")
    }
}

podeEntrarNaFacul(concluiuEnsinoMedio, idade, cursandoFacul)




