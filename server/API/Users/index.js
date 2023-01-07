// Libraries
import express from "express";
import { get } from "mongoose";
import passport from "passport";

// Database model
import { UserModel } from "../../database/AllModals";

// Validation
import { ValidateUserId } from "../../validation/user";

const Router = express.Router();

/* 
Route       /
Des         Get user data
Params      none
Body        none
Access      Public
Method      GET
*/
Router.get("/", passport.authenticate("jwt"), async (req, res) => {
    try {
        const { email, fullname, phoneNumber, address } = req.session.passport.user._doc;

        return res.json({ user: { email, fullname, phoneNumber, address } });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
})

/* 
Route       /:id
Des         Get user data
Params      _id
Body        none
Access      Public
Method      GET
*/
Router.get("/:_id", passport.authenticate("jwt"), async (req, res) => {
    try {
        const user = await UserModel.findById(req.params._id);

        const { fullname } = user;

        return res.json({ user: { fullname } });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
})

/* 
Route       /update
Des         Update user id
Params      _id
Body        user data
Access      Public
Method      PUT
*/
Router.put("/update/:_userID", async (req, res) => {
    try {
        await ValidateUserId(req.params);

        const { _userID } = req.params;
        const { userData } = req.body;

        const updateUserData = await UserModel.findByIdAndUpdate(_userID,
            {
                $set: userData,
            },
            {
                new: true,
            }
        );

        return res.json({ user: updateUserData });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
})

export default Router;