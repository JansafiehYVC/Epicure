import { DishesDal } from "../dal/dishes.dal";


export class DishesService { 

    public static async getDishes() {
        const dal = new DishesDal();
        const res = await dal.getDishes();
        return res; 
    };

    public async createDish(Dish:any) {
        const dal = new DishesDal();
        const res = dal.createDish(Dish);
        return res;
    };
}