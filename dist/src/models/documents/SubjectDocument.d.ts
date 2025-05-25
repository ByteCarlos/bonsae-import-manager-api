import mongoose from "mongoose";
declare const _default: mongoose.Model<{
    code: string;
    processId: string;
    processRef: mongoose.Types.ObjectId;
    periodId: string;
    startDate: NativeDate;
    endDate: NativeDate;
    category: "CURSO" | "NPJ" | "PROJETOS_EXTENSIONISTAS" | "TCC";
    schoolPeriodRef: mongoose.Types.ObjectId;
    name?: string | null | undefined;
    period?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | null | undefined;
    state?: number | null | undefined;
    campus?: string | null | undefined;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    code: string;
    processId: string;
    processRef: mongoose.Types.ObjectId;
    periodId: string;
    startDate: NativeDate;
    endDate: NativeDate;
    category: "CURSO" | "NPJ" | "PROJETOS_EXTENSIONISTAS" | "TCC";
    schoolPeriodRef: mongoose.Types.ObjectId;
    name?: string | null | undefined;
    period?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | null | undefined;
    state?: number | null | undefined;
    campus?: string | null | undefined;
}, {}> & {
    code: string;
    processId: string;
    processRef: mongoose.Types.ObjectId;
    periodId: string;
    startDate: NativeDate;
    endDate: NativeDate;
    category: "CURSO" | "NPJ" | "PROJETOS_EXTENSIONISTAS" | "TCC";
    schoolPeriodRef: mongoose.Types.ObjectId;
    name?: string | null | undefined;
    period?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | null | undefined;
    state?: number | null | undefined;
    campus?: string | null | undefined;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    code: string;
    processId: string;
    processRef: mongoose.Types.ObjectId;
    periodId: string;
    startDate: NativeDate;
    endDate: NativeDate;
    category: "CURSO" | "NPJ" | "PROJETOS_EXTENSIONISTAS" | "TCC";
    schoolPeriodRef: mongoose.Types.ObjectId;
    name?: string | null | undefined;
    period?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | null | undefined;
    state?: number | null | undefined;
    campus?: string | null | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    code: string;
    processId: string;
    processRef: mongoose.Types.ObjectId;
    periodId: string;
    startDate: NativeDate;
    endDate: NativeDate;
    category: "CURSO" | "NPJ" | "PROJETOS_EXTENSIONISTAS" | "TCC";
    schoolPeriodRef: mongoose.Types.ObjectId;
    name?: string | null | undefined;
    period?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | null | undefined;
    state?: number | null | undefined;
    campus?: string | null | undefined;
}>, {}> & mongoose.FlatRecord<{
    code: string;
    processId: string;
    processRef: mongoose.Types.ObjectId;
    periodId: string;
    startDate: NativeDate;
    endDate: NativeDate;
    category: "CURSO" | "NPJ" | "PROJETOS_EXTENSIONISTAS" | "TCC";
    schoolPeriodRef: mongoose.Types.ObjectId;
    name?: string | null | undefined;
    period?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | null | undefined;
    state?: number | null | undefined;
    campus?: string | null | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default _default;
