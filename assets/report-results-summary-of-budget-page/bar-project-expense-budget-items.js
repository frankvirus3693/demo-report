Highcharts.setOptions({
    chart: {
        style: {
            fontFamily: 'Sarabun-Regular, sans-serif',
             fontSize: '24px'
        }
    }
});

Highcharts.chart('bar-project-expense-budget-items', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'แผนภูมิการใช้จ่ายรายการงบรายจ่าย',
        align: 'center'
    },
    xAxis: {
        categories: ['ค่าใช้จ่ายบุคคล','ค่าใช้จ่ายดำเนินการ','ค่าครุภัณฑ์','ค่าที่ดินสิ่งก่อสร้าง'],
        title: {
            text: 'สำนัก',
        },
        gridLineWidth: 1,
        lineWidth: 0
    },
    yAxis: {
        min: 0,
        max: 100,
        title: {
            text: 'เปอเซนต์การใช้จ่าย(%)',
            align: 'middle'
        },
        labels: {
            overflow: 'justify'
        },
        gridLineWidth: 0
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
      enabled: true
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'งบที่ได้รับจัดสรร',
        color: '#590F23',
        data: [85,35,65,45],
    },{
        name: 'เบิกจ่าย',
        color: '#881227',
        data: [45,40,45,30],
    }]
});
