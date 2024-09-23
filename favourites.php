<!DOCTYPE html>
<html>

<head>
	<title>PA2 - Favourites</title>
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
        <h1>Favourites</h1>
    </div>

    
</div>

    <?php require("footer.php"); ?>

    <script src="favourites.js"></script>
</body>

</html>