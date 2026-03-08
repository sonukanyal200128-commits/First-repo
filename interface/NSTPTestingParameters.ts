export interface UnderwritingRule {
  parameter: string;
  rule: string;
}

export const underwritingTestingRules: UnderwritingRule[] = [
  {
    parameter: "Age above 45 (i.e. 46 years completed age)",
    rule: "If any member age is above 45 years, proposal should be NSTP",
  },

  {
    parameter: "Sum insured",
    rule: "Medicare Premier allows: 5, 10, 15, 20, 25, 50, 75 (in Lacs), 1Cr, 2Cr, 3Cr",
  },

  {
    parameter: "Any pre existing diseases",
    rule: "If any member has a positive health condition selected, proposal will be NSTP",
  },

  {
    parameter: "BMI (between 15 & 36.99)",
    rule: "Refer BMI master. If any member has adverse BMI, proposal will be NSTP",
  },

  {
    parameter: "Medical questions",
    rule: "If any medical question answer is Yes, proposal becomes NSTP",
  },

  {
    parameter: "Lifestyle questions",
    rule: "Refer Lifestyle master. Borderline within limits and above limits lead to NSTP",
  },

  {
    parameter: "Max 7 members (Self, Spouse, 2 Parents, 3 Children)",
    rule: `
      Case 1: More than 7 members not allowed
      Case 2: More than 3 children not allowed
      Case 3: Only 2 parents/parent-in-law allowed
    `,
  },

  {
    parameter: "Children age 91 days to 25 years",
    rule: `
      Case 1: Age below 91 days not allowed
      Case 2: Age above 25 years not allowed for floater policy
      Check as per completed age logic
    `,
  },

  {
    parameter: "Individual policy",
    rule: "To be checked with multiple member combinations",
  },

  {
    parameter: "Family floater policy",
    rule: "To be checked with multiple member combinations",
  },

  {
    parameter: "Multi individual policy",
    rule: "To be checked with multiple member combinations",
  },

  {
    parameter: "Tenure",
    rule: "Tenure 1, 2 and 3 premium to be checked with Zone A, B, C",
  },

  {
    parameter: "Room category",
    rule: "NA",
  },

  {
    parameter: "PA addon",
    rule: "NA",
  },

  {
    parameter: "Nationality - Other than Indian",
    rule: "If nationality is Other than Indian, proposal will be NSTP",
  },
];
