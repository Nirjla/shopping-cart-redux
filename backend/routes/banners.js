const express = require("express");
const { handleRequest } = require("../utils/apiUtils");
const { getBanners } = require("../data");

const router = express.Router();
router.get("/", async (req, res) => {
  const { success, data, error } = await handleRequest(getBanners);
  if (success) {
    res.json(data);
  }
  else{
      res.status(500).json({error})
  }
});
module.exports = router
