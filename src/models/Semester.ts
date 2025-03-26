import { Schema, model } from 'mongoose';

const SemesterSchema = new Schema({
  name: { type: String, required: true, unique: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true }
});

export default model('Semester', SemesterSchema);