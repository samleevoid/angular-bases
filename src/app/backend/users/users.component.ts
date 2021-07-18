import { Component, OnInit } from '@angular/core';
import * as feather from 'feather-icons';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    feather.replace();
  }

}
