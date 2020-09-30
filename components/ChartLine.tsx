import React from 'react';
import {
  ComposedChart,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Line,
} from 'recharts';

type Props = {
  chartList: { month: string; data1: number }[];
};

const ChartLine: React.FC<Props> = ({ chartList }) => {
  return (
    <ComposedChart
      width={700}
      height={280}
      data={chartList}
      margin={{ top: 20, right: 60, bottom: 0, left: 0 }}
    >
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <CartesianGrid stroke="#f5f5f5" />
      <Line type="monotone" dataKey="data1" stroke="#00aced" />
    </ComposedChart>
  );
};

export default ChartLine;
