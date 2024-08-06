import { promotionSchema } from "./promotion.model.js";

import { model } from "mongoose";

export default model('Liquidation', promotionSchema);
