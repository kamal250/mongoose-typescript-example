import { Schema } from "mongoose";

const sessionTokenSchema = new Schema({
    token: String,
    email: String
});

export {
    sessionTokenSchema
}
