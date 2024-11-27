Highcharts.chart('column-Chart-show-dimensions', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'แผนภูมิแสดงมิติรายจ่ายประจำ - รายจ่ายลงทุน',
    },
    xAxis: {
        categories: ['ภาพรวม', 'รายจ่ายประจำ', 'รายจ่ายลงทุน'],
        crosshair: true,
        accessibility: {
            description: 'Categories'
        }
    },
    yAxis: {
        min: 0,
        max: 1,
        title: {
            text: 'อัตราร้อยละ'
        },
        labels: {
            formatter: function() {
                return this.value * 100; // แปลงค่าบนแกน Y เป็นร้อยละ
            }
        }
    },
    tooltip: {
        valueSuffix: '%',
        formatter: function () {
            return `<b>${this.series.name}</b>: ร้อยละ ${this.y * 100}`; // แปลงค่าที่แสดงใน tooltip เป็นร้อยละ
        }
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0,
            dataLabels: {
                enabled: true, // เปิดใช้งานการแสดงค่าบนแท่ง
                style: {
                    fontSize: '14px',
                    fontWeight: 'bold',
                    color: '#000' // สีข้อความ
                },
                formatter: function() {
                    return `ร้อยละ ${this.y * 100}`; // เพิ่มคำว่า ร้อยละ และแปลงค่าเป็นร้อยละ
                }
            }
        }
    },
    series: [
        {
            name: 'เบิกจ่าย',
            color: '#8A0C27',
            data: [0.4, 0.25, 0.6]
        },
        {
            name: 'ใช้จ่าย',
            color: '#888C8B',
            data: [0.6, 0.75, 0.4]
        },
    ]
});
