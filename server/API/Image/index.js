// Libraries
import express from "express";
import passport from "passport";
import multer from "multer";

// Database model
import { ImageModel } from "../../database/AllModals";

// Utilities
import { s3Upload } from "../../Utils/AWS/s3";

const Router = express.Router();

// Multer config
const storage = multer.memoryStorage();
const upload = multer({ storage });

/* 
Route       /id
Des         Get image details
Params      _id
Access      Public
Method      POST
*/
Router.get("/:_id", async (req, res) => {
    try {
        const image = await ImageModel.findById

    } catch (error) {
        return res.status(500).json({ error: error.message });

    }
})

/* 
Route       /
Des         Uploads given image to S3 bucket, and saves file link to mongodb
Params      none
Access      Public
Method      POST
*/
Router.post("/", upload.single("file"), async (req, res) => {
    try {
        const file = req.file;

        // S3 bucket options
        const bucketOptions = {
            Bucket: "zomatomaster",
            Key: file.originalname,
            Body: file.buffer,
            ContentType: file.mimetype,
            ACLs: "public-read",         //Access Control List
        }

        const uploadImage = await s3Upload(bucketOptions);

        return res.status(200).json({ uploadImage });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
})
export default Router;