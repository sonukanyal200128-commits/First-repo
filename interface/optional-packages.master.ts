export enum OptionalPackageName {
  AccidentSuraksha = "Accident Suraksha",
  CancerBenefit = "Cancer Benefit",
  WomenSuraksha = "Women Suraksha",
  MentalWellbeing = "Mental Wellbeing",
  PocketSaver = "Pocket Saver",
  VoluntaryAggregateDeductible = "Voluntary Aggregate Deductible",
  AdvancedCover = "Advanced Cover",
}
export enum ZoneType {
  A = "A",
  B = "B",
  C = "C",
}

export interface OptionalPackageMaster {
  packageName: OptionalPackageName;
  riderNames: string[];
  benefitNames: string[];
}
