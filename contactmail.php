<?php
$u_email=$_POST['useremail'];
$u_name=$_POST['username'];
$u_num=$_POST['usernumber'];
$u_subject=$_POST['usersubjet'];
$u_msg=$_POST['user_msg'];
if( trim($u_email)!="Your email" && trim($u_name)!="Your Name" && trim($u_num)!="Your Number" && trim($u_sub)!="Your subject" && trim($u_msg)!="Your question" && trim($u_name)!="" && trim($u_num)!="" && trim($u_email)!="" && trim($u_msg)!="" && trim($u_sub)!="")
{
	if(filter_var($u_email, FILTER_VALIDATE_EMAIL))
	{
		$message="Hi Admin..
		    <p>Email Id is : ".$u_email."</p>
			<p> User Name is : ".$u_name." has sent a query</p>
			<p> User Number is : ".$u_num." has sent a query</p>
			<p>Subject  is : ".$u_sub."</p>
			<p>Message is : ".$u_msg."</p>";
		
		$message_user="Hi ".$u_email."<p> Thank you so much for your valuable comments. <br> Our Support team will get back to you ASAP.</p><p>Have a great day ahead.</p>";
		
		
		$headers = "MIME-Version: 1.0" . "\r\n";
		$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
		$headers .= 'From: <support@templatebundle.net>' . "\r\n";

		if(mail('support@templatebundle.net','Query for Bakery Shop ',$message,$headers ))
		{
		mail($u_email,'Reply from Bakery Shop Template Team',$message_user,$headers );
			
		echo '1#<p style="color:green;">Mail has been sent successfully.</p>';
		}
		else
		{
		echo '2#<p style="color:red;">Please, Try Again.</p>';
		}
	}
	else
		echo '2#<p style="color:red">Please, provide valid Email.</p>';
}
else
{
echo '2#<p style="color:red">Please, fill all the details.</p>';
}?>