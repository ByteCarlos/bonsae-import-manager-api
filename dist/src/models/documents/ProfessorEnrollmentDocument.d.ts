import mongoose from "mongoose";
declare const _default: mongoose.Model<{
    subjectCode: string;
    processId: string;
    processRef: mongoose.Types.ObjectId;
    subjectRef: mongoose.Types.ObjectId;
    classCode: string;
    classRef: mongoose.Types.ObjectId;
    userRef: mongoose.Types.ObjectId;
    registrationNumber?: string | null | undefined;
    professorEmail?: string | null | undefined;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    subjectCode: string;
    processId: string;
    processRef: mongoose.Types.ObjectId;
    subjectRef: mongoose.Types.ObjectId;
    classCode: string;
    classRef: mongoose.Types.ObjectId;
    userRef: mongoose.Types.ObjectId;
    registrationNumber?: string | null | undefined;
    professorEmail?: string | null | undefined;
}, {}> & {
    subjectCode: string;
    processId: string;
    processRef: mongoose.Types.ObjectId;
    subjectRef: mongoose.Types.ObjectId;
    classCode: string;
    classRef: mongoose.Types.ObjectId;
    userRef: mongoose.Types.ObjectId;
    registrationNumber?: string | null | undefined;
    professorEmail?: string | null | undefined;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    subjectCode: string;
    processId: string;
    processRef: mongoose.Types.ObjectId;
    subjectRef: mongoose.Types.ObjectId;
    classCode: string;
    classRef: mongoose.Types.ObjectId;
    userRef: mongoose.Types.ObjectId;
    registrationNumber?: string | null | undefined;
    professorEmail?: string | null | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    subjectCode: string;
    processId: string;
    processRef: mongoose.Types.ObjectId;
    subjectRef: mongoose.Types.ObjectId;
    classCode: string;
    classRef: mongoose.Types.ObjectId;
    userRef: mongoose.Types.ObjectId;
    registrationNumber?: string | null | undefined;
    professorEmail?: string | null | undefined;
}>, {}> & mongoose.FlatRecord<{
    subjectCode: string;
    processId: string;
    processRef: mongoose.Types.ObjectId;
    subjectRef: mongoose.Types.ObjectId;
    classCode: string;
    classRef: mongoose.Types.ObjectId;
    userRef: mongoose.Types.ObjectId;
    registrationNumber?: string | null | undefined;
    professorEmail?: string | null | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default _default;
