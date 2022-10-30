import React from 'react';

// Components
import RestaurantNavbar from "../Components/Navbar/restaurantNavbar";
import ImageGrid from '../Components/restaurant/ImageGrid';

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
                ]}/>
            </div>
        </>
    )
}

export default RestaurantLayout;