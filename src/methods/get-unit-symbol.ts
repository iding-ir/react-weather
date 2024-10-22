import { UNITS, Unit } from "../features/unit";

export const getUnitSymbol = (unit: Unit) => {
  switch (unit) {
    case UNITS.centigrade:
      return "°C";
    case UNITS.fahrenheit:
      return "°F";
  }
};
