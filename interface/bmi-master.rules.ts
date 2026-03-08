export interface BMIRule {
  bmiRange: {
    min: number;
    max: number;
  };

  ageRange: {
    min: number;
    max: number;
  };

  bmiLoading: number;
  bmiMemberLoading: number;

  decision: "Accept" | "Reject";

  errorCode?: string;
  message?: string;
}
