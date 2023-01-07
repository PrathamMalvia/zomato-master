// Libraries
import express from "express";
import passport from "passport";

// Database Modals
import { RestaurantModel } from "../../database/AllModals";

const Router = express.Router();

// @Route   GET /restaurants/
// @des     GEt all restaurant of a particular city
// @access  PUBLIC
Router.get("/", async (req, res) => {
    try {
        const city = req.query.city;
        const allRestaurants = await RestaurantModel.find({
            city: city || "Mumbai",
        });
        return res.json({ restaurants: allRestaurants });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

// @Route   GET /restaurants/s/:search
// @des     GEt restaurants by the search string
// @access  PUBLIC
Router.get("/s/:search", async (req, res) => {
    try {
        const { search } = req.params;
        const allRestaurants = await RestaurantModel.find({
            name: { $regex: search, $options: "i" },
        });
        return res.json({ restaurants: allRestaurants });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

// @Route   POST /restaurants/new
// @des     add new restaurant
// @access  PRIVATE
Router.post("/new", passport.authenticate("jwt"), async (req, res) => {
    try {
        const restaurant = await RestaurantModel.create(req.body.restaurantData);
        return res.json({ restaurants: restaurant });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

// @Route   PATCH /restaurants/update
// @des     update exisitng restaurant data
// @access  PRIVATE
Router.patch("/update", passport.authenticate("jwt"), async (req, res) => {
    try {
        const updatedRestaurant = await RestaurantModel.findByIdAndUpdate(
            req.body.restaurantData._id,
            { $set: req.body.restaurantData },
            { new: true }
        );
        if (!updatedRestaurant)
            return res.status(404).json({ restaurants: "Restaurant Not Found!!!" });

        return res.json({ restaurants: updatedRestaurant });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

// @Route   DELETE /restaurants/delete
// @des     update exisitng restaurant data
// @access  PRIVATE
Router.delete("/delete", passport.authenticate("jwt"), async (req, res) => {
    try {
        const deleteRestaurant = await RestaurantModel.findByIdAndRemove(
            req.body.restaurantData._id
        );
        return res.json({ restaurants: Boolean(deleteRestaurant) });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

// @Route   GET /restaurants/
// @des     GEt a single restaurant data
// @access  PUBLIC
Router.get("/:id", async (req, res) => {
    try {
        const restaurant = await RestaurantModel.findById(req.params.id);
        if (!restaurant)
            return res.status(404).json({ restaurants: "Restaurant Not Found!!!" });

        return res.json({ restaurants: restaurant });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

export default Router;