import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { IoMdArrowDropright } from 'react-icons/io';
import Slider from 'react-slick';
import ReactStars from 'react-rating-stars-component';

// Components
import MenuCollection from '../../Components/restaurant/MenuCollection';
import MenuSimilarRestaurantCard from '../../Components/restaurant/MenuSimilarRestaurantCard';
import { NextArrow, PrevArrow } from '../../Components/CarouselArrow';
import ReviewCard from '../../Components/restaurant/Reviews/ReviewCard';
import MapView from '../../Components/restaurant/MapView';

const Overview = () => {
    const { id } = useParams();

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };


    const ratingChanged = (newRating) => {
        console.log(newRating);
    };

    return (
        <>
            <div className='flex flex-col md:flex-row relative'>
                <div className='w-full md:w-8/12'>
                    <h2 className='font-semibold text-lg md:text-xl my-4'>About this place</h2>
                    <div className='flex justify-between items-center'>
                        <h4 className='text-lg font-medium'>Menu</h4>
                        <Link to={`/restaurant/${id}/menu`}>
                            <span className='flex items-center gap-1 text-zomato-400'>
                                See all menus <IoMdArrowDropright />
                            </span>
                        </Link>
                    </div>

                    <div className='flex flex-wrap gap-3 my-4'>
                        <MenuCollection
                            menuTitle="Menu"
                            pages="3"
                            image={[
                                "https://b.zmtcdn.com/data/menus/060/19332060/d30cb92d4d473f5c476578f97ae5cdbb.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
                                "https://b.zmtcdn.com/data/menus/246/19663246/8d5196be60e4b9eb6b965c80dff81603.png?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
                                "https://b.zmtcdn.com/data/menus/246/19663246/d9d67b38f6d6d9fbc2bf292d45347aa3.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",

                            ]}
                        />
                    </div>
                    <h4 className='text-lg font-medium my-4'>Cuisines</h4>
                    <div className='flex flex-wrap gap-2'>
                        <span className='border border-gray-600 text-blue-600 px-2 py-1 rounded-full'>
                            North Indian
                        </span>
                        <span className='border border-gray-600 text-blue-600 px-2 py-1 rounded-full'>
                            Mughlai
                        </span>
                        <span className='border border-gray-600 text-blue-600 px-2 py-1 rounded-full'>
                            Chinese
                        </span>
                    </div>

                    <div className='my-4'>
                        <h4 className='text-lg font-medium'>Average Cost</h4>
                        <h6>₹100 for one order (approx.)</h6>
                        <small className='text-gray-500'>Exclusive of applicable taxes and charges, if any</small>
                    </div>

                    <div className='my-4'>
                        <h4 className='text-lg font-medium'>Similar Restaurant</h4>
                        <Slider {...settings}>
                            <MenuSimilarRestaurantCard
                                image="https://b.zmtcdn.com/data/pictures/9/18992489/e5a963b27023da9e5d6b04066afe0b10_featured_v2.jpg"
                                title="tea"
                            />
                            <MenuSimilarRestaurantCard
                                image="https://b.zmtcdn.com/data/pictures/9/18992489/e5a963b27023da9e5d6b04066afe0b10_featured_v2.jpg"
                                title="tea"
                            />
                            <MenuSimilarRestaurantCard
                                image="https://b.zmtcdn.com/data/pictures/9/18992489/e5a963b27023da9e5d6b04066afe0b10_featured_v2.jpg"
                                title="tea"
                            />
                            <MenuSimilarRestaurantCard
                                image="https://b.zmtcdn.com/data/pictures/9/18992489/e5a963b27023da9e5d6b04066afe0b10_featured_v2.jpg"
                                title="tea"
                            />
                            <MenuSimilarRestaurantCard
                                image="https://b.zmtcdn.com/data/pictures/9/18992489/e5a963b27023da9e5d6b04066afe0b10_featured_v2.jpg"
                                title="tea"
                            />

                        </Slider>

                    </div>

                    <div className='my-4'>
                        <h4 className='text-lg font-medium my-4'>Rate your delivery experience</h4>

                        <ReactStars
                            count={5}
                            onChange={ratingChanged}
                            size={24}
                            activeColor="#ffd700"
                        />
                    </div>
                    <div className='my-4 w-full md:hidden flex flex-col gap-4'>
                        <MapView
                            title="Mumbai Xpress"
                            phno="+919591041645"
                            mapLocation={[12.973172142451594, 77.63953593243356]}
                            address="92, 1st Floor, HAL 2nd Stage, Doopanahalli Main Road, Indiranagar, Bangalore"
                        />
                    </div>
                    <div className='my-4 flex flex-col gap-4'>
                        <ReviewCard />
                        <ReviewCard />
                        <ReviewCard />
                        <ReviewCard />
                        <ReviewCard />
                    </div>
                </div>
                <aside
                    style={{ height: "fit-content" }}
                    className='hidden md:flex md:w-4/12 sticky top-2 bg-white p-3 shadow-md flex flex-col gap-4'
                >
                    <MapView
                        title="Mumbai Xpress"
                        phno="+919591041645"
                        mapLocation={[12.973172142451594, 77.63953593243356]}
                        address="92, 1st Floor, HAL 2nd Stage, Doopanahalli Main Road, Indiranagar, Bangalore"
                    />
                </aside>
            </div>

        </>
    )
}

export default Overview;