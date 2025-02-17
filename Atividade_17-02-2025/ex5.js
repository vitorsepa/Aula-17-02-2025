const alunos = ['joão','mateus','maria','josé','joão','joão'];
const contagem ={}

for (let aluno of alunos) {
    if (contagem[aluno]) {
        contagem[aluno]+= 1
    } else {
        contagem[aluno] = 1
    }
}

for (let chave in contagem) {
    console.log(`O aluno ${chave} foi repetido ${contagem[chave]} vezes`)}