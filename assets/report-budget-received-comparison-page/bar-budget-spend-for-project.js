Highcharts.setOptions({
    chart: {
        style: {
            fontFamily: 'THSARABUNNEW, sans-serif',
            fontSize: '24px'
            
        }
    }
});

Highcharts.chart('bar-budget-spend-for-project', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'แผนภูมิการใช้จ่ายงบประมาณรายสำนัก (โครงการ)',
        align: 'center'
    },
    xAxis: {
        categories: ['สำนักกรรมาธิการ 1','สำนักกรรมาธิการ 2','สำนักกรรมาธิการ 3'],
        title: {
            text: 'สำนัก',
        },
        gridLineWidth: 1,
        lineWidth: 0
    },
    yAxis: {
        min: 0,
        title: {
            text: 'จำนวนเงิน(ล้านบาท)',
            align: 'middle'
        },
        labels: {
            overflow: 'justify'
        },
        gridLineWidth: 0
    },
    tooltip: {
        valueSuffix: ' ล้านบาท'
    },
    plotOptions: {
        bar: {
            borderRadius: '10%',
            dataLabels: {
                enabled: true, // เปิดใช้งานการแสดงค่าบนแท่ง
                formatter: function() {
                    return this.y.toLocaleString() + ' ล้านบาท';
                }

            },
            groupPadding: 0.1
        }
    },
    legend: {
      enabled: true
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'งบที่ได้รับจัดสรร',
        color: '#590F23',
        data: [5400,4600,6000],
    },{
        name: 'เบิกจ่าย',
        color: '#881227',
        data: [4500,3200,3800],
    },{
        name: 'คงเหลือ',
        color: '#315259',
        data: [900,1400,2200],
    }]
});
