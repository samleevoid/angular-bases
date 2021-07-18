import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {

  constructor(
    private _renderer: Renderer2,
    private router: Router
  ) { }

  ngOnInit() {
  }

  goLogin() {
    this._renderer.removeClass(document.body, 'text-white');
    this._renderer.removeClass(document.body, 'bg-dark');
    this.router.navigate(['/login']);
  }

}
