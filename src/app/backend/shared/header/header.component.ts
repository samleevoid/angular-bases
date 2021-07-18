import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @ViewChild('textCerca', {static: true}) inputName; // accessing the reference element

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  cercaKeyword(valor: string) {
    // if(valor.length < 1) return;
    this.router.navigate(['dashboard/productes/search', valor]);
    // if(valor['key'] === 'Enter') this.inputName.nativeElement.value = '';
  }

}
