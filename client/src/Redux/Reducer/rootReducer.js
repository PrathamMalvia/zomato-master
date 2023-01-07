import { combineReducers } from "redux"

import restaurant from "./restaurant/restaurant.reducer"
import image from "./Image/Image.reducer";
import review from "./Reviews/review.reducer";
import user from "./User/user.reducer";
import food from "./Food/Food.reducer";

const rootReducer = combineReducers({ restaurant, image, review, user,food });

export default rootReducer;