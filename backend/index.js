const express = require("express");
const cors = require("cors");
const app = express();
// const products = require("./products")
const mongoose = require("mongoose");
require("dotenv").config();
//Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());
const productsRouter = require("./routes/products");
const bannersRouter = require("./routes/banners");
app.use("/products", productsRouter);
app.use("/banners", bannersRouter);
//routes handlers
app.get("/", (req, res) => {
  res.send("Welcome to Ecommerce Store Api");
});

// app.get('/banners',(req,res)=>{
//       res.send(banners)
// })
const port = process.env.PORT || 5000;
const uri = process.env.DB_URI;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>console.log("MongoDb success")).catch((err)=>console.log("MongoDB connection failed", err.message))
;

