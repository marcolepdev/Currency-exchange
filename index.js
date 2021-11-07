const buttonConvert = document.getElementById('button-convert');
const buttonInvert = document.getElementById('button-invert')
const fromValue = document.getElementById('from-value');
const fromCurrency = document.getElementById('from-currency');
const toValue = document.getElementById("to-value");
const toCurrency = document.getElementById("to-currency")

buttonConvert.addEventListener("click", () => {
  try{
    if(fromValue.value < 0){
      alert("insert positive values please")
    } else {
      axios.get(`https://api.currencyscoop.com/v1/convert?api_key=4ad56a844f9482003825704998e9cf5d&from=${fromCurrency.value}&to=${toCurrency.value}&amount=${fromValue.value}`)
      .then( async res => {
        let resultValue = await res.data.response.value
        toValue.value = resultValue.toFixed(2)
    })
    }
  } catch (error){
    console.error(error)
  }
})

buttonInvert.addEventListener("click", () => {
  let tempCurrency = fromCurrency.value;
  let tempValue = fromValue.value;
  
  fromCurrency.value = toCurrency.value;
  fromValue.value = toValue;
  toCurrency.value = tempCurrency;
  toValue.value = tempValue.toFixed(2);
})