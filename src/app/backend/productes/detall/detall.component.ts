import { Component, OnInit } from '@angular/core';
import { disableDebugTools } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../../services/data.service';
import { DataObject } from '../../../interfaces/dades.interface';

@Component({
  selector: 'app-detall',
  templateUrl: './detall.component.html',
  styleUrls: ['./detall.component.css']
})
export class DetallComponent implements OnInit {

  producte: DataObject['producte'];

  id: string;

  constructor(
    private route: ActivatedRoute,
    private service: DataService
  ) { }

  ngOnInit() {
    this.route.params.subscribe( param => {
      this.id = param['id'];

      this.service.getProducte(param['id']).subscribe( (prod: DataObject['producte']) => {
        this.producte = prod;
      });

    });

  }

}
