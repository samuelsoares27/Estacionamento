import { Component } from '@angular/core';
import { ServeletService } from '../servelet.service';
import { pagamentos } from '../pagamentos';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  pagamentos: pagamentos[];

  constructor(public serv: ServeletService){

    this.pagamentos = serv.ListaPagamentos();
  }
}
