import { Component, OnInit } from '@angular/core';
import * as feather from 'feather-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  pizzes = [
    '4estacions',
    'granera',
    'iberica',
    'jambo',
    'mexicana',
    'serrana',
    'tropical',
    'vegana',
    'vegetal'
  ];
  
  constructor() {}

  // podem consumir directament les dades del servei amb 'public'
  // per a evitar l'error 'undefined' al html utilitzem el següent:
  // {{dataHome.homeData?.desc}} amb '?'.

  ngOnInit() {
    feather.replace();
  }

}
