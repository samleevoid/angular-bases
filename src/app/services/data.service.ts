import { Injectable } from '@angular/core';
import { DataObject } from '../interfaces/dades.interface';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  homeData: DataObject['home'];
  productesData: DataObject['productes'] = [];

  carregant = true;

  // Search
  productesFiltre: DataObject['productes'] = [];

  constructor(
    private http: HttpClient
  ) { 
    this.carregarProductes();
  }

  // private carregarProductes() {
  //   this.http.get('https://angular-html-bd3b0-default-rtdb.firebaseio.com/products_idx.json')
  //   .subscribe( (resp: DataObject['productes']) => {
  //     this.productesData = resp;
  //     // console.log('em criden... ', this.productesData);
  //     setTimeout(() => {
  //       this.carregant = false;
  //     }, 2000);
  //   });
  // }

  // Transformem anterior en promesa per a poder fer then al cercador de baix
    private carregarProductes() {
      return new Promise<void>( (resolve, reject) => {
        this.http.get('https://angular-html-bd3b0-default-rtdb.firebaseio.com/products_idx.json')
        .subscribe( (resp: DataObject['productes']) => {
          this.productesData = resp;
          // console.log('em criden... ', this.productesData);
          setTimeout(() => {
            this.carregant = false;
          }, 2000);
          resolve();
        });
      } )
  }

  getProducte(id: string) {
    // retornem observable
    return this.http.get(`https://angular-html-bd3b0-default-rtdb.firebaseio.com/products/${id}.json`);
  }

  tornaDadesHome() {
    return this.http.get('https://angular-html-bd3b0-default-rtdb.firebaseio.com/home.json');
  }

  tornaDadesComanda() {
    return this.http.get('https://angular-html-bd3b0-default-rtdb.firebaseio.com/estats.json');
  }
  
  cercarProd( terme: string ) {
    // console.log('buscant... ', terme);
    if( this.productesData.length === 0 ) { // inicialitzar arr per a evitar error = []
      // ens assegurem que tenim productes abans d'executar el filtre de cerca:
      this.carregarProductes().then( () => {
        this.filtraProds(terme);
      })
    } else {
      this.filtraProds(terme);
    }


  }

  private filtraProds( terme: string ){
    // console.log(this.productesData);
    // let array = [2, 8, 8];
    // console.log(array.indexOf(8,1));

    // netegem array a cada cerca:
    this.productesFiltre = [];

    // solucionem problema cerca may-min (js és case sensitive):
    terme = terme.toLocaleLowerCase();

    this.productesData.forEach( prod => {
      let titolLower = prod.titulo.toLocaleLowerCase();

      if( prod.categoria.indexOf( terme ) >= 0 || titolLower.indexOf( terme ) >= 0 ) {
        this.productesFiltre.push(prod);
      }
    });
  }
  
}
