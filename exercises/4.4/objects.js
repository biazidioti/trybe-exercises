// ................. Exercícios sobre objetos ........................
// Crie um objeto player contendo as variáveis listadas abaixo.

// let name = 'Marta';
//     let lastName = 'Silva';
//     let age = 34;
//     let medals = { golden: 2, silver: 3 };

let player = { 
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: { golden: 2, silver: 3 },
    bestInTheWorld: [2006, 2007, 2008, 2009, 2010, 2018],
};

// Acesse a chave name , lastName e age . Concatene as informações para fazer um console.log no seguinte formato: "A jogadora Marta Silva tem 34 anos de idade".

console.log('A jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' anos de indade.');

// Adicione ao objeto a chave bestInTheWorld e atribua a esta chave um array contendo as datas em que a jogadora Marta foi considerada a melhor do mundo.

