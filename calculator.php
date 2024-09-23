<!DOCTYPE html>
<html>

<head>
	<title>PA2 - Calculators</title>
    <link rel = "stylesheet" href = "css/style.css">
    <link rel="stylesheet" href="css/style.css">
</head>
	
<body>

<script>
		const value = `; ${document.cookie}`;
  		const parts = value.split(`; ${"appearance"}=`);
  		if (parts.length === 2) 
			appearance = parts.pop().split(';').shift();

		console.log(appearance);

		if(appearance == "dark") {
			var theme = document.getElementsByTagName('link')[0]; 
			if (theme.getAttribute('href') == 'css/style.css') { 
    			theme.setAttribute('href', 'css/dark.css'); 
    		} else { 
        		theme.setAttribute('href', 'css/style.css'); 
			}
		}
</script>

    <?php require("header.php"); ?>

	<div class="heading">
        <h1>Calculators</h1>
    </div>

    <div class="calculator">
        <!-- <form class="inputForm"> -->
        <div>
            <h2>Monthly Bond Repayment</h2>
            <label for="price">Purchase Price: R </label>
            <input type="text" id="price" name="price" value="2800000"><br>

            <label for="deposit">Deposit: R </label>
            <input type="text" id="deposit" name="deposit" value="500000"><br>

            <label for="interest">Interest Rate (%): </label>
            <input type="text" id="interest" name="interest" value="11.75"><br>

            <label for="term">Term End: </label>
            <input type="number" id="term" name="term" value="2044"><br><br>

            <input type="submit" value="Calculate" id="calcMonthPay">
        <!-- </form> -->
        </div>
        <div class="out">
            <p>Monthly Bond Repayment:</p>
            <h3 id="monthlyPayment"></h3>
        </div>
    </div>

    <div class="calculator">
        <!-- <form class="inputForm"> -->
        <div>
            <h2>Price per square meter</h2>
            <label for="purchaseprice">Purchase price: R</label>
            <input type="text" id="pPrice" name="pPrice" value="2800000"><br>

            <label for="squareMeters">Floor space(m<sup>2</sup>) </label>
            <input type="text" id="squareMeters" name="squareMeters" value="850"><br><br>

            <input type="submit" value="Calculate" id="calcPricePerMeter">
        <!-- </form> -->
        </div>
        <div class="out">
            <p>Price per m<sup>2</sup>:</p>
            <h3 id="pricePerMeter"></h3>
        </div>
    </div>
    
    <div class="calculator">
        <!-- <form class="inputForm"> -->
        <div>
            <h2>Return On Investment</h2>
            <label for="totalinvestment">Total Investment: R </label>
            <input type="text" id="totalinvestment" name="totalinvestment" value="1532000"><br>

            <label for="annualreturn">Annual Return: R </label>
            <input type="text" id="annualreturn" name="annualreturn" value="200000"><br>

            <label for="investTerm">Inverstment Term(years) </label>
            <input type="number" value="10" step="1" id="investTerm" name="investTerm" min="0"><br><br>

            <input id="calcROI" type="submit" value="Calculate">
        <!-- </form> -->
        </div>
        <div class="out">
            <p>ROI:</p>
            <h3 id="ROIout"></h3>
        </div>
        
    </div>

    <?php require("footer.php"); ?>


</body>

<script type="text/javascript" src="calculators.js"></script>

</html>