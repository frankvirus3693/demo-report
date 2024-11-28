Highcharts.setOptions({
    chart: {
        style: {
            fontFamily: 'Sarabun-Regular, sans-serif',
             fontSize: '24px'
        }
    }
});


Highcharts.chart('bar-budget-spend-by-type', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'แผนภูมิการใช้จ่ายงบประมาณจำแนกตามประเภทงบรายจ่าย',
        align: 'center'
    },
    xAxis: {
        categories: ['ค่าใช้จ่ายบุคคล','ค่าใช้จ่ายดำเนินการ','ค่าครุภัณฑ์','ค่าที่ดินสิ่งก่อสร้าง','ค่าอื่นๆ'],
        title: {
            text: 'ประเภทค่าใช้จ่าย',
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
        data: [1500,1400,1200,1700,1800],
    },{
        name: 'เบิกจ่าย',
        color: '#881227',
        data: [1200,1100,900,1600,1400],
    },{
        name: 'คงเหลือ',
        color: '#315259',
        data: [300,300,300,100,400],
    }]
});
