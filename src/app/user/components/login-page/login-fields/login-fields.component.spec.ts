import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFieldsComponent } from './login-fields.component';

describe('LoginFieldsComponent', () => {
  let component: LoginFieldsComponent;
  let fixture: ComponentFixture<LoginFieldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginFieldsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
