import Liquidation from "../models/liquidation.model.js";

export default function test(){
    console.log('Liquidation Controller is working');
}

Liquidation.create({
    productName: 'Apple',
    discount: 10,
    description: '10% off on all apple products',
    startDate: new Date(),
    endDate: new Date()
})
