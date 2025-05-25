import mongoose, { Schema, model } from 'mongoose';
import { Period } from '../../dtos/SchoolPeriodDto.js';
const SchoolPeriodSchema = new Schema({
    code: { type: String, required: true },
    name: { type: String, enum: Period, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    processId: { type: String, required: true },
    processRef: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Process',
        required: true
    },
});
SchoolPeriodSchema.index({ code: 1, processRef: 1 }, { unique: true });
export default model('School_Period', SchoolPeriodSchema);
//# sourceMappingURL=SchoolPeriodDocument.js.map