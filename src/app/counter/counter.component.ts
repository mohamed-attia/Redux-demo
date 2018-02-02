import { Component } from '@angular/core';
import { NgRedux,select } from 'ng2-redux';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
@select() counter:number;

}
