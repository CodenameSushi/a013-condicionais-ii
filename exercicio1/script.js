const num1 = prompt('Insira um numero que seja divido por 2 ou por 3')
//1
if (num1 % 2 === 0) {
    alert('Esse numero pode ser divido por 2')
    if (num1 % 3 === 0) {
        alert('Esse numero pode ser divido por 3')
    }
} else {
    alert('Esse numero nao pode ser divido por 2 nem por 3')
}

//2
if (num1 % 2 === 0 || num1 % 3 === 0) {
    alert('Esse numero pode ser divido por 2 ou por 3')
} else {
    alert('Esse numero nao pode ser dividido por 2 ou 3')
}


