import mongoose from "mongoose";
declare const _default: mongoose.Model<{
    shift: "morning" | "afternoon" | "night";
    name: string;
    subject: mongoose.Types.ObjectId;
    semester: mongoose.Types.ObjectId;
    code: string;
    discipline: mongoose.Types.ObjectId;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    shift: "morning" | "afternoon" | "night";
    name: string;
    subject: mongoose.Types.ObjectId;
    semester: mongoose.Types.ObjectId;
    code: string;
    discipline: mongoose.Types.ObjectId;
}> & {
    shift: "morning" | "afternoon" | "night";
    name: string;
    subject: mongoose.Types.ObjectId;
    semester: mongoose.Types.ObjectId;
    code: string;
    discipline: mongoose.Types.ObjectId;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    shift: "morning" | "afternoon" | "night";
    name: string;
    subject: mongoose.Types.ObjectId;
    semester: mongoose.Types.ObjectId;
    code: string;
    discipline: mongoose.Types.ObjectId;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    shift: "morning" | "afternoon" | "night";
    name: string;
    subject: mongoose.Types.ObjectId;
    semester: mongoose.Types.ObjectId;
    code: string;
    discipline: mongoose.Types.ObjectId;
}>> & mongoose.FlatRecord<{
    shift: "morning" | "afternoon" | "night";
    name: string;
    subject: mongoose.Types.ObjectId;
    semester: mongoose.Types.ObjectId;
    code: string;
    discipline: mongoose.Types.ObjectId;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default _default;
