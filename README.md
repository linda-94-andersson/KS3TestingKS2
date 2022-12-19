## Deployment
* To run the app clone the repo and run the followig in the terminal: 
  ```
  npm install -g json-server
  ```
  ```
  json-server --watch db.json
  ```
  ```
  npm run dev
  ```
  ```
  npm run test
  ```
  ```
  npm run coverage
  ```
  ```
  npm run play-test
  ```

## Skills used for this project
* Vitest
* Playwright
* React-testing-lib

## Requirements

# Kunskapskontroll 3: Säkra våra applikationer med Tester

## Instruktioner
I Kunskapskontroll 1 och 2 byggde ni både en tidtagnings-app och en admin-interface, som gör att man kan logga tid och få en bättre överblick av applikationen.

Denna gången kommer ni inte skriva en ny applikation - utan skriva tester för era två applikationer, för att säkerställa att de fungerar som det är tänkt.

Notera att ni kan behöva identifiera och bryta ut återanvändbara delar som borde vara komponenter, för att kunna skriva Unit-tester. 
T.ex. en lista på projekt som mappas ut - den borde kunna vara en återanvändbar komponent.

## Testerna ska skrivas med:
- Jest (eller Vitest)
- RTL
- Playwright

## Typer av tester vi kommer skriva:
- Unit/komponent-tester (Jest/Vitest)
  (En enskild del, t.ex. en komponent eller en hook)
- Integrations-tester (RTL, Jest/Vitest)
  (Flera "units" eller delar tillsammans)
- E2E-tester (Playwright)
  (Från start till slut, end to end)

## Tester för K2:
- minst 5 Unit/komponent-tester (X)
- Integrations-tester som testar så följande fungerar enligt specifikationen: ()
  - Listan på Projects (1. går att se, 2. ta bort) (X)
  - Listan på Tasks (1. går att se,  2. ta bort) (X)
  - Listan på Invoices (1. går att se, 2. går att skapa) ()
- 1 E2E-test som testar hela applikationen från start till slut ()

## För att uppnå Godkänt är kraven att:
- Du uppfyller "Tester för K2" ()

- Du använder Jest/Vitest, RTL och Playwright för dina tester ()

- Testerna går igenom (naturligtvis) ()

- Testerna faktiskt testar något (och inte är tomma statements). ()

## För att uppnå Väl Godkänt är kraven att:
- Du använder Mocks för alla API-anrop som görs ()

- Har över 85% code coverage i K1 och K2 ()