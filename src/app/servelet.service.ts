import { Injectable } from '@angular/core';
import { PAGAMENTOS } from './mockPagamentos';
import { pagamentos } from './pagamentos';

@Injectable({
  providedIn: 'root'
})
export class ServeletService {

  pagamentos = PAGAMENTOS;
  pagar : pagamentos;

  constructor() { }

  ListaPagamentos(): pagamentos[]{
    return this.pagamentos;
  }

  AdicionaLista(pdados: pagamentos){

    this.pagamentos.push(pdados);
    
  }

  AtualizaLista(){

    var indice = this.pagamentos.indexOf(this.pagar);
    this.pagamentos.splice(indice,1);

  }

  public validaTicket(dados: string):pagamentos{
    
    let final = this.pagamentos.find(x => x.id == dados)    
    this.pagar = final;
    return final;

  }

}
