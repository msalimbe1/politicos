const { Quote, validate } = require("../models/quote");

const express = require("express");
const router = express.Router();

// router.get("/", async (req, res) => {
//   const booking = await Booking.find();
//   console.log("Getting all bookings...");
//   res.send(booking);
// });

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  console.log("req.params", req.params);

  const quotes = await Quote.find({
    author: { $regex: `.*${id}.*`, $options: "i" }
  });

  res.send(quotes);
});

router.get("/tags/:id", async (req, res) => {
  const { id } = req.params;
  console.log("req.params", req.params);
  
  const quotes = await Quote.find({
    // $or: [
    //   { tags: { $in: id } },
    //   { tags: { $regex: `.*${id}.*`, $options: "i" } }
    // ]
    tags: { $regex: `.*${id}.*`, $options: "i" }
  });

  res.send(quotes);
});

router.post("/", async (req, res) => {
  //Validation
  console.log(req.body);
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const { text, author, source, tags, links } = req.body;

  const quote = new Quote({ text, author, source, tags, links });

  await quote.save();

  return res.status(200).send(quote);
});

// router.delete("/:id", async (req, res) => {
//   console.log("delete event and cancell booking", req.params.id);
//   await Event.findOneAndRemove({ _booking: req.params.id });
//   const booking = await Booking.findByIdAndUpdate(
//     { _id: req.params.id },
//     {
//       isCancelled: true
//     }
//   );
//   console.log(`${booking._id} deleted!`);
//   res.send(booking);
// });

module.exports = router;
