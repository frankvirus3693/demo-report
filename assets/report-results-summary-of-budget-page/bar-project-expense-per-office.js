Highcharts.setOptions({
    chart: {
        style: {
            fontFamily: 'THSARABUNNEW, sans-serif',
            fontSize: '18px'
        }
    }
});

Highcharts.chart('bar-project-expense-per-office', {
    chart: {
        type: 'bar',
        height: 400
    },
    title: {
        text: 'แผนภูมิค่าใช้จ่ายรายสำนักโครงการ',
        align: 'center',
    },
    xAxis: {
        categories: ['สำนักกรรมาธิการ 1','สำนักกรรมาธิการ 2','สำนักกรรมาธิการ 3'],
        title: {
            text: 'สำนัก',
        },
    },
    yAxis: {
        min: 0,
        max: 100,
        title: {
            text: 'เปอเซนต์การใช้จ่าย(%)',
            align: 'middle',
            style: {
                fontSize: '18px'
            }
        },
        labels: {
            style: {
                fontSize: '18px'
            }
        }
    },
    tooltip: {
        valueSuffix: ' %'
    },
    plotOptions: {
        bar: {
            borderRadius: '10%',
            dataLabels: {
                enabled: true, // เปิดใช้งานการแสดงค่าบนแท่ง
                formatter: function() {
                    return this.y.toLocaleString() + ' %';
                }

            },
            groupPadding: 0.1
        }
    },
    legend: {
        enabled: true,
        itemStyle: {
            fontSize: '18px'
        }
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'งบที่ได้รับจัดสรร',
        color: '#590F23',
        data: [60,55,45],
    },{
        name: 'เบิกจ่าย',
        color: '#881227',
        data: [45,30,20],
    }]
});
