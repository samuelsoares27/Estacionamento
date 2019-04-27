import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { ServeletService } from '../servelet.service';
import { AlertController } from '@ionic/angular';
import { pagamentos } from '../pagamentos';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  ticket;
  ticketBanco : pagamentos;
  
  constructor(private router: Router, public alertController: AlertController, public serv: ServeletService){ }

  ValidarTicket(){

    if(this.ticket != ''){

      if(this.validaTicket().id == ''){
       
        this.AlertNTiket();
        
      }else{
        
        if(this.validaTicket().valor == 0){
          this.router.navigate(['/pagamentos']);
        }else{
          this.AlertPago();
        }

      }
      

    }else{

      this.AlertBranco(); 

    }
  }

  ngOnInit() {

    this.ticket = '';
    
  }

  async AlertBranco() {
    const alert = await this.alertController.create({
      header: 'Alerta',
     // subHeader: 'Subtitle',
      message: 'Campo Ticket está em Branco',
      buttons: ['OK']
    });

    await alert.present();
  }

  async AlertNTiket() {
    const alert = await this.alertController.create({
      header: 'Alerta',
     // subHeader: 'Subtitle',
      message: 'Não existe esse Ticket',
      buttons: ['OK']
    });

    await alert.present();
  }

  async AlertPago() {
    const alert = await this.alertController.create({
      header: 'Alerta',
     // subHeader: 'Subtitle',
      message: 'Ticket já foi pago',
      buttons: ['OK']
    });

    await alert.present();
  }

  public validaTicket(){   
    return this.serv.validaTicket(this.ticket);
  }



}
