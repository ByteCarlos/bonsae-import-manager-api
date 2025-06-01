import mongoose from "mongoose";
const ProcessSchema = new mongoose.Schema({
    processId: { type: String, required: true, unique: true },
    currentStatus: { type: String }
});
export default mongoose.model('Process', ProcessSchema);
//# sourceMappingURL=ProcessDocument.js.map