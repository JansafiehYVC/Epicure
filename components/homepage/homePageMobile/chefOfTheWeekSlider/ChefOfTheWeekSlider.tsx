
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Box , Button , NameChef} from './Style';
import { ChefName, Name, Pic , Text  } from '../signtureDishSlider/Style';
import { useNavigate } from 'react-router-dom';
import {  useSelector } from 'react-redux';

export const ChefOfTheWeekSlider = () => {
  const navigate = useNavigate();
  const restaurants = useSelector((state:any) => state.restaurants.value);

    const onButtonClicked = () =>{
      navigate('/chefs');
    };
  return (
    <div>
    <Text>CHEF OF THE WEEK :</Text>
    <Carousel >
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
    <Button onClick={onButtonClicked}>All Chefs </Button>
    
    </div>
    )
}
