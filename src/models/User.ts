import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    profile: {
        type: String,
        enum: ['COORDINATOR', 'TEACHER', 'STUDENT', 'SECRETARY', 'TRAINEE', 'ATTORNEY'],
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
    oabNumber: {
        type: String,
        required: false
    },
    sectionalUFOAB: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true
    },
    enrollment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Enrollment',
        required: false
    },
    telephone: {
        type: String,
        required: false
    },
    cpf: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    curricularPeriod: {
        type: String,
        required: false
    },
    observations: {
        type: String,
        required: false
    }
});

export default mongoose.model('User', UserSchema);