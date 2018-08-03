<template>
  <div>
    <div v-for="chart in charts" :key="chart.id">
      <portal-charts :data="chart.chartData" :type="chart.chartType"></portal-charts>
    </div>
  </div>
</template>

<script>
import PortalCharts from '@/components/ui/PortalCharts.vue'

export default {
  data () {
    return {
      charts: [
        {
          id: '1',
          chartType: 'Pie',
          chartData: {
            datasets: [
              {
                label: 'Twitter',
                backgroundColor: '#1da1f2',
                data: [40, 20]
              },
              {
                label: 'Facebook',
                backgroundColor: '#4267b2',
                data: [59, 31]
              },
              {
                label: 'Boxnet',
                backgroundColor: '#976cac',
                data: [88, 12]
              }
            ]
          }
        },
        {
          id: '2',
          chartType: 'Line',
          chartData: {
            labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
            datasets: [
              {
                label: 'Menções na mídia',
                backgroundColor: '#f87979',
                data: [40, 120, 50, 98, 134]
              }
            ]
          }
        },
        {
          id: '3',
          chartType: 'Radar',
          chartData: {
            datasets: [
              {
                data: [20, 20, 30, 23, 43, 20]
              }
            ],
            labels: ['Força', 'Destreza', 'Sabedoria', 'Inteligencia', 'Carisma', 'Constituição']
          }
        },
        {
          id: '4',
          chartType: 'Bar',
          chartData: {
            labels: ['Janeiro', 'Fevereiro'],
            datasets: [
              {
                data: [
                  {
                    x: 40,
                    y: 34,
                    r: 50
                  },
                  {
                    x: 89,
                    y: 10,
                    r: 50
                  },
                  {
                    x: 30,
                    y: 90,
                    r: 10
                  }
                ]
              }
            ]
          }
        }
      ]
    }
  },
  components: {
    PortalCharts
  }
}
</script>

<style>

</style>
