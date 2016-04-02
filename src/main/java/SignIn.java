import com.google.gson.Gson;
import org.json.JSONObject;
import java.util.HashMap;
import java.util.Map;
import java.util.Date;
import static spark.Spark.get;
import static spark.Spark.post;

public class SignIn {
	Gson gson=new Gson();
	public SignIn(){
		userSignin();
	}
	public void userSignin(){

		post("/SignUp",(req,res)->{
			Map<String,Object> user=new HashMap<>();
			String email=req.queryParams("email");
			
			user.put("fname","Yiyuan");
			user.put("lname","Zhang");
			user.put("email",email);
			user.put("password1", 1234);
			user.put("password2", 1234);
			System.out.println("sign up done");
			return user;
		},gson::toJson);

		get("/SignIn",(req,res)->{
		try{
			Map<String,Object> user=new HashMap<>();
			String email=req.queryParams("email");
			String password=req.queryParams("password1");
			user.put("email", email);
			user.put("password1", password);
			System.out.println("valid user");
			return user;
		}catch(Exception e){
			System.out.println("There is an exception"+e);
			return res;}
		
		},gson::toJson);
	}
}


