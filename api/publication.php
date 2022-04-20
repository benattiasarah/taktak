<?php

	// Connect to database
	/*$server = "localhost";
	$username = "root";
	$password = "root";
	$db = "taktak";*/
	/*$conn = new mysqli("localhost","root","Rootroot.2022","taktak",3306,"") or die("fail" .mysqli_connect_error());*/
	$conn = mysqli_connect("localhost","root","Rootroot.2022","taktak",3306,"") or die("fail_" .mysqli_connect_error());

	$request_method = $_SERVER["REQUEST_METHOD"];

	function getPublications()
	{
		global $conn;
		$query = "SELECT * FROM `taktak`.`Publication`";
		$response = array();
		$result = mysqli_query($conn, $query);
		while($row = mysqli_fetch_array($result))
		{
			$response[] = $row;
		}
		header('Content-Type: application/json');
		echo json_encode($response, JSON_PRETTY_PRINT);
	}
	
	function getPublication($idPub=0)
	{
		global $conn;
		$query = "SELECT * FROM `taktak`.`Publication`";
		if($idPub != 0)
		{
			$query .= " WHERE idPub=".$idPub." LIMIT 1";
		}
		$response = array();
		$result = mysqli_query($conn, $query);
		while($row = mysqli_fetch_array($result))
		{
			$response[] = $row;
		}
		header('Content-Type: application/json');
		echo json_encode($response, JSON_PRETTY_PRINT);
	}
	
	function addPublication()
	{
		global $conn;
		$idPub = $_POST["idPub"];
		$intitulePub = $_POST["intitulePub"];
		$datePub = date('Y-m-d');
		$Client_emailClient = $_POST["Client_emailClient"];
		echo $query="INSERT INTO `taktak`.`Colis`(idPub, intitulePub, datePub, Client_emailClient_id, created, modified) VALUES('".$idPub."', '".$intitulePub."', '".$datePub."', '".$Client_emailClient."')";
		if(mysqli_query($conn, $query))
		{
			$response=array(
				'status' => 1,
				'status_message' =>'Publication ajoutée avec succès.'
			);
		}
		else
		{
			$response=array(
				'status' => 0,
				'status_message' =>'ERREUR!.'. mysqli_error($conn)
			);
		}
		header('Content-Type: application/json');
		echo json_encode($response);
	}
	
	function updatePublication($idPub)
	{
		global $conn;
		$_PUT = array();
		parse_str(file_get_contents('php://input'), $_PUT);
		$idPub = $_PUT["idPub"];
		$intitulePub = $_PUT["intitulePub"];
		$datePub = date('Y-m-d');
		$Client_emailClient = $_PUT["Client_emailClient"];
		$query="UPDATE `taktak`.`Colis` SET idPub='".$idPub."', intitulePub='".$intitulePub."', datePub='".$datePub."', Client_emailClient='".$Client_emailClient."' WHERE idPub=".$idPub;
		
		if(mysqli_query($conn, $query))
		{
			$response=array(
				'status' => 1,
				'status_message' =>'Publication mise à jour avec succès.'
			);
		}
		else
		{
			$response=array(
				'status' => 0,
				'status_message' =>'Échec de la mise à jour de lq publication. '. mysqli_error($conn)
			);
			
		}
		
		header('Content-Type: application/json');
		echo json_encode($response);
	}
	
	function deletePublication($idPub)
	{
		global $conn;
		$query = "DELETE FROM `taktak`.`Publication` WHERE idPub=".$idPub;
		if(mysqli_query($conn, $query))
		{
			$response=array(
				'status' => 1,
				'status_message' =>'Publication supprimée avec succès.'
			);
		}
		else
		{
			$response=array(
				'status' => 0,
				'status_message' =>'La suppression de la publication a échoué. '. mysqli_error($conn)
			);
		}
		header('Content-Type: application/json');
		echo json_encode($response);
	}
	
	switch($request_method)
	{
		
		case 'GET':
			// Retrive Products
			if(!empty($_GET["idPub"]))
			{
				$idPub=intval($_GET["idPub"]);
				getPublication($idPub);
			}
			else
			{
				getPublications();
			}
			break;
		default:
			// Invalid Request Method
			header("HTTP/1.0 405 Method Not Allowed");
			break;
			
		case 'POST':
			// Ajouter une Publication
			addPublication();
			break;
			
		case 'PUT':
			// Modifier une Publication
			$idPub = intval($_GET["idPub"]);
			updatePublication($idPub);
			break;
			
		case 'DELETE':
			// Supprimer un Publication
			$idPub = intval($_GET["idPub"]);
			deletePublication($idPub);
			break;

	}
?>