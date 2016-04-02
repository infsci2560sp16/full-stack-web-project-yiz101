import com.google.gson.Gson;
import java.sql.Connection;
import java.util.HashMap;
import java.util.Map;
import spark.template.freemarker.FreeMarkerEngine;
import spark.ModelAndView;
import static spark.Spark.get;
import com.heroku.sdk.jdbc.DatabaseUrl;
import java.text.SimpleDateFormat;
import java.util.Date;
import static spark.Spark.get;
public class weekPrompt {

    Gson gson = new Gson();

    public weekPrompt() {
        setupRoutes();
    }

    private void setupRoutes() {
            get("/Personal", (req, res) -> {
                Map<String, Object> attributes = new HashMap<>();
                SimpleDateFormat formatter = new SimpleDateFormat("EEEE");
                String dayOfWeek = formatter.format(new Date());
                attributes.put("title", "Wicked Assets");
                attributes.put("dayOfWeek", dayOfWeek);
                attributes.put("Personal", "Yiyuan Zhang");
                return new ModelAndView(attributes, "Personal.ftl");
              }, new FreeMarkerEngine());
    }    
}