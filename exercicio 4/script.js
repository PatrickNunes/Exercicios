
function percentual(num,total){
    return (num/total*100)
}

const faturamento =[
    {
        "Estado": "SP", 
        "valor" :67836.43
    },
    {
        "Estado":"RJ",
        "valor":36678.66
    },
    {
        "Estado":"MG",
        "valor": 29229.88
    },
    {
        "Estado":"ES",
        "valor": 27165.48
    },
    {
        "Estado":"outros",
        "valor": 19849.53
    }
]

let total=0
const bars = document.querySelectorAll('.progress-bar')

faturamento.forEach((item)=>{
    total += item.valor
})

bars.forEach((bar,index)=>{
    const porcent = percentual(faturamento[index].valor,total)
    bar.style.width = `${porcent}%`
    bar.innerHTML = `${porcent.toFixed(2)}%`
})