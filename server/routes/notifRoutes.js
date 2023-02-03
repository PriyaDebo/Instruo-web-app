const express = require("express");
const notifController = require("../controllers/notif_controller");

const router = express.Router();

router.post("/create", notifController.createNotif);
router.get("/:id", notifController.getMyNotifs);

module.exports = router;
