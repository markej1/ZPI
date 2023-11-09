import {Component} from '@angular/core';
import {Description} from "../../model/description";

@Component({
    selector: 'app-general-description',
    templateUrl: './general-description.component.html',
    styleUrls: ['./general-description.component.css']
})
export class GeneralDescriptionComponent {

    description: Description = {
        prerequirements: "Kwalifikacja na studia I stopnia odbywa się na podstawie wyników egzaminu maturalnego, " +
            "zgodnie z warunkami i trybem rekrutacji ustalonymi na dany rok akademicki.",
        title: "Inżynier",
        figure: "Absolwent studiów I stopnia kierunku Informatyka Stosowana posiada kwalifikacje obejmujące wiedzę, umiejętności i kompetencje inżynierskie w zakresie:\n" +
            "                Architektury i organizacji komputerów oraz programowania urządzeń niskiego poziomu, stanowiących m.in. elementy Internetu Rzeczy,\n" +
            "                Języków programowania, algorytmów i struktur danych, paradygmatów programowania oraz technik efektywnego programowania,\n" +
            "                Sieci komputerowych, administracji systemami i cyberbezpieczeństwa,\n" +
            "                Baz i hurtowni danych, w tym projektowania baz danych\n" +
            "                Projektowania oprogramowania oraz zarządzania projektem programistycznym,\n" +
            "                Zaawansowanych metod i narzędzi programistycznych, sztucznej inteligencji i inżynierii wiedzy, aplikacji mobilnych oraz systemów rozproszonych, • Różnych aspektów multimediów,\n" +
            "                Trendów rozwojowych w informatyce.\n" +
            "\n" +
            "                Absolwent posiada również wiedzę z zakresu nauk podstawowych: analizy matematycznej, algebry z geometrią analityczną, logiki, matematyki dyskretnej, rachunku prawdopodobieństwa i statystyki oraz fizyki, które są niezbędne z punktu widzenia rozwiązywania problemów inżynierskich i ewentualnej kontynuacji nauki na studiach II stopnia. Istotnym uzupełnieniem wykształcenia inżyniera informatyka jest wiedza dotycząca podstaw przedsiębiorczości oraz społecznych i zawodowych problemów informatyki. Ponadto absolwent zna język angielski w stopniu umożliwiającym mu swobodne wypowiadanie się, również w formie pisemnej, na tematy związane z wykonywaną pracą. Dużą rolę w kształceniu inżynierów informatyków przywiązuje się też do umiejętności miękkich, takich jak umiejętność prezentacji, np. wyników własnej pracy oraz umiejętność pracy w zespole. Absolwent studiów pierwszego stopnia kierunku Informatyka Stosowana może być zatrudniony w firmach informatycznych i działach IT banków i instytucji finansowych, przedsiębiorstw i instytucji gospodarczych we Wrocławiu, jak i na terenie całej Polski, a nawet poza jej granicami. Absolwenci zatrudniani są na stanowiskach projektantów oprogramowania, programistów, testerów oprogramowania, serwisantów, administratorów systemów czy specjalistów do spraw bezpieczeństwa cyfrowego.\n" +
            "            "
    }

}
