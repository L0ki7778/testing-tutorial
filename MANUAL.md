
## Jasmine

### 🧪 describe
>+ Gruppiert zusammengehörige Tests (Test-Suite)
>+ Erlaubt verschachtelte Test-Gruppen
>+ Beschreibender Name dient als Titel im Test-Report
>+ Wird einmalig beim Laden des Specs ausgeführt (nicht bei jedem Testlauf)

### 🔁 beforeEach
>+ Führt Setup-Code vor jedem einzelnen Test (it) aus
>+ Ideal für TestBed-Konfiguration, Instanziierung, Reset von Mocks
>+ Wird neu aufgerufen vor jedem it → sauberer Testzustand
>+ Unterstützt auch async, waitForAsync, fakeAsync

### ✅ it
>+ Einzelner Testfall
>+ Besteht aus:
>   + Vorbereitung (Arrange)
>   + Aktion (Act)
>   + Prüfung (Assert)
>+ Klarer, beschreibender Titel
>+ Kann async sein (done, async, fakeAsync)

### 🔍 expect
>+ Vergleichsfunktion für Assertions (Prüfungen)
>+ Liest sich wie ein natürlicher Satz:
>   + expect(etwas).toBe(...)
>   + expect(etwas).toEqual(...)
>   + expect(spy).toHaveBeenCalled()
>+ Kombinierbar mit .not für Negationen

### 🧪 createSpyObj
>+ Erzeugt ein komplettes Mock-Objekt mit mehreren Spies
>+ Praktisch für Service-Mocks in TestBed oder Constructor
>+ Jeder Methodenname wird automatisch zu einem Spy
>+ Ermöglicht toHaveBeenCalled(), .and.returnValue(...), etc.

### 🕵️‍♂️ spyOn
>+ Erzeugt einen Spy (Test-Doppel) auf eine vorhandene Methode
>+ Ermöglicht:
>   + Aufrufe tracken: toHaveBeenCalled()
>   + Aufrufargumente prüfen: toHaveBeenCalledWith(...)
>   + Rückgabewerte mocken: and.returnValue(...), and.callFake(...)
>+ Wichtig: Die Methode muss existieren (kein Property!)
>+ Wichtig: Die Methode selbst wird durch spyOn blockiert--> Block lässt sich aufheben durch ```and.callTrough()```

### ✅ Jasmine Matcher – Übersicht

|Methode                 |Beschreibung                               |
| ------------- | ------------- |
| ```toBe(expected)``` | Prüft auf strikte Gleichheit (===) |
|```toEqual(expected)	```|Vergleicht Werte rekursiv (deep equality)  |
|```toBeTrue()	```|Erwartet den Wert true|
|```toBeFalse()```|Erwartet den Wert false|
|```toBeNull()	```|Erwartet exakt null|
|```toBeUndefined()```|Erwartet undefined|
|```toBeDefined()```|	Erwartet nicht undefined|
|```toBeNaN()	```|Erwartet NaN|
|```toBeGreaterThan(n)```|Erwartet, dass Wert größer als n ist|
|```toBeGreaterThanOrEqual(n)```|Erwartet ≥ n|
|```toBeLessThan(n)```|Erwartet < n|
|```toBeLessThanOrEqual(n)```|Erwartet ≤ n|
|```toMatch(regex\|string)```|Prüft auf definierte strings oder pattern|
|```toContain(item)```|Prüft, ob Array/String item enthält|
|```toThrow()```|Erwartet, dass eine Funktion etwas(optional) wirft|
|```toThrowError(customError, message)```|Erwartet, dass eine Funktion einen Fehler wirft|
|```toHaveBeenCalled()	```|Prüft, ob ein Spy aufgerufen wurde|
|```toHaveBeenCalledWith(...args)```|Prüft, ob ein Spy mit bestimmten Argumenten aufgerufen wurde|
|```toHaveBeenCalledTimes(n)	```|Prüft, ob ein Spy n-mal aufgerufen wurde|
|```toBeCloseTo(expected, digits)```|	Erwartet ungefähr gleichen Wert (für Fließkommazahlen)|
|```toEqual(jasmine.any(Class))	```|Prüft, ob ein Wert eine Instanz vom Typ Class ist|
|```toEqual(jasmine.objectContaining(obj))	```|Prüft, ob Objekt bestimmte Properties enthält|
|```toEqual(jasmine.arrayContaining([x]))	```|Prüft, ob Array bestimmte Elemente >+ enthält|
| ```not```	|Negation für jeden Matcher, z. B. expect(x).not.toBe(y)|

## Async

### ✅ waitForAsync
>+ Nutzt echte asynchrone Mechanismen (Promise, setTimeout, etc.)
>+ Kann mit async/await verwendet werden
>+ Kein Zugriff auf tick(), flush(), discardPeriodicTasks(), usw.
>+ Ideal für echte async Dinge wie:
>   + TestBed.compileComponents()
>   + HttpClient (mit HttpTestingController)
>   + fixture.whenStable()

### ⚙️ fakeAsync
>+ Simuliert async Verhalten synchron
>+ Nutzt eine "virtuelle Uhr" (Fake-Zeitsteuerung)
>+ Ermöglicht tick(ms), flush(), discardPeriodicTasks(), etc.
>+ Ideal für:
>   + setTimeout, setInterval
>   + debounceTime, delay, animationFrame
>   + kontrolliertes Fortschreiten von Zeit-basierten Prozessen


&nbsp;

&nbsp;

# Component - Checklist

Kategorie | Was wird getestet? | Beispieltest / Hinweis
| ------------- | ------------- |------------- |
🧱 Komponentenaufbau | Wird die Komponente korrekt erstellt? | expect(component).toBeTruthy()
🧬 Properties & Defaults | Sind Initialwerte korrekt gesetzt? | expect(component.title).toBe('xyz')
🧪 Methoden (Unit) | Wird die Methode korrekt ausgeführt? | component.doSomething(); expect(...).toBe(...)
👀 DOM-Prüfung | Spiegelt das Template den Component-Status korrekt wider? | querySelector().textContent
📤 @Output / Events | Wird ein Event korrekt mitgegeben? | spyOn(...emit) + toHaveBeenCalledWith(...)
📥 @Input-Bindings | Reagiert die Komponente korrekt auf Input-Änderung? | component.inputProp = 'value'; detectChanges()
👆 Benutzeraktionen | Wird DOM-Interaktion (z. B. Klick) korrekt verarbeitet? | triggerEventHandler('click', null)
🔄 Datenbindung | Funktioniert Two-Way Binding ([(ngModel)], formControl)? | Wert setzen → prüfen, ob Model aktualisiert
⏱ Asynchrone Logik | fakeAsync, tick(), flush() oder whenStable() verwendet? | Bei z. B. setTimeout, HttpClient, etc.
🧯 Fehlerbehandlung | Was passiert bei falschen/fehlenden Daten? | z. B. "Was, wenn guest leer ist?"
🧹 Lifecycle-Methoden | Reagiert die Komponente auf ngOnInit, ngOnDestroy etc.? | z. B. Subscriptions, Cleanup
🕵️ SpyOn/Mocks | Methodenaufrufe verfolgt? Funktionen stubben oder durchlassen? | spyOn(component, 'foo').and.callThrough()
♻️ Mehrere Runs | Verhalten bei mehreren Interaktionen korrekt? | mehrfach klicken, mehrfach aufrufen
