import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvideSupportComponent } from './provide-support.component';

describe('ProvideSupportComponent', () => {
  let component: ProvideSupportComponent;
  let fixture: ComponentFixture<ProvideSupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvideSupportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProvideSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
