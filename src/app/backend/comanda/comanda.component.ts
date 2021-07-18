import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-comanda',
  templateUrl: './comanda.component.html',
  styleUrls: ['./comanda.component.css']
})
export class ComandaComponent implements OnInit {

  nomPizza;

  desactiva = false;

  // estat = 'pipa';
  estats;

  rutaEstat = '';
  pBarFlag = false;
  pBarColor;
  pBarWidth;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {
    this.estats = [
      'El restaurant ha acceptat la seva comanda',
      "La seva pizza acaba d'entrar al forn",
      'El rider acaba de recollir la seva comanda',
      'Pizza entregada! Gràcies i BON PROFIT!'
    ];
  }

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.nomPizza = param['id'];
    });

    this.dataService.tornaDadesComanda()
      .subscribe(resp => {
        this.estats = resp;
        console.log(this.estats);
      });
    
  }

  get getPercent() {
    return `${this.pBarWidth}%`
  }

  demanarPizza() {
    
    // Ni setInterval ni setTimeout actualitzen les variables al html (utilitzar ex2)
    // (CULPA D'UTILITZAR FUNCTION ENLLOC DE ARROW FUNCTION, AQUESTA SÍ PRESERVA THIS)
    // let long = this.estats.length;
    // const arr = this.estats;

    // let i = 0;
    // let id = setInterval(function(){                
    //   if(i >= long) {                  
    //       clearInterval(id);                  
    //   }
    //   else{
        
    //       this.estat = arr[i++];
    //       console.log(this.estat);
    //   }
    // }, 1000);
    

    //ex2: -> CANVIAR CODI A DOCUMENT.GETELEMENT... PERÒ EL PROBLEMA REAL DE QUE NO
    // ACTUALITZI VARIABLES AL HTML ÉS EL FUNCTION -> CANVIAR PER ARROW FUNCTION.
  
    this.pBarFlag = true;
    this.desactiva = true;
    this.pBarColor = 'success';
    this.pBarWidth = 10;
    this.rutaEstat = '';

    let long = this.estats.length;
    // const arr = this.estats;
    let msg = document.getElementById('missatge');

    msg.innerHTML = 'Processant la seva comanda';

    let i = 0;

    let id = setInterval(() => {                
      if(i >= long) {                  
          clearInterval(id);                  
      }
      else{
        switch(i) {
          case 0: {
            this.pBarColor = 'success';
            this.pBarWidth = 40;
            break;
          }
          case 1: {
            this.pBarWidth = 60;
            this.pBarColor = 'warning';
            this.rutaEstat = this.estats[i].gif;
            break;
          }
          case 2: {
            this.pBarWidth = 80;
            this.pBarColor = 'orange';
            this.rutaEstat = this.estats[i].gif;
            break;
          }
          case 3: {
            this.pBarWidth = 100;
            this.desactiva = false;
            this.pBarColor = 'danger';
            this.rutaEstat = '';
            break;
          }
          default: {
            break;
          }
        }
        
        

        // if(i === 1) this.pBarWidth = 40;
        // if(i === 2) this.pBarWidth = 60;
        // if(i === 3) this.pBarWidth = 80;
        // if(i === 4) this.pBarWidth = 100;
          // const t = new Date().toLocaleTimeString();
          // console.log(t);
        
          // msg.innerHTML = arr[i++];
          
          msg.innerHTML = this.estats[i++].msg;
      }
    }, 5000);

  }

}
