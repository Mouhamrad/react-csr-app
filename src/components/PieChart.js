import React, { Component } from "react";
import { PieChart,Pie, Cell } from "recharts";

const data02 = [{name: 'Reserver', value: 8}, {name: 'Disponible', value: 2}];
const COLORS = ['#82ca9d', '#D3D3D3'];

class DonatChart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {}

  render() {
    return (
      <PieChart width={900} height={400}>
        <Pie
          data={data02} 
          cx={120} 
          cy={200} 
          innerRadius={85}
          outerRadius={120} 
          fill="#8884d8"
        >
          {
          	data02.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
          }
          </Pie>
      </PieChart>
    );
  }
}

DonatChart.propTypes = {};
DonatChart.defaultProps = {};

export default DonatChart;
