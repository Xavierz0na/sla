const livro = {
id: 1,
titulo: "Dom Casmurro",
autor: "Machado De Assis",
ano: 1889,
disponivel: true
};
livro.disponivel = false;
livro.editora = "garnier";
for (const chave in livro) {
    console.log(livro[chave]);
}

const leitor = {
nome: "Carol",
idade: 17,
turma: 988,
ativo: true
};
console.log(leitor.nome);
console.log(leitor.turma);

const revista = {
titulo: "vasco",
edição: 23,
mes: "Julho"
};
for (const chave in revista) {
    console.log(revista[chave]);
}

const livros = [
{id: 1, titulo: "Dom Casmurro", autor: "Machado De Assis", ano: 1889, disponivel: true},
{id: 2, titulo: "O cortiço", autor: "Aluisio de Azevedo", ano: 1890, disponivel: true},
{id: 3, titulo: "Capitães de Areia", autor: "Jorge Amado", ano: 1889, disponivel: true}
];

let disponiveis = 0;

for(const l of livros){
    if(l.disponivel){
        disponiveis++;
    console.log("Disponivel:", l.titulo, l.autor);
    }
}
console.log("Totais disponiveis:", disponiveis);

const idBuscado = 2;
let encontrado = null;

for (const l of livros){
    if(l.id === idBuscado){
        encontrado = l;
    }
    if(encontrado){
        console.log("achei:", encontrado.titulo);
    }
    else{
        console.log("livro não encontrado");
        
    }
}

