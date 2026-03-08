export interface DiseaseMaster {
  srNo: number;

  productCode: string;
  productName: string;

  condition: string;

  diseaseCode: string;
  nameOfDisease: string;

  operativeStatus?: string;

  typeOfSurgery?: string | null;

  treatmentStatus?: string | null;

  complications?: string | null;

  comorbidity?: "Yes" | "No";

  medicalDocumentUploadFlag: boolean;
}

