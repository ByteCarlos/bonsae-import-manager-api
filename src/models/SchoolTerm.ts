import { Schema, model } from 'mongoose';

const SchoolTermSchema = new Schema({
  identifier: { type: String, required: true, unique: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true }
});

export default model('SchoolTerm', SchoolTermSchema);