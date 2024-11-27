Highcharts.setOptions({
    chart: {
        style: {
            fontFamily: 'THSARABUNNEW, sans-serif',
            fontSize: '24px'
            
        }
    }
});

Highcharts.chart('bar-compare-expense-by-type-quarter', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'แผนภูมิเปรียบเทียบค่าใช้จ่ายตามไตรมาส',
        align: 'center'
    },
    xAxis: {
        categories: ['2567 ไตรมาสที่ 1', '2567 ไตรมาสที่ 2', '2567 ไตรมาสที่ 3'],
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
        name: 'ค่าใช้จ่ายบุคคล',
        color: '#26151B',
        data: [220,240,230],
    },{
        name: 'ค่าใช้จ่ายดำเนินการ',
        color: '#3E577F',
        data: [240,220,160],
    },{
        name: 'ค่าครุภัณฑ์',
        color: '#2F5948',
        data: [150,200,240],
    },{
        name: 'ค่าที่ดินสิ่งก่อสร้าง',
        color: '#7C696D',
        data: [200,160,136],
    }]
});
