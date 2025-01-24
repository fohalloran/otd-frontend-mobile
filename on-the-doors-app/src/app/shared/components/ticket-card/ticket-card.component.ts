import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TicketsService } from 'src/app/services/tickets.service';

@Component({
  selector: 'app-ticket-card',
  templateUrl: './ticket-card.component.html',
  styleUrls: ['./ticket-card.component.scss'],
})
export class TicketCardComponent  implements OnInit {

  @Input() id!:string
  @Input() title!:string
  @Input() location!:string
  @Input() startTime!:string
  @Input() imageURL!:string
  @Input() past!:boolean

  constructor(private router: Router,private ticketService:TicketsService) { }

  ngOnInit() {}

  pressed(){
    if (!this.past){
      this.ticketService.setId(this.id)
      this.router.navigateByUrl(`tickets/ticket?id=${this.id}`)
    }
  }

}
