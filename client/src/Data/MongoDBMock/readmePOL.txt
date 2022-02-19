Główna operacja wykonywana na naszej bazie danych --> read / get
W związku z tym chciałam zoptymalizowac ją pod kątem szybkości odczytu
(kosztem powielania danych i bardziej skomplikowanego zapisywania danych do bazy)

Założenia śledząc ścieżki aplikacji:
-Po zalogowaniu się wyciągamy podstawowe dane do kontekstu (1query):
    -ID zawodnika
    -imię  i nazwisko zaowdnika
    -role jakie posiada użytkownik
    -język
    -motyw kolorystyczny

-ŚCIEŻKA ZAWODNIK:
    -po wejściu w Twój profil pobieramy do kolejnego kontekstu (1query):
        -IDs i imiona psów (są w kolekcji participants)
        -adres zaodnika (zgodnie z figmą)
    -Twoje psy: (bez query)
        -z kontekstu wyciągamy imiona psów
    -wejście w psa (1 query):
        -z kolekcji doggos po ID z kontekstu wyciąga wszystkie dane
        -po kliknięciu w wyniki psa (wkrótce na figmie) na podstawie ID wyników przypisanych do psa
        wyciąga z singleDogResults wszystkie wyniki które osiągnął + jest możliwa selekcja i wybór np tylko jednej klasy

    -wejście w Twoje konkursy (1 query)
        -z kolekcji contests wyciąga te konkursy w których widnieje ID zawodnika
            i tylko te które sie odbyły / są w trakcie
        -po kliknięciu w zawody pojawia się lista klas z poprzedniego query
        -po kliknięciu w klasę pobierają się zbiorcze wyniki (1 query)
            z summary results selekcjonowane sa wyniki które mają ID wybranego konkursu + są z klikniętej klasy
    -wejście w Twoje dane (1query)
        -pobiera z kolekcji participants już wszystkie szczegółowe dane
    -wejście w Nadchodzące konkursy (1 query)
        -pobiera z kolekcji contests wszystkie konkursy które są jako "nadchodzące"

-ŚCIEŻKA OBSŁUGA
    -wejście w konkursy - 1 query pobiera dane do wyświetlenia w Contest Component + klasy (1 query)
    -po wejściu w klasę pobierają sie na podstawie ID zawodów przekazanych przez props zawodnicy
    (zawodnicy jako para dogName + competingPairsId?) + można ich zliczyć
    -po kliknięciu psa (już pobranego wcześniej) tworzymy nowe dane -> wpisujemy oceny, punkty po przemnożeniu,
    przeliczamy ostateczną sumę
    -następnie wysyłamy oceny przed przemnożeniem do singleDogResults, a zbiorcze do summaryResults


