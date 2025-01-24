import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsService {


  constructor(private http: HttpClient) {}

  private url = 'http://localhost:3000/api/'

  private selectedEvent = new Subject<string>();


  public changeSelectedEvent(newId:string) {
    this.selectedEvent.next(newId);
    console.log(`Event changed ${newId}`)
  }

  getCurrentEvent(){return this.selectedEvent}




  getEvents(latitude:string, longitude:string,maxDistance:number){
    return this.http.get(`${this.url}events?latitude=${latitude}&longitude=${longitude}&maxDistance=${maxDistance}&orderBy=dist`)
  }

  getEventDetails(eventId:number){
    return this.http.get(`${this.url}events/${eventId}`)

  }
}


