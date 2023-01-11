import React from "react";
import { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import axios from "axios";

// HOC
import HomeLayoutHOC from "./HOC/Home.HOC";
import RestaurantLayoutHOC from "./HOC/Restaurant.HOC";
import CheckoutLayoutHOC from "./HOC/Checkout.HOC";

// Components
import Temp from "../src/Components/temp";

// Pages
import Home from "./Pages/Home";
import Overview from "./Pages/Restaurant/Overview";
import OrderOnline from "./Pages/Restaurant/OrderOnline";
import Reviews from "./Pages/Restaurant/Reviews";
import Menu from "./Pages/Restaurant/Menu";
import Photos from "./Pages/Restaurant/Photos";
import Checkout from "./Pages/Checkout";
import RedirectRestaurant from "./Pages/Restaurant/Redirect";
import GoogleAuth from "./Pages/GoogleAuth";
import { useDispatch, useSelector } from "react-redux";

// redux actions
import { getMyself } from "./Redux/Reducer/User/user.action";

// axios global settings
if (localStorage.zomatoUser) {
  const { token } = JSON.parse(localStorage.zomatoUser);
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}


function App() {
  const dispatch = useDispatch(); 

    useEffect(() => {
      if (localStorage.zomatoUser) dispatch(getMyself());
    }, [])

  return (
    <>
      <Route path="/" exact>
        <Redirect to="/delivery" />
      </Route>

      <Route path="/restaurant/:id" exact component={RedirectRestaurant} />


      <HomeLayoutHOC path="/:type" exact component={Home} />
      <RestaurantLayoutHOC
        path="/google/:token"
        exact
        component={GoogleAuth}
      />

      <RestaurantLayoutHOC
        path="/restaurant/:id/overview"
        exact
        component={Overview}
      />
      <RestaurantLayoutHOC
        path="/restaurant/:id/order-online"
        exact
        component={OrderOnline}
      />
      <RestaurantLayoutHOC
        path="/restaurant/:id/reviews"
        exact
        component={Reviews}
      />
      <RestaurantLayoutHOC
        path="/restaurant/:id/menu"
        exact
        component={Menu}
      />
      <RestaurantLayoutHOC
        path="/restaurant/:id/photos"
        exact
        component={Photos}
      />

      <CheckoutLayoutHOC path="/checkout/orders" exact component={Checkout} />
    </>
  );
}

export default App;
