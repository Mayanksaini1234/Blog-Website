import express from "express";
import ejs from "ejs";
import bodyParser from "body-parser";
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});
app.get("/about", (req, res) => {
  res.render("about.ejs");
});
app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});  

app.get("/Blogs", (req, res) => {
  // console.log(req);
  res.render("blog.ejs");
});
let Name="";
app.post("/compose", (req, res) => {
  // console.log(req.body);
  Name = req.body["Name"];
  res.render("compose.ejs", { Name });
});

app.get("/compose", (req, res) => {
  res.render("compose.ejs");
});
app.post("/compose_post", (req, res) => {
  // console.log(req.body);
  let post = req.body["post"];
  let title = req.body["title"];
  res.render("post.ejs", { post, title });
});

app.get("/our_blogs_web", (req, res) => {
  res.render("our_blogs_web.ejs");
});
app.get("/our_blogs_app", (req, res) => {
  res.render("our_blogs_app.ejs");
});
app.get("/our_blogs_ai", (req, res) => {
  res.render("our_blogs_ai.ejs");
});
app.get("/our_blogs_data", (req, res) => {
  res.render("our_blogs_data.ejs");
});
app.get("/our_blogs_devops", (req, res) => {
  res.render("our_blogs_devops.ejs");
});
app.get("/our_blogs_cloud", (req, res) => {
  res.render("our_blogs_cloud.ejs");
});

// a (anchor tag -> href  ==> allow for only [get] request) but there is a jugad for post aLSO...
// form->action ==> allow for any of post or get request ...
// req.body ony works with post method 
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
