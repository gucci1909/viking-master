import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from 'chart.js';
import { Box } from "@chakra-ui/react";
import axios from "axios";
import { useSelector } from "react-redux";
ChartJS.register(...registerables);
function PieChart() {
  const {data} = useSelector(store=>store.auth)
  const [p,setP] = useState(0)
  const [u,setU] = useState(0)
  const [os,setOs] = useState(0)
  const [op,setOp] = useState(0)
  let data1111 = {
      labels: [
        'Products',
        'Users',
        'Order Success',
        'Order Pending'
      ],
      datasets: [{
        label: 'My First Dataset',
      data:[Math.ceil(p),u,os,op],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
          '#2cd340'
        ],
        hoverOffset: 4
      }]
    }
    
  return (
    <Box flex className="chart-container" >
      <Box>
      <Doughnut
        data={data1111}
        />
      </Box>
    
    </Box>
  );
}
export default PieChart;