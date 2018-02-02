import { Component, OnInit } from '@angular/core';
import { IAppStore } from '../../store';
import { NgRedux } from 'ng2-redux';
import {INCREMENT,DECREMENT} from '../../actions'

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  constructor(private ngRedux:NgRedux<IAppStore>) { }

  ngOnInit() {
  }
  inc(){
    this.ngRedux.dispatch({ type:INCREMENT});
  }
  dec(){
    this.ngRedux.dispatch({ type:DECREMENT});
  }
}
