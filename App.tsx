
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { setChefs } from './components/chefs/chefsSlicer';
import Layout from './components/layout/Layout';
import { setRestaurants } from './components/restaurants/restaurantSlicer'
import { loadChefs } from './services/chefsService';
import { fetchRestaurants } from './services/restaurantsService';
function App() {
  

  const dispatch = useDispatch();
  useEffect(() =>{
    fetch();
     
  }) ;
  useEffect (() => {
    fetchChefs();

  })

  const fetch = async () => {
    const restaurants = await fetchRestaurants() ; 
    dispatch(setRestaurants(restaurants))
  }

  const fetchChefs = async () => {
    const chefs = await loadChefs() ; 
    dispatch(setChefs(chefs))
  }



  return (
    <div>
      <Layout />
    </div>
  );
}
export default App;
