<script>
  	import {onMount} from 'svelte';
    export let dataColors;
    import { browser } from "$app/env";

    function getChartColorsArray(colors) {
      if (browser) {
          return colors.map(function (value) {
          var newValue = value.replace(" ", "");
          if (newValue.indexOf(",") === -1) {
              var color = getComputedStyle(document.documentElement).getPropertyValue(newValue);
              if (color) return color;
              else return newValue;;
          } else {
              var val = value.split(',');
              if (val.length == 2) {
              var rgbaColor = getComputedStyle(document.documentElement).getPropertyValue(val[0]);
              rgbaColor = "rgba(" + rgbaColor + "," + val[1] + ")";
              return rgbaColor;
              } else {
              return newValue;
              }
          }
          });
        }
    }

    // Simple Donut Charts
  var chartDonutBasicColors = getChartColorsArray(dataColors);
 
    var options = {
      series: [27.01, 20.87, 33.54, 37.58],
      chart: {
        height: 330,
        type: 'donut',
      },
      legend: {
        position: 'bottom'
      },
      labels: ["Documents", "Media", "Others", "Free Space"],
      dataLabels: {
        dropShadow: {
          enabled: false,
        }
      },
      colors: chartDonutBasicColors
    };

  onMount(() => {
		const chart = new ApexCharts(document.querySelector("#filemanagerchart"), options)
  		chart.render()
	})
</script>
<div id="filemanagerchart" class="apex-charts" dir="ltr"></div>