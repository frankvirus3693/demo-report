Highcharts.setOptions({
    chart: {
        style: {
            fontFamily: 'Sarabun-Regular, sans-serif',
             fontSize: '24px'
        }
    }
});

Highcharts.chart('pie-overall-budget', {
    chart: {
        type: 'pie',
        custom: {},
        events: {
            render() {
                const chart = this,
                    series = chart.series[0];
                let customLabel = chart.options.chart.custom.label;

                if (!customLabel) {
                    customLabel = chart.options.chart.custom.label =
                        chart.renderer.label(
                            '<strong>งบประมาณ</strong><br/><span style="font-size: 1em;">ภาพรวม</span></br>100,000 </br>ล้านบาท'
                        )
                            .css({
                                color: '#000',
                                textAnchor: 'middle',
                            })
                            .add();
                }

                const x = series.center[0] + chart.plotLeft,
                    y = series.center[1] + chart.plotTop - 
                    (customLabel.attr('height') / 1.5);

                customLabel.attr({
                    x,
                    y
                });

                // ปรับขนาดฟอนต์ตามเส้นผ่านศูนย์กลางของกราฟ
                customLabel.css({
                    fontSize: `${series.center[2] / 10}px`
                });
            }
        },
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    title: {
        text: 'แผนภูมิแสดงงบโครงการ',
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.0f}%</b>'
    },
    plotOptions: {
        series: {
            allowPointSelect: true,
            cursor: 'pointer',
            borderRadius: 8,
            dataLabels: [{
                enabled: true,
                distance: 20,
                format: '{point.name}',
                style: {
                    fontSize: '24px'  // เพิ่มขนาดฟอนต์สำหรับชื่อ
                }
            }, {
                enabled: true,
                distance: -15,
                format: '{point.percentage:.0f}%',
            }],
            showInLegend: true
        },
        pie: {
            dataLabels: {
                distance: -20
            },
            size: '80%'
        }
    },
    series: [{
        name: 'เปอร์เซ็นต์',
        colorByPoint: true,
        innerSize: '75%',
        data: [{
            name: 'เบิกจ่าย',
            color: '#8A0C27', // สีแดง
            y: 60000
        }, {
            name: 'คงเหลือ',
            color: '#2F5259', // สีฟ้า
            y: 40000
        }]
    }],
});
