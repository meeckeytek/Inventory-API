import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema({
    userName:{type: String, required: true},
    password:{type: String, required: true},
    isAdmin:{type: Boolean, default:false},
    resetLink:{data: String, default: ''},
},{
    timestamps: true
})
export default mongoose.model('Cart', cartSchema)