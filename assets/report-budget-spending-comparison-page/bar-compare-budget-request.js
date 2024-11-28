Highcharts.setOptions({
    chart: {
        style: {
            fontFamily: 'Sarabun-Regular, sans-serif',
             fontSize: '24px'
        }
    }
});

Highcharts.chart('bar-compare-budget-request', {
    chart: {
        type: 'bar'
    },
    title: {
        text: 'แผนภูมิเปรียบเทียบค่าใช้จ่ายตามประเภทรายจ่ายรายปี',
        align: 'center'
    },
    xAxis: {
        categories: ['2566', '2567'], // เพิ่มปีได้ตามต้องการ
        title: {
            text: 'ปีงบประมาณ',
        },
        gridLineWidth: 1,
        lineWidth: 0
    },
    yAxis: {
        min: 0,
        title: {
            text: 'จำนวนเงิน (หมื่นล้านบาท)',
            align: 'middle'
        },
        labels: {
            overflow: 'justify'
        },
        gridLineWidth: 0
    },
    tooltip: {
        formatter: function() {
            const totalBudget = this.series.userOptions.budget[this.point.index];
            const percent = totalBudget 
                ? ((this.y / totalBudget) * 100).toFixed(2) // ปัดเศษเหลือ 2 ตำแหน่ง
                : 0;
            return `<b>${this.series.name}</b>: ${this.y.toFixed(2)} หมื่นล้านบาท (${percent}%)`; // แสดงค่าปัดเศษ 2 ตำแหน่ง
        }
    },
    plotOptions: {
        bar: {
            borderRadius: '10%',
            dataLabels: {
                enabled: true,
                formatter: function() {
                    const totalBudget = this.series.userOptions.budget[this.point.index];
                    const percent = totalBudget 
                        ? ((this.y / totalBudget) * 100).toFixed(2) // ปัดเศษเหลือ 2 ตำแหน่ง
                        : 0;
                    return `${this.y.toFixed(2)} หมื่นล้านบาท (${percent}%)`; // แสดงค่าปัดเศษ 2 ตำแหน่ง
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
    series: (function() {
        // ข้อมูลดิบ (สามารถเพิ่มปีใหม่ได้ที่นี่)
        const budget = [2.5, 2.2]; // งบตามพรบของแต่ละปี
        const spent = [1.5, 1.5];  // เบิกจ่ายของแต่ละปี
        const remaining = budget.map((b, i) => {
            return (b - spent[i]).toFixed(2); // ปัดเศษให้คงเหลือเป็น 2 ตำแหน่ง
        });

        return [
            {
                name: 'คำขอตั้ง',
                color: '#26151B',
                data: [3, 2.5].map(v => parseFloat(v.toFixed(2))), // ปัดเศษให้ค่าสวยงาม
                budget: budget
            },
            {
                name: 'งบตามพรบ',
                color: '#590F23',
                data: budget.map(v => parseFloat(v.toFixed(2))), // ปัดเศษให้ค่าสวยงาม
                budget: budget
            },
            {
                name: 'เบิกจ่าย',
                color: '#881227',
                data: spent.map(v => parseFloat(v.toFixed(2))), // ปัดเศษให้ค่าสวยงาม
                budget: budget
            },
            {
                name: 'คงเหลือ',
                color: '#315259',
                data: remaining.map(v => parseFloat(v)), // แปลงกลับเป็นตัวเลขหลังปัดเศษ
                budget: budget
            }
        ];
    })()
});
