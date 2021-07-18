import { Component, OnInit } from '@angular/core';
import { DataObject } from 'src/app/interfaces/dades.interface';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // es pot fer així o també cridant funció get
  title = '';
  desc = '';



  constructor(
    private dataHome: DataService //puc directament amb public.
  ) {
      this.getDades();
      // this.homeObject = this.dataHome.homeData;
      // console.log(this.homeObject);
    }

  ngOnInit() {
    // this.titol = this.dataHome.homeData.titol;
    //   console.log(this.titol);
  }

  getDades() {
    this.dataHome.tornaDadesHome()
      .subscribe((r: DataObject['home']) => {
        this.title = r.titol;
        this.desc = r.desc;
      });
  }

  public get getTit() {
    return this.title;
  }
}
