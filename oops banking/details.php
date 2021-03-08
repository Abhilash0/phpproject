<?php include "init.php";?>
<?php

if(isset($_POST['details_table'])) {

  $data = [
    'name'            => $_POST['name'],
    'email'           => $_POST['email'],
    'account'         => $_POST['account'],
    'amount'          => $_POST['amount']
  ];


 if($source->Query("SELECT * FROM users where name = ?", [$data['name']])) {
  
   $fields = $source->FetchAll();
 }


}


?>

<!DOCTYPE html>
<html>
<head>
	<title>Profile</title>
	<link rel="stylesheet" type="text/css" href="assets/css/style.css">
</head>
<body>
	<div class="contain">		
    <h2>Welcome to dashboard</h2><hr>
    <div class="btn_logout">
      <a href="profile.php">Profile</a>
    </div>          
  </div>

  <div class="main-div">
    <div class="main_table">
      <table class="details_table">
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Account</th>
          <th>Amount</th>
        </tr>

        <tr>
         <td><p><?php echo $data['name']; ?></p></td>
   
    </tr>
      </table>
    </div>
  </div>


  
</body>
</html>