import static spark.Spark.get;
import static spark.Spark.post;
import java.util.HashMap;
import java.util.Map;
import com.google.gson.Gson;
import org.json.JSONObject;

public class search {
	Gson gson=new Gson();
	public search(){
		Search();
	}
	public void Search(){

		get("/search",(req,res)->{


			Map<String,Object> story=new HashMap<>();
			story.put("story",req.queryParams("story"));
			story.put("writer", "J.K.Rolling");
			story.put("writingTime", "1 month ago");
			story.put("likeNumber", "10010");
			story.put("country","China and USA");
			story.put("type","diary");
			story.put("form","long article");
			story.put("publishment","yes");
			story.put("keyWords","long-distance relationship");
			story.put("reproduce","agree");
			story.put("ageOfWriter","30");
			String xml =    "<?xml version=\"1.0\" encoding=\"UTF-8\"?>" +
                    "<story>" +
                        "<writer>"+story.get("writer")+"</writer>" +
                        "<writingTime>1 month ago</writingTime>" +
                        "<likeNumber>10010</likeNumber>" +
                        "<country>China and USA</country>" +
                        "<type>diary</type>" +
                        "<form>long article</form>" +
                        "<publishment>yes</publishment>" +
                        "<keyWords>long-distance relationship</keyWords>" +
                        "<reproduce>agree</reproduce>" +
                        "<ageOfWriter>30</ageOfWriter>" +
                    "</story>";
			res.type("content/xml");
			System.out.println("search successfully");
			return xml;
		});

	}
}
