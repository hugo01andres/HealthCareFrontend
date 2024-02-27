import { GenderType } from "./genderType";

export type PatientInformation = {
  age: number;
  serumCreatinine: number;
  serumSodium: number;
  platelets: number;
  ejectionFraction: number;
  creatininePhosphokinase: number;
  anaemia: boolean;
  diabetes: boolean;
  highBloodPressure: boolean;
  smoking: boolean;
  sex: GenderType | undefined;
};
