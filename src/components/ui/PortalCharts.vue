<template>
  <div>
    <portal-bar-chart :chartData="chartData" :options="chartOptions ? chartOptions : {}" v-if="chartType === 'Bar'"></portal-bar-chart>
    <portal-bubble-chart :chartData="chartData" :options="chartOptions ? chartOptions : {}" v-if="chartType === 'Bubble'"></portal-bubble-chart>
    <portal-doughnut-chart :chartData="chartData" :options="chartOptions ? chartOptions : {}" v-if="chartType === 'Doughnut'"></portal-doughnut-chart>
    <portal-line-chart :chartData="chartData" :options="chartOptions ? chartOptions : {}" v-if="chartType === 'Line'"></portal-line-chart>
    <portal-pie-chart :chartData="chartData" :options="chartOptions ? chartOptions : {}" v-if="chartType === 'Pie'"></portal-pie-chart>
    <portal-polar-chart :chartData="chartData" :options="chartOptions ? chartOptions : {}" v-if="chartType === 'Polar'"></portal-polar-chart>
    <portal-radar-chart :chartData="chartData" :options="chartOptions ? chartOptions : {}" v-if="chartType === 'Radar'"></portal-radar-chart>
    <portal-scatter-chart :chartData="chartData" :options="chartOptions ? chartOptions : {}" v-if="chartType === 'Scatter'"></portal-scatter-chart>
  </div>
</template>

<script>
import PortalBarChart from './charts/PortalBarChart'
import PortalBubbleChart from './charts/PortalBubbleChart'
import PortalDoughnutChart from './charts/PortalDoughnutChart'
import PortalLineChart from './charts/PortalLineChart'
import PortalPieChart from './charts/PortalPieChart'
import PortalPolarChart from './charts/PortalPolarChart'
import PortalRadarChart from './charts/PortalRadarChart'
import PortalScatterChart from './charts/PortalScatterChart'

export default {
  props: ['data', 'options', 'type'],
  data () {
    return {
      chartType: this.type,
      chartData: this.data,
      chartOptions: this.options
    }
  },
  components: {
    PortalBarChart,
    PortalBubbleChart,
    PortalDoughnutChart,
    PortalLineChart,
    PortalPieChart,
    PortalPolarChart,
    PortalRadarChart,
    PortalScatterChart
  }
}
</script>

<style>

</style>
