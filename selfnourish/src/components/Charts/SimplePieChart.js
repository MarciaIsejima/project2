import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

//const data = [{name: 'Usage', value: 200}, {name: 'Total', value: 800}];

const COLORS = ['#ff8500', '#CCCCCC'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
 	const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x  = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy  + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="#CCCCCC" textAnchor={x > cx ? 'start' : 'end'} 	dominantBaseline="central">
    	{`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const SimplePieChart = props => {

    const data = props.data;

  	return (
      
    	<PieChart width={800} height={400}>
        <Pie
          data={data}
          cx={300}
          cy={200}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#CCCCCC"
          dataKey="value"
        >
        	{
          	data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
          }
        </Pie>
        
        <Tooltip/>
      </PieChart>
    );
  }
export default SimplePieChart;
