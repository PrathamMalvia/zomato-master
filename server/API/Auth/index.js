// Library
import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import passport from "passport";

// Models
import { UserModel } from "../../database/user"

// Validation
import { ValidateSignup, ValidateSignin } from "../../validation/auth";

const Router = express.Router();

/* 
Route       /signup
Des         Register new user
Params      none
Access      Public
Method      POST
*/
Router.post("/signup", async (req, res) => {

    try {
        await ValidateSignup(req.body.credentials);
        await UserModel.findByEmailAndPhone(req.body.credentials);

        // save to DB
        const newUser = await UserModel.create(req.body.credentials);

        // generate JWT auth token
        const token = newUser.generateJwtToken();

        // return
        return res.status(200).json({ token: token, user: newUser, status: "success" });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})

/* 
Route       /signup
Des         Signin with email and password
Params      none
Access      Public
Method      POST
*/
Router.post("/signin", async (req, res) => {
    try {
        await ValidateSignin(req.body.credentials)
        const user = await UserModel.findByEmailAndPassword(req.body.credentials);

        const token = user.generateJwtToken();

        return res.status(200).json({ token: token, status: "success" });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})

/* 
Route       /google
Des         google signin
Params      none
Access      Public
Method      GET
*/
Router.get
    ("/google", passport.authenticate("google", {
        scope: [
            "https://www.googleapis.com/auth/userinfo.email",
            "https://www.googleapis.com/auth/userinfo.profile",
        ]
    })
    )

/* 
Route       /google/callback
Des         google signin callback
Params      none
Access      Public
Method      GET
*/
Router.get("/google/callback", passport.authenticate("google", { failureRedirect: "/" }), (req, res) => {
    return res.json({ token: req.session.passport.user.token });

})
export default Router;