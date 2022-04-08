import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompteClientAdminComponent } from './compte-client-admin.component';

describe('CompteClientAdminComponent', () => {
  let component: CompteClientAdminComponent;
  let fixture: ComponentFixture<CompteClientAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompteClientAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompteClientAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
