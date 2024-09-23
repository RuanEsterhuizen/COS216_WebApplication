<!DOCTYPE html>
<html lang="en">

<head>
	<title>PA2 - Agents</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lilita+One&display=swap" rel="stylesheet">
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
        <h1>Agencies</h1>
    </div>

    <script src="agents.js"></script>

    <?php require("footer.php"); ?>

</body>



</html>