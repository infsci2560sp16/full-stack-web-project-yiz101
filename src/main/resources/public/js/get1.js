
function signin(){
 
  var email=document.getElementById("email").value;
  var password=document.getElementById("password1").value;

  $.get("/SignIn",{"email":email,"password1":password,},function(data){
	var d=JSON.parse(data);
    console.log(data);
    var e=data;
    alert(e+":login in successfully!");
    window.location.href="/Personal" ;
  });
}

function signup(){
  var firstname=document.getElementById("fname").value;
  var lastname=document.getElementById("lname").value;
  var email=document.getElementById("email").value;
  var password1=document.getElementById("password1").value;
   var password2=document.getElementById("password2").value;
 
 
var newuser={
  	"firstname":firstname,
  	"lastname":lastname,
    "email":email,
    "password1":password1,
    "password2":password2,
  };
    $.post("/SignUp",newuser,function(data){
   
    alert("Sign up successfully!");
   // window.location.href="/index" ;
  });
  }
  
  
 function search(){
  var story=document.getElementById("story").value;
  $.get("/search",{"story":story},function(data){
    console.log(data);
    var e=data;
    alert(e);
  });
}
