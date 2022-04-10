import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterComteComponent } from './ajouter-comte.component';

describe('AjouterComteComponent', () => {
  let component: AjouterComteComponent;
  let fixture: ComponentFixture<AjouterComteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterComteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterComteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
