const { Input, validate } = require("../models/input");

const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  const inputs = await Input.find();
  console.log("Getting all bookings...");
  res.send(inputs);
});

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
  if (error) return res.status(400).send(error);

  const {
    authors,
    avatars,
    titles,
    texts,
    dates,
    media,
    links,
    tags
  } = req.body;

  const input = new Input({
    authors,
    avatars,
    titles,
    texts,
    dates,
    media,
    links,
    tags
  });

  await input.save();

  return res.status(200).send(input);
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
