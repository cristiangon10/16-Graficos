import { Component } from '@angular/core';

@Component({
  selector: 'app-lineas',
  templateUrl: './lineas.component.html',
  styleUrls: ['./lineas.component.css']
})
export class LineasComponent {

  public lineChartData:Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Platano' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Papa' },
    { data: [18, 48, 77, 9, 100, 27, 40], label: 'Tomate' }
  ];

  public lineChartLabels:Array<any> = ['2013', '2014', '2015', '2016', '2017', '2018', '2019'];

  public lineChartOptions:any = {
    responsive: true
  };

  public lineChartColors:Array<any> = [
    { // verde-Platano
      backgroundColor: 'rgba(28,204,57,0.5)',
      borderColor: 'rgba(0,250,0,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // Rojo-Papa
      backgroundColor: 'rgba(204,28,28,0.5)',
      borderColor: 'rgba(250,0,0,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // Azul-Tomate
      backgroundColor: 'rgba(28,81,204,0.5)',
      borderColor: 'rgba(0,0,250,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';

  public randomize():void {
    let _lineChartData:Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
  
}
