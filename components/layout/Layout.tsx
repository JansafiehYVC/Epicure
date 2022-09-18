import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ChefsHomePage from '../chefs/ChefsHomePage'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import Home from '../homepage/Home'
import RestaurantHomepage from '../restaurants/RestaurantHomepage'
export default function Layout() {
  return (
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path='' element={<Home/>}/>
            <Route path='/Restaurants' element={<RestaurantHomepage/>}/>
            <Route path='/Chefs' element ={<ChefsHomePage/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
  )
}
