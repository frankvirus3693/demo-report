Highcharts.setOptions({
    chart: {
        style: {
            fontFamily: 'Sarabun-Regular, sans-serif',
             fontSize: '24px'
        }
    }
});

Highcharts.chart('bar-budget-request-comparison', {
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
                                fontSize: fontSize + 2 + 'px' // ขนาดตัวอักษร Legend
                            },
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
        text: '',
        align: 'center'
    },
    xAxis: {
        categories: [
            'แผนงานยุทธศาสตร์เพื่อสนับสนุนด้านการปรับสมดุล<br>และพัฒนาระบบการบริหารจัดการภาครัฐ',
            'แผนงานพื้นฐานด้านการปรับสมดุล<br>และพัฒนาระบบบริหารจัดการภาครัฐ',
            'แผนงานบุคลากรภาครัฐ',
            'แผนงานยุทธศาสตร์พัฒนาและเสริมสร้างการเมือง<br>ในระบอบประชาธิปไตยอันมีพระมหากษัตริย์ทรงเป็นประมุข',
        ],
        title: {
            text: 'ยุทธศาสตร์/แผนงาน'
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
        layout: 'horizontal',
        enabled: true
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'พ.ศ 2567',
        color: '#315948',
        data: [2500, 3500, 3000, 1500],
    }, {
        name: 'พ.ศ 2568',
        color: '#44557D',
        data: [3500, 2300, 2000, 2300],
    },]
});
