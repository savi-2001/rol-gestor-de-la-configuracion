import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosgradosComponent } from './posgrados.component';

describe('PosgradosComponent', () => {
  let component: PosgradosComponent;
  let fixture: ComponentFixture<PosgradosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PosgradosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PosgradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
