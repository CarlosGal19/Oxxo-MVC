import Product from '../models/product.model.js'

export default function test(){
    console.log('Product Controller is working');
}

Product.create({
    name: 'Product 1',
    price: 100,
    description: 'This is product 1'
})
