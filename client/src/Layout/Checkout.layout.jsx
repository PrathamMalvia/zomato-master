import React from 'react'

// Components
import CheckoutNavbar from '../Components/Navbar/CheckoutNavbar';

const Checkout = (props) => {
    return (
        <>
            <CheckoutNavbar />
            <div className="container mx-auto px-4 lg:px-40">
                {props.children}
            </div>
        </>
    )
}

export default Checkout;