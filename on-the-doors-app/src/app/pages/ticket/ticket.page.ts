import { Component, OnInit } from '@angular/core';
import { RangeCustomEvent } from '@ionic/angular';
import { TicketsService } from 'src/app/services/tickets.service';


@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.page.html',
  styleUrls: ['./ticket.page.scss'],
})
export class TicketPage implements OnInit {

  sliderPosition = 0

  constructor(private ticketService:TicketsService) { }

  ngOnInit() {
  }

  onIonChange(ev: Event) {
    let sliderPosition = +(ev as RangeCustomEvent).detail.value
    if (sliderPosition != 100){
      this.sliderPosition=0
    } else {
      this.ticketService.useTicket(this.ticketService.getId()).subscribe()
      console.log("Redeemed")
    }
    
  }

}
