import mongoose from "mongoose";
const SubjectSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    code: { type: String, required: true, unique: true }
});
export default mongoose.model('Subject', SubjectSchema);
//# sourceMappingURL=Subject.js.map