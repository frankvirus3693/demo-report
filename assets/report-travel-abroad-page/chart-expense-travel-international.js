Highcharts.setOptions({
    chart: {
        style: {
            fontFamily: 'Sarabun-Regular, sans-serif',
            fontSize: '24px'
        }
    }
});

Highcharts.chart('chart-expense-travel-international', {
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
                            '<strong>ค่ายใช้จ่าย</strong><br/><strong>การเดินทาง</strong><br><strong>ประชุมนานาชาติ</strong><span style="font-size: 1em;"></span></br>1,000,000,000</br>บาท'
                        )
                            .css({
                                color: '#000',
                                textAnchor: 'middle',
                            })
                            .add();
                }

                const x = series.center[0] + chart.plotLeft,
                    y = series.center[1] + chart.plotTop -
                    (customLabel.attr('height') /2);

                customLabel.attr({
                    x,
                    y
                });
                // Set font size based on chart diameter
                customLabel.css({
                    fontSize: `${series.center[2] / 12}px`
                });
            }
        }
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    title: {
        text: 'แผนภูมิแสดงค่าใช้จ่ายในการเดินทางไปประชุมนานชาติ<br>ไปเยือนต่างประเทศและรับรองแขกต่างประเทศ'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.0f}%</b>'
    },
    legend: {
        itemStyle: {
            fontSize: '18px',
            fontWeight: 'normal',
        },
        labelFormatter: function() {
        return this.name + ' (' + this.percentage.toFixed(1) + '%) : ' + Highcharts.numberFormat(this.y, 0, ',', ',') + ' บาท';
    }
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
                    fontSize: '1em'
                }
            }, {
                enabled: true,
                distance: -15,
                format: '{point.percentage:.0f}%',
                style: {
                    fontSize: '1em'
                }
            }],
            showInLegend: true
        }
    },
    series: [{
        name: 'เปอเซ็น',
        colorByPoint: true,
        innerSize: '75%',
        data: [{
            name: 'ใช้ไปแล้ว',
            color: '#313F59', // สีแดง
            y: 450000000
        }, {
            name: 'คงเหลือ',
            color: '#2F5259', // สีเหลือ
            y: 550000000
        }]
    }]
});
