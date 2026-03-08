export enum Relationship {
  SELF = "Self",
  SPOUSE = "Spouse",
  FATHER = "Father",
  MOTHER = "Mother",

  SON_1 = "Son 1",
  SON_2 = "Son 2",
  SON_3 = "Son 3",

  DAUGHTER_1 = "Daughter 1",
  DAUGHTER_2 = "Daughter 2",
  DAUGHTER_3 = "Daughter 3",

  FATHER_IN_LAW = "Father In Law",
  MOTHER_IN_LAW = "Mother In Law",
}

export enum Nationality {
    
  INDIAN = "Indian",
  OTHERS = "Others",
}

export enum MaritalStatus {
  SINGLE = "Single",
  MARRIED = "Married",
  OTHERS = "Others",
}



export enum Gender {
  MALE = "Male",
  FEMALE = "Female",
  OTHERS = "Others",
}

export enum Salutation {
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
  MAJOR = "Major",
  WING_CDR = "Wing Cdr",
  BRIG = "Brig",
  MSTR = "Mstr",
}





export interface PersonDetails {
  salutation: Salutation;
  gender: Gender;
  maritalStatus: MaritalStatus;
  nationality: Nationality;
  relationship: Relationship;
}
