export enum Relationship {
  SELF = "SELF",
  SPOUSE = "SPOUSE",
  SON = "SON",
  DAUGHTER = "DAUGHTER",
  FATHER = "FATHER",
  MOTHER = "MOTHER",
  BROTHER = "BROTHER",
  SISTER = "SISTER",
}


export enum ProposerTitle {
  MR = "Mr",
  MRS = "Mrs",
  MS = "Ms",
  PROF = "Prof",
  DR = "Dr",
  LADY = "Lady",
  REV = "Rev",
  UNKNOWN = "Unknown",
  MISS = "Miss",
  LT = "Lt",
  MAST = "Mast",
  WING_COMMANDER = "Wing Commander",
  PHD = "Phd",
  MAJ = "Maj",
  GEN = "Gen",
  SIST = "Sist",
  CAPT = "Capt",
  HON = "Hon",
  JUSTICE = "Justice",
  COL = "Col",
  SHRI = "Shri",
  ADV = "Adv",
  MIS = "Mis",
  CUST = "Cust",
  MST = "Mst",
  MD = "Md",
  MAYOR = "Mayor",
  WING_CDR = "Wing Cdr",
  BRIG = "Brig",
  MSTR = "Mstr",
}


export enum MemberTitle {
  MR = "Mr",
  MRS = "Mrs",
  MS = "Ms",
  PROF = "Prof",
  DR = "Dr",
  LADY = "Lady",
  REV = "Rev",
  UNKNOWN = "Unknown",
  MISS = "Miss",
  LT = "Lt",
  MAST = "Mast",
  WING_COMMANDER = "Wing Commander",
  PHD = "Phd",
  MAJ = "Maj",
  GEN = "Gen",
  SIST = "Sist",
  CAPT = "Capt",
  HON = "Hon",
  JUSTICE = "Justice",
  COL = "Col",
  SHRI = "Shri",
  ADV = "Adv",
  MIS = "Mis",
  CUST = "Cust",
  MST = "Mst",
  MD = "Md",
  MAYOR = "Mayor",
  WING_CDR = "Wing Cdr",
  BRIG = "Brig",
  MSTR = "Mstr",
}


export enum Relationship {
  SELF = "Self",
  SPOUSE = "Spouse",

  SON_1 = "Son 1",
  SON_2 = "Son 2",
  SON_3 = "Son 3",

  DAUGHTER_1 = "Daughter 1",
  DAUGHTER_2 = "Daughter 2",
  DAUGHTER_3 = "Daughter 3",

  MOTHER = "Mother",
  FATHER = "Father",

  FATHER_IN_LAW = "Father In Law",
  MOTHER_IN_LAW = "Mother In Law",

  GRAND_FATHER = "Grand Father",
  GRAND_MOTHER = "Grand Mother",
}

export enum MedicationHistory {
  REGULAR = "Regular",
  IRREGULAR = "Irregular",
}


export enum OperativeStatus {
  OPERATED = "Operated",
  UNOPERATED = "Unoperated",
  OTHERS = "Others",
  NA = "NA",
}

export enum TypeOfSurgery {
  BILATERAL = "Bilateral",
  HYSTERECTOMY = "Hysterectomy",
  MYOMECTOMY = "Myomectomy",
  CHOLECYSTECTOMY = "cholecystectomy",
  HAEMORRHOIDECTOMY = "Haemorrhoidectomy",
  LSCS = "LSCS",
  UNILATERAL = "Unilateral",
  OTHERS = "Others",
  NA = "NA",
}


export enum ModeOfMedication {
  ORAL = "Oral",
  INJECTABLE = "Injectable",
  ORAL_INJECTABLE = "Oral + Injectable",
}


export enum TypeOfSubstanceAbuse {
  ALCOHOL = "Alcohol",
  SMOKING = "Smoking",
  PAN_MASALA = "Pan Masala",
  OTHERS = "Others",
}


export enum SubstanceConsumed {
  BEER = "Beer",
  HARD_LIQUOR = "Hard Liquor",
  WINE = "Wine",
  OTHERS = "Others",
}

export enum Frequency {
  DAILY = "Daily",
  WEEKLY = "Weekly",
  NA = "NA",
}


