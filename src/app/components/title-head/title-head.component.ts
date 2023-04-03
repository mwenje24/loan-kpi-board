import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-title-head',
  templateUrl: './title-head.component.html',
  styleUrls: ['./title-head.component.css']
})
export class TitleHeadComponent implements OnInit{

  @Input() titleHead!: string;
  @Input() buttonName!: string;

  @Output() btnClick = new EventEmitter

  constructor() {}

  ngOnInit(): void {}

  onClick(){
    this.btnClick.emit();
  }

}
