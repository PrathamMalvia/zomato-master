import React, { useState } from 'react'
import { IoMdArrowDropdown, IoMdArrowDropup, IoMdArrowDropright } from "react-icons/io"
import { IoCloseSharp } from "react-icons/io5"
import FoodItem from './FoodItem'

const CartSm = ({ toggle }) => {
    return (
        <>
            <div className='md:hidden flex items-center justify-between'>
                <div className='flex flex-col items-start font-medium'>
                    <small className='flex items-center gap-1' onClick={toggle}>
                        1 Item <IoMdArrowDropdown />
                    </small>
                    <h4>
                        ₹300 <sub>(plus tax)</sub>
                    </h4>
                </div>
                <button className='flex items-center gap-1 bg-zomato-400 text-white px-3 py-1 rounded-lg'>
                    Continue <IoMdArrowDropright />
                </button>
            </div>
        </>
    )
}

const CartLg = ({ toggle }) => {
    return (
        <>
            <div className='hidden md:flex items-center justify-between container px-20 mx-auto'>
                <div className='flex text-xl gap-2 items-start'>
                    <span className='border bg-white border-gray-300 p-1 rounded' onClick={toggle}>
                        <IoMdArrowDropdown />
                    </span>
                    <h4>
                        Your Orders(1)
                    </h4>
                </div>
                <div className='flex items-center gap-2'>
                    <h4 className='text-xl'>
                        Subtotal : ₹300
                    </h4>
                    <button className='flex items-center text-lg h-10 font-medium gap-1 bg-zomato-400 text-white px-3 py-1 rounded-lg'>
                        Continue <IoMdArrowDropright />
                    </button>
                </div>
            </div>
        </>
    )
}

const CartContainer = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCart = () => setIsOpen((prev) => !prev);
    const closeCart = () => setIsOpen(false);

    return (
        <>
            {
                isOpen && (
                    <div className='fixed w-full overflow-y-scroll h-48 bg-white z-10 p-2 bottom-16 px-3'>
                        <div className='flex items-center justify-between text-xl font-semibold'>
                            <h3>Your Orders</h3>
                            <IoCloseSharp onClick={closeCart} />
                        </div>
                        <hr className='my-2' />

                        <div className='flex flex-col gap-2'>
                            <FoodItem
                                name="Pizza"
                                quantity="3"
                                price="300"
                            />
                        </div>
                    </div>
                )

            }

            <div className='fixed w-full bg-white z-10 p-2 px-3 bottom-0'>
                <CartSm toggle={toggleCart} />
                <CartLg toggle={toggleCart} />
            </div>

        </>
    )
}

export default CartContainer;