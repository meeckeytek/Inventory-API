import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
    
},{
    timestamps: true
})
export default mongoose.model('Order', orderSchema)