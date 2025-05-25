var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, JoinColumn, ManyToOne, Unique, } from 'typeorm';
import { SchoolPeriodEntity } from './SchoolPeriodEntity.js';
import { CampusEntity } from './CampusEntity.js';
let AcademicClassesEntity = class AcademicClassesEntity {
};
__decorate([
    PrimaryGeneratedColumn({ type: 'bigint', unsigned: true }),
    __metadata("design:type", Number)
], AcademicClassesEntity.prototype, "id", void 0);
__decorate([
    ManyToOne(() => SchoolPeriodEntity),
    JoinColumn({ name: 'school_period_id' }),
    __metadata("design:type", SchoolPeriodEntity)
], AcademicClassesEntity.prototype, "schoolPeriod", void 0);
__decorate([
    Column({ type: 'text', nullable: false }),
    __metadata("design:type", String)
], AcademicClassesEntity.prototype, "name", void 0);
__decorate([
    Column({ type: 'varchar', name: 'code', nullable: false, unique: true }),
    __metadata("design:type", String)
], AcademicClassesEntity.prototype, "code", void 0);
__decorate([
    Column({ type: 'date', name: 'start_date', nullable: false }),
    __metadata("design:type", Date)
], AcademicClassesEntity.prototype, "startDate", void 0);
__decorate([
    Column({ type: 'date', name: 'end_date', nullable: false }),
    __metadata("design:type", Date)
], AcademicClassesEntity.prototype, "endDate", void 0);
__decorate([
    Column({ type: 'varchar', length: 100, name: 'category', nullable: false }),
    __metadata("design:type", String)
], AcademicClassesEntity.prototype, "category", void 0);
__decorate([
    Column({ type: 'varchar', length: 100, name: 'course', nullable: true }),
    __metadata("design:type", String)
], AcademicClassesEntity.prototype, "course", void 0);
__decorate([
    Column({ type: 'boolean', default: true, name: 'active', nullable: true }),
    __metadata("design:type", Boolean)
], AcademicClassesEntity.prototype, "active", void 0);
__decorate([
    Column({ type: 'boolean', default: false, name: 'is_exceptional', nullable: true }),
    __metadata("design:type", Boolean)
], AcademicClassesEntity.prototype, "isExceptional", void 0);
__decorate([
    Column({ type: 'varchar', length: 50, name: 'period', nullable: true }),
    __metadata("design:type", String)
], AcademicClassesEntity.prototype, "period", void 0);
__decorate([
    ManyToOne(() => CampusEntity),
    JoinColumn({ name: 'campus_id' }),
    __metadata("design:type", CampusEntity)
], AcademicClassesEntity.prototype, "campus", void 0);
__decorate([
    Column({ type: 'varchar', length: 255, name: 'integration', nullable: true }),
    __metadata("design:type", String)
], AcademicClassesEntity.prototype, "integration", void 0);
__decorate([
    CreateDateColumn({ type: 'timestamp', name: 'created_at', nullable: true }),
    __metadata("design:type", Date)
], AcademicClassesEntity.prototype, "createdAt", void 0);
__decorate([
    UpdateDateColumn({ type: 'timestamp', name: 'updated_at', nullable: true }),
    __metadata("design:type", Date)
], AcademicClassesEntity.prototype, "updatedAt", void 0);
__decorate([
    Column({ type: 'timestamp', name: 'deleted_at', nullable: true }),
    __metadata("design:type", Date)
], AcademicClassesEntity.prototype, "deletedAt", void 0);
AcademicClassesEntity = __decorate([
    Entity({ name: 'academic_classes' }),
    Unique('unique_academic_classes', ['code'])
], AcademicClassesEntity);
export { AcademicClassesEntity };
//# sourceMappingURL=AcademicClassesEntity.js.map