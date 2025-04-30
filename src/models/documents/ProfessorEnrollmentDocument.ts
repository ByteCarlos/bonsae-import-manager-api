import mongoose from "mongoose";

const ProfessorEnrollmentSchema = new mongoose.Schema({
    subjectCode: { type: String, required: true },
    classCode: { type: String, required: true },
    professorEnrollment: { type: String, required: false },
    professorEmail: { type: String, required: false }
});

export default mongoose.model('Professor_Enrollment', ProfessorEnrollmentSchema);