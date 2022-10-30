import React from 'react';
import { TiStarOutline } from "react-icons/ti"
import { RiDirectionLine, RiShareForwardLine } from "react-icons/ri"
import { BiBookmarkPlus } from "react-icons/bi"

// Components
import RestaurantNavbar from "../Components/Navbar/restaurantNavbar";
import ImageGrid from '../Components/restaurant/ImageGrid';
import RestaurantInfo from '../Components/restaurant/RestaurantInfo';
import InfoButtons from '../Components/restaurant/InfoButtons';

const RestaurantLayout = () => {
    return (
        <>
            <RestaurantNavbar />
            <div className="container mx-auto px-4 lg:px-40">
                <ImageGrid images={[
                    'https://b.zmtcdn.com/data/pictures/chains/6/50036/db2271e47065db0a611237066279297b_featured_v2.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*',
                    'https://b.zmtcdn.com/data/pictures/chains/6/50036/db2271e47065db0a611237066279297b_featured_v2.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*',
                    'https://b.zmtcdn.com/data/pictures/chains/6/50036/db2271e47065db0a611237066279297b_featured_v2.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*',
                    'https://b.zmtcdn.com/data/pictures/chains/6/50036/db2271e47065db0a611237066279297b_featured_v2.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*',
                    'https://b.zmtcdn.com/data/pictures/chains/6/50036/db2271e47065db0a611237066279297b_featured_v2.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*',
                ]}
                />
                <RestaurantInfo
                    name="Al-Bek"
                    restaurantRating="4.1"
                    deliveryRating="4.1"
                    cuisine="Mughlai, Arabian, North Indian, Chinese, Seafood"
                    address="Rajajinagar, Mumbai"
                />

                <div className='my-4 flex flex-wrap gap-3'>
                    <InfoButtons isActive >
                        <TiStarOutline /> Add Review
                    </InfoButtons>

                    <InfoButtons  >
                        <RiDirectionLine /> Direction
                    </InfoButtons>

                    <InfoButtons  >
                        <BiBookmarkPlus /> Bookmark
                    </InfoButtons>

                    <InfoButtons  >
                        <RiShareForwardLine /> Share
                    </InfoButtons>

                </div>
            </div>



        </>
    )
}

export default RestaurantLayout;