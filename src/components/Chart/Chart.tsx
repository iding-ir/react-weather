import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { useForecasts } from "../../hooks/use-forecasts";
import styles from "./Chart.module.scss";

export const Chart = () => {
  const { forecast } = useForecasts();

  return (
    <div className={styles.container}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={500} height={300} data={forecast}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="min"
            stroke="#1e88e5"
            strokeWidth={3}
          />
          <Line
            type="monotone"
            dataKey="max"
            stroke="#f48403"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
