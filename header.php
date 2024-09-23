<nav class = "navbar">			
		<ul class="leftSide">
			<li> <a href = "https://wheatley.cs.up.ac.za/u23532387/">eKhaya Properties</a></li>
		</ul>

		<ul class="rightSide">

		<?php
			//set value to login
			$apikey = $_COOKIE["apikey"];

			if($apikey == null) {
				echo '<li> <a href = "register.php">Register</a></li>';
				echo '<li> <a href = "login.php">Login</a></li>';
			}
			else {
				$username = $_COOKIE["firstname"];

				echo '<li><button id="logout">Log out</button></li>';
				echo "<li><a>".$username."</a></li>";
			}
		?>

			<li> <a href = "calculator.php">Calculators</a></li>
			<li> <a href = "favourites.php">Favourites</a></li>
			<li> <a href = "agents.php">Agents</a></li>
			<li> <a href = "index.php">Listings</a></li>
			
		</ul>
</nav>

<script src="header.js"></script>



