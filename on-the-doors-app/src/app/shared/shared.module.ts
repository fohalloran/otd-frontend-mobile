import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './components/loading/loading.component';
import { CardComponent } from './components/card/card.component';
import { IonicModule } from '@ionic/angular';
import { StartTimePipe } from './pipes/start-time.pipe';
import { HeaderComponent } from './components/header/header.component';
import { TicketCardComponent } from './components/ticket-card/ticket-card.component';
import { ErroredComponent } from './components/errored/errored.component';




@NgModule({
  declarations: [LoadingComponent,CardComponent,StartTimePipe,HeaderComponent,TicketCardComponent,ErroredComponent],
  imports: [
    CommonModule,IonicModule
  ],
  exports:[
    CardComponent,LoadingComponent,StartTimePipe,HeaderComponent,TicketCardComponent,ErroredComponent
  ]
})
export class SharedModule { }
