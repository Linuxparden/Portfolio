<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
</head>


<body>
<?php
$link =mysql_connect("localhost","root","");
$bbase= mysql_select_db("mylogin");

if(isset($_POST['ok']))
{
	$user= $_POST['username'];
	$pwd=$_POST['pass'];
	$cpwd=$_POST['cpass'];
	if(empty($user) & empty ($pwd) &empty($cpwd))
	{ echo "fields empty";}
	elseif($pwd!=$cpwd)
	{echo "password not match" ;}
	else{
	$qry= mysql_query("insert into log set username='$user', password='$pwd', confirm='$cpwd'");}
	if($qry)
	{
		echo "submitted sucessfully";
		
		}else{
			echo "failed to submit";}

}

?>
<form action="" method="post">
<table width="100%" border="0">
<tr><td align="right">Username:</td><td><input type="text" name="username" id="username" /></td></tr>
<tr><td align="right">Password:</td><td><input type="password" name="pass" id="pass" /> </td></tr></tr>

<tr><td align="right"> confirm Password:</td><td><input type="password" name="cpass" id="cpass" /></td></tr>
<tr><td align="right"> <input type="submit" value="ok" name="ok" /></td>
<td> <input type="reset" value="clear " name="clear" /> </td></tr>
</table>
</form>
</body>
</html>
