import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMenuPageComponent } from './view-menu-page.component';

describe('ViewMenuPageComponent', () => {
  let component: ViewMenuPageComponent;
  let fixture: ComponentFixture<ViewMenuPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMenuPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewMenuPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
