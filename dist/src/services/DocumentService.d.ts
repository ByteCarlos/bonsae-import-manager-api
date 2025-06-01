import { ProcessDto } from "../dtos/ProcessDto.js";
export declare class DocumentService {
    bundleProcessData(processId: string): Promise<ProcessDto>;
    processAllInOne(data: ProcessDto): Promise<{
        processDoc: import("mongoose").Document<unknown, {}, {
            processId: string;
            currentStatus?: string | null | undefined;
        }, {}> & {
            processId: string;
            currentStatus?: string | null | undefined;
        } & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        };
        periodDoc: import("mongoose").Document<unknown, {}, {
            processId: string;
            processRef: import("mongoose").Types.ObjectId;
            code: string;
            startDate: NativeDate;
            endDate: NativeDate;
            name?: string | null | undefined;
        }, {}> & {
            processId: string;
            processRef: import("mongoose").Types.ObjectId;
            code: string;
            startDate: NativeDate;
            endDate: NativeDate;
            name?: string | null | undefined;
        } & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        };
        subjectDocList: (import("mongoose").Document<unknown, {}, {
            processId: string;
            processRef: import("mongoose").Types.ObjectId;
            periodId: string;
            code: string;
            startDate: NativeDate;
            endDate: NativeDate;
            category: "CURSO" | "NPJ" | "PROJETOS_EXTENSIONISTAS" | "TCC";
            schoolPeriodRef: import("mongoose").Types.ObjectId;
            name?: string | null | undefined;
            period?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | null | undefined;
            state?: number | null | undefined;
            campus?: string | null | undefined;
        }, {}> & {
            processId: string;
            processRef: import("mongoose").Types.ObjectId;
            periodId: string;
            code: string;
            startDate: NativeDate;
            endDate: NativeDate;
            category: "CURSO" | "NPJ" | "PROJETOS_EXTENSIONISTAS" | "TCC";
            schoolPeriodRef: import("mongoose").Types.ObjectId;
            name?: string | null | undefined;
            period?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | null | undefined;
            state?: number | null | undefined;
            campus?: string | null | undefined;
        } & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        })[];
        classDocList: (import("mongoose").Document<unknown, {}, {
            processId: string;
            name: string;
            subjectCode: string;
            processRef: import("mongoose").Types.ObjectId;
            subjectRef: import("mongoose").Types.ObjectId;
            code: string;
            shift?: "MATUTINO" | "VESPERTINO" | "NOTURNO" | null | undefined;
        }, {}> & {
            processId: string;
            name: string;
            subjectCode: string;
            processRef: import("mongoose").Types.ObjectId;
            subjectRef: import("mongoose").Types.ObjectId;
            code: string;
            shift?: "MATUTINO" | "VESPERTINO" | "NOTURNO" | null | undefined;
        } & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        })[];
        userDocList: (import("mongoose").Document<unknown, {}, {
            processId: string;
            name: string;
            processRef: import("mongoose").Types.ObjectId;
            profileId: string;
            email: string;
            cpf: string;
            password: string;
            registrationNumber?: string | null | undefined;
            subprofile?: string | null | undefined;
            oab?: string | null | undefined;
            oabUf?: string | null | undefined;
            telephone?: string | null | undefined;
            periodId?: number | null | undefined;
            observations?: string | null | undefined;
        }, {}> & {
            processId: string;
            name: string;
            processRef: import("mongoose").Types.ObjectId;
            profileId: string;
            email: string;
            cpf: string;
            password: string;
            registrationNumber?: string | null | undefined;
            subprofile?: string | null | undefined;
            oab?: string | null | undefined;
            oabUf?: string | null | undefined;
            telephone?: string | null | undefined;
            periodId?: number | null | undefined;
            observations?: string | null | undefined;
        } & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        })[];
        enrollmentDocList: ((import("mongoose").Document<unknown, {}, {
            processId: string;
            subjectCode: string;
            classCode: string;
            processRef: import("mongoose").Types.ObjectId;
            subjectRef: import("mongoose").Types.ObjectId;
            classRef: import("mongoose").Types.ObjectId;
            userRef: import("mongoose").Types.ObjectId;
            registrationNumber?: string | null | undefined;
            professorEmail?: string | null | undefined;
        }, {}> & {
            processId: string;
            subjectCode: string;
            classCode: string;
            processRef: import("mongoose").Types.ObjectId;
            subjectRef: import("mongoose").Types.ObjectId;
            classRef: import("mongoose").Types.ObjectId;
            userRef: import("mongoose").Types.ObjectId;
            registrationNumber?: string | null | undefined;
            professorEmail?: string | null | undefined;
        } & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }) | (import("mongoose").Document<unknown, {}, {
            processId: string;
            subjectCode: string;
            classCode: string;
            processRef: import("mongoose").Types.ObjectId;
            subjectRef: import("mongoose").Types.ObjectId;
            classRef: import("mongoose").Types.ObjectId;
            userRef: import("mongoose").Types.ObjectId;
            registrationNumber?: string | null | undefined;
            studentEmail?: string | null | undefined;
        }, {}> & {
            processId: string;
            subjectCode: string;
            classCode: string;
            processRef: import("mongoose").Types.ObjectId;
            subjectRef: import("mongoose").Types.ObjectId;
            classRef: import("mongoose").Types.ObjectId;
            userRef: import("mongoose").Types.ObjectId;
            registrationNumber?: string | null | undefined;
            studentEmail?: string | null | undefined;
        } & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }))[];
    }>;
    private createProcess;
    private createSchoolPeriod;
    private createSubjects;
    private createClasses;
    private createUsers;
    private createEnrollments;
}
