<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Untitled Document</title>
</head>

<body>
<?php
$score=100;
if($score===70)
{
	echo "A";
}
else if($score>=65)
{
	echo "B";
}
else if($score>=55)
{
	echo "C";
}
else if($score>=50)
{
	echo "D";
}
else
{
	echo "Fail";
}
?>
</body>
</html>