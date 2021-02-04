import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FazingVoidComponent } from './fazing-void.component';

describe('FazingVoidComponent', () => {
  let component: FazingVoidComponent;
  let fixture: ComponentFixture<FazingVoidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FazingVoidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FazingVoidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
