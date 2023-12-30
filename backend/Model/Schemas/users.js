import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, "tiene que tener nombre"],
        trim: true
    },
    username: {
        type: String,
        required: [true, "tiene que tener nombre de usuario"],
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: [true, "tiene que tener Email"]
    },
    password: {
        type: String,
        required: [true, "tiene que tener contraseña"]
    },
    bio: {
        type: String,
        required: [false, "no tiene que tener biografia"]
    },
    joinDate: {
        type: Date,
        default: Date.now
        
    },
    deletedAccount: {
        type: Boolean,
        required: [false, "no se elimina la cuenta por defecto"],
        default: false
    }
})
export default models.Users || model("Users", userSchema)