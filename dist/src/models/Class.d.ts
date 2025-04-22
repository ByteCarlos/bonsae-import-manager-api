import mongoose from "mongoose";
declare const _default: mongoose.Model<{
    code: string;
    name: string;
    shift: "morning" | "afternoon" | "night";
    discipline: mongoose.Types.ObjectId;
    semester: mongoose.Types.ObjectId;
    subject: mongoose.Types.ObjectId;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    code: string;
    name: string;
    shift: "morning" | "afternoon" | "night";
    discipline: mongoose.Types.ObjectId;
    semester: mongoose.Types.ObjectId;
    subject: mongoose.Types.ObjectId;
}> & {
    code: string;
    name: string;
    shift: "morning" | "afternoon" | "night";
    discipline: mongoose.Types.ObjectId;
    semester: mongoose.Types.ObjectId;
    subject: mongoose.Types.ObjectId;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    code: string;
    name: string;
    shift: "morning" | "afternoon" | "night";
    discipline: mongoose.Types.ObjectId;
    semester: mongoose.Types.ObjectId;
    subject: mongoose.Types.ObjectId;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    code: string;
    name: string;
    shift: "morning" | "afternoon" | "night";
    discipline: mongoose.Types.ObjectId;
    semester: mongoose.Types.ObjectId;
    subject: mongoose.Types.ObjectId;
}>> & mongoose.FlatRecord<{
    code: string;
    name: string;
    shift: "morning" | "afternoon" | "night";
    discipline: mongoose.Types.ObjectId;
    semester: mongoose.Types.ObjectId;
    subject: mongoose.Types.ObjectId;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default _default;
