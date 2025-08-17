function estudanteAtivo(verificacao) {
        if (verificacao === "sim") {
        mensagem = "Seja bem-vindo ao curso!!\nBoas aulas.\n";
    } else {
        mensagem = "Te espero em uma próxima fase do curso.\nNão perca!!\n";
    }
    return mensagem;
}

console.log("Olá, visitante!!");
console.log("Você é estudante do curso Back-end com JavaScript?\n")

//Executa o bloco if:
console.log("Sim, eu sou:")
const verificacao1 = "sim";
console.log(estudanteAtivo(verificacao1));

//Executa o bloco else:
console.log("Não, não sou:");
const verificacao2 = "não";
console.log(estudanteAtivo(verificacao2));
