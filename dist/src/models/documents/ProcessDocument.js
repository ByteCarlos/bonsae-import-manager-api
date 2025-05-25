import mongoose from "mongoose";
const ProcessSchema = new mongoose.Schema({
    processId: { type: String, required: true, unique: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    schoolPeriod: { type: String, required: true }
});
export default mongoose.model('Process', ProcessSchema);
//# sourceMappingURL=ProcessDocument.js.map