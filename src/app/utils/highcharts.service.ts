import { Injectable } from '@angular/core';

import { Highcharts } from './highcharts';


@Injectable()
export class HighchartsService {

    private highcharts: any; // HighchartsStatic;

    constructor() {
        this.highcharts = Highcharts;
    }

    createChart(options: any) {
        new this.highcharts.Chart(options);
    }

    run(options: any) {
        new this.highcharts.Chart(options);
    }
}
