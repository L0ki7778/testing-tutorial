import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaygroundComponent } from './playground.component';
import { By } from '@angular/platform-browser';

describe('PlaygroundComponent', () => {
  let component: PlaygroundComponent;
  let fixture: ComponentFixture<PlaygroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaygroundComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PlaygroundComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput("greeting", "Hello")
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have name and guest', () => {
    expect(component.name).toBeTruthy();
    expect(component.guest).toBeTruthy();
  })

  it('should greet the name and the guest', () => {
    const htmlElement = fixture.nativeElement as HTMLEmbedElement

    expect(component.guest).toBe('guest');
    expect(htmlElement.querySelector('h1')?.textContent).toBe(`${component.greeting()} ${component.name}`);
    expect(htmlElement.querySelector('[data-test-id="guest"]')?.textContent).toBe(`Hello guest`);

  })

  it('shoud update the guest-name', () => {

    spyOn(component, 'changeGuestName').and.callThrough();

    component.changeGuestName('Max');

    fixture.detectChanges();

    expect(component.guest).toBe('Max');

    const guestElement = fixture.nativeElement as HTMLEmbedElement

    expect(guestElement.querySelector('[data-test-id="guest"]')?.textContent).toBe(`Hello Max`);
    expect(component.changeGuestName).toHaveBeenCalledTimes(1)
  })

  it('should emit the new guest-name', () => {
    component.guest = 'Max';

    fixture.detectChanges();

    expect(component.guest).toBe('Max');
    spyOn(component.changeEmitter, 'emit');
    component.guest = "Nick";
    spyOn(component, 'emitNewName').and.callFake(()=>{
      component.changeEmitter.emit(component.guest);
    });

    const button = fixture.debugElement.query(By.css('button'));
    button.triggerEventHandler('click', null);

    expect(component.emitNewName).toHaveBeenCalledTimes(1);
    expect(component.changeEmitter.emit).toHaveBeenCalledWith('Nick');

    component.guest = "Larry";
    fixture.detectChanges()

    button.triggerEventHandler('click', null)

    expect(component.emitNewName).toHaveBeenCalledTimes(2)
    expect(component.changeEmitter.emit).toHaveBeenCalledWith('Larry')

  })

  it('should fail to emit if the input ist empy', () => {
    component.guest = ''

    fixture.detectChanges()

    spyOn(component.changeEmitter, 'emit')
    const button = fixture.debugElement.query(By.css('button'))
    button.triggerEventHandler('click', null)

    expect(component.changeEmitter.emit).not.toHaveBeenCalled()

  })

  it('should render the default input greeting', () => {
    fixture.componentRef.setInput("greeting", "Here we go again Mr.")
    fixture.detectChanges()

    expect(component.greeting()).toBe('Here we go again Mr.')
    const HTMLElement = fixture.debugElement.query(By.css('#greeting'))
    expect(HTMLElement.nativeElement.textContent).toBe(`Here we go again Mr. ${component.name}`)

  })
});
