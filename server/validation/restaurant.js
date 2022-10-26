import joi from "joi";

export const ValidateRestaurantCity = (restaurantCity) => {
    const Schema = joi.object({
        city: joi.string().required(),
    })

    return Schema.validateAsync(restaurantCity)
}

export const ValidateRestaurantSearchString = (restaurantSearchString) => {
    const Schema = joi.object({
        searchString: joi.string().required(),
    })

    return Schema.validateAsync(restaurantSearchString)
}