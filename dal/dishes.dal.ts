import Dishes from "../db/models/dishes";

export class DishesDal { 

    public getDishes(query:any=null){
        return Dishes.find(query)
      }

      public createDish(dish: any) {
        dish = new Dishes({
          name:dish.name , 
          price:dish.price  , 
        });
        dish.save(function (err: any, results: any) {
          return results;
        });


}
}