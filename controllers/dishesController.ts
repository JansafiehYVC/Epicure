import { Request, Response } from "express";
import { DishesService } from "../services/dishes.service";


export class DishesController { 
    
    public static async getDishes(req: Request, res: Response) {
        const dishes = await DishesService.getDishes();
        return res.send(dishes);
    };

    public static async createDish(req: Request, res: Response) {
        const params = req.body;
        const service = new DishesService();
        const dish = await service.createDish(params);
        return res.send(dish);
    };




}