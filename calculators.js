// Ruan Esterhuizen u23532387

const calcMonthPay = document.getElementById("calcMonthPay");
calcMonthPay.onclick = function() {
    let price = document.getElementById("price");
    let deposit = document.getElementById("deposit");

    var principle = price.value - deposit.value;
    var r = document.getElementById("interest").value / 100;

    const d = new Date();
    var t = document.getElementById("term").value - d.getFullYear();

    var monthlyPayment = (principle * (r/12) * (1+(r/12))**(t*12) ) / ((1+(r/12))**(t*12) -1);

    const outMonthPay = document.getElementById("monthlyPayment");
    outMonthPay.textContent = "R " + monthlyPayment.toFixed(2);
}

const calcPricePerMeter = document.getElementById("calcPricePerMeter");
calcPricePerMeter.onclick = function() {
    var price = document.getElementById("pPrice").value;
    var floorSpace = document.getElementById("squareMeters").value;

    var pricePerM = price/floorSpace;

    document.getElementById("pricePerMeter").textContent = "R "+pricePerM.toFixed(2);  
}

const calcROI = document.getElementById("calcROI");
calcROI.onclick = function() {
    var totalInvestment = document.getElementById("totalinvestment").value;
    var annualReturn = document.getElementById("annualreturn").value;
    var investTerm = document.getElementById("investTerm").value;

    var ROI = (((annualReturn * investTerm)-totalInvestment) / totalInvestment)*100;

    document.getElementById("ROIout").textContent = ROI.toFixed(2) + "%";
}



