


export enum DiseaseStatus {
  KNOWN = "Known",
}

export enum MedicationHistory {
  YES = "Yes",
  NO = "No",
}

export enum ModeOfMedication {
  ORAL = "Oral",
  INJECTABLE = "Injectable",
  ORAL_INJECTABLE = "Oral + Injectable",
}

export enum ProgressStatus {
  CONTROLLED = "Controlled",
  UNCONTROLLED = "Uncontrolled",
}

export enum YesNo {
  YES = "Yes",
  NO = "No",
}


export interface MedicalDiseaseRow {
  srNo: number;

  productCode: string;
  productName: string;

  condition: "Medical";

  diseaseCode: string;
  nameOfDisease: string;

  status: DiseaseStatus;

  ageOfOnsetFrom: number;
  ageOfOnsetTo: number;

  durationOfMedicalConditionFrom: number;
  durationOfMedicalConditionTo: number;

  medicationHistory?: MedicationHistory;

  modeOfMedication?: ModeOfMedication;

  progress?: ProgressStatus;

  complications?: YesNo;

  comorbidity?: YesNo;

  medicalDocumentUploadFlag: boolean;
}
