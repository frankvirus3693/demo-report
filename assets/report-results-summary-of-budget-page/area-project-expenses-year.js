Highcharts.setOptions({
    chart: {
        style: {
            fontFamily: 'Sarabun-Regular, sans-serif',
             fontSize: '24px'
        }
    }
});

Highcharts.chart('area-project-expenses-year', {
    chart: {
        type: 'area' // เปลี่ยนเป็น area
    },
    title: {
        text: 'แผนภูมิแสดงการใช้จ่ายภาพรวมรายเดือน ปีงบประมาณ 2568'
    },
    xAxis: {
        categories: [
            'ม.ค', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค' ,'ส.ค.','ก.ย.','ต.ค.','พ.ย.','ธ.ค.',
        ]
    },
    yAxis: {
        title: {
            text: 'จำนวนเงิน (ล้านบาท)'
        },
        labels: {
            formatter: function() {
                return this.value;
            }
        }
    },
    plotOptions: {
        area: { // ตั้งค่า area chart
            fillOpacity: 0.5, // กำหนดความโปร่งใสของพื้นที่
            dataLabels: {
                enabled: true,
                formatter: function() {
                    return (this.y) + ' ล้านบาท';
                }
            },
            enableMouseTracking: true
        }
    },
    series: [{
        name: 'ค่าใช้จ่ายภาพรวมรายเดือน',
        color: '#2F5948', // สีเส้นกราฟ
        data: [
            6.2,3.4,5.6,-3.2,4.1,2.7,4.8,6.8,1.9,-0.6,3,4
        ]
    }]
});
