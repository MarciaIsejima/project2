import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, Label, Text, LabelList
} from 'recharts';


const SimpleBarChart = props => {

    const list = props.nutrientsList;

    // convert levels to numeric values
    const data = list.map((item) => {
        var value = 0;
        switch (item.level) {
            case "low":
                value = 10;
                break;
            case "medium":
                value = 60;
                break;
            case "high":
                value = 90; 
                break;
            default:
                value = 10;
        };
        let newItem = {name: item.nutrient, level: item.level, value: value}
        return (newItem)
    });

    // const data = [
    //     {
    //       name: 'Sodium', level: 10
    //     },
    //     {
    //       name: 'Fibre', level: 10
    //     },
    //     {
    //       name: 'Potassium', level: 10
    //     }

    //   ];

    return (
      <BarChart
        width={400}
        height={200}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
        layout="vertical"
      >
        <Text textAnchor="start"></Text>
        <XAxis hide={true} type="number" dataKey="value" domain={[0, 100]} tick={false}>
            <Label value="Daily intake level" offset={0} position="insideBottom" fontWeight="bold" fontSize="0.8em"></Label>
        </XAxis>
        {/* <XAxis type="category" dataKey="level" /> */}
        <YAxis dataKey="name" axisLine={false} tickLine={false} type="category" tick={{fontWeight: "bold", fontSize: "0.8em"}}>
            <Label position="insideLeft"></Label>
        </YAxis>
        <Bar dataKey="value" barSize={20} fill='#90d200' radius={3}>
            <LabelList dataKey="level" position="center" fontSize="0.6em" stroke="white"/>
        </Bar>
      </BarChart>
    );

}

export default SimpleBarChart;