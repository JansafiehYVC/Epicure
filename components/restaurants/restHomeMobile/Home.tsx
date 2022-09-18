import { useState } from 'react';
import { useSelector } from 'react-redux';
import {Name , Chef , Box , NameChef ,  Card , Title } from './Style' ;

export default function Restaurants() {
const restaurants = useSelector((state:any) => state.restaurants.value);
  return (
    <div>
      <Title>
        RESTAURANTS
      </Title>

    <Box>
        {restaurants.map((restaurant: any) => (
          <Card>
            <img className='img' src={restaurant.picURL} alt=""></img>
            <NameChef>
              <Name> {restaurant.name} </Name>
              <Chef> {restaurant.chef} </Chef>
            </NameChef>
          </Card>
        ))}
      </Box>
    </div>
  )
}
