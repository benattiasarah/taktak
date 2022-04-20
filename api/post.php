<?php
	$url = 'http://localhost/api/publication';
	$data = array('idPub' => '40', 'intitulePub' => 'Publication 24', 'datePub' => '2022-05-10', 'Client_emailClient' => 'ahmedba@gmail.com');

	// use key 'http' even if you send the request to https://...
	$options = array(
		'http' => array(
			'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
			'method'  => 'POST',
			'content' => http_build_query($data)
		)
	);
	$context  = stream_context_create($options);
	$result = file_get_contents($url, false, $context);
	if ($result === FALSE) { /* Handle error */ }

	var_dump($result);
?>