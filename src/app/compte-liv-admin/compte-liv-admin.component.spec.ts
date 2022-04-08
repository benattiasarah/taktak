import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompteLivAdminComponent } from './compte-liv-admin.component';

describe('CompteLivAdminComponent', () => {
  let component: CompteLivAdminComponent;
  let fixture: ComponentFixture<CompteLivAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompteLivAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompteLivAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
