// Libraries
import express from "express";
import { get } from "mongoose";
import passport from "passport";

// Database model
import { UserModel } from "../../database/allModels";

// Validation
import { ValidateUserId } from "../../validation/user";

const Router = express.Router();

/* 
Route       /
Des         Get user data
Params      _id
Body        none
Access      Public
Method      GET
*/
Router.get("/:id", async (req, res) => {
    try {
        await ValidateUserId(req.params);
        const { _id } = req.params;
        const getUser = await UserModel.findById(_id);

        return res.json({ user: getUser });
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