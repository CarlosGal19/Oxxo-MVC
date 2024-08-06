import MissingProduct from '../models/missing.product.model.js'

export default function test(){
    console.log('Missing Product Controller is working');
}

MissingProduct.create({
    name: 'Missing Product 1',
    price: 100,
    description: 'This is missing product 1'
})
