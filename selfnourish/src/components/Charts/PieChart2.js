import React from 'react';
import { RadialBarChart, PolarAngleAxis, RadialBar } from 'recharts';

// const data = [
//     { id: "1", name: "L1", value: 50 },
//     { id: "2", name: "L2", value: 50 }
//   ];

const PieChart2 = props => {

    //const data2 = props.data;
    const data = [
        { name: 'L1', value: 45 }
      ];

    const circleSize = 200;
  	return (

          <RadialBarChart
            width={circleSize}
            height={circleSize}
            cx={circleSize / 2}
            cy={circleSize / 2}
            innerRadius="75%"
            outerRadius="100%"
            barSize={2}
            data={data}
            startAngle={90}
            endAngle={-270}
            >
            <PolarAngleAxis
            type="number"
            domain={[0, 100]}
            angleAxisId={0}
            tick={false}
            />
            <RadialBar
            background
            clockWise
            dataKey="value"
            cornerRadius={circleSize / 2}
            fill="#82ca9d"
            />
            <text
            x={circleSize / 2}
            y={circleSize / 2}
            textAnchor="middle"
            dominantBaseline="middle"
            className="progress-label"
            >
            25
            </text>
          </RadialBarChart>
      )
}

export default PieChart2;