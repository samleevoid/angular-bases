import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-frontend',
  templateUrl: './frontend.component.html',
  styleUrls: ['./frontend.component.css'],
})
export class FrontendComponent implements OnInit {

  constructor(
    private _renderer: Renderer2
  ) {
    this._renderer.addClass(document.body, 'h-100');
    this._renderer.addClass(document.body, 'text-center');
    this._renderer.addClass(document.body, 'text-white');
    this._renderer.addClass(document.body, 'bg-dark');
   }

  ngOnInit() {
  }

}
