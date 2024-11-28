Highcharts.setOptions({
    chart: {
        style: {
            fontFamily: 'Sarabun-Regular, sans-serif',
             fontSize: '24px'
        }
    }
});

Highcharts.chart('bar-performance', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'แผนภูมิแสดงผลการดำเนินงาน',
        align: 'center'
    },
    xAxis: {
        categories: ['2566','2567'],
        title: {
            text: 'ปีงบประมาณ',
        },
        gridLineWidth: 1,
        lineWidth: 0
    },
    yAxis: {
        min: 0,
        title: {
            text: 'จำนวนเงิน(หมื่นล้านบาท)',
            align: 'middle'
        },
        labels: {
            overflow: 'justify'
        },
        gridLineWidth: 0
    },
    tooltip: {
        valueSuffix: ' หมื่นล้านบาท'
    },
    plotOptions: {
        bar: {
            borderRadius: '10%',
            dataLabels: {
                enabled: true, // เปิดใช้งานการแสดงค่าบนแท่ง
                formatter: function() {
                    return this.y + ' หมื่นล้านบาท'; // เพิ่มคำว่า 'รายการ' หลังค่าที่แสดง
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
        name: 'รวมรายได้',
        color: '#26151B',
        data: [4.2,4.5],
    },{
        name: 'รวมค่าใช้จ่าย',
        color: '#3E577F',
        data: [3.2,2.8],
    },{
        name: 'รายได้สูง/ต่ำกว่าค่าใช้จ่ายสุทธิ',
        color: '#2F5948',
        data: [1,2.7],
    }]
});
