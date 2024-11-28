Highcharts.setOptions({
    chart: {
        style: {
            fontFamily: 'Sarabun-Regular, sans-serif',
             fontSize: '24px'
        }
    }
});

Highcharts.chart('bar-compare-expense-by-type-year', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'แผนภูมิเปรียบเทียบค่าใช้จ่ายตามประเภทรายจ่ายรายปี',
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
        name: 'ค่าใช้จ่ายบุคคล',
        color: '#26151B',
        data: [1500,1400],
    },{
        name: 'ค่าใช้จ่ายดำเนินการ',
        color: '#3E577F',
        data: [1600,1300],
    },{
        name: 'ค่าครุภัณฑ์',
        color: '#2F5948',
        data: [1700,700],
    },{
        name: 'ค่าที่ดินสิ่งก่อสร้าง',
        color: '#7C696D',
        data: [1800,1400],
    }
      ,{
        name: 'ค่าอื่นๆ',
        color: '#888C8B',
        data: [600,1600],
    }]
});
