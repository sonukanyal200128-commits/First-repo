export enum Zone {
  A = "A",
  B = "B",
  C = "C",
}

export enum PackageType {
  MANDATORY = "Mandatory",
  OPTIONAL = "Optional",
}

export interface RiderInfo {
  riderName: string;
  uin: string;
}

export interface ZonePackageRule {
  zone: Zone;

  packageType: PackageType;

  packageNumber: number;

  packageName: string;

  rider: RiderInfo;

  coverBenefitName: string;
}

export interface ZonePackageRule {
  zone: Zone;

  packageType: PackageType;

  packageNumber: number;

  packageName: string;

  rider: RiderInfo;

  coverBenefits: string[]; // ✅ multiple benefits allowed
}
