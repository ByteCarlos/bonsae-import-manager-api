import { UsersEntity } from './UsersEntity.js';
import { DisciplinesEntity } from './DisciplinesEntity.js';
export declare class DisciplineUsersEntity {
    id: number;
    discipline: DisciplinesEntity;
    user: UsersEntity;
    teamId?: number;
    temporary?: boolean;
    professor?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}
