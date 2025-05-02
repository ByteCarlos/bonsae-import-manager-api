import mongoose from "mongoose";

const StudentEnrollmentSchema = new mongoose.Schema({
    subjectCode: { type: String, required: true },
    classCode: { type: String, required: true },
    registrationNumber: { type: String, required: false },
    studentEmail: { type: String, required: false },

    subjectRef: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subject',
        required: true
    },
    classRef: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Class',
        required: true
    },
    userRef: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

export default mongoose.model('Student_Enrollment', StudentEnrollmentSchema);