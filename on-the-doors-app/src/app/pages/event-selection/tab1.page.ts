import { Component, Pipe, PipeTransform, OnInit } from '@angular/core';
import { GeolocationService } from '../../services/location.service';
import { EventsService } from '../../services/events.service';
import { IonRouterOutlet, RangeCustomEvent } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'event-selection.page.html',
  styleUrls: ['event-selection.page.scss']
})
export class EventSelectionPage implements OnInit  {

  userLatitude = ""
  userLongitude = ""
  maxDistance = 1000
  status:Status = "loading"
  sliderPosition=0
  noEvents=false
  eventsInArea:UserEvent[] = []
  events:UserEvent[] = []


  constructor(private locationService:GeolocationService, private eventsService:EventsService, private router: IonRouterOutlet) {
  }

  

  updateEvents(){
    this.eventsInArea = this.filterEvents(this.maxDistance)
    if (this.eventsInArea.length == 0){
      this.noEvents=true
    } else {
      this.noEvents=false
    }
  }

  filterEvents(maxDistance:number){
    let returnEvents:UserEvent[]=[]
    for (let localEvent of this.events){
      if (localEvent.dist < maxDistance){
        returnEvents.push(localEvent)
      }
    }
    return returnEvents
  }

  ngOnInit(){
    this.router.swipeGesture=false
    if (this.userLatitude == "" && this.userLongitude == ""){
      this.locationService.getCurrentPosition().subscribe({
        next: (position) => {
          console.log('Latitude:', position.coords.latitude);
          console.log('Longitude:', position.coords.longitude);
          this.userLatitude = position.coords.latitude
          this.userLongitude = position.coords.longitude
          this.eventsService.getEvents(this.userLatitude,this.userLongitude,5000).subscribe({
            next: (data:any) => {
                for (let newEvent of data){
              let newEventObj:UserEvent = {id: newEvent.id,
                                        dist: newEvent.dist,
                                        location:newEvent.location,
                                        name:newEvent.name, 
                                        startTime:new Date(newEvent.start_time), 
                                        ticketPrice:newEvent.ticket_price,
                                        imageURL:newEvent.image_url
              }
              this.events.push(newEventObj)
              }
              console.log(this.events)
            },
            error: (data:any)=>{
              console.log("There has been an error")
              this.status="errored"
            }
          })
          this.status="active"
        },
        error: (error) => {
          console.error('Error getting geolocation:', error);
          this.status="errored"
        },
      });
    }
    
  }

  onIonChange(ev: Event) {
    console.log(+(ev as RangeCustomEvent).detail.value)
    if (this.sliderPosition != +(ev as RangeCustomEvent).detail.value){
      this.sliderPosition=+(ev as RangeCustomEvent).detail.value
      this.maxDistance = this.sliderPosition*1000 // Convert from km to metres
      this.updateEvents()
    }
    
  }

}


@Pipe({name: 'roundTen'})
export class RoundTenPipe implements PipeTransform {
  transform(value: number): number {
    return Math.round(value / 10) * 10;
  }
}


/* 

dist: "1079.52123907"
​​
id: "38"
​​
location: "Clapham Grand"
​​
name: "Music Festival"
​​
start_time: "2024-09-25T18:00:00Z"
​​
ticket_price: "50.00"
​​
ticket_sale_date_time: "2024-09-20T10:00:00Z"
​​
tickets_remaining: "150"
*/

type UserEvent = {
  id:           string,
  dist:         number,
  location:     string,
  name:         string,
  startTime:    Date,
  ticketPrice:  number,
  imageURL:     string
}

type Status = "loading" | "errored" | "active"
