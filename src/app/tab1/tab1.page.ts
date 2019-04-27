import { Component } from '@angular/core';
import { ServeletService } from '../servelet.service';
import { pagamentos } from '../pagamentos';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {

codigo : number;
dados : pagamentos;
data : string;

constructor(public serv: ServeletService){

}

public GeraCodigo(){
  this.codigo =  Math.floor(Math.random()*100000); 
  this.AdicionaLista();
}

public AdicionaLista(){
  
  var data = new Date();

  var minuto =  data.getMinutes().toString();
  if(minuto == '0') minuto = '00';
  if(minuto == '1') minuto = '01';
  if(minuto == '2') minuto = '02';
  if(minuto == '3') minuto = '03';
  if(minuto == '4') minuto = '04';
  if(minuto == '5') minuto = '05';
  if(minuto == '6') minuto = '06';
  if(minuto == '7') minuto = '07';
  if(minuto == '7') minuto = '08';
  if(minuto == '8') minuto = '09';

  this.data = (data.getHours() +':'+ minuto);
  this.dados = new pagamentos;
  this.dados.id = this.codigo.toString();
  this.dados.datainicial = this.data;
  console.log(this.dados.datainicial);
  this.dados.datafinal = '00:00';
  this.dados.valor = 0;

  this.serv.AdicionaLista(this.dados);
}

}
