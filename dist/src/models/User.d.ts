import mongoose from "mongoose";
declare const _default: mongoose.Model<{
    name: string;
    profile: "COORDINATOR" | "TEACHER" | "STUDENT" | "SECRETARY" | "TRAINEE" | "ATTORNEY";
    email: string;
    cpf: string;
    password: string;
    observations?: string | null | undefined;
    subprofile?: string | null | undefined;
    oabNumber?: string | null | undefined;
    sectionalUFOAB?: string | null | undefined;
    enrollment?: mongoose.Types.ObjectId | null | undefined;
    telephone?: string | null | undefined;
    curricularPeriod?: string | null | undefined;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    name: string;
    profile: "COORDINATOR" | "TEACHER" | "STUDENT" | "SECRETARY" | "TRAINEE" | "ATTORNEY";
    email: string;
    cpf: string;
    password: string;
    observations?: string | null | undefined;
    subprofile?: string | null | undefined;
    oabNumber?: string | null | undefined;
    sectionalUFOAB?: string | null | undefined;
    enrollment?: mongoose.Types.ObjectId | null | undefined;
    telephone?: string | null | undefined;
    curricularPeriod?: string | null | undefined;
}> & {
    name: string;
    profile: "COORDINATOR" | "TEACHER" | "STUDENT" | "SECRETARY" | "TRAINEE" | "ATTORNEY";
    email: string;
    cpf: string;
    password: string;
    observations?: string | null | undefined;
    subprofile?: string | null | undefined;
    oabNumber?: string | null | undefined;
    sectionalUFOAB?: string | null | undefined;
    enrollment?: mongoose.Types.ObjectId | null | undefined;
    telephone?: string | null | undefined;
    curricularPeriod?: string | null | undefined;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    name: string;
    profile: "COORDINATOR" | "TEACHER" | "STUDENT" | "SECRETARY" | "TRAINEE" | "ATTORNEY";
    email: string;
    cpf: string;
    password: string;
    observations?: string | null | undefined;
    subprofile?: string | null | undefined;
    oabNumber?: string | null | undefined;
    sectionalUFOAB?: string | null | undefined;
    enrollment?: mongoose.Types.ObjectId | null | undefined;
    telephone?: string | null | undefined;
    curricularPeriod?: string | null | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    name: string;
    profile: "COORDINATOR" | "TEACHER" | "STUDENT" | "SECRETARY" | "TRAINEE" | "ATTORNEY";
    email: string;
    cpf: string;
    password: string;
    observations?: string | null | undefined;
    subprofile?: string | null | undefined;
    oabNumber?: string | null | undefined;
    sectionalUFOAB?: string | null | undefined;
    enrollment?: mongoose.Types.ObjectId | null | undefined;
    telephone?: string | null | undefined;
    curricularPeriod?: string | null | undefined;
}>> & mongoose.FlatRecord<{
    name: string;
    profile: "COORDINATOR" | "TEACHER" | "STUDENT" | "SECRETARY" | "TRAINEE" | "ATTORNEY";
    email: string;
    cpf: string;
    password: string;
    observations?: string | null | undefined;
    subprofile?: string | null | undefined;
    oabNumber?: string | null | undefined;
    sectionalUFOAB?: string | null | undefined;
    enrollment?: mongoose.Types.ObjectId | null | undefined;
    telephone?: string | null | undefined;
    curricularPeriod?: string | null | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default _default;
