import React from 'react'
import { AiOutlineCompass } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";

// Components
import FloatMenuBtn from '../../Components/restaurant/Order-Online/FloatMenuBtn';
import FoodItem from '../../Components/restaurant/Order-Online/FoodItem';
import MenuListContainer from '../../Components/restaurant/Order-Online/MenuListContainer';

const OrderOnline = () => {
    return (
        <>
            <div className='w-full flex '>
                <aside className='hidden md:flex flex-col gap-3 overflow-y-scroll border-r border-gray-300 h-screen w-1/4'>
                    <MenuListContainer />
                    <MenuListContainer />
                    <MenuListContainer />
                    <MenuListContainer />
                    <MenuListContainer />
                </aside>
                <div className='w-full md:w-3/4'>
                    <h2 className='text-xl font-semibold'> Order Online</h2>
                    <h4 className='flex ites-center gap-2 font-light text-gray-500'>
                        <AiOutlineCompass /> Live Track Your Order | <BiTimeFive /> 45 min
                    </h4>

                    <section>
                        <FoodItem
                            image="https://b.zmtcdn.com/data/dish_photos/75b/e78bb4f0b8aae1f563f2c1cd67dbc75b.jpg?"
                            title="Panner Kadai"
                            price="1000"
                            rating={3}
                            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt nemo non quidem aspernatur vel, voluptatum tenetur, beatae fugit eligendi minus impedit? Rerum quisquam autem amet deleniti laudantium dicta molestiae eius."
                        />
                    </section>
                </div>
            </div>
            <FloatMenuBtn />
        </>
    )
}

export default OrderOnline;