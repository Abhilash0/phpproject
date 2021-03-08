<?php include "init.php";?>
<?php

if(isset($_POST['deposit'])){

  $data = [
    'account'      => $_POST['account'],
    'amount'       => $_POST['amount'],
    'account_error' => '',
    'amount_error'   => ''
    

  ];
  if(empty($data['account'])){
    $data['account_error'] = "Account is required";
  }
  if(empty($data['amount'])){
    $data['amount_error'] = "Amount is required";
  }
  


  if(empty($data['account_error']) && empty($data['amount_error'])){
    if($source->Query("SELECT * FROM users WHERE account = ?", [$data['account']])){
       if($source->CountRows() > 0){
           // $row = $source->single();
           // $id = $row->id;
            //$db_account = $row->account;
   //  echo print_r('abhi'); die('helooooooooooo');
      if($source->Query("INSERT INTO account (account, amount) VALUES (?,?)", [$data['account'], $data['amount']])){
       echo "Your Amount Deposit On Your Account";
      // echo print_r('abhi'); die('helooooooooooo');
     // $_SESSION['amount_added'] = "Your Amount Deposit On Your Account!";
     // header("location:deposit.php");
     }else if($source->Query("SELECT * FROM account WHERE amount = ?", [$data['amount']])){
      if($source->CountRows() > 0 ){
        if($source->Query("UPDATE account SET [$data['amount']] = amount + [$data['amount']]")){
          echo "Your Account Updated Successfully";
        }
      }
     }
     
   }else {
    $data['account_error'] = "Please enter valid account";
  }
}

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

  <div class="deposit-form">
    <form action="" method="POST">
     <div class="group">
      <h3 class="heading">Deposit Money</h3>
    </div>
    <div class="group">
      <input type="text" name="account" class="control" placeholder="Enter Account..." value="<?php if(!empty($data['account'])): echo $data['account']; endif;?>">
      <div class="error">
        <?php if(!empty($data['account_error'])): ?>
          <?php echo $data['account_error'];?>
        <?php endif; ?>
      </div> 
    </div>
    <div class="group">
      <input type="text" name="amount" class="control" placeholder="Enter Amount..." value="<?php if(!empty($data['amount'])): echo $data['amount']; endif;?>">
      <div class="error">
        <?php if(!empty($data['amount_error'])): ?>
          <?php echo $data['amount_error'];?>
        <?php endif; ?>
      </div> 
    </div>
    


    <div class="group m20">
      <input type="submit" name="deposit" class="btn" value="Submit &rarr;">
    </div>
     <!-- <div class="group m20">
      <a href="login.php" class="link">Already have an account ?</a>
    </div> -->
  </form>
</div>



</body>
</html>