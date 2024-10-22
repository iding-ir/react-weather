export enum UNITS {
  centigrade = "centigrade",
  fahrenheit = "fahrenheit",
}

export const DEFAULT_UNIT = UNITS.centigrade;

export type Unit = keyof typeof UNITS;
