const multer = require("multer");
const multerS3 = require("multer-s3");
const aws = require("aws-sdk");
const dotenv = require("dotenv");
dotenv.config();

const s3 = new aws.S3({
  accessKeyId: process.env.AWS_ACCESS_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.AWS_BUCKET_NAME,
    contentType: multerS3.AUTO_CONTENT_TYPE,
    acl: "public-read",
    metadata: (req, file, cb) => {
      cb(null, { fieldName: file.fieldname });
    },
    key: (req, file, cb) => {
      cb(null, "files_from_node/" + Date.now().toString() + file.originalname);
    },
  }),
});

module.exports = upload;
