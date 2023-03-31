import { Component, OnInit } from "@angular/core";
import * as Chart from 'chart.js';
import { cardData } from "./card-data";

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit{

  cardData = cardData
  
  public chart: any;
  public pie: any;

  ngOnInit() {
    this.createChart();
    this.creatPie();
  }

  creatPie(){
    this.pie = new Chart("MyPie", {
      type: 'pie', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['Approved', 'Declined','Pending',],
	       datasets: [{
    label: 'My First Dataset',
    data: [3000, 2400, 1000],
    backgroundColor: [
      '#5D9C59',
      '#A84448',
      'grey',			
    ],
    // hoverOffset: 4
  }],
      },
      options: {
        aspectRatio:2.5,
        responsive: true,
        title: {
          display: true,
          text: "pie summary",
          fontColor: "black",
        }
      }
    })
  }

  createChart() {
    this.chart = new Chart("MyChart", {
      type: 'line', //this denotes tha type of chart
      data: {
        // values on X-Axis
        labels: [
          "Jan", "Feb", "Mar", "Apr", "May", "Jun",
          "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"
        ],
        datasets: [
          {
            label: "Approved",
            data: [467, 576, 572, 79, 92, 574, 573, 576],
            fill: false,
            backgroundColor: '#A9907E',
            borderColor: "#5D9C59",
          },
          {
            label: "Declined",
            data: [542, 542, 536, 327, 17, 0.00, 538, 541],
            fill: false,
            backgroundColor: '#A9907E',
            borderColor: "#A84448",
          },
        ]
      },
      options: {
        aspectRatio: 1.9,
        responsive: true,
        title: {
          display: true,
          text: "graph summary",
          fontColor: "black",
        },
        legend: {
          labels: {
            fontColor: "black",
          },
          align: "end",
          position: "top",
        },
        tooltips: {
          mode: "index",
          intersect: false,
        },
        hover: {
          mode: "nearest",
          intersect: true,
        },
        scales: {
          xAxes: [
            {
              ticks: {
                fontColor: "rgba(0,0,0,.7)",
              },
              display: true,
              scaleLabel: {},
              gridLines: {
                display: true,
                borderDash: [2],
                color: "rgba(33, 37, 41, 0.5)",
                zeroLineColor: "rgba(0, 0, 0, .5)",
                // zeroLineBorderDash: [2]
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                fontColor: "rgba(0,0,0,.7)",
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Value",
                fontColor: "black",
              },
              gridLines: {
                borderDash: [3],
                drawBorder: false,
                color: "rgba(255, 255, 255, 0.5)",
                zeroLineColor: "rgba(33, 37, 41, .7)",
                // zeroLineBorderDash: [2],
              },
            },
          ],
        }
      }
    });
  }
  

}
