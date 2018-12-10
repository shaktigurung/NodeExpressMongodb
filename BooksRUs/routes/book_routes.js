const express = require("express");
const router = express.Router();
const BookController = require("./../controllers/book_controller");

//the order of this routes matter
router.get("/", BookController.index);
router.post("/", BookController.create);
router.get("/new", BookController.make);
router.delete("/:id", BookController.destroy);
router.patch("/:id", BookController.update);
router.put("/:id", BookController.update);
router.get("/:id", BookController.show);
router.get("/:id/edit",BookController.edit);

module.exports = router;