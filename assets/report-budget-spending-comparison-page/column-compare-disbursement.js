Highcharts.setOptions({
    chart: {
        style: {
            fontFamily: 'Sarabun-Regular, sans-serif',
             fontSize: '24px'
        }
    }
});

Highcharts.chart('column-compare-disbursement', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'แผนภูมิเปรียบเทียบงบ',
        align: 'center'
    },
    xAxis: {
        categories: ['ปี 2566', 'ปี 2567', 'ปี 2568'],
        crosshair: true,
        title: {
        },
        accessibility: {
            description: 'Categories'
        }
    },
    legend: {
      enabled: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'ล้านบาท'
        }
    },
    tooltip: {
        valueSuffix: ' ล้านบาท'
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0,
            dataLabels: {
                enabled: true, // เปิดใช้งานการแสดงค่าบนแท่ง
                formatter: function() {
                    return Highcharts.numberFormat(this.y, 0, ',', ',') + ' ล้านบาท'
                },
                style: {
                    fontSize: '24px'
                }
            }
        }
    },
    series: [{
        name: 'เบิกจ่าย',
        color: '#881227', // สีของบาร์แรก
        data: [20000,10000,5000],
        color: '#881227', // สีของบาร์แรก
    }]
});
