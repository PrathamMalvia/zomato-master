// Libraries
import express from "express";
import { get } from "mongoose";
import passport, { authenticate } from "passport";

// Database model
import { OrderModel } from "../../database/AllModals";

// Validation
import { ValidateUserId } from "../../validation/order";

const Router = express.Router();

/* 
Route       /
Des         Get all the orders based on id
Params      _id
Access      Public
Method      GET
*/
Router.get("/:_id", passport.authenticate("jwt", { session: false }), async (req, res) => {
    try {
        await ValidateUserId(_id);

        const { _id } = req.params;
        const getOrders = await OrderModel.findOne({ user: _id })

        if (!getOrders) {
            return res.status(404).json({ error: "User Not Found" });
        }

        return res.status(200).json({ Orders: getOrders });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
})

/* 
Route       /new
Des         Add new order
Params      _id
Access      Public
Method      POST
*/
Router.post("/new/:_id", passport.authenticate("jwt"), async (req, res) => {
    try {
        const { _id } = req.session.passport.user._doc;
        const { orderDetails } = req.body;

        const addNewOrder = await OrderModel.findOneAndUpdate(
            {
                user: _id,
            },
            {
                $push: { orderDetails },
            },
            {
                new: true,
            }
        )

        return res.json({ order: addNewOrder });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
})

export default Router;