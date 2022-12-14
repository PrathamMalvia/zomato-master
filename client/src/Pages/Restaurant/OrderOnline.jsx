import React from 'react'
import { AiOutlineCompass } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";

// Components
import FloatMenuBtn from '../../Components/restaurant/Order-Online/FloatMenuBtn';
import MenuListContainer from '../../Components/restaurant/Order-Online/MenuListContainer';
import FoodList from '../../Components/restaurant/Order-Online/FoodList';

const OrderOnline = () => {
    return (
        <>
            <div className='w-full h-screen flex '>
                <aside className='hidden md:flex flex-col gap-3 overflow-y-scroll border-r border-gray-300 h-screen w-1/4'>
                    <MenuListContainer />
                    <MenuListContainer />
                    <MenuListContainer />
                    <MenuListContainer />
                    <MenuListContainer />
                </aside>
                <div className='w-full px-3 md:w-3/4'>
                    <div className='pl-3 mb-4'>
                        <h2 className='text-xl font-semibold'> Order Online</h2>
                        <h4 className='flex ites-center gap-2 font-light text-gray-500'>
                            <AiOutlineCompass /> Live Track Your Order | <BiTimeFive /> 45 min
                        </h4>
                    </div>

                    <section className='flex h-screen overflow-y-scroll flex-col gap-3 md:gap-5'>

                        <FoodList
                            title="Recommended"
                            items={[
                                {
                                    title: "Panner kadai",
                                    image: "https://b.zmtcdn.com/data/dish_photos/75b/e78bb4f0b8aae1f563f2c1cd67dbc75b.jpg?",
                                    price: "1000",
                                    rating: 3,
                                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt nemo non quidem aspernatur vel, voluptatum tenetur, beatae fugit eligendi minus impedit? Rerum quisquam autem amet deleniti laudantium dicta molestiae eius.",
                                },
                                {
                                    title: "Chicken Chilli",
                                    image: "https://b.zmtcdn.com/data/dish_photos/75b/e78bb4f0b8aae1f563f2c1cd67dbc75b.jpg?",
                                    price: "1000",
                                    rating: 3,
                                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt nemo non quidem aspernatur vel, voluptatum tenetur, beatae fugit eligendi minus impedit? Rerum quisquam autem amet deleniti laudantium dicta molestiae eius.",
                                },
                            ]}
                        />

                        <FoodList
                            title="Pizza"
                            items={[
                                {
                                    title: "Panner kadai",
                                    image: "https://b.zmtcdn.com/data/dish_photos/75b/e78bb4f0b8aae1f563f2c1cd67dbc75b.jpg?",
                                    price: "1000",
                                    rating: 3,
                                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt nemo non quidem aspernatur vel, voluptatum tenetur, beatae fugit eligendi minus impedit? Rerum quisquam autem amet deleniti laudantium dicta molestiae eius.",
                                },
                                {
                                    title: "Chicken Chilli",
                                    image: "https://b.zmtcdn.com/data/dish_photos/75b/e78bb4f0b8aae1f563f2c1cd67dbc75b.jpg?",
                                    price: "1000",
                                    rating: 3,
                                    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt nemo non quidem aspernatur vel, voluptatum tenetur, beatae fugit eligendi minus impedit? Rerum quisquam autem amet deleniti laudantium dicta molestiae eius.",
                                },
                            ]}
                        />


                    </section>
                </div>
            </div>
            <FloatMenuBtn />
        </>
    )
}

export default OrderOnline;