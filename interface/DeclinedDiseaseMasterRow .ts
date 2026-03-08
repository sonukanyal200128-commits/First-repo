export enum DeclineOutcome {
  REJECT = "Reject",
}


export interface DeclinedDiseaseMasterRow {
  srNo: number;

  productCode: string;

  declinedDiseaseCode: string;

  declinedDisease: string;

  outcome: DeclineOutcome;
}
