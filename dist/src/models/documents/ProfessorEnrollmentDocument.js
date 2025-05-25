import mongoose from "mongoose";
const ProfessorEnrollmentSchema = new mongoose.Schema({
    subjectCode: { type: String, required: true },
    classCode: { type: String, required: true },
    registrationNumber: { type: String, required: false },
    professorEmail: { type: String, required: false },
    processId: { type: String, required: true },
    processRef: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Process',
        required: true
    },
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
ProfessorEnrollmentSchema.index({ classRef: 1, registrationNumber: 1, professorEmail: 1, processRef: 1 }, { unique: true });
export default mongoose.model('Professor_Enrollment', ProfessorEnrollmentSchema);
//# sourceMappingURL=ProfessorEnrollmentDocument.js.map