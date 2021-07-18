import { Component, OnInit } from '@angular/core';
import * as feather from 'feather-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    feather.replace();
  }

  linkRuta(link) {
    this.router.navigate([link]);
  }

  isActive(ruta, exact) {
    return this.router.isActive(ruta, exact);
  }
}
