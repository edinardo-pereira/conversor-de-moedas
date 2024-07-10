const converter = document.querySelector(".botao-converter") //botão
const selectMoeda = document.querySelector(".select-moeda")// select moeda

function converterValor() {
    const converterValorPara = document.querySelector(".valor-para-converter").value // input onde coloca o valor
    const valorParaconverter = document.querySelector(".valor-que-vai-converter") // 1° paragrafo onde coloca o valor a converter 
    const resultadoDaConversao = document.querySelector(".valor-convertido") //2° paragrafo onde coloca o valor convertido

    const dolarDoDia = 5.47
    const euroDoDia = 5.92

    if (selectMoeda.value == "dolar") {
        resultadoDaConversao.innerHTML = new Intl.NumberFormat("en-US", {
            style: 'currency',
            currency: 'USD'
        }).format(converterValorPara / dolarDoDia)
    }
    if (selectMoeda.value == "euro") {
        resultadoDaConversao.innerHTML = new Intl.NumberFormat("de-DE", {
            style: 'currency',
            currency: 'EUR'
        }).format(converterValorPara / euroDoDia)
    }

    valorParaconverter.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(converterValorPara)

}

function changeSelecte() {
    const nomeMoeda = document.querySelector(".nome-moeda")
    const imgMoeda = document.querySelector(".img-valor-convertido")

    if (selectMoeda.value == "dolar") {
        nomeMoeda.innerHTML = "Dólar Americano"
        imgMoeda.src = "./acents/dolar.png"
    }

    if (selectMoeda.value == "euro") {
        nomeMoeda.innerHTML = "Euro"
        imgMoeda.src = " ./acents/euro.png "
    }
    converterValor()
}

selectMoeda.addEventListener("change", changeSelecte)
converter.addEventListener("click", converterValor)