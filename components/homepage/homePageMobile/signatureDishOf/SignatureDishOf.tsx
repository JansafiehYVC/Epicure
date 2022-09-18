import React from 'react'
import {Box ,  Logos, DishType} from './Style'


export default function SignatureDishOf() {
  return (
    <Box>
        SIGNATURE DISH OF :
        <Logos>
        <img src="Spicy.svg" alt="Spicy" />
        <DishType> Spicy </DishType>
        </Logos>

        <Logos>
        <img src="Vege.svg" alt="Vegitarian" />
        <DishType> Vegitarian </DishType>
        </Logos>

        <Logos>
        <img src="Vegan.svg" alt="Vegan" />
        <DishType> Vegan </DishType>
        </Logos>
        
    </Box>
  )
}
