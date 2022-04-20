<?php
$url = "http://localhost/api/publication/1"; // modifier la publication 1
$data = array('idPub' => '123', 'intitulePub' => 'Publication 1', 'datePub' => '2022-04-19', 'Client_emailClient' => 'ahmedba22@yahoo.fr');

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "PUT");
curl_setopt($ch, CURLOPT_POSTFIELDS,http_build_query($data));

$response = curl_exec($ch);

var_dump($response);

if (!$response) 
{
    return false;
}
?>