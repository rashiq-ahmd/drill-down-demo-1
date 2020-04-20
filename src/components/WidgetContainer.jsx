import React from "react"
import styled from "styled-components"
import {TABLE_LIST} from "../charts/dataSource"
import BarChartContainer from "../charts/BarChart"

const Container=styled.div`
width:500px;
padding :30px;
height:300px
`;


const WidgetContainer=()=>{
  return <Container>
  <BarChartContainer dataSource={TABLE_LIST}/></Container>
}
export default WidgetContainer;