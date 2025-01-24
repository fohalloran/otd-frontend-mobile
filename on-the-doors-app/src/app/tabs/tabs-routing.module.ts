import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'events',
        loadChildren: () => import('../pages/event-selection/event-selection.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'tickets',
        loadChildren: () => import('../pages/my-tickets/my-tickets.module').then(m => m.MyTicketsPageModule)
      },
      
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/events',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
