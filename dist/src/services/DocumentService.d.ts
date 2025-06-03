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
            code: string;
            processId: string;
            processRef: import("mongoose").Types.ObjectId;
            startDate: NativeDate;
            endDate: NativeDate;
            name?: string | null | undefined;
        }, {}> & {
            code: string;
            processId: string;
            processRef: import("mongoose").Types.ObjectId;
            startDate: NativeDate;
            endDate: NativeDate;
            name?: string | null | undefined;
        } & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        };
        subjectDocList: (import("mongoose").Document<unknown, {}, {
            code: string;
            processId: string;
            processRef: import("mongoose").Types.ObjectId;
            periodId: string;
            startDate: NativeDate;
            endDate: NativeDate;
            category: "CURSO" | "NPJ" | "PROJETOS_EXTENSIONISTAS" | "TCC";
            schoolPeriodRef: import("mongoose").Types.ObjectId;
            name?: string | null | undefined;
            period?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | null | undefined;
            state?: number | null | undefined;
            campus?: string | null | undefined;
        }, {}> & {
            code: string;
            processId: string;
            processRef: import("mongoose").Types.ObjectId;
            periodId: string;
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
            subjectCode: string;
            name: string;
            code: string;
            processId: string;
            processRef: import("mongoose").Types.ObjectId;
            subjectRef: import("mongoose").Types.ObjectId;
            shift?: "MATUTINO" | "VESPERTINO" | "NOTURNO" | null | undefined;
        }, {}> & {
            subjectCode: string;
            name: string;
            code: string;
            processId: string;
            processRef: import("mongoose").Types.ObjectId;
            subjectRef: import("mongoose").Types.ObjectId;
            shift?: "MATUTINO" | "VESPERTINO" | "NOTURNO" | null | undefined;
        } & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        })[];
        userDocList: (import("mongoose").Document<unknown, {}, {
            name: string;
            processId: string;
            processRef: import("mongoose").Types.ObjectId;
            profileId: string;
            email: string;
            cpf: string;
            password: string;
            periodId?: number | null | undefined;
            registrationNumber?: string | null | undefined;
            subprofile?: string | null | undefined;
            oab?: string | null | undefined;
            oabUf?: string | null | undefined;
            telephone?: string | null | undefined;
            observations?: string | null | undefined;
        }, {}> & {
            name: string;
            processId: string;
            processRef: import("mongoose").Types.ObjectId;
            profileId: string;
            email: string;
            cpf: string;
            password: string;
            periodId?: number | null | undefined;
            registrationNumber?: string | null | undefined;
            subprofile?: string | null | undefined;
            oab?: string | null | undefined;
            oabUf?: string | null | undefined;
            telephone?: string | null | undefined;
            observations?: string | null | undefined;
        } & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        })[];
        enrollmentDocList: ((import("mongoose").Document<unknown, {}, {
            subjectCode: string;
            processId: string;
            processRef: import("mongoose").Types.ObjectId;
            subjectRef: import("mongoose").Types.ObjectId;
            classCode: string;
            classRef: import("mongoose").Types.ObjectId;
            userRef: import("mongoose").Types.ObjectId;
            registrationNumber?: string | null | undefined;
            professorEmail?: string | null | undefined;
        }, {}> & {
            subjectCode: string;
            processId: string;
            processRef: import("mongoose").Types.ObjectId;
            subjectRef: import("mongoose").Types.ObjectId;
            classCode: string;
            classRef: import("mongoose").Types.ObjectId;
            userRef: import("mongoose").Types.ObjectId;
            registrationNumber?: string | null | undefined;
            professorEmail?: string | null | undefined;
        } & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }) | (import("mongoose").Document<unknown, {}, {
            subjectCode: string;
            processId: string;
            processRef: import("mongoose").Types.ObjectId;
            subjectRef: import("mongoose").Types.ObjectId;
            classCode: string;
            classRef: import("mongoose").Types.ObjectId;
            userRef: import("mongoose").Types.ObjectId;
            registrationNumber?: string | null | undefined;
            studentEmail?: string | null | undefined;
        }, {}> & {
            subjectCode: string;
            processId: string;
            processRef: import("mongoose").Types.ObjectId;
            subjectRef: import("mongoose").Types.ObjectId;
            classCode: string;
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
