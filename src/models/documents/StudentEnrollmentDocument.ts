import mongoose from "mongoose";

const StudentEnrollmentSchema = new mongoose.Schema({
    subjectCode: { type: String, required: true },
    classCode: { type: String, required: true },
    studentEnrollment: { type: String, required: false },
    studentEmail: { type: String, required: false }
});

export default mongoose.model('Student_Enrollment', StudentEnrollmentSchema);