import mongoose from 'mongoose';

const restaurantsSchema = new mongoose.Schema(
    {
      
      name: {
        type: String,
        required: true
      },
      chef: {
        type: String,
        required: true
      },
      
        picURL : {
          type:String , 
          require : true

        } , 
        status : {
          type:String ,
          require : true 
        }
    },
    { timestamps: true }
  );
  
const Restaurants = mongoose.model('Restaurants', restaurantsSchema);
  
export default Restaurants;

