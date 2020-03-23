<?php
header("Content-type:text/html;charset=utf-8");
	$username = $_POST["username"];
	$userpwd = $_POST["userpwd"];
	$conn = mysql_connect("localhost","root","root");
	if($conn){
		mysql_select_db("sikaiqi");
	}
    //切记加变量在字符串中加单引号
  $result = mysql_query("select * from register where uname='$username'",$conn);
  $row = mysql_num_rows($result);
    
  if($row == 0){
      echo 1;
      mysql_query("insert into register values('$username','$userpwd')",$conn);
  }else if($row == 1){
      echo 0;
  }