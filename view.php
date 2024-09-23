<!DOCTYPE html>
<html lang="en">

<head>
	<title>PA4 - View</title>
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

	<div class="heading" id="title">
        
    </div>

    <div class="slider">
        <div class="slides" id="slides">
            <!-- pics go here -->
        </div>
        <div>
            <button class="prev" id="prev" >&#10094;</button>
            <button class="next" id="next" >&#10095;</button>
        </div>
    </div>

    <script src="view.js"></script>

    <?php require("footer.php"); ?>

</body>



</html>