import { Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent  implements OnInit {

  constructor(private router: Router) { }

  @Input() id!:string
  @Input() title!:string
  @Input() location!:string
  @Input() distance!:string
  @Input() price!:string
  @Input() startTime!:string
  @Input() imageURL!:string


  ngOnInit() {
  }

  pressed(){
    this.router.navigateByUrl(`events/event?id=${this.id}`)
  }

}

