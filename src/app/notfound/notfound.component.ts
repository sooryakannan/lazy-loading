import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent implements OnInit {

  @Output() notFoundEvent = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
    debugger;
    this.notFoundEvent.emit();
  }

}
