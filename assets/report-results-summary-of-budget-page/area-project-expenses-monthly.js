Highcharts.setOptions({
    chart: {
        style: {
            fontFamily: 'THSARABUNNEW, sans-serif',
            fontSize: '24px'
        }
    }
});

Highcharts.chart('area-project-expenses-monthly', {
    chart: {
        type: 'area', // เปลี่ยนเป็น area
    },
    title: {
        text: 'แผนภูมิแสดงค่าใช้จ่ายโครงการ (รายเดือน)'
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
        name: 'ค่าใช้จ่ายรายเดือน',
        color: '#2F5948', // สีเส้นกราฟ
        data: [
            5.4, 8.4, 4.5, 3.2, 7.1, 2.5, 6.4 ,5.1,7.6,4.2,3.5,8.1
        ]
    }]
});
