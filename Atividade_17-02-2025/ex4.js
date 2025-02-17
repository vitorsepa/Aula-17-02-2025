const alunos = [
    { nome: 'Vitor', nota: 10 },
    { nome: 'Maria', nota: 9 },
    { nome: 'João', nota: 1 },
    { nome: 'Pedro', nota: 6 },
    { nome: 'Ana', nota: 8 }
]

let soma = 0

alunos.forEach(alunos => {
    soma += alunos.nota
})

console.log(`O total das notas é: ${soma}`)