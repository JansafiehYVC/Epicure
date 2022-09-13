import Chefs from "../db/models/chefs";

export class ChefsDal {

    public createChef(chef: any) {
        chef = new Chefs({
          name: chef.name,
          age: chef.age
        });

        chef.save(function (err: any, results: any) {
          return results;
        });
    }

    public async updateChef(chef:any) {
      const data = await Chefs.findOne({
        name: chef.name,
      }).updateOne({$set: {age: chef.age,},})
        return data
      }


    public findAll(query: any = null) {
        return Chefs.find(query);
      }
    
    public getChefs(query:any=null){
      return Chefs.find(query)
    }

    public getChef(param:any) {
      return Chefs.findOne({name : param.name , age:param.age})
    }
    

}


