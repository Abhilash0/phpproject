<?php include "init.php";?>
<?php

if(isset($_POST['deposit'])) {

	$data = [
		'account'       	=> $_POST['account'],
		'amount'        	=> $_POST['amount'],
		'account_error' 	=> '',
		'amount_error'  	=> ''


	];
	if(empty($data['account'])){
		$data['account_error'] = "Account is required";
	}
	if(empty($data['amount'])){
		$data['amount_error'] = "Amount is required";
	}



	if (empty($data['account_error']) && empty($data['amount_error'])) {

		if ($source->Query("SELECT * FROM account WHERE account = ?", [$data['account']])) {
			$fields = $source->FetchAll();

			if (count($fields)) {
				if((int) $fields[0]->amount <= $data['amount']){
					echo 'Please Enter Sufficient Amount';
				}
				else if($source->Query("UPDATE account SET amount = ? WHERE account = ?", [(int) $fields[0]->amount - $data['amount'], $data['account']]))
				{
					echo "Your Account Updated Successfully!";
				}
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

</form>
</div>



</body>
</html>