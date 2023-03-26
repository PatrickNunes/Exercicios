import data from './data/dados.json' assert {type:'json'}

const resp = document.querySelector('#info')

let menor,maior=null,media=0,cont=0;

data.forEach((item) =>{

    if(item.valor> 0){
       maior = maior<item.valor ? item.valor : maior;
       menor = menor<item.valor ? menor : item.valor;

       media += item.valor;
       cont++
    }
       

    
})
media = media/cont;
cont = 0

data.forEach((item) =>{
    item.valor>media ? cont++ : null    
})

resp.innerHTML =    `<b>Maior Valor: ${maior.toFixed(2)}<br>
                    MenorValor:${menor.toFixed(2)}<br>
                    Numero de dias em que o Faturamento foi superior a Média: ${cont} </b>`;



