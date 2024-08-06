import { Schema, model } from 'mongoose';

export const promotionSchema = new Schema({
    productName: {
        type: String,
        required: true
    },
    discount: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    }},
    {
    timestamps: true
    });

export default model('Promotion', promotionSchema);
