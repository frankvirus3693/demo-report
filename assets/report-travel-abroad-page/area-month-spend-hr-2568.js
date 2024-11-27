Highcharts.setOptions({
    chart: {
        style: {
            fontFamily: 'THSARABUNNEW, sans-serif',
             fontSize: '24px'
        }
    }
});

Highcharts.chart('area-month-spend-hr-2568', {
    chart: {
        type: 'area' // เปลี่ยนเป็น area
    },
    title: {
        text: 'แผนภูมิแสดงภาพรวมรายเดือนสำนักพัฒนาบุคลากร ปีงบประมาณ 2568'
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
        name: 'ภาพรวมรายเดือนสำนักพัฒนาบุคลากร ปีงบประมาณ 2568',
        color: '#2F5948', // สีเส้นกราฟ
        data: [
            8.9,4.5,6.2,4.9,4.7,3.7,8.8,6.8,5.9,7.6,6,4
        ]
    }]
});
