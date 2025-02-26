import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { EventSelectionPage } from './tab1.page';

describe('Tab1Page', () => {
  let component: EventSelectionPage;
  let fixture: ComponentFixture<EventSelectionPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventSelectionPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(EventSelectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
