import React from 'react';
import ResponsiveContainer from 'recharts/lib/component/ResponsiveContainer';
import LineChart from 'recharts/lib/chart/LineChart';
import Line from 'recharts/lib/cartesian/Line';
import XAxis from 'recharts/lib/cartesian/XAxis';
import YAxis from 'recharts/lib/cartesian/YAxis';
import CartesianGrid from 'recharts/lib/cartesian/CartesianGrid';
import Tooltip from 'recharts/lib/component/Tooltip';
import Legend from 'recharts/lib/component/Legend';

const data = [
  { name: 'Mon', Visits: 0, Orders: 0 },
  { name: 'Tue', Visits: 0, Orders: 0 },
  { name: 'Wed', Visits: 0, Orders: 0 },
  { name: 'Thu', Visits: 0, Orders: 0 },
  { name: 'Fri', Visits: 0, Orders: 0 },
  { name: 'Sat', Visits: 0, Orders: 0 },
  { name: 'Sun', Visits: 0, Orders: 0 },
];

function SimpleLineChart() {
  return (
    // 99% per https://github.com/recharts/recharts/issues/172
    <ResponsiveContainer width="99%" height={320}>
      <LineChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Rendez-vous" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default SimpleLineChart;