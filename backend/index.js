const express = require("express");
const cors = require("cors");
const app = express();
// const products = require("./products")

//Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());
const productsRouter = require('./routes/products')
const bannersRouter = require('./routes/banners')
app.use('/products', productsRouter)
app.use('/banners', bannersRouter)
//routes handlers
app.get("/", (req, res) => {
  res.send("Welcome to Ecommerce Store Api");
});

// app.get('/banners',(req,res)=>{
//       res.send(banners)
// })
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
