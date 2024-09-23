<!DOCTYPE html>

<html>
<head>
    <title>PA4</title>
    <link id="theme" rel="stylesheet" href="css/style.css">

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
		else {
			var theme = document.getElementsByTagName('link')[0]; 
			if (theme.getAttribute('href') == 'css/dark.css') { 
    			theme.setAttribute('href', 'css/style.css'); 
    		} else { 
        		theme.setAttribute('href', 'css/dark.css'); 
			}
		}
</script>


    <header>
        <?php 
		session_start();
		
		
		require("header.php"); 
		
		?>

        <div class="heading">
			<h1>Listings</h1>
		</div>

		<div class="settings">
			<div class="search">
				<input type="text" id="searchText" placeholder="&#x1F50D;Search locations">
				<button id="search">Search</button>
				<button id="savesearch">Save Search</button>
			</div>
			
			<div class="buyrent">
				<div>
					<input type="radio" id="sale" name="buyrent" value="sale" checked>
					<label for="sale">Buy</label>
				</div>
			
				<div>
					<input type="radio" id="rent" name="buyrent" value="rent">
					<label for="rent">Rent</label>
				</div>
			</div>

			

			<div class="pricerange">
				<label for="minprice">Max. Price</label>
				<input type="number" min="0" max="50000000" step="500000" value="0" id="minprice">

				<label for="maxprice">Max. Price</label>
				<input type="number" min="0" max="50000000" step="500000" value="10000000" id="maxprice">

				<label for="bedroomFilter">Bedrooms</label>
				<input type="number" min="0" max="20" step="0.5" value="0" id="bedroomFilter">
			</div>

			<div class="sort">
				<label for="sortby">Sort By:</label>
				<select name="sortby" id="sortby">
  					<option value="title">Property Title</option>
  					<option value="priceAsc">Price (Low to High)</option>
  					<option value="priceDsc">Price (High to Low)</option>
				</select>
			</div>

			<div class="filter">
				<button id="filter">Apply Filters</button>
			</div>
			
		</div>


    </header>
	
	<div class="middle">
    	<script src="listings.js"></script>
	</div>
	<div class="bottom" id="bottom">
    	
	</div>

	<script src="footer.js"></script>

</body>

</html>