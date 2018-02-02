import { BrowserModule } from '@angular/platform-browser';
import { NgModule,isDevMode } from '@angular/core';


import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { ButtonsComponent } from './counter/buttons/buttons.component';

import {NgReduxModule,NgRedux,DevToolsExtension} from 'ng2-redux';
import { IAppStore, RootReducer, INIT_STATE } from './store';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    ButtonsComponent
  ],
  imports: [
    BrowserModule,
    NgReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private ngRedux:NgRedux<IAppStore>,private devToo:DevToolsExtension){
    let enhancer =(isDevMode)?[devToo.enhancer()]:[] ;
    this.ngRedux.configureStore(RootReducer,INIT_STATE,[],enhancer);
  }
 }
