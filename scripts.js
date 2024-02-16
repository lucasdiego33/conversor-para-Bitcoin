const convertButton = document.querySelector(".meu-botao")

function convertValues() {
 const inputValue = document.querySelector(".money").value
 const  valoraConverter = document.querySelector(".valor-convert")
 const   valorConverted = document.querySelector(".valor")

 const bitcoinToday= 260.200

 const convertValue = inputValue / bitcoinToday

 valoraConverter.innerHTML =  new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL"
 }).format(inputValue)

 valorConverted.innerHTML = new Intl.NumberFormat("btc-bitcoin",{
    style: "currency",
    currency: "BTC"
 }).format(convertValue)

 


 
}



convertButton.addEventListener("click", convertValues)