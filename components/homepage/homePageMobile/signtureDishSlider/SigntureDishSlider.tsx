
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {Name ,ChefName , Pic , Box , Text , Button , NameChef} from './Style'
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SigntureDishSlider() {
const navigate = useNavigate();
const restaurants = useSelector((state:any) => state.restaurants.value);
// const [restaurant, setRestaurant] = useState([]); 

const onButtonClicked = () =>{
    navigate('/restaurants');
  };

 
  return (
    <div>
        <Text> SIGNATURE DISH OF :  </Text>
        <Carousel>
            {restaurants.map((restaurant:any) => (
                <Box>
                    <Pic>
                        <img className='img' src={restaurant.picURL} alt=""></img>
                    </Pic>
                    <NameChef>
                    <Name> {restaurant.name} </Name>
                    <ChefName> {restaurant.chef} </ChefName>
                    </NameChef>
                </Box>
            ))}
        </Carousel>
        <Button onClick={onButtonClicked}>All Restaurants </Button>
    </div>
    )
  
}
