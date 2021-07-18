import { Component, OnInit, Renderer2, ViewEncapsulation} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  constructor( 
      private _renderer: Renderer2,
      private router: Router
    ) {
      this._renderer.addClass(document.body, 'login');
      this._renderer.addClass(document.body, 'text-center');
     }

  ngOnInit() {
  }

  goDash() {
    this._renderer.removeClass(document.body, 'login');
    this._renderer.removeClass(document.body, 'text-center');
    this.router.navigate(['dashboard']);
  }

}
