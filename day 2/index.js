const nome = prompt('Qual o seu nome?')
const idade = prompt('Quantos anos você tem?')
const linguagem = prompt('Qual linguagem de programação você está estudando?')
const mensagem = alert(`Olá ${nome}, você tem ${idade} e já está aprendendo ${linguagem}!`)

const gosto = prompt(`Você gosta de estudar ${linguagem}? Responda com 1 - sim ou 2 - não.`)
if(gosto == 1){
    alert('Muito bom! Continue estudandoe você terá muito sucesso.')
}if(gosto == 2){
    alert(`Ahh que pena... Já tentou aprender outras linguagens?`)
}