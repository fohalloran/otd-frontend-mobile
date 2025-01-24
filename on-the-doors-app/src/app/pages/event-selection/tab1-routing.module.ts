import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventSelectionPage } from './tab1.page';

const routes: Routes = [
  {
    path: '',
    component: EventSelectionPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab1PageRoutingModule {}
