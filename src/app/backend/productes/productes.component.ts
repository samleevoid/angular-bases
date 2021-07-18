import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-productes',
  templateUrl: './productes.component.html',
  styleUrls: ['./productes.component.css']
})
export class ProductesComponent implements OnInit {

  constructor(
    public prods: DataService
  ) { }

  ngOnInit() {
  }

}
