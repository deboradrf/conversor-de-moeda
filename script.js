let inputMoeda = document.getElementById("select-moeda");
let inputValor = document.getElementById("input-valor");

let cotacaoDolar = 4.86; 

const converter= () => {
    if (inputMoeda.value == "1"){
        let valorEmReal = inputValor.value;               
        resultEmDolar = valorEmReal / cotacaoDolar;
        resultEmDolar = resultEmDolar.toFixed(2);
        document.getElementById("result").style.visibility = "visible";
        document.getElementById("total-result").innerHTML = `${resultEmDolar} dólar`;
    }
    if (inputMoeda.value == "2"){
        let valorEmDolar = inputValor.value;
        resultEmReal = valorEmDolar * cotacaoDolar;
        resultEmReal = resultEmReal.toFixed(2);
        document.getElementById("result").style.visibility = "visible";
        document.getElementById("total-result").innerHTML = `${resultEmReal} real`;
    }        
}

document.getElementById("btn-converter").addEventListener("click", converter)



