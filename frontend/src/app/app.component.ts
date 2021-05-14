import { Component } from '@angular/core';
import * as $ from 'jquery';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import {Observable, OperatorFunction} from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hw8';
  public model: any;




}
