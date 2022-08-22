const lista = 
[
    {
        name: 'sabao em po',
        price: 30,
    },
    {
        name: 'cereal',
        price: 12,
    },
    {
        name: 'toalha',
        price: 30,
    },
];

const saldoDisponivel = 100;

function calculaSaldo (saldoDisponivel, lista)
{
    return lista.reduce(function (prev, current){return prev - current.price;}, saldoDisponivel);
}

console.log(calculaSaldo(saldoDisponivel, lista));