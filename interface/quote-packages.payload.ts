export enum OptionalPackageCover {
  CancerBenefit = "Cancer Benefit",
  WomenSuraksha = "Women Suraksha",
  PocketSaver = "Pocket Saver",
  VoluntaryAggregateDeductible = "Voluntary Aggregate Deductible",
  AdvancedCover = "Advanced Cover",
  MentalWellbeing = "Mental Wellbeing",
  AccidentSuraksha = "Accident Suraksha",
}

export interface QuoteRequestPayload {
  packages: OptionalPackageCover[];
}
