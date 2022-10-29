import React from 'react'
import { AiTwotoneStar } from "react-icons/ai"

const RestaurantCard = () => {
    return (
        <>
            <div className='bg-white p-2 w-full rounded-2xl transition duration-600 ease-in-out hover:shadow-lg md:w-1/2 lg:w-1/4'>
                <div className='w-full h-56 lg:h-64 relative'>
                    <div className='absolute w-full bottom-4 flex items-end justify-between'>
                        <div className='flex flex-col gap-2 items-start'>
                            <span className='bg-zomato-400 text-white px-2 py-1 rounded text-xs font-medium'>Pro extra 10% OFF</span>
                            <span className='bg-blue-600 text-white px-2 py-1 rounded  text-xs font-medium'>₹80 OFF</span>
                        </div>
                        <span className='bg-white bg-opacity-75 p-1 rounded mr-3 text-xs font-medium'>42 min</span>
                    </div>

                    <img
                        src="https://b.zmtcdn.com/data/pictures/chains/4/50714/89d579a1ec6d959162f44fe4cef4546f_o2_featured_v2.jpg?output-format=webp"
                        alt="food"
                        className='w-full h-full rounded-2xl'
                    />

                </div>

                <div className='my-2 flex flex-col gap-1'>
                    <div className='flex items-center justify-between'>
                        <h4 className='text-xl font-semibold'>Behrouz Biryani</h4>
                        <span className='bg-green-800 text-white p-1 rounded flex items-center text-xs font-medium'>4.1 <AiTwotoneStar /></span>
                    </div>
                    <div className='flex items-center justify-between text-gray-500 text-sm font-medium'>
                        <p>Biryani, North Indian, Mughlai</p>
                        <p>₹350 for one</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default RestaurantCard