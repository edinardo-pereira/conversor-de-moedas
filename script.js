const converter = document.querySelector(".botao-converter"); //botão
const selectMoeda = document.querySelector("select-moeda")//2° select


function converterValor() {
    
    const valorParaConverter = document.querySelector(".valor-para-converter").value// input
    const ValorAConverter = document.querySelector(".valor-a-converter") //2° paragrafo
    const resultadoConversao = document.querySelector(".valor-convertido")// 4° paragrafo


    console.log(selectMoeda.value);

    const dolarDoDia = 5.58
    const euroDoDia = 6.03



    if (selectMoeda.value == "dolar") {
        resultadoConversao.innerHTML = new Intl.numberFormat('en-US', {
            style: "currency",
            currency: "USD"
        }).format(valorParaConverter / dolarDoDia)
    }

    if (selectMoeda.value == "euro") {
        resultadoConversao.innerHTML = new Intl.numberFormat('de-DE', {
            style: "currency",
            currency: "EUR"
        }).format(valorParaConverter / euroDoDia)

        
        

    }

    ValorAConverter.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(valorParaConverter)

    
}

converter.addEventListener("click", converterValor)