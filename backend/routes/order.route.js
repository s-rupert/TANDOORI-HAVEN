const express = require('express');
const Order = require("../models/order.model.js");
const router = express.Router();

router.get("/:id", async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    if (!order) return res.status(404).json({ message: "Item not found" });

    res.json(order);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});


module.exports = router;