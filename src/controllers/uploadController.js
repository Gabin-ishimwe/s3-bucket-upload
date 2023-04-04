const db   = require('../database/models/');
const dotenv  = require('dotenv');

dotenv.config();

const { File } = db;


class uploadController {

  //method to upload file and insert in the DB
  static async uploadMyFile(req, res){

    if (!req.file)
      return res.send('Please upload a file')

    try {

      //Upload file to S3
      return res.json({file: req.files});

      //Insert file name and link in DB

      // Return error of success msg
      
      } catch (error) {
        console.log('ERROR', error);
        return res.status('500').json({ errors: { error: 'Files not found', err: error.message } });
      }
  }

  //method to return files in the DB
  static async getFiles(req, res) {
    
     //Code to get all files from DB and return them

   }
}

module.exports = uploadController;