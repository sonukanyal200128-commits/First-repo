// ✅ Decline Disease Object
export interface DeclineDisease {
  diseaseCode: string; // ex: "DD31"
  diseaseName: string; // ex: "Congestive Heart Failure"
}

// ✅ Medical Detail Object (Used inside medicalDetails[])

// This can hold Surgery OR Medical illness info.

export interface MedicalDetail {
  diseaseCode: string;
  nameOfTheDisease: string;

  // Surgery fields (Q1)
  operativeStatus?: string;
  typeOfSurgery?: string;
  treatmentStatus?: string;

  // Medical fields (Q2/Q3/Q4/Q8)
  dateOfDiagnosis?: string;
  medicationHistory?: string;
  progress?: string;
  modeOfMedication?: string;

  // Common
  complications?: string;
  medicalDocument?: string;
}

// ✅ Each Question Object
export interface MedicalQuestion {
  questionId: string; // "Q1"..."Q10"
  response: boolean;

  // If response is true → details required
  medicalDetails?: MedicalDetail[];

  // Only for Remarks questions (Q5/Q6/Q7)
  remarks?: string;
}

// ✅ Main PED Payload
export interface PedMedicalDeclarationPayload {
  preExistingIllness: boolean;

  declineDisease: DeclineDisease;

  medicalDeclaration: MedicalQuestion[];
}