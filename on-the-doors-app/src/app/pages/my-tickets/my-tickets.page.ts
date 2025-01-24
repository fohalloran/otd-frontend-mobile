import { Component, OnInit } from '@angular/core';
import { TicketsService } from 'src/app/services/tickets.service';

@Component({
  selector: 'app-my-tickets',
  templateUrl: './my-tickets.page.html',
  styleUrls: ['./my-tickets.page.scss'],
})
export class MyTicketsPage implements OnInit {

  upcomingTickets:ticket[] = []
  pastTickets:ticket[] = []
  status:Status = "loading"
  constructor(private ticketService:TicketsService) { }



  ngOnInit() {
    console.log(this.status)
    this.ticketService.getTickets().subscribe({
      next: (data:any) => {
          for (let newTicket of data){
        let newTicketObj:ticket = {id: newTicket.id,
                                  eventId:newTicket.event_id,
                                  used:newTicket.used, 
                                  eventName:newTicket.event_name, 
                                  locationName:newTicket.location_name, 
                                  startTime:newTicket.start_time,
                                  imageUrl:newTicket.image_url
                                  

        }
        if (!newTicketObj.used){
          this.upcomingTickets.push(newTicketObj)
        } else {
          this.pastTickets.push(newTicketObj)
        }
        }
        this.status="active"
      },
      error: (error:any) => {
        this.status="errored"
      }
    })
    console.log(this.pastTickets)

  }

}
type ticket = {
  id: number
  eventId: number
  used: boolean
  eventName: string
  locationName: string
  startTime: Date
  imageUrl:string
}

type Status = "loading" | "errored" | "active"
