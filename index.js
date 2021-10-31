const button = document.getElementById('button');
const fromValue = document.getElementById('from-value');
const fromCurrency = document.getElementById('from-currency');
const toValue = document.getElementById("to-value");
const toCurrency = document.getElementById("to-currency")

fromValue.addEventListener("change", () => {
  try{
    axios.get(`https://api.currencyscoop.com/v1/convert?api_key=4ad56a844f9482003825704998e9cf5d&from=${fromCurrency.value}&to=${toCurrency.value}&amount=${fromValue.value}`)
    .then( async res => {
      let response = await res.data.response.value
      toValue.value = response
    })
  } catch (error) {
    console.error(error)
  }
})

fromCurrency.addEventListener("change", () => {
  try{
    axios.get(`https://api.currencyscoop.com/v1/convert?api_key=4ad56a844f9482003825704998e9cf5d&from=${fromCurrency.value}&to=${toCurrency.value}&amount=${fromValue.value}`)
    .then( async res => {
      let response = await res.data.response.value
      toValue.value = response
    })
  } catch (error) {
    console.error(error)
  }
})

toValue.addEventListener("change", () => {
  try{
    axios.get(`https://api.currencyscoop.com/v1/convert?api_key=4ad56a844f9482003825704998e9cf5d&from=${toCurrency.value}&to=${fromCurrency.value}&amount=${toValue.value}`)
    .then( async res => {
      let response = await res.data.response.value
      fromValue.value = response
    })
  } catch (error) {
    console.error(error)
  }
})

toCurrency.addEventListener("change", () => {
  try{
    axios.get(`https://api.currencyscoop.com/v1/convert?api_key=4ad56a844f9482003825704998e9cf5d&from=${toCurrency.value}&to=${fromCurrency.value}&amount=${toValue.value}`)
    .then( async res => {
      let response = await res.data.response.value
      fromValue.value = response
    })
  } catch (error) {
    console.error(error)
  }
})