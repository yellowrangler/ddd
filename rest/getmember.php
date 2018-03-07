<?php

include_once ('class/class.Log.php');
include_once ('class/class.ErrorLog.php');
include_once ('class/class.AccessLog.php');

// if cross browser request options ignore
if($_SERVER['REQUEST_METHOD'] == "OPTIONS") 
{

	exit();
}

// get post values & set values for query
// This is for axios post
$parms = json_decode(file_get_contents("php://input"), true);

// print_r($parms);

$membername = "";
$memberid = "";
$token = "";

if( isset($parms['membername']) )
{
     $membername = $parms['membername'];
}

if( isset($parms['memberid']) )
{
     $memberid = $parms['memberid'];
}

if( isset($parms['token']) )
{
     $token = $parms['token'];
}

//
// get date time for this transaction
//
$datetime = date("Y-m-d H:i:s");


// set variables
$enterdate = $datetime;

//
// messaging
//
$returnArrayLog = new AccessLog("logs/");
// $returnArrayLog->writeLog("Member List request started" );

//------------------------------------------------------
// get admin user info
//------------------------------------------------------
// open connection to host
$DBhost = "localhost";
$DBschema = "ddd";
$DBuser = "tarryc";
$DBpassword = "tarryc";

//
// connect to db
//
$dbConn = @mysql_connect($DBhost, $DBuser, $DBpassword);
if (!$dbConn) 
{
	$log = new ErrorLog("logs/");
	$dberr = mysql_error();
	$log->writeLog("DB error: $dberr - Error mysql connect. Unable to get member information.");

	$rv = "";
	exit($rv);
}

if (!mysql_select_db($DBschema, $dbConn)) 
{
	$log = new ErrorLog("logs/");
	$dberr = mysql_error();
	$log->writeLog("DB error: $dberr - Error selecting db Unable to get member information.");

	$rv = "";
	exit($rv);
}

//---------------------------------------------------------------
// get nfl game type information
//---------------------------------------------------------------
if ($memberid != "")
{
	$sql = "SELECT *  FROM membertbl WHERE id = '$memberid' AND status = 'active' AND token = '$token'";
}
else
{
	$sql = "SELECT *  FROM membertbl WHERE membername = '$membername'  AND status = 'active' AND token = '$token'";
}

// print $sql;

$sql_result = @mysql_query($sql, $dbConn);
if (!$sql_result)
{
    $log = new ErrorLog("logs/");
    $sqlerr = mysql_error();
    $log->writeLog("SQL error: $sqlerr - Error doing select to db Unable to get member $membername information.");
    $log->writeLog("SQL: $sql");

    $status = -100;
    $msgtext = "System Error: $sqlerr";
}

//
// get the member information
//
$r = mysql_fetch_assoc($sql_result);
$member = $r;

//
// close db connection
//
mysql_close($dbConn);

//
// pass back info
//
exit(json_encode($member));

?>
