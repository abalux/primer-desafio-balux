import mongoose from 'mongoose'

const productsCollection = 'products'

const productsSchema = new mongoose.Schema({
    title: {
        type:String,
        required: true
    },
    description: {
        type:String,
        required: true
    },
    price: {
        type: Number, 
        required: true
    },
    stock: Number, 
    status: Boolean, 
    id: Number
})

const productsModel = mongoose.model(productsCollection, productsSchema)

export default productsModel