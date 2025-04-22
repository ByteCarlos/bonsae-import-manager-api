import mongoose from "mongoose";
declare const _default: mongoose.Model<{
    code: string;
    name: string;
    semester: mongoose.Types.ObjectId;
    startDate: NativeDate;
    endDate: NativeDate;
    category: "COURSE" | "NPJ" | "EXTENSION_PROJECTS" | "TCC";
    curriculumPeriod: number;
    state: string;
    campus: string;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    code: string;
    name: string;
    semester: mongoose.Types.ObjectId;
    startDate: NativeDate;
    endDate: NativeDate;
    category: "COURSE" | "NPJ" | "EXTENSION_PROJECTS" | "TCC";
    curriculumPeriod: number;
    state: string;
    campus: string;
}> & {
    code: string;
    name: string;
    semester: mongoose.Types.ObjectId;
    startDate: NativeDate;
    endDate: NativeDate;
    category: "COURSE" | "NPJ" | "EXTENSION_PROJECTS" | "TCC";
    curriculumPeriod: number;
    state: string;
    campus: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    code: string;
    name: string;
    semester: mongoose.Types.ObjectId;
    startDate: NativeDate;
    endDate: NativeDate;
    category: "COURSE" | "NPJ" | "EXTENSION_PROJECTS" | "TCC";
    curriculumPeriod: number;
    state: string;
    campus: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    code: string;
    name: string;
    semester: mongoose.Types.ObjectId;
    startDate: NativeDate;
    endDate: NativeDate;
    category: "COURSE" | "NPJ" | "EXTENSION_PROJECTS" | "TCC";
    curriculumPeriod: number;
    state: string;
    campus: string;
}>> & mongoose.FlatRecord<{
    code: string;
    name: string;
    semester: mongoose.Types.ObjectId;
    startDate: NativeDate;
    endDate: NativeDate;
    category: "COURSE" | "NPJ" | "EXTENSION_PROJECTS" | "TCC";
    curriculumPeriod: number;
    state: string;
    campus: string;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default _default;
