import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandesAdminComponent } from './commandes-admin.component';

describe('CommandesAdminComponent', () => {
  let component: CommandesAdminComponent;
  let fixture: ComponentFixture<CommandesAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandesAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
