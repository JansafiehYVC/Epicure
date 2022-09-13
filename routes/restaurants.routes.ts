import { Router } from "express";
import { RestaurantsController } from "../controllers/restaurantsController";

const router = Router();

router.get("/getRestaurants", RestaurantsController.getRestaurants);
router.post("/createRestaurants",RestaurantsController.createRestaurant) ; 
router.put("/updateRestaurant",RestaurantsController.updateRestaurant) ; 


export default router;


