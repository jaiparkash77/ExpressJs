
const express = require('express');

const router = express.Router();

const registerUser = require('./UserController');

// Get request
// router.route("/api/v1/register").get(registerUser);

// Post request
// router.route("/api/v1/register").post(registerUser);

// Get and Post request -> if same api for both
// router.route("/api/v1/register").post(registerUser).get((req,res)=>{
//     res.send("Wow get request called");
// });

//apis
router.route("/register").post(registerUser);
router.route("/login").get(registerUser);
router.route("/product").delete(registerUser);
router.route("/update").put(registerUser);

module.exports = router;