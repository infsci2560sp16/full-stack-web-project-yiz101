function myFunction()
{
alert("Please Check the Information!");
}

var checkpassword = function(text){
	if(password1.value!=password2.value){
		alert("password wrong")
		password1.value="";
		password2.value="";
	}
	else document.forms[0].submit();
}