export enum InsurerName {
  AGRICULTURE_INSURANCE = "AGRICULTURE INSURANCE CO. OF INDIA LTD.",
  BAJAJ_ALLIANZ = "BAJAJ ALLIANZ GENERAL INSURANCE CO.LTD",
  BHARTI_AXA = "BHARTI AXA GENERAL INSURANCE COMPANY LIMITED",
  CHOLAMANDALAM_MS = "CHOLAMANDALAM MS GENERAL INSURANCE CO.LTD.",
  DIRECTORATE_GIF_MAHA = "DIRECTORATE OF INSURANCE (GIF), GOVT. OF MAHA",
  ENDURANCE = "ENDURANCE",
  ECGC = "EXPORT CREDIT GUARANTEE CORPORATION OF INDIA LTD",
  FUTURE_GENERALI = "FUTURE GENERALI INDIA INSURANCE COMPANY LIMITED",
  GIC = "GENERAL INSURANCE CORPORATION OF INDIA",
  HDFC_ERGO_GENERAL = "HDFC ERGO GENERAL INSURANCE CO.LTD.",
  ICICI_LOMBARD = "ICICI LOMBARD GENERAL INSURANCE CO. LTD.",
  IFFCO_TOKIO = "IFFCO TOKIO GENERAL INSURANCE CO. LTD.",
  L_T_GENERAL = "L&T GENERAL INSURANCE CO. LTD.",
  LIBERTY_VIDEOCON = "LIBERTY VIDEOCON GENERAL INSURANCE COMPANY LTD.",
  MAGMA_HDI = "MAGMA HDI GENERAL INSURANCE CO LTD",
  MITSUI = "MITSUI INSURANCE",
  NATIONAL_INSURANCE = "NATIONAL INSURANCE CO.LTD.",
  RAHEJA_QBE = "RAHEJA QBE GENERAL INSURANCE COMPANY LIMITED",
  RELIANCE_GENERAL = "RELIANCE GENERAL INSURANCE CO.LTD.",
  ROYAL_SUNDARAM = "ROYAL SUNDARAM ALLIANCE INSURANCE CO.LTD.",
  SBI_GENERAL = "SBI GENERAL INSURANCE COMPANY LIMITED",
  STAR_HEALTH = "STAR HEALTH AND ALLIED INSURANCE COMPANY LIMITED",
  TATA_AIG = "TATA AIG GENERAL INSURANCE CO.LTD.",
  GOVT_GUJARAT_FUND = "THE GOVT. OF GUJARAT INSURANCE FUND",
  NEW_INDIA = "THE NEW INDIA ASSURANCE CO. LTD.",
  ORIENTAL = "THE ORIENTAL INSURANCE CO. LTD.",
  UNITED_INDIA = "UNITED INDIA INSURANCE CO.LTD.",
  UNIVERSAL_SOMPO = "UNIVERSAL SOMPO GENERAL INSURANCE CO.LTD.",
  MAHARASHTRA_GOVT_FUND = "Maharashtra Government Insurance Fund",

  // Health Insurers
  HDFC_ERGO_HEALTH = "HDFC ERGO HEALTH INSURANCE LTD.",
  MANIPAL_CIGNA = "MANIPALCIGNA HEALTH INSURANCE CO LTD",
  MAX_BUPA = "MAX BUPA HEALTH INSURANCE COMPANY LTD.",
  APOLLO_MUNICH = "APOLLO MUNICH (AMHI)",
  ACKO = "ACKO General Insurance Ltd",
  EDELWEISS = "EDELWEISS GENERAL INSURANCE COMPANY LIMITED",
  MAHARASHTRA_STATE_FUND = "MAHARASHTRA STATE INSURANCE FUND",
  LIBERTY_GENERAL = "LIBERTY GENERAL INSURANCE LTD.",
  RELIANCE_HEALTH = "RELIANCE HEALTH INSURANCE LTD.",
  CARE_HEALTH = "CARE HEALTH INSURANCE LTD",
  SHRIRAM_GENERAL = "SHRIRAM GENERAL INSURANCE COMPANY LIMITED",
  RELIGARE = "Religare Health Insurance Company Limited",
  KOTAK_GENERAL = "KOTAK MAHINDRA GENERAL INSURANCE COMPANY LTD",
  ADITYA_BIRLA = "Aditya Birla Health Insurance Company Limited",
  CIGNATTK = "CignaTTK Health Insurance Company Limited",
  DHFL_COCO = "DHFL COCO GENERAL INSURANCE LIMITED",
  GO_DIGIT = "GO DIGIT GENERAL INSURANCE CO LTD",
  NAVI_GENERAL = "NAVI GENERAL INSURANCE LTD",
}


export enum ProposerTitle {
  MR = "Mr",
  MRS = "Mrs",
  MS = "Ms",
  PROF = "Prof",
  DR = "Dr",
  LADY = "Lady",
  REV = "Rev",
  UNKNOWN = "Unknown",
  MISS = "Miss",
  LT = "Lt",
  MAST = "Mast",
  WING_COMMANDER = "Wing Commander",
  PHD = "Phd",
  MAJ = "Maj",
  GEN = "Gen",
  SIST = "Sist",
  CAPT = "Capt",
  HON = "Hon",
  JUSTICE = "Justice",
  COL = "Col",
  SHRI = "Shri",
  ADV = "Adv",
  MIS = "Mis",
  CUST = "Cust",
  MST = "Mst",
  MD = "Md",
  MAYOR = "Mayor",
  WING_CDR = "Wing Cdr",
  BRIG = "Brig",
  MSTR = "Mstr",
}

export enum OperativeStatus {
  OPERATED = "Operated",
  UNOPERATED = "Unoperated",
  OTHERS = "Others",
  NA = "NA",
}


export enum TypeOfSurgery {
  BILATERAL = "Bilateral",
  HYSTERECTOMY = "Hysterectomy",
  MYOMECTOMY = "Myomectomy",
  CHOLECYSTECTOMY = "cholecystectomy",
  HAEMORRHOIDECTOMY = "Haemorrhoidectomy",
  LSCS = "LSCS",
  UNILATERAL = "Unilateral",
  OTHERS = "Others",
  NA = "NA",
}

export enum TreatmentStatus {
  CURED = "Cured",
  NOT_CURED = "Not Cured",
  NA = "NA",
  OTHERS = "Others",
}


export enum SubstanceConsumed {
  BEER = "Beer",
  HARD_LIQUOR = "Hard Liquor",
  WINE = "Wine",
  OTHERS = "Others",
  NA = "NA",
}


export enum ProductName {
  ELDER_CARE = "elderCare",
  SUPER_CHARGE = "superCharge",
  MEDI_CARE_LITE = "mediCareLITE",
  MEDICARE_PLUS = "medicarePlus",
  BOLT_MEDICARE = "boltmedicare",
}

export enum TransactionMethod {
  ONLINE = "Online",
  NEFT = "NEFT",
}

export enum UserType {
  AGENT = "agent",
  CUSTOMER = "customer",
}

export enum VerificationMethod {
  PARTNER = "Partner",
}


export enum StatusList {
  REQUIREMENT = "Requirement",
  REJECT = "Reject",

  REFER_TO_COPS = "ReferToCOPS",
  REFER_TO_PPC = "ReferToPPC",
  REFER_TO_TELE_MER = "ReferToTeleMER",
  REFER_TO_UW = "ReferToUW",

  ADDITIONAL_INFO_REQUIRED = "AdditionalInfoRequired",

  ACCEPT_WITH_EXCLUSION_AND_LOADING = "AcceptWithExclusionAndLoading",
  ACCEPT_WITH_LOADING = "AcceptWithLoading",
  ACCEPT_WITH_EXCLUSION = "AcceptWithExclusion",

  POLICY_ISSUED = "PolicyIssued",
  COUNTER_OFFER_INITIATED = "CounterOfferInitiated",

  KYC_PENDING = "KycPending",
  PAYMENT_PENDING = "PaymentPending",
  CUSTOMER_CONSENT_PENDING = "CustomerConsentPending",
}

export enum DocType {
  DOC_80D = "80D",
  POLICY_DOCUMENT = "POLICY_DOCUMENT",
  HEALTH_CARD = "HEALTH_CARD",
  PROPOSAL_ACCEPT = "PROPOSAL_ACCEPT",
  PROPOSAL_REJECT = "PROPOSAL_REJECT",
  ADDITIONAL_INFO = "ADDITIONAL_INFO",
  COL = "COL",
}
3