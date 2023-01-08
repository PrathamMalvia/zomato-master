// Libraries
import express from "express";
import { get } from "mongoose";
import passport from "passport";

// Database model
import { ReviewModel } from "../../database/AllModals";

// Validation
import { ValidateUserId } from "../../validation/user";

const Router = express.Router();

/* 
Route       /
Des         Get all reviews
Params      resid
Body        none
Access      Public
Method      GET
*/
Router.get("/:resid", async (req, res) => {
    try {
        const reviews = await ReviewModel.find({ restaurant: req.params.resid })

        return res.json({ reviews })
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
})

/* 
Route       /new
Des         Add new food review/rating
Params      none
Body        review Object
Access      Public
Method      POST
*/
Router.post("/new", passport.authenticate("jwt"), async (req, res) => {
    try {
        const { _id } = req.session.passport.user._doc;

        const { reviewData } = req.body;

        await ReviewModel.create({ ...reviewData, user: _id });

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