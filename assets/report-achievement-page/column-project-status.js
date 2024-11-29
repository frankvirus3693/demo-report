Highcharts.chart('column-project-status', {
    chart: {
        type: 'column'
    },
    title: {
        text: '',
        align: 'center'
    },
    xAxis: {
        categories: ['จำนวนโครงการ<br>ทั้งหมด', 'เกินกำหนด<br>การดำเนินการ', 'อยู่ระหว่างดำเนินการ', 'อยู่ระหว่างวัดผล','ดำเนินการเสร็จแล้ว','ไม่ผ่าน<br>เกณฑ์การวัดผล'],
        crosshair: true,
        title: {
            text: 'สถานะโครงการ'
        },
        accessibility: {
            description: 'Categories'
        }
    },
    legend: {
      enabled: false
    },
    yAxis: {
        min: 0,
        title: {
            text: 'จำนวนโครงการ'
        }
    },
    tooltip: {
        valueSuffix: ' โครงการ'
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0,
            dataLabels: {
                enabled: true, // เปิดใช้งานการแสดงค่าบนแท่ง
                formatter: function() {
                    return this.y + ' โครงการ'; // เพิ่มคำว่า 'รายการ' หลังค่าที่แสดง
                }
            }
        }
    },
    series: [{
        name: 'จำนวนโครงการ',
        data: [{
            y: 100,
            color: '#26151B'  // สีของบาร์แรก
        }, {
            y: 20,
            color: '#590F23'  // สีของบาร์ที่สอง
        }, {
            y: 15,
            color: '#44557D'  // สีของบาร์ที่สาม
        }, {
            y: 30,
            color: '#7C696D'  // สีของบาร์ที่สี่
        }, {
            y: 15,
            color: '#315948'  // สีของบาร์ที่สี่
        }, {
            y: 20,
            color: '#888C8B'  // สีของบาร์ที่สี่
        }]
    }]
});
