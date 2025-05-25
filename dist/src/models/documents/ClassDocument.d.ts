import mongoose from "mongoose";
declare const _default: mongoose.Model<{
    subjectCode: string;
    name: string;
    code: string;
    processId: string;
    processRef: mongoose.Types.ObjectId;
    subjectRef: mongoose.Types.ObjectId;
    shift?: "MATUTINO" | "VESPERTINO" | "NOTURNO" | null | undefined;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    subjectCode: string;
    name: string;
    code: string;
    processId: string;
    processRef: mongoose.Types.ObjectId;
    subjectRef: mongoose.Types.ObjectId;
    shift?: "MATUTINO" | "VESPERTINO" | "NOTURNO" | null | undefined;
}, {}> & {
    subjectCode: string;
    name: string;
    code: string;
    processId: string;
    processRef: mongoose.Types.ObjectId;
    subjectRef: mongoose.Types.ObjectId;
    shift?: "MATUTINO" | "VESPERTINO" | "NOTURNO" | null | undefined;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    subjectCode: string;
    name: string;
    code: string;
    processId: string;
    processRef: mongoose.Types.ObjectId;
    subjectRef: mongoose.Types.ObjectId;
    shift?: "MATUTINO" | "VESPERTINO" | "NOTURNO" | null | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    subjectCode: string;
    name: string;
    code: string;
    processId: string;
    processRef: mongoose.Types.ObjectId;
    subjectRef: mongoose.Types.ObjectId;
    shift?: "MATUTINO" | "VESPERTINO" | "NOTURNO" | null | undefined;
}>, {}> & mongoose.FlatRecord<{
    subjectCode: string;
    name: string;
    code: string;
    processId: string;
    processRef: mongoose.Types.ObjectId;
    subjectRef: mongoose.Types.ObjectId;
    shift?: "MATUTINO" | "VESPERTINO" | "NOTURNO" | null | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default _default;
