<?php

$host = 'localhost';
$username = 'lab5_user';
$password = 'password123';
$dbname = 'world';

try{
  $conn = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
  $conn -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  
  if(isset($_GET['country'])){
    $country = $_GET['country'];
    $stmt = $conn->prepare("SELECT * FROM countries WHERE name LIKE :country");
    $stmt -> execute(['country' => "%$country%"]);

    $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($results);
    
  } else{
    echo json_encode([]);
  }

} catch(PDOException $e){
  echo "Connection failed: " . $e -> getMessage();
}
?>