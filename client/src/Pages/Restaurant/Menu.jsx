import React from 'react'
import { useState } from 'react';

// Components
import MenuCollection from '../../Components/restaurant/MenuCollection';

const Menu = () => {
    const [menus, setMenus] = useState([]);

    return (
        <>
            <div className='flex flex-wrap gap-3'>
                {
                    menus.map((menu) => (
                        <MenuCollection {...menus} />
                    ))
                }
            </div>
        </>
    )
}

export default Menu;