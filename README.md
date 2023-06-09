# Nocne Niebo - Aplikacja React.js
Projekt jest aplikacją React.js służącą do generowania i udostępniania obrazów nocnego nieba. Aplikacja korzysta z technologii AI do generowania obrazów na podstawie określonych przez użytkownika parametrów.

## Funkcje:

- Generowanie obrazów na podstawie określonych parametrów.
- Udostępnianie wygenerowanych obrazów.
- Możliwość zaskoczenia użytkownika poprzez generowanie losowego promptu.

## Instalacja:
- Sklonuj repozytorium
- Zainstaluj zależności za pomocą npm install
- Uruchom serwer deweloperski w terminalu za pomocą:

1. `cd server`
2. `npm run start`
3. `cd client`
4. `npm run dev`

## Użycie:

Użytkownik może wprowadzić swoje preferencje, takie jak poziom gwiaździstości, gęstość mgły, stopień zachmurzenia i fazę księżyca, a następnie kliknąć przycisk "Generuj" w celu stworzenia obrazu. Użytkownik ma również możliwość wprowadzenia własnego promptu lub wybrania opcji "Surprise Me" w celu wygenerowania losowego promptu.

Po wygenerowaniu obrazu, użytkownik może udostępnić go społeczności klikając przycisk "Udostępnij społeczności".

## Komponenty
Główne komponenty aplikacji to:

- CreatePost: Główny komponent odpowiedzialny za zbieranie informacji od użytkownika i generowanie obrazu.
- FormRadio: Komponent służący do wyświetlania opcji radiowych dla użytkownika. Może wyświetlać różną liczbę kolumn na podstawie liczby dostarczonych opcji.
- FormSlider: Komponent służący do wyświetlania suwaka dla użytkownika. Użytkownik może regulować wartości suwaka w celu określenia swoich preferencji.
- FormField: Komponent służący do wyświetlania pola formularza dla użytkownika. Użytkownik może wprowadzić własne prompty za pomocą tego komponentu.
- Loader: Komponent służący do wyświetlania wskaźnika ładowania podczas generowania obrazu.

## API
Aplikacja korzysta z dwóch endpointów API:

- /api/v1/dalle: Służy do generowania obrazu na podstawie określonych przez użytkownika parametrów, przy wykorzystaniu API Dalle-2
- /api/v1/post: Służy do udostępniania wygenerowanego obrazu.
