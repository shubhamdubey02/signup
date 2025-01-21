import mongoose from "mongoose";

const signupSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    // isPasswordCorrect: {
    //     type: Boolean,
    //     required: true
    // }
    // toFASecurity: {
    //     type: String,
    //     required: Boolean
    // },
    // toFAFlag: {
    //     type: String,
    //     required: Boolean
    // }

});

export default mongoose.model("user", signupSchema);