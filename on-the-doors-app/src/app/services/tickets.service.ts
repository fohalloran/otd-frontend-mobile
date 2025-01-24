import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {


  currentId!:string


  constructor(private http: HttpClient) {}

  private url = 'http://localhost:3001/api/'

  getTickets(){
    return this.http.get(`${this.url}tickets?userId=5`)
  }

  useTicket(ticketId:string){
    return this.http.get(`${this.url}tickets/${ticketId}/use`)

  }

  getId(){
    return this.currentId
  }
  setId(newId:string){
    this.currentId = newId
  }
}

