Highcharts.setOptions({
    chart: {
        style: {
            fontFamily: 'THSARABUNNEW, sans-serif',
            fontSize: '24px'
            
        }
    }
});

Highcharts.chart('bar-procurement-status', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'แผนภูมิแสดงสถานะการจัดจ้าง',
        align: 'center'
    },
    xAxis: {
        categories: ['ยกเลิกสัญญา', 'ตรวจรับแล้ว', 'อยู่ระหว่างทำสัญญา/PO', 'อยู่ระหว่างการขอซื้อการจ้าง'],
        crosshair: true,
        title: {
            text: 'สถานะครุภัณฑ์'
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
            text: 'รายการ'
        }
    },
    tooltip: {
        valueSuffix: ' รายการ'
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0,
            dataLabels: {
                enabled: true, // เปิดใช้งานการแสดงค่าบนแท่ง
                formatter: function() {
                    return this.y + ' รายการ'; // เพิ่มคำว่า 'รายการ' หลังค่าที่แสดง
                }
            }
        }
    },
    series: [{
        name: 'งบที่ได้รับจัดสรร',
        data: [{
            y: 10,
            color: '#881227'  // สีของบาร์แรก
        }, {
            y: 27,
            color: '#315259'  // สีของบาร์ที่สอง
        }, {
            y: 15,
            color: '#581123'  // สีของบาร์ที่สาม
        }, {
            y: 30,
            color: '#888C8B'  // สีของบาร์ที่สี่
        }]
    }]
});
