require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 5000;

const mongoose = require("mongoose");

// connection to database
mongoose.connect("mongodb://localhost:27017/TIL", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const factDB = mongoose.connection;

factDB.on("error", console.error.bind(console, "connection error:"));

// set up schema
const factSchema = new mongoose.Schema({
  title: String,
  author: String,
  fact: String,
  date: String
});

const FactModel = mongoose.model("facts", factSchema);

app.use(express.urlencoded({extended: true}))
//route to public folder
app.use(express.static("./client/public"));

//Sends posts from home page to mongodb
app.post("/api", (req, res) => {
  const newContent = new FactModel({
    title: req.body.title,
    author: req.body.author,
    fact: req.body.fact,
    date: new Date()
  })
  
  newContent.save(function(err){
    if (err) throw err
    console.log("Fact Added")
  })
  res.redirect('/')
})

//pulls from mongodb to api
app.get("/api", async (req, res) => {
  //find all documents
  const cursor = await FactModel.find({});
  // creat array to hold result
  let results = [];
  await cursor.forEach((fact) => {
    results.push(fact);
  });
  
  res.json(results);
});

//pulls post from mongodb by id to post them individually
app.get(`/api/:id`, express.urlencoded(), async(req,res) => {
  await FactModel.findOne({_id: ObjectId(req.params.id)})

  res.json(ObjectId(req.params.id))
})

app.get("*", (request, response) => {
  response.sendFile(path.resolve("./public/index.html"));
});

app.listen(port, () => {
  console.log("listening on port:", port);
});
