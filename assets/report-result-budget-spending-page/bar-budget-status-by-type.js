Highcharts.setOptions({
    chart: {
        style: {
            fontFamily: 'Sarabun-Regular, sans-serif',
             fontSize: '24px'
        }
    }
});

Highcharts.chart('bar-budget-status-by-type', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'แผนภูมิสถานะงบประมาณ จำแนกตามประเภทงบรายจ่าย',
        align: 'center'
    },
    xAxis: {
        categories: ['ค่าใช้จ่ายบุคคล', 'ค่าใช้จ่ายดำเนินการ', 'ค่าครุภัณฑ์', 'ค่าที่ดินสิ่งก่อสร้าง'],
        title: {
            text: 'ประเภทรายจ่าย',
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
                    return this.y + ' ล้านบาท'; // เพิ่มคำว่า 'รายการ' หลังค่าที่แสดง
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
        data: [10.2,15.4,12.5,15],
    },{
        name: 'เบิกจ่าย',
        color: '#881227',
        data: [8.4,5.4,4.5,12],
    },{
        name: 'คงเหลือ',
        color: '#315259',
        data: [3.6,10,8,3],
    }]
});
