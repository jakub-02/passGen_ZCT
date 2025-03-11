# Docker Password Manager

Táto aplikácia používa:
    - MongoDB ako databázu (beží na porte 27017)
    - NodeJS ako backend (beží na porte 3000)
    - Nginx na spustenie .html súboru pre frontend (beží na porte 8080)
    - frontend je uložený v súbore frontend/index.html, nadizajnovaný pomocou Tailwind

## Postup použitia
1. **Zostavenie aplikácie**:
   ./prepare-app.sh
    - vytvorí docker sieť 'pass-net'
    - buildne custom docker image backend-image (tento image pripravuje nodeJS)
    
2. **Spustenie aplikácie**:
    ./start-app.sh
    - spustia sa postupne kontajnery pre mongo, backend a frontend
    - všetky kontajnery bežia na spoločnej sieti 'pass-net'

3. **Používanie aplikácie**:
    - frontend beží na adrese 'http://localhost:8080/'
        - vieme si nastaviť url/popis aplikácie, pre ktorú ukladáme heslo
        - vieme si nastaviť náš username, ktorý používame na prihlasovanie s heslom
        - pomocou slidera vieme nastaviť dĺžku hesla
        - vieme zaškrtnúť zahrnutie uppercase písmen, čísel aj špeciálnych znakov v hesle
        - kliknutím na 'Generate' generujeme nové heslo
        - kliknutím na 'Save' sa heslo uloží do databázy
        - uložené heslá sa zobrazia v 'Saved Passwords'
        - uložené heslá vieme zobraziť a skopírovať, prípadne vymazať
    - backend beží na adrese 'http://localhost:3000/passwords'
        - tu vidíme v akom formáte sa heslá ukladajú do databázy

4. **Ukončenie aplikácie**:
    ./end-app.sh 
    - ukončí kontajnery pass-back, frontend aj mongo

5. **Vymazanie aplikácia**
    ./remove-app.sh
    - odstráni všetky vytvorené kontajnery spolu so sieťou
