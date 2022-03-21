import { Box, SimpleGrid, Stack, Text, theme } from "@chakra-ui/react";
import Chart from "react-apexcharts"
import { ApexOptions } from 'apexcharts';



export function Dashboard() {

  const options: ApexOptions = {
    colors: [theme.colors.purple[500]],
    fill: {
      colors:[theme.colors.purple[400]],
      opacity:  0.3,
      type: 'gradient',
      gradient:{
        shade: 'dark',
        opacityFrom: 0.7,
        opacityTo: 0.3
      }
    },
    chart: {
      
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false,
      },
      foreColor: theme.colors.gray[500]
    },
    grid: {
      show: false
    },
    dataLabels:{
      enabled: false
    },
    tooltip: {
      enabled: false
    },
    xaxis:{
      type: "datetime",
      axisBorder:{
        color: theme.colors.gray[600]
      },
      axisTicks:{
        color: theme.colors.gray[600]
      },
      categories:[
        '2022-02-18T00:00:00.000Z',
        '2022-02-19T00:00:00.000Z',
        '2022-02-22T00:00:00.000Z',
        '2022-02-23T00:00:00.000Z',
        '2022-02-25T00:00:00.000Z',
        '2022-02-27T00:00:00.000Z',
        '2022-02-28T00:00:00.000Z',
      ]
    },
  

  }

  const series = [
    { name: 'series1', data: [20, 1179, 200, 1900, 3600, 50, 1100] }
  ]
  return (


    <Stack flexDirection="column" w="100%" spacing="4">
      <Box
        p="8"
        bg="gray.800"
        borderRadius="5"
      >
        <Text fontSize="lg" mb="4" >
          Total

        </Text>
        <Chart
          type="area"
          height={160}
          options={options}
          series={series}
          pb="4"
        />

      </Box>

      <SimpleGrid flex="1" gap="4" minChildWidth="320px" alignItems="flex-start">
        <Box
          p="8"
          bg="gray.800"
          borderRadius="5"
        >
          <Text fontSize="lg" mb="4" >Saídas</Text>
          <Chart
            type="area"
            height={160}
            options={options}
            series={series}
            pb="4"
          />
        </Box>
        <Box
          p="8"
          bg="gray.800"
          borderRadius="5"
        >
          <Text fontSize="lg" mb="4" >Saídas</Text>
          <Chart
            type="area"
            height={160}
            options={options}
            series={series}
            pb="4"
          />
        </Box>
      </SimpleGrid>

    </Stack>


  )
}