import mongoose from 'mongoose';

const inventorySchema = new mongoose.Schema({
    userName:{type: String, required: true},
    password:{type: String, required: true},
    isAdmin:{type: Boolean, default:false},
    resetLink:{data: String, default: ''},
},{
    timestamps: true
})
export default mongoose.model('Inventory', inventorySchema)