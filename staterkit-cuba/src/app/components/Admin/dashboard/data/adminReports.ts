import * as moment from "moment";
import {AdminService} from "../../dashboard/state/admin.service"
let primary = localStorage.getItem('primary_color') || '#7366ff';
let secondary = localStorage.getItem('secondary_color') || '#f73164';

export const todayTotalSale = {
    series: [{
        name: 'series1',
        data: [280, 170, 440, 170, 270, 130]

    }, {
        name: 'series2',
        data: [150, 500, 300, 250, 420, 350]

    }, {
        name: 'series3',
        data: [450, 150, 320, 500, 280, 100]

    }],
    chart: {
        height: 150,
        type: 'area',
        toolbar: {
            show: false
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth',
        width: 0
    },
    xaxis: {
        type: 'datetime',
        categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z"]

    },
    yaxis: {
        show: false
    },
    tooltip: {
        x: {
            format: 'dd/MM/yy HH:mm'
        },
    },
    legend: {
        show: false,
    },
    grid: {
        show: false,
        padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: -40,
        }
    },
    fill: {
        type: 'gradient',
        opacity: [1, 0.4, 0.25],
        gradient: {
            shade: 'light',
            type: 'horizontal',
            shadeIntensity: 1,
            gradientToColors: ['#a26cf8', '#a927f9', '#7366ff'],
            opacityFrom: [1, 0.4, 0.25],
            opacityTo: [1, 0.4, 0.25],
            stops: [30, 100],
            colorStops: []
        },
        colors: [primary, primary, primary],
    },
    colors: [primary, secondary, secondary],
};



export const smallBarCharts = {
	type: 'Bar',
	data: {
		labels: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7'],
		series: [
			[400, 900, 800, 1000, 700, 1200, 300],
			[1000, 500, 600, 400, 700, 200, 1100]
		]
	},
	options: {
		stackBars: true,
		axisY: {
			low: 0,
			showGrid: false,
			showLabel: false,
			offset: 0,
			scaleMinSpace: 40
		},
		axisX: {
			showGrid: false,
			showLabel: false,
			offset: 0
		}
	},
	events: {
		draw: (data) => {
			if (data.type === 'bar') {
				data.element.attr({
					style: 'stroke-width: 3px'
				});
			}
		}
	}

};
