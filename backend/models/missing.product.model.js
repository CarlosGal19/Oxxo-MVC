import { model } from "mongoose";
import { productSchema } from './product.model.js'

export default model('MissingProduct', productSchema);
