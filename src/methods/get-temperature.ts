import { UNITS, Unit } from "../features/unit";
import { convertCentigradeToFahrenheit } from "../utils/convert-centigrade-to-fahrenheit";

export const getTemperature = (temperature: number, unit: Unit) => {
  switch (unit) {
    case UNITS.centigrade:
      return temperature;
    case UNITS.fahrenheit:
      return convertCentigradeToFahrenheit(temperature);
  }
};
