import { employeeSchema } from "./employee.model.js";
import { model } from "mongoose";

export default model('Manager', employeeSchema);
