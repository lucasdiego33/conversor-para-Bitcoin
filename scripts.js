const convertButton = document.querySelector(".meu-botao")

 const convertValues = async () => {
 const inputValue = document.querySelector(".money").value
 const  valoraConverter = document.querySelector(".valor-convert")
 const   valorConverted = document.querySelector(".valor")

 

 

   const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(resposta => resposta.json())
   const bitcoinToday = data.BTCBRL.high
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