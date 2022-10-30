import React, { useState } from 'react'

// Components
import DeliveryCarousel from './DeliveryCarousel';
import Brand from './Brand';
import RestaurantCard from '../RestaurantCard';

const Delivery = () => {

    const [restaurantList, setRestaurantList] = useState([
        {
            _id: "123456-3",
            photos: [
                "https://b.zmtcdn.com/data/pictures/chains/4/51154/858232a18b274a7279a47e59567c6557.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"
            ],
            name: "Samosa Party",
            cuisine: ["North Indian", "Chinese"],
            averageCost: 100,
            isPro: true,
            isOff: 80,
            durationOfDelivery: 47,
            restaurantReviewValue: 4.1,
        },
        {
            _id: "123456-2",
            photos: [
                "https://b.zmtcdn.com/data/pictures/chains/4/51154/858232a18b274a7279a47e59567c6557.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"
            ],
            name: "Al Bek",
            cuisine: ["North Indian", "Chinese"],
            averageCost: 100,
            isPro: true,
            isOff: 80,
            durationOfDelivery: 47,
            restaurantReviewValue: 4.1,
        },
        {
            _id: "123456-1",
            photos: [
                "https://b.zmtcdn.com/data/pictures/chains/4/51154/858232a18b274a7279a47e59567c6557.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*"
            ],
            name: "New Punjabi Hotel",
            cuisine: ["North Indian", "Chinese"],
            averageCost: 100,
            isPro: true,
            isOff: 80,
            durationOfDelivery: 47,
            restaurantReviewValue: 4.1,
        },

    ]);

    return (
        <>
            <DeliveryCarousel />
            {/* <Brand /> */}
            <h1 className="text-xl mt-4 mb-2 md:mt-8 md:text-3xl md:font-semibold">
                Delivery Restaurants in Shashtri Nagar
            </h1>
            <div className='flex justify-between flex-wrap'>
                {
                    restaurantList.map((restaurant) => (
                        <RestaurantCard {...restaurant} key={restaurant._id} />
                    ))
                }
            </div>
        </>
    )
}

export default Delivery;