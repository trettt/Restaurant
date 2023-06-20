import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMenuHeaderComponent } from './view-menu-header.component';

describe('ViewMenuHeaderComponent', () => {
  let component: ViewMenuHeaderComponent;
  let fixture: ComponentFixture<ViewMenuHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMenuHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewMenuHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
