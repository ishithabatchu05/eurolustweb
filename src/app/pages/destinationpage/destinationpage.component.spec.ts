import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationpageComponent } from './destinationpage.component';

describe('DestinationpageComponent', () => {
  let component: DestinationpageComponent;
  let fixture: ComponentFixture<DestinationpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestinationpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DestinationpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
