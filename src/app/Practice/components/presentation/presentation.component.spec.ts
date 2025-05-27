import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Users } from '../../practice-mock-data';
import { PresentationComponent } from './presentation.component';

describe('PresentationComponent', () => {
  let component: PresentationComponent;
  let fixture: ComponentFixture<PresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresentationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresentationComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput("user", Users[0])
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
