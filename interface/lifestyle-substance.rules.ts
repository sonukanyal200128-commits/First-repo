export enum SubstanceAbusedType {
  WATER = "Water",
  ALCOHOL = "Alcohol",
  PAN_MASALA = "Pan Masala",
  SMOKING = "Smoking",
  NO_INTAKE = "No Intake",
}

export enum SubstanceConsumedType {
  MINERAL_WATER = "Mineral Water",
  HARD_LIQUOR = "Hard Liquor",
  BEER = "Beer",
  WINE = "Wine",
  OTHERS = "Others",
  NO_INTAKE = "No Intake",
}

export enum FrequencyType {
  DAILY = "Daily",
  WEEKLY = "Weekly",
  NO_INTAKE = "No Intake",
}

export enum LifestyleDecision {
  ACCEPT = "Accept",
  REJECT = "Reject",
  REFER_TO_UW = "ReferToUW",
}

export interface LifestyleRule {
  substanceAbused: SubstanceAbusedType;

  substanceConsumed?: SubstanceConsumedType;

  frequency: FrequencyType;

  quantityLimit: {
    operator: ">" | "<=" | ">=";
    value: number;
  };

  decision: LifestyleDecision;

  errorCode?: string;
  message?: string;
}
