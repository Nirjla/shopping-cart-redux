const express = require("express");
const cors = require("cors");
const app = express();
const products = require("./products")
const banners = require("./banners")

//Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());

//routes handlers
app.get("/", (req, res) => {
      console.log(req.body)
  res.send("Welcome to Ecommerce Store Api");
});
app.get('/products',(req,res)=>{
      res.send(products)
})
app.get('/banners',(req,res)=>{
      res.send(banners)
})
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
