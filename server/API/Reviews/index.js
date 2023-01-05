// Libraries
import express from "express";
import { get } from "mongoose";
import passport from "passport";

// Database model
import { ReviewModel } from "../../database/AllModels";

// Validation
import { ValidateUserId } from "../../validation/user";

const Router = express.Router();

/* 
Route       /new
Des         Add new food review/rating
Params      none
Body        review Object
Access      Public
Method      POST
*/
Router.post("/new", async (req, res) => {
    try {
        await ValidateReviewData(req.body);

        const { reviewData } = req.body;

        await ReviewModel.create(reviewData);

        return res.json({ review: "Successfully created the review." });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
})

/* 
Route       /delete
Des         Delete a review
Params      _id
Body        none
Access      Public
Method      DELETE
*/
Router.delete("/delete/:_id", async (req, res) => {
    try {
        await ValidateUserId(req.params);

        const { _id } = req.params;

        await ReviewModel.findByIdAndDelete(_id);

        return res.json({ review: "Successfully deleted the review." });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
})

export default Router;