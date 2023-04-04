const express = require("express");
const dotenv = require("dotenv");
const router = express.Router();
const upload = require("../helper/multer");

dotenv.config();
const uploadController = require("../controllers/uploadController");

router.get("/", (_, res) => res.send("Welcome to S3 File Uploader"));
router.post("/upload", upload.single("file"), uploadController.uploadMyFile);
router.get("/files/", uploadController.getFiles);

module.exports = router;
