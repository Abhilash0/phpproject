<?php include "init.php";?>

<!DOCTYPE html>
<html>
<head>
	<title>Profile</title>
	<link rel="stylesheet" type="text/css" href="assets/css/style.css">
</head>
<body>
	<div class="contain">
		<?php if(isset($_SESSION['login_success'])):?>
            <div class="success">
              <?php echo $_SESSION['login_success'];?>
            </div>
          <?php endif;?>
          <?php unset($_SESSION['login_success']);?>
          <h2>Welcome to dashboard</h2><hr>
          <div class="btn_logout">
            <a href="logout.php">Logout</a>
          </div>          
	</div>
 <div class="container">
   <div class="main">
  <div class="pro_main">
    <a href="withdrawl.php">Withdrawl</a>
    <a href="deposit.php">Deposit</a>
    <a href="details.php">Details</a>
  </div>
</div>
 </div> 

  
</body>
</html>