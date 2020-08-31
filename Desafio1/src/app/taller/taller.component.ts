import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule}from '@angular/platform-browser'


@Component({
  selector: 'app-taller',
  templateUrl: './taller.component.html',
  styleUrls: ['./taller.component.css']
})
export class TallerComponent implements OnInit {

   arrayRegistro = [];
  cliente:any;
  nombre:string;
  DUI:string;
  vehic:string;
  costo:number;
  descCosto:number;
  ticket:boolean = false;//Para mostrar el ticket y esconder el form y viceversa
  cuenta:number;
  descu:number;
  constructor() { }

  ngOnInit(): void {
    this.nombre='';
    this.DUI='';
    this.vehic='';
    this.costo=0;
    this.descu=0;
  }

   registrar(){//guarda los datos del cliente y cuenta las visitas para aplicar el descuento
    this.cliente={"nombre":this.nombre,"DUI":this.DUI,"vehicu":this.vehic,"cost":this.costo};     
     this.cuenta = this.contVisita();//Cuenta las visitas  
      if(this.cuenta == 2){
        this.descu=(this.costo * 0.05);
        this.descCosto = this.costo - this.descu ;        
      }
      else if(this.cuenta > 4){
        this.descu=(this.costo * 0.10);
        this.descCosto = this.costo - this.descu ;       
      }
      else{
        this.descu=0;
        this.descCosto = 0;
        this.descCosto=this.costo;
      }
    this.descCosto.toString(3);
    this.arrayRegistro.push(this.cliente);//Agrega el registro al arreglo
    this.ticket = true;
  }
  contVisita():number{//Cuenta las visitas segun el dui
    let n = 1
    for (let clie of this.arrayRegistro){      
      if(clie.DUI==this.DUI){
        n++;        
      }
    }
    return n    
  }
  vaciar()
  {
    this.nombre="";
    this.DUI="";
    this.vehic="";
    this.costo=0;
    this.ticket=false;
  }
}

