const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
// console.log(__dirname);

const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../template/views");
const partialsPath = path.join(__dirname, "../template/partials");

//to set the view engine
app.set("view engine", "hbs");
app.set("views", templatePath);


// app.use(express.static(staticPath));

app.get("/", (req, res) => {
  res.render("index", {
    name: "Het",
    collegeName: "IIITV",
  });
});
app.get("/", (req, res) => {
  res.send("hello from express");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/contact", (req, res) => {
  res.send("hellow from the contact page");
});

app.listen(8000, () => {
  console.log(`listening to the port no 8000`);
});

// const express = require("express");
// const path = require('path')

// // console.log(__dirname);

// const staticPath = path.join(__dirname,"../public",);

// const app = express();
// //builtin middleware
// app.use(express.static(staticPath));

// app.get("/", (req,res) =>{
//     res.send("hello from express");
// })

// app.get("/about",(req,res) =>{
//     res.write("hellow from ");
//     res.write("the ");
//     res.write("about page");
//     res.send();
// })

// app.get("/contact",(req,res) =>{
//     res.send("hellow from the contact page");
// })

//  app.listen(8000,() =>{
//     console.log(`listening to the port no 8000`);
//  })

// /*
// API
// post - create
// get - read
// put - update
// delete - delete
// */
