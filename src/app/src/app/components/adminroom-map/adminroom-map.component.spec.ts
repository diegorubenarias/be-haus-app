import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminroomMapComponent } from './adminroom-map.component';

describe('AdminroomMapComponent', () => {
  let component: AdminroomMapComponent;
  let fixture: ComponentFixture<AdminroomMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminroomMapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminroomMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
