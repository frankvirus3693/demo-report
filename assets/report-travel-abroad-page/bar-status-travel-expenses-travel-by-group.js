Highcharts.setOptions({
    chart: {
        style: {
            fontFamily: 'THSARABUNNEW, sans-serif',
             fontSize: '24px'
        }
    }
});

Highcharts.chart('bar-status-travel-expenses-travel-by-group', {
    chart: {
        type: 'bar',
        events: {
            load: function () {
                const chart = this;

                // เพิ่มการปรับขนาดตัวอักษรเมื่อโหลดครั้งแรก
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
                                fontSize: fontSize + 4 + 'px' // ขนาด title หลักใหญ่สุด
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
        text: 'แผนภูมิสถานะผลการเบิกจ่ายในรายการค่าใช้จ่ายเดินทาง</br>ไปประชุมทางทวิภาคีจำแนกรายคณะ',
        align: 'center'
    },
    xAxis: {
        categories: [
            'คณะกรรมาธิการคมนาคมวุฒิสภา',
            'คณะกรรมาธิการแก้ปัญหาความยากจน</br>และลดความเหลื่อมล้ำ',
            'คณะกรรมาธิการเกษตร</br>และสหกรณ์วุฒิสภา',
            'คณะกรรมาธิการการกีฬา',
            'คณะกรรมาธิการกฎหมายการยุติธรรม</br>และการตำรวจ'
        ],
        title: {
            text: 'สำนัก'
        }
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
                    return this.y.toLocaleString() + ' ล้านบาท';
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
        data: [2000, 2500, 3000, 1700, 1300],
    }, {
        name: 'เบิกจ่าย',
        color: '#881227',
        data: [1200, 1500, 1800, 800, 1100],
    }, {
        name: 'คงเหลือ',
        color: '#2F5259',
        data: [800, 1100, 1200, 700, 200],
    }]
});
