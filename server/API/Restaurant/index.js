// Libraries
import express from "express";
import passport from "passport";

// Database modal
import { RestaurantModel } from "../../database/allModels";

const Router = express.Router();

/* 
Route       /
Des         Get all the restaurant details based in city
Params      none
Access      Public
Method      GET
*/
// /restaurant/?city=mumbai
Router.get("/", async (req, res) => {
    try {
        const { city } = req.query;
        const Restaurants = await RestaurantModel.find({ city });

        return res.json({ Restaurants });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
});

/* 
Route       /
Des         Get individual restaurant details based on id
Params      _id
Access      Public
Method      GET
*/
Router.get("/:_id", async (req, res) => {
    try {
        const { _id } = req.params;
        const restaurant = await RestaurantModel.findOne(_id);
        if (!restaurant) {
            return res.status(404).json({ error: "Restaurant Not Found" });
        }

        return res.json({ restaurant });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
})

/* 
Route       /search
Des         Get individual restaurant details based on search string
Params      none
Body        searchString
Access      Public
Method      GET
*/
Router.get("/search", async (req, res) => {
    try {
        const { searchString } = req.body;
        const restaurants = await RestaurantModel.find({
            name: { $regex: searchString, $options: "i" }
        })

        if (!restaurants) {
            return res.status(404).json({ error: `No restaurant matched with ${searchString}` });
        }

        return res.json({ restaurants });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }

})


export default Router;