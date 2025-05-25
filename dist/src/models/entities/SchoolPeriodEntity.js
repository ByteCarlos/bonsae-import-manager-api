var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Unique, } from 'typeorm';
import { Period } from '../../dtos/SchoolPeriodDto.js';
let SchoolPeriodEntity = class SchoolPeriodEntity {
};
__decorate([
    PrimaryGeneratedColumn({ type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], SchoolPeriodEntity.prototype, "id", void 0);
__decorate([
    Column({ type: 'enum', enum: Period, nullable: false }),
    __metadata("design:type", String)
], SchoolPeriodEntity.prototype, "name", void 0);
__decorate([
    Column({ type: 'varchar', length: 50, nullable: false }),
    __metadata("design:type", String)
], SchoolPeriodEntity.prototype, "code", void 0);
__decorate([
    Column({ type: 'date', name: 'start_date', nullable: false }),
    __metadata("design:type", Date)
], SchoolPeriodEntity.prototype, "startDate", void 0);
__decorate([
    Column({ type: 'date', name: 'end_date', nullable: false }),
    __metadata("design:type", Date)
], SchoolPeriodEntity.prototype, "endDate", void 0);
__decorate([
    CreateDateColumn({ type: 'timestamp', name: 'created_at' }),
    __metadata("design:type", Date)
], SchoolPeriodEntity.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn({ type: 'timestamp', name: 'updated_at' }),
    __metadata("design:type", Date)
], SchoolPeriodEntity.prototype, "updatedAt", void 0);
__decorate([
    Column({ type: 'timestamp', name: 'deleted_at', nullable: true }),
    __metadata("design:type", Date)
], SchoolPeriodEntity.prototype, "deletedAt", void 0);
SchoolPeriodEntity = __decorate([
    Entity({ name: 'school_periods' }),
    Unique('unique_period', ['code'])
], SchoolPeriodEntity);
export { SchoolPeriodEntity };
//# sourceMappingURL=SchoolPeriodEntity.js.map