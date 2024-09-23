<!DOCTYPE html>

<html>

<head>
    <title>Register</title>
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

    <div class=login>

    <form action="register.php" method="post">
        <h2>Register</h2>
        <label for="fname">First Name:</label>
        <input type="text" id="fname" name="fname" value="Ruan" required>

        <label for="lname">Surname:</label>
        <input type="text" id="lname" name="lname" value="Esterhuizen" required>

        <label for="email">Email:</label>
        <input type="text" id="email" name="email" value="ruan@tuks.co.za" required>

        <label for="password">Password:</label>
        <input type="password" id="password" name="password" value="Pa$$w0rd1992" required>

        <input type="submit" value="Register">
    </form>

        <?php

            echo('<script>var fname = "'.$_POST["fname"].'"; var lname = "'.$_POST["lname"].'"; var email = "'.$_POST["email"].'"; var password = "'.$_POST["password"].'"; </script>');

        ?>

    </div>

    

    <?php require("footer.php"); ?>

    <script src="register.js"></script>

</body>




</html>