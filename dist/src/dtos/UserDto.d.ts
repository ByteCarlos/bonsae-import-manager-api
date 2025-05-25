export declare enum UserProfile {
    ALUNO = "Aluno(a)",
    PROFESSOR = "Professor(a)",
    COORDENADOR = "Coordenador(a)",
    SECRETARIO = "Secret\u00E1rio(a)",
    ESTAGIARIO = "Estagi\u00E1rio(a)",
    ADVOGADO = "Advogado(a)"
}
export declare const UserProfileMap: Record<UserProfile, number>;
export interface UserDto {
    processId: string;
    data: UserDtoData[];
}
export interface UserDtoData {
    profileId: UserProfile;
    subprofile?: string;
    name: string;
    oab?: string;
    oabUf?: string;
    email: string;
    registrationNumber?: string;
    telephone?: string;
    cpf: string;
    password: string;
    periodId?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
    observations?: string;
}
