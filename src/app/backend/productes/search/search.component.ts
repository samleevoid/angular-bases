import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import * as feather from 'feather-icons';
import { DataObject } from '../../../interfaces/dades.interface';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  terme: string;

  constructor(
    // private titleService: Title, // titol pestanya 
    private route: ActivatedRoute,
    public servei: DataService
  ) { }

  ngOnInit() {
    feather.replace();
    
    this.route.params.subscribe( terme => {
      this.servei.cercarProd(terme['terme']);
    });
  }

  get getTitle() {
    return this.route.snapshot.data['titulo']; // o --> console.log(this.route.data['value'].titulo);
  }
  // setTitle(newTitle: string) {
  //     this.titleService.setTitle(newTitle);
  // }


}
