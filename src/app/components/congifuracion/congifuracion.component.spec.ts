import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CongifuracionComponent } from './congifuracion.component';

describe('CongifuracionComponent', () => {
  let component: CongifuracionComponent;
  let fixture: ComponentFixture<CongifuracionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CongifuracionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CongifuracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
