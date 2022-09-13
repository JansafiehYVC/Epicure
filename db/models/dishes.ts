import mongoose from 'mongoose';

const dishesSchema = new mongoose.Schema(
    {
      name: {
        type: String,
        required: true
      },
      price: {
        type: Number,
        required: true
      }

    },
    { timestamps: true }
  );
  
const Dishes = mongoose.model('Dishes', dishesSchema);
  
export default Dishes;