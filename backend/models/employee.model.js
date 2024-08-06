import { Schema, model } from 'mongoose';

export const employeeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    }
},
{
    timestamps: true
});

export default model('Employee', employeeSchema);
