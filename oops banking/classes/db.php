 <?php

 	class db{

 		private $host = "localhost";
 		private $username = "root";
 		private $database = "loginoops";
 		private $password = "root";
 		protected $db;

 		public function __construct(){

 			try{

 				$this->db = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->database, $this->username, $this->password);
 				// echo "connection created succesfully!";

 			}catch(PDOException $e){
 				echo "connection Problem" . $e->getMessage();
 			}
 		}
 	}

 ?>