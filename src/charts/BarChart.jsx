import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
import styled from "styled-components";

const ResetButton = styled.button`
  float: right;
  margin-top: -30px;
  margin-right: 30px;
`;
const colors = ["#0066cc", "#0099ff"];
const BarChartWidget = ({ dataSource }) => {
  const [yAxisKeys, setYAxisKeys] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(dataSource);
  }, [dataSource]);
  useEffect(() => {
    data.length &&
      setYAxisKeys(
        Object.keys(data[0]).filter(key => key !== "x" && key !== "child")
      );
  }, [data]);
  const barClickHandler = (dta, index) => {
    if (data[index].child) {
      setData(data[index].child);
    } else {
      console.log("no child");
    }
  };
  const handleReset = () => {
    setData(dataSource);
  };
  return (
    <>
      <ResetButton onClick={handleReset}>reset</ResetButton>
      <ResponsiveContainer>
        <BarChart
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="x" />
          <YAxis />
          <Tooltip />
          <Legend />
          {yAxisKeys.map((key, i) => (
            <Bar
              dataKey={key}
              fill={colors[i % colors.length]}
              stackId="a"
              onClick={barClickHandler}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};
export default BarChartWidget;
