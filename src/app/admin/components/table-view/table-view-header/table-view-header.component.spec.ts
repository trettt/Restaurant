import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableViewHeaderComponent } from './table-view-header.component';

describe('TableViewHeaderComponent', () => {
  let component: TableViewHeaderComponent;
  let fixture: ComponentFixture<TableViewHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableViewHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableViewHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
