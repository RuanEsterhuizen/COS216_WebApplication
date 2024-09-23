<!DOCTYPE html>

<html>

<head>
    <title>Log in</title>
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
        <form action="login.php" method="post" autocomplete="off">
            <h2>Login</h2>
            <label for="email">Email:</label>
            <input type="text" id="email" name="email" autocomplete="off" value="tony@starkindustries.com" required>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" autocomplete="off" value="LoveYou3000" required>
            <input type="submit" value="Login">
        </form>

        <a href="register.php">New user? Click here to register.</a>

        <?php

            echo '<script> var email = "'.$_POST["email"].'"; password="'.$_POST["password"].'";</script>';

        ?>

    </div>

    <?php require("footer.php"); ?>

    <script src="login.js"></script>

</body>




</html>