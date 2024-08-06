import Promotion from '../models/promotion.model.js';

export default function test(){
    console.log('Promotion Controller is working');
}

Promotion.create({
    productName: 'Product 1',
    discount: 10,
    description: 'This is product 1',
    startDate: new Date(),
    endDate: new Date()
})
