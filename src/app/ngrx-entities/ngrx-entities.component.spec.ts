import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxEntitiesComponent } from './ngrx-entities.component';

describe('NgrxEntitiesComponent', () => {
  let component: NgrxEntitiesComponent;
  let fixture: ComponentFixture<NgrxEntitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgrxEntitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgrxEntitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
