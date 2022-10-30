import React from 'react'

// Componnents
import NutritionHeroCarousel from './NutritionHeroCarousel';
import NutritionCarousel from './NutritionCarousel';


const Nutrition = () => {
    return (
        <div>
            <NutritionHeroCarousel />
            <div className='my-6'>
                <NutritionCarousel />
            </div>

        </div>
    )
}

export default Nutrition;