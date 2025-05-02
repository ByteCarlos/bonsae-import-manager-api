import mongoose from "mongoose";
import { UserProfile } from "../../dtos/UserRawEntryDto";

const UserSchema = new mongoose.Schema({
    profileId: {
        type: String,
        enum: UserProfile,
        required: true
    },
    subprofile: {
        type: String,
        required: false
    },
    name: {
        type: String,
        required: true
    },
    oab: {
        type: String,
        required: false
    },
    oabUf: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true
    },
    registrationNumber: {
        type: String,
        required: false
    },
    telephone: {
        type: String,
        required: false
    },
    cpf: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    periodId: {
        type: Number,
        enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        required: false
    },
    observations: {
        type: String,
        required: false
    }
});

export default mongoose.model('User', UserSchema);