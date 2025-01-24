import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventsService } from 'src/app/services/events.service';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { TicketsService } from 'src/app/services/tickets.service';

type eventDetails = {
  ID: number,
  Name: string;
  Location: string;
  Start_time: string;
  Ticket_price: string;
  Description: string;
  Image_URL: string;
}


@Component({
  selector: 'app-event',
  templateUrl: './event.page.html',
  styleUrls: ['./event.page.scss'],
})


export class EventPage implements OnInit {
  @ViewChild(IonModal) modal!: IonModal;


  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name: string = "";
  currentEvent = <eventDetails>{};
  status:Status = "loading"
  ticketCount = 0
  id!: number;
  constructor(private eventsService: EventsService, private route: ActivatedRoute, private ticketService: TicketsService) {
  }
  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }

  decrementTicketCount() {
    if (this.ticketCount > 0) {
      this.ticketCount -= 1
    }
  }
  incrementTicketCount() {
    this.ticketCount += 1

  }
  goToBuyTicket() {
    console.log(`Buy ${this.currentEvent.ID}`)
  }
  resetForm() {
    this.ticketCount = 0
  }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
      this.resetForm()
      this.eventsService.getEventDetails(this.id).subscribe({
        next: (details: any) => {
          
          console.log(details)
          let eventDetails: eventDetails = {
            ID: details.id,
            Name: details.name,
            Location: details.location,
            Start_time: details.start_time,
            Ticket_price: details.ticket_price,
            Description: details.description,
            Image_URL: details.image_url
          }
          this.currentEvent = eventDetails
          this.status='active'
        },
        error: (error:any) => {
          this.status='errored'
        }
      })
    });

  }

  addToFavourites() {
    console.log(this.currentEvent)
  }

  openProfile() {

  }


}

type Status = "loading" | "errored" | "active"
