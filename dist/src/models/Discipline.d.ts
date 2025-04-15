import mongoose from "mongoose";
declare const _default: mongoose.Model<{
    name: string;
    startDate: NativeDate;
    endDate: NativeDate;
    semester: mongoose.Types.ObjectId;
    code: string;
    category: "COURSE" | "NPJ" | "EXTENSION_PROJECTS" | "TCC";
    curriculumPeriod: number;
    state: string;
    campus: string;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    name: string;
    startDate: NativeDate;
    endDate: NativeDate;
    semester: mongoose.Types.ObjectId;
    code: string;
    category: "COURSE" | "NPJ" | "EXTENSION_PROJECTS" | "TCC";
    curriculumPeriod: number;
    state: string;
    campus: string;
}> & {
    name: string;
    startDate: NativeDate;
    endDate: NativeDate;
    semester: mongoose.Types.ObjectId;
    code: string;
    category: "COURSE" | "NPJ" | "EXTENSION_PROJECTS" | "TCC";
    curriculumPeriod: number;
    state: string;
    campus: string;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    name: string;
    startDate: NativeDate;
    endDate: NativeDate;
    semester: mongoose.Types.ObjectId;
    code: string;
    category: "COURSE" | "NPJ" | "EXTENSION_PROJECTS" | "TCC";
    curriculumPeriod: number;
    state: string;
    campus: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    name: string;
    startDate: NativeDate;
    endDate: NativeDate;
    semester: mongoose.Types.ObjectId;
    code: string;
    category: "COURSE" | "NPJ" | "EXTENSION_PROJECTS" | "TCC";
    curriculumPeriod: number;
    state: string;
    campus: string;
}>> & mongoose.FlatRecord<{
    name: string;
    startDate: NativeDate;
    endDate: NativeDate;
    semester: mongoose.Types.ObjectId;
    code: string;
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
