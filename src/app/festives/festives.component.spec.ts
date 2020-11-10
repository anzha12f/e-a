import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTreeModule } from '@angular/material/tree';

import { FestivesComponent } from './festives.component';

describe('FestivesComponent', () => {
  let component: FestivesComponent;
  let fixture: ComponentFixture<FestivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FestivesComponent ],
      imports: [
        MatButtonModule,
        MatIconModule,
        MatTreeModule,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FestivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
