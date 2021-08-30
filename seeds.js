const mongoose = require('mongoose');
const Product = require('./models/product')


mongoose.connect('mongodb://localhost:27017/farm', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })

// const product = new Product({
//     name: "Grapefruit",
//     price: 12.99,
//     category: 'fruit'
// })
//
// product.save().then(product => {
//     console.log(product)
//     }
// ).catch(e=>{
//     console.log(e)
// })
const seedProducts = [
    {
        name: "Grapefruit",
        price: 12.99,
        category: 'fruit'
    },{
        name:'Organic Melon',
        price:10.99,
        category: 'fruit'
    }
]
Product.insertMany(seedProducts)
.then(res=>{
    console.log(res)
})
.catch(err=>{
    console.log(err)
})