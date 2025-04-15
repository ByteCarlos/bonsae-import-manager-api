import mongoose from "mongoose";
const EnrollmentSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    class: { type: mongoose.Schema.Types.ObjectId, ref: 'Class', required: true }
});
export default mongoose.model('Enrollment', EnrollmentSchema);
//# sourceMappingURL=Enrollment.js.map