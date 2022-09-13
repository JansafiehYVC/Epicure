import {configureStore} from '@reduxjs/toolkit'
import restaurantsReducer from './components/restaurants/restaurantSlicer'
import chefsReducer from './components/chefs/chefsSlicer'


export default configureStore({
    reducer: {
        restaurants: restaurantsReducer,
        chefs : chefsReducer

    },
    
  })