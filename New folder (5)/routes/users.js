var express = require("express");
var router = express.Router();
let User = require("../models/user.model");

/* GET users listing. */
router.get("/", function (req, res, next) {
  console.log("----");
  res.send("respond with a resource");
});

/* POST users listing. */
router.post("/", function (req, res) {

   const username = req.body.username;
   const email = req.body.email;
   const address = req.body.address;
   const gender = req.body.gender;
   const password = req.body.password;

  const newUser = new User({
    username: username,
    email: email,
    address: address,
    gender: gender,
    password: password
  });

  newUser.save()
      .then(() => res.json('User added!'))
      .catch(err => res.status(400).json('Error: ' + err));

  //console.log("----");
  //res.send("respond with a resource");
});

module.exports = router;
