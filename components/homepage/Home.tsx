import AboutUs from './homePageMobile/aboutUs/AboutUs';
import ChefOfTheWeek from './homePageMobile/chefOfTheWeek/ChefOfTheWeek';
import { ChefOfTheWeekSlider } from './homePageMobile/chefOfTheWeekSlider/ChefOfTheWeekSlider';
import Hero from './homePageMobile/hero/Hero';
import PopularRestSlider from './homePageMobile/popularRestSlider/PopularRestSlider';
import SignatureDishOf from './homePageMobile/signatureDishOf/SignatureDishOf';
import SigntureDishSlider from './homePageMobile/signtureDishSlider/SigntureDishSlider';
export default function Home() {
  return (
    <div>
      <Hero/>
      <PopularRestSlider/>
      <SigntureDishSlider/>
      <SignatureDishOf/>
      <ChefOfTheWeek/>
      <ChefOfTheWeekSlider/>
      <AboutUs/>
    </div>
  )
}
