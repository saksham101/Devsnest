const router = require("express").Router();
const path = require("path");
const fs = require("fs");
const { STRIPE_SECRET } = require("../config");
const stripe = require("stripe")(STRIPE_SECRET);

router.get("/", (req, res) => {
  if (req.query.cancelled)
    res.json({
      message: "Payment Cancelled",
      success: "Failure",
    });
  res.sendFile(path.join(__dirname, "../public/html/payment.html"));
});

router.post("/payment", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          amount: req.body.price * 100,
          name: "Shopping",
          currency: "usd",
          quantity: 1,
        },
      ],
      payment_method_types: ["card"],
      success_url: `${req.headers.origin}/stripe?success=true&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}/stripe?cancelled=true`,
    });
    res.redirect(303, session.url);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      err,
      message: "Internal Error",
    });
  }
});
module.exports = router;