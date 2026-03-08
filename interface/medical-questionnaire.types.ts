export enum MedicalQuestionId {
  Q1 = "Q1",
  Q2 = "Q2",
  Q3 = "Q3",
  Q4 = "Q4",
  Q5 = "Q5",
  Q6 = "Q6",
  Q7 = "Q7",
  Q8 = "Q8",
  Q9 = "Q9",
  Q10 = "Q10",
}

export enum OperativeStatus {
  Operated = "Operated",
  Unoperated = "Unoperated",
  Others = "Others",
  NA = "NA",
}

export enum TypeOfSurgery {
  Bilateral = "Bilateral",
  Hysterectomy = "Hysterectomy",
  Myomectomy = "Myomectomy",
  Cholecystectomy = "cholecystectomy",
  Haemorrhoidectomy = "Haemorrhoidectomy",
  LSCS = "LSCS",
  Unilateral = "Unilateral",
  Others = "Others",
  NA = "NA",
}

export enum TreatmentStatus {
  Cured = "Cured",
  NotCured = "Not Cured",
  Others = "Others",
  NA = "NA",
}


export enum MedicationHistory {
  Regular = "Regular",
  Irregular = "Irregular",
}

export enum ModeOfMedication {
  Oral = "Oral",
  Injectable = "Injectable",
  OralInjectable = "Oral + Injectable",
}

export enum ProgressStatus {
  Controlled = "Controlled",
  Uncontrolled = "Uncontrolled",
}



// ✅ Q1 Surgery Question Payload
export interface SurgeryQuestionPayload  {
  diseaseCode: string;
  nameOfTheDisease: string;

  operativeStatus: OperativeStatus;

  typeOfSurgery: TypeOfSurgery;

  treatmentStatus: TreatmentStatus;

  complications?: string;

  medicalDocument?: string;
}

// ✅ Q2/Q3/Q4/Q8 Medical Question Payload
export interface MedicalQuestionPayload  {
  diseaseCode: string;
  nameOfTheDisease: string;

  dateOfDiagnosis: string;

  medicationHistory: MedicationHistory;

  progress: ProgressStatus;

  complications?: string;

  modeOfMedication: ModeOfMedication;

  medicalDocument?: string;
}

// ✅ Q5/Q6/Q7 Remarks Payload
export interface RemarksQuestionPayload  {
  remarks: string;
}

// ✅ Q9 Symptom Payload


// ✅ Q10 Checkup Payload
export interface CheckupQuestionPayload  {
  medicalDocument?: string;
}

// ✅ PreExisting Illness Object (Top Level)
export interface PreExistingIllnessPayload {
  preExistingIllness: boolean;

  diseaseCode: string;
  diseaseName: string;
}

