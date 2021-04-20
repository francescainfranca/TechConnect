<?php

$dbhost = "localhost";
$dbuser = "root";
$dbpass = "";
$dbname = "phpproject01";

if(!$con = mysqli_connect($dbhost,$dbuser,$dbpass,$dbname))
{

	die("failed to connect!");
}