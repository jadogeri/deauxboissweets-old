const express = require('express')
const {validateTokenBody} = require("../middlewares/validateTokenBodyHandler")

const router = express.Router();

const {loginAdmin, logoutAdmin, resetAdmin, forgotAdmin} = require("../controllers/adminController");

router.post("/login",loginAdmin);

router.post("/logout",validateTokenBody,logoutAdmin);

router.put("/reset",resetAdmin);

router.put("/forgot",forgotAdmin);


module.exports = router;