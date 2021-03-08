<?php
  
  include "init.php";

  if (isset($_POST['signup'])) {
    
    $data = [

      'name'             => $_POST['full_name'],
      'email'            => $_POST['email'],
      'password'         => $_POST['password'],
      'confirm_password' => $_POST['confirm'],
      'account'          => $_POST['account'],
      'name_error'       => '',
      'email_error'      => '',
      'password_error'   => '',
      'confirm_error'    => '',
      'account_error'    => ''


    ];
    if(empty($data['name'])){
      $data['name_error'] = "Name is required";
    }
      if(empty($data['email'])){
              $data['email_error'] = "Email is required";


    }
    else{
      if($source -> Query("SELECT * FROM users WHERE email = ?", [$data['email']])){
          // echo $source->__toString();die;
        if($source -> CountRows() > 0 ){
          $data['email_error'] = "Sorry email is already taken";
        }
      }
    }

    if(empty($data['password'])){
      $data['password_error'] = "Password is required";
    }else if(strlen($data['password']) < 5 ){
      $data['password_error'] = "password must greater than 5";
    }

    if(empty($data['confirm_password'])){
      $data['confirm_error'] = "Confirm password is required";
    }else if($data['password'] != $data['confirm_password']){
      $data['confirm_error'] = " password must we same";
    }



     if(empty($data['account'])){
      $data['account_error'] = "Account is required";
    }else if(strlen($data['account']) <= 6){
      $data['account_error'] = "Account Number Must be equal to 7 digits";
    }else{
      if($source->Query("SELECT * FROM users WHERE account = ?", [$data['account']])){
        if($source->CountRows() > 0){
          $data['account_error'] = "sorry account already taken";
        }
      }
    }


 
    if(empty($data['name_error']) && empty($data['email_error']) && empty($data['password_error']) && empty($data['confirm_error']) && empty($data['account_error'])){
      $password = password_hash($data['password'], PASSWORD_DEFAULT);
     // echo $source->__toString();die;
      if($source->Query("INSERT INTO users (name,email,password,account) VALUES (?,?,?,?)", [$data['name'], $data['email'], $password, $data['account'] ])){
        $_SESSION['account_created'] = "Your account is created";
        header("location:login.php");
      }
    }
   



  }

?>


<!DOCTYPE html>
<html lang="en">
<head>
 <meta charset="UTF-8">
 <title>Singup Form</title>
 <link rel="stylesheet" href="assets/css/style.css">
 <link href="https://fonts.googleapis.com/css?family=Raleway:200,300,400" rel="stylesheet"> 
</head>
<body>
 
 <div class="container">
  <div class="form">
   <div class="form-section">
    <form action="" method="POST">
     <div class="group">
      <h3 class="heading">Create account</h3>
     </div>
     <div class="group">
      <input type="text" name="full_name" class="control" placeholder="Enter Name..." value="<?php if(!empty($data['name'])): echo $data['name']; endif;?>">
      <div class="error">
        <?php if(!empty($data['name_error'])): ?>
          <?php echo $data['name_error'];?>
        <?php endif; ?>
      </div> 
     </div>
     <div class="group">
      <input type="email" name="email" class="control" placeholder="Enter Email.." value="<?php if(!empty($data['email'])): echo $data['email']; endif;?>">
      <div class="error">
        <?php if(!empty($data['email_error'])): ?>
          <?php echo $data['email_error'];?>
        <?php endif;?>
      </div>
     </div>
     <div class="group">
      <input type="password" name="password" class="control" placeholder="Create Password..." value="<?php if(!empty($data['password'])): echo $data['password']; endif;?>">
       <div class="error">
        <?php if(!empty($data['password_error'])): ?>
          <?php echo $data['password_error'];?>
        <?php endif; ?>
      </div>
     </div>
     <div class="group">
      <input type="password" name="confirm" class="control" placeholder="Confirm Password..." value="<?php if(!empty($data['confirm_password'])): echo $data['confirm_password']; endif;?>">
       <div class="error">
        <?php if(!empty($data['confirm_error'])): ?>
          <?php echo $data['confirm_error'];?>
        <?php endif; ?>
      </div>
     </div>


     <div class="group">
      <input type="number" name="account" class="control" placeholder="Enter account..." value="<?php if(!empty($data['account'])): echo $data['account']; endif;?>">
       <div class="error">
        <?php if(!empty($data['account_error'])): ?>
          <?php echo $data['account_error'];?>
        <?php endif; ?>
      </div>
     </div>



     <div class="group m20">
      <input type="submit" name="signup" class="btn" value="Create account &rarr;">
     </div>
     <div class="group m20">
      <a href="login.php" class="link">Already have an account ?</a>
     </div>
    </form>
   </div>
  </div>
 </div>


</body>
</html>


