
Highcharts.setOptions({
    chart: {
        style: {
            fontFamily: 'Sarabun-Regular, sans-serif',
             fontSize: '24px'
        }
    }
});

Highcharts.chart('bar-month-spend-year', {
    chart: {
        type: 'bar',
        events: {
            load: function () {
                const chart = this;

                // ฟังก์ชันปรับขนาดตัวอักษร
                const resizeFont = () => {
                    const fontSize = getResponsiveFontSize(14); // Base size = 14
                    chart.update({
                        xAxis: {
                            labels: {
                                style: {
                                    fontSize: fontSize + 'px' // ขนาดตัวอักษรแกน X
                                }
                            },
                            title: {
                                style: {
                                    fontSize: fontSize + 2 + 'px' // Title ใหญ่กว่า Labels
                                }
                            }
                        },
                        yAxis: {
                            labels: {
                                style: {
                                    fontSize: fontSize + 'px' // ขนาดตัวอักษรแกน Y
                                }
                            },
                            title: {
                                style: {
                                    fontSize: fontSize + 2 + 'px' // Title ใหญ่กว่า Labels
                                }
                            }
                        },
                        title: {
                            style: {
                                fontSize: fontSize + 4 + 'px' // ขนาด Title หลักใหญ่สุด
                            }
                        },
                        plotOptions: {
                            bar: {
                                dataLabels: {
                                    style: {
                                        fontSize: fontSize + 'px' // ขนาดตัวอักษร DataLabels
                                    }
                                }
                            }
                        },
                        legend: {
                            itemStyle: {
                                fontSize: fontSize - 2 + 'px' // ขนาดตัวอักษร Legend
                            }
                        }
                    });
                };

                // เรียกใช้ฟังก์ชัน resize ครั้งแรก
                resizeFont();

                // เพิ่ม event listener เมื่อขนาดหน้าต่างเปลี่ยน
                window.addEventListener('resize', resizeFont);
            }
        }
    },
    title: {
        text: 'แผนภูมิการใช้จ่ายภาพรวมรายเดือน ปีงบประมาณ 2568',
        align: 'center'
    },
    xAxis: {
        categories: ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.','มิ.ย.','ก.ค.','ส.ค.','ก.ย.','ต.ค.','พ.ย.','ธ.ค.'],
        title: {
            text: 'เดือน'
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
                enabled: true,
                formatter: function () {
                    return this.y + ' ล้านบาท'; // เพิ่มคำว่า 'ล้านบาท' หลังค่าที่แสดง
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
        name: 'สำนักการต่างประเทศ',
        color: '#26151B',
        data: [150, 180, 130, 140, 170, 190, 160, 180, 170, 150, 140, 130],
    }, {
        name: 'สำนักกรรมาธิการ 1',
        color: '#7C696D',
        data: [110, 70, 140, 120, 150, 160, 180, 170, 150, 140, 130, 120],
    }, {
        name: 'สำนักกรรมาธิการ 2',
        color: '#3E577F',
        data: [200, 150, 160, 180, 170, 150, 140, 130, 120, 110, 100, 90],
    }, {
        name: 'สำนักกรรมาธิการ 3',
        color: '#2F5948',
        data: [100, 80, 95, 120, 200, 190, 180, 170, 160, 150, 140, 130],
    }]
});
