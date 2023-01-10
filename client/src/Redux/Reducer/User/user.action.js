import axios from "axios";

// redux types
import { GET_USER, SELF } from "./user.type";

export const getUser = (_id) => async (dispatch) => {
    try {
        const User = await axios(
            {
                method: "GET",
                url: `http://localhost:99/user/${_id}`,
            }
        )

        return dispatch({ type: GET_USER, payload: User.data });
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error });
    }
}

export const getMyself = () => async (dispatch) => {
    try {
        const User = await axios(
            {
                method: "GET",
                url: `http://localhost:99/user`,
            }
        )

        return dispatch({ type: SELF, payload: User.data });
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error });
    }
}


/* export const signup = (_id) => async (dispatch) => {
    try {
        const User = await axios(
            {
                method: "GET",
                url: `http://localhost:99/user/${_id}`,
            }
        )

        localStorage.setItem("zomato", _id)

        return dispatch({ type: GET_USER, payload: User.data });
    } catch (error) {
        return dispatch({ type: "ERROR", payload: error });
    }
} */