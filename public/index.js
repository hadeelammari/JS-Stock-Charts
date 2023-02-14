async function main() {

    const timeChartCanvas = document.querySelector('#time-chart');
    const highestPriceChartCanvas = document.querySelector('#highest-price-chart');
    const averagePriceChartCanvas = document.querySelector('#average-price-chart');
    let response = await fetch('https://twelvedata.com/account/api-keys');

   // let GME = result.GME
   // let MSFT = result.MSFT
    //let DIS = result.DIS
    //'let BNTX = result.BNTX

    const stocks = [GME, MSFT, DIS, BNTX];
    console.log (stocks [0].values)

    

}
stocks.forEach( stock => stock.values.reverse())
new Chart(timeChartCanvas.getContext('2d'), {
    type: 'line',
    data: {
        labels: stocks[0].values.map (value => value.datetime),
        datasets: [{
            label: stock.meta.symbol,
            data: stock.values.map (value => parseFloat (value.High)),
            backgroundColor:getColor(stock.meta.symbol),
            borderColor: getColor(stock.meta.symbol),
    }]
}
});

function getColor(stock){
    if(stock === "GME"){
        return 'rgba(61, 161, 61, 0.7)'
    }
    if(stock === "MSFT"){
        return 'rgba(209, 4, 25, 0.7)'
    }
    if(stock === "DIS"){
        return 'rgba(18, 4, 209, 0.7)'
    }
    if(stock === "BNTX"){
        return 'rgba(166, 43, 158, 0.7)'
    }
}
console.log (chart)
main()


