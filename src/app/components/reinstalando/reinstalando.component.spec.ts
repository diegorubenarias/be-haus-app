import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReinstalandoComponent } from './reinstalando.component';

describe('ReinstalandoComponent', () => {
  let component: ReinstalandoComponent;
  let fixture: ComponentFixture<ReinstalandoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReinstalandoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReinstalandoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
