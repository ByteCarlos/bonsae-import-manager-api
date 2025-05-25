import { ProcessDto } from "../dtos/ProcessDto.js";
import { UserDtoData } from "../dtos/UserDto.js";
export declare class DocumentService {
    bundleProcessData(processId: string): Promise<ProcessDto>;
}
export declare function checkDuplicateUsers(data: UserDtoData[], processId: string): Promise<({
    profileId: import("../dtos/UserDto.js").UserProfile;
    name: string;
} | null)[]>;
