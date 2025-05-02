import { BundleDto } from "../dtos/BundleDto";
import { ClassRawEntryDto } from "../dtos/ClassRawEntryDto";
import { SchoolPeriodRawEntryDto } from "../dtos/SchoolPeriodRawEntryDto";
import { SubjectRawEntryDto } from "../dtos/SubjectRawEntryDto";
import ClassDocument from "../models/documents/ClassDocument";
import SchoolPeriodDocument from "../models/documents/SchoolPeriodDocument";
import SubjectDocument from "../models/documents/SubjectDocument";

export class DocumentService {
    async createDataBundle(schoolPeriodCode: string): Promise<BundleDto | null> {
      const schoolPeriodDoc = await SchoolPeriodDocument.findOne({ code: schoolPeriodCode });
  
      if (!schoolPeriodDoc) {
        return null;
      }
  
      const subjectsDoc = await SubjectDocument.find({ periodId: schoolPeriodDoc.code });
      const subjectsDto = subjectsDoc.flatMap(subjectDoc => subjectDoc as SubjectRawEntryDto);
      if (!subjectsDoc || subjectsDoc.length === 0) {
        return null;
      }

      const classesDocs = await Promise.all(
        subjectsDto.map(subject => ClassDocument.find({ subjectCode: subject.code }))
      );
      if (!classesDocs || classesDocs.length === 0) {
        return null;
      }
      const classesDto: ClassRawEntryDto[] = classesDocs.map(classDoc =>
        classDoc as unknown as ClassRawEntryDto
      );      

      const dataBundle: BundleDto = {
        schoolPeriods: [schoolPeriodDoc as unknown as SchoolPeriodRawEntryDto],
        subjects: subjectsDto,
        classes: classesDto,
        users: [],
        enrollments: []
      };
  
      return dataBundle;
    }
}