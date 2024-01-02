import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CsvComponent } from './csv.component';

describe('CsvComponent', () => {
  let component: CsvComponent;
  let fixture: ComponentFixture<CsvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CsvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CsvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
