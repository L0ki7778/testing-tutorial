import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

// add codeCoverage to angular.json options
// enforcement is possible, see https://angular.dev/guide/testing/code-coverage

import { SimpleUnitTestComponent } from './simple-unit-test.component';
import { HttpRequestService } from '../../services/http-request.service';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';

describe('SimpleUnitTestComponent', () => {
  let component: SimpleUnitTestComponent; // die zu testende Komponente wird hier deklariert und typisiert
  let fixture: ComponentFixture<SimpleUnitTestComponent>, // die zu testende Komponente wird hier deklariert und mit einem generic typisiert
    httpService: HttpRequestService,
    httpTestingController: HttpTestingController

  // fixture = Ein Wrapper-objekt für die Komponente im Test

  beforeEach(waitForAsync(() => { //? -->async()=>{}

    httpService = jasmine.createSpyObj('HttpRequestService', ['getPokemon']),


      TestBed.configureTestingModule({
        // TestBed = ein Objekt, das die Testumgebung zur Verfügung stellt indem es ein Testmodul erstellt
        imports: [SimpleUnitTestComponent],
        providers: [
          { provide: httpService, useValue: httpService },
          provideHttpClient(),
          provideHttpClientTesting()
        ]
        // imports und config entsprechen einem NgModule
      })
        .compileComponents(); // :Promise<void>
    // .compileComponents() = kompiliert alle asynchronen Komponenten (Komponenten, die eine externe Template- oder Stylesheet-Datei verwenden)

    httpService = TestBed.inject(HttpRequestService);
    httpTestingController = TestBed.inject(HttpTestingController)
    fixture = TestBed.createComponent(SimpleUnitTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {

    console.log(fixture)
    console.log(component)
    expect(component).toBeTruthy();
  });

  it('should have a name and version', () => {
    expect(component.name).toBeTruthy();
    expect(component.name).toBe('Angular');
    expect(component.version).toBeTruthy();
    expect(component.version).toBe(19);
  })
});
