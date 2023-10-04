
const languageSelect = document.getElementById("languageSelect");

languageSelect.addEventListener("change", function() {
    const selectedLanguage = languageSelect.value;
    translatePage(selectedLanguage);
});

function translatePage(language) {
    const translations = {
        en: {
            zanimljivosti1:"Interesting facts",
            nas:"Our solar sistem",
            merkur:"MERCURY",
            merkur1:"mercury: Mercury is the closest planet to the Sun and has the widest temperature range of all the planets in the solar system. During the day, the temperature on Mercury can reach around 430%C2%B0C, while at night, it drops to -180%C2%B0C.",
            merkur2: "Mercury is the smallest planet in the solar system and has no atmosphere. Its surface is covered with craters similar to those on the Moon. Mercury has a very slow rotation; one day on Mercury lasts 59 Earth days.",
            merkur3:"Mercury, the planet closest to the Sun, is just slightly larger than Earth's moon and is crisscrossed with craters. The planet is visible to the naked eye and has been known to humans for a long time. According to Universe Today, the Sumerians mentioned the planet as early as the 2nd millennium BCE (a period extending from 2000 BCE to 1001 BCE), and the Babylonians called it the planet Nabu. We know it by the name given by the Romans, after their swift messenger god, Mercury. The planet was first observed through the newly invented telescope in 1631 by astronomers Galileo Galilei and Thomas Harriot, according to NASA Science. Since its first visit by NASA's Mariner 10 spacecraft in 1974, the small planet has intrigued scientists. It will undoubtedly continue to surprise us, especially after the joint mission of the European Space Agency (ESA) and the Japan Aerospace Exploration Agency (JAXA) BepiColombo arrives at the small planet by the end of 2025.",
            merkur4:"Although Mercury is the closest planet to the Sun, its surface can still be extremely cold, thanks to the lack of an atmosphere that traps heat. During the day, temperatures can reach 800 degrees Fahrenheit (430 degrees Celsius), but at night, temperatures can drop to as low as minus 290 F (minus 180 degrees), according to NASA. This fluctuation is equal to a temperature swing of about 1100 F (600 C), the largest of any planet in the solar system.",
            merkur5:"Mercury orbits the Sun every 88 Earth days, traveling at nearly 47 kilometers per second - faster than any other planet in the solar system, according to NASA. Mercury's orbit is not only very fast but also highly elliptical. The planet gets as close as 47 million km to the Sun and as far as 70 million km. Mercury has the thinnest atmosphere of any planet in the solar system. The atmosphere is so thin that scientists have another name for it - exosphere. Mercury's exosphere consists mainly of oxygen, sodium, hydrogen, helium, and potassium, as stated by NASA.",
            venera:"VENUS",
            venera1:"Interesting facts about Venus:",
            venera2:"A day on Venus is longer than a year. It takes Venus longer to rotate once on its axis than to complete one orbit around the Sun. It's 243 Earth days to complete one rotation, the longest rotation of any planet in the solar system, and only 224.7 Earth days to complete an orbit around the Sun. Venus is hotter than Mercury despite being farther from the Sun. Its average temperature is 462°C. This is due to the high concentration of carbon dioxide in Venus's atmosphere, which creates an intense greenhouse effect. Heat is trapped in the atmosphere like a blanket, leading to the planet's much higher temperature than its proximity to the Sun would suggest.",
            venera3:"Unlike other planets in our solar system, Venus rotates clockwise on its axis. All other planets rotate counterclockwise on their axes and orbit the Sun counterclockwise. Venus also orbits the Sun counterclockwise, but its unusual axis rotation is because it was flipped upside down earlier in its history! Venus is the second-brightest natural object in the night sky after the Moon. Sulfuric acid clouds in Venus's atmosphere make it reflective and bright, obscuring our view of its surface. Its brightness makes it visible even during the day - if the sky is clear and you know where to look.",
            venera4:"Venus has 90 times the atmospheric pressure of Earth. It's roughly the same as the pressure found 1 km deep in Earth's oceans. It's believed that Venus was named after the beautiful Roman goddess (equivalent to the Greek Aphrodite) due to its bright, shining appearance in the sky. Among the five planets known to ancient astronomers, it would have been the brightest.",
            venera5:"Since Venus is easily visible to the naked eye, it's impossible to say who discovered the planet. But over the centuries, we've been able to track Venus's movements, including rare Venus transits when the planet appears to pass in front of the Sun. Following Latin rules, we should say 'venerean' as an adjective to describe things related to Venus. However, this is considered too close to the word 'venereal.' The more commonly used word is 'Venusian,' despite its awkward etymology.",
            zemlja:"EARTH",
            zemlja1:"Earth is the only known planet that supports an atmosphere with free oxygen, water, and the most beautiful and vital phenomenon of all - life. Planet Earth is of spherical shape, with an average radius of 6,371 km. Cut it in half, and you can easily use 3-D geometry, parallel lines of latitude, and arc length to calculate the distance between two points on the sphere. It's fascinating how mathematics connects everything we know about the planet and helps us understand various concepts in geosciences, environmental science, ecology, and more. Without mathematics, we would still be under the impression that we're on one of the rare planets orbiting a star amidst seemingly stationary lights in the sky.",
            zemlja2:"Highlighting the significance of mathematics behind our magnificent planet on Earth Day and Math Awareness Month, MANAN KHURANA, the founder and CEO of Cuemath (an online math learning program), mentions seven interesting mathematical facts about Earth.",
            zemlja3:"It's a mass without weight. Earth's mass is approximately 5.97 × 10^24 kg, or 6 sextillion tons. Since it freely floats in space, it's considered to have mass but no weight. It primarily consists of iron (32.1%), oxygen (30.1%), silicon (15.1%), magnesium (13.9%), sulfur (2.9%), nickel (1.8%), calcium (1.5%), and aluminum (1.4%), while the remaining 1.2% comprises trace amounts of other elements. The Blue Planet: 70% of Earth's surface is covered by water, with the oceans holding about 96.5% of all Earth's water. This is why the planet earned the nickname 'the blue planet.' The remaining 30% of the planet is solid landmass above sea level, known as the 'continental crust.",
            zemlja4:"We live in a house that is 4.543 billion years old. By studying the oldest rocks known to be 4.03 billion years old and collecting meteorites that have crashed on the planet, the age of the Earth is estimated to be between 4.4 and 4.5 billion years. During this time, we have seen that dinosaurs existed and became extinct after living on Earth for about 165 million years. Dinosaurs existed on this planet for so long that there were fossils of dinosaurs from previous epochs, while other dinosaurs from future epochs were still alive! Earth moves 34.8 times faster than the average horse. Earth moves through the solar system at a speed of 1,669.8 km/h, calculated by dividing Earth's equatorial circumference by 24 hours.",
            zemlja5:"Earth's rotation on its axis does not take 24 hours. Yes, it takes approximately 23 hours, 56 minutes, and 4 seconds. This rotation is relative to distant 'fixed' stars and is called a 'sidereal day.' But since the presence of the Sun has a greater impact on life on Earth, we use the closest star - solar distance, and our calendars and clocks are based on it. In addition, it takes Earth about 365.25 days to orbit the Sun, which is usually rounded to 365 days in a calendar year. To account for the partial day that is missing, one day is added to the calendar every four years, making it a leap year.",
            zemlja6:"Cosmos and Calculus: While contemplating the motion of Halley's Comet, Sir Isaac Newton realized that the mathematics used to describe the motion of massive bodies would not be sufficient to understand the vastness of the universe and cosmos. Newton continued to develop calculus to accurately explain the motion of Halley's Comet while also providing a mathematical model for all other celestial bodies moving in the sky. Nature on Earth and Fibonacci Sequences: Spiral patterns in sunflowers, pinecones, pineapples, and other patterns in nature follow the Fibonacci sequence, which begins with the numbers 1 and 1, and each subsequent number is obtained by adding the previous two numbers.",
            pocetna:"HOME",
            istorija:"HISTORY",
            zanimljivosti:"INTERESTING FACTS",
            onama:"ABOUT US",
            kontakt:"CONTACT",
            tplanete:"Terrestial planets",
            trio:"Planetary trio",
            divovi:"Ice giants and black holes",

            // Dodajte ostale prevode za engleski jezik ovdje
        },
        sr: { 
            zanimljivosti1:"Zanimljivosti",
            nas:"Naš solarni sistem",
            merkur:"MERKUR",
            merkur1:"Merkur: Merkur je najbliža planeta Suncu i ima najveći temperaturni raspon od svih planeta u Sunčevom sistemu. Tokom dana, temperatura na Merkuru može dosegnuti oko 430°C, dok noću padne na -180°C.",
            merkur2:"Merkur je najmanja planeta u Sunčevom sistemu i nema atmosferu. Njegova površina je prekrivena kraterima sličnim onima na Mjesecu. Merkur ima veoma sporu rotaciju; jedan Merkurov dan traje 59 Zemljinih dana.",
            merkur3:"Merkur, planeta najbliža suncu, samo je nešto veća od Zemljinog meseca i ispresecana je kraterima.Planeta je vidljiva golim okom i kao takva je odavno poznata ljudima. Prema Universe Todai, Sumerani su pominjali planetu još u 2. milenijumu pre nove ere (period koji se proteže od 2000. pre nove ere do 1001. pre nove ere), a Vavilonci su je nazvali planetom Nabu. Znamo ga po imenu koje su dali Rimljani, po njihovom brzonogom bogu glasniku Merkuriju. Planetu su prvi put posmatrali preko novoizmišljenog teleskopa 1631. godine od strane astronoma Galilea Galileia i Thomasa Harriota, prema NASA Science.Od svoje prve posete NASA-ine letelice Mariner 10 1974. godine, mala planeta je zaintrigirala naučnike. Bez sumnje će nas i dalje iznenađivati, posebno nakon što zajednička misija Evropske svemirske agencije (ESA) i Japanske agencije za istraživanje svemira (JAKSA) BepiColombo stigne na malu planetu krajem 2025.",
            merkur4:"Iako je Merkur najbliža planeta Suncu, njegova površina i dalje može biti izuzetno hladna, zahvaljujući nedostatku atmosfere koja zadržava toplotu. Temperatura tokom dana može da dostigne 800 stepeni Farenhajta (430 stepeni Celzijusa), ali noću temperature mogu pasti i do minus 290 F (minus 180 stepeni), prema NASA-i. Ta fluktuacija je jednaka temperaturnom kolebanju od oko 1100 F (600 C), najvećem od bilo koje planete u Sunčevom sistemu.",
            merkur5:"Merkur se kreće oko Sunca svakih 88 zemaljskih dana, jureći brzinom od skoro 47 kilometara u sekundi - brže od bilo koje druge planete u Sunčevom sistemu, prema NASA-i. Merkurova orbita nije samo veoma brza već i veoma eliptična. Planeta se približava Suncu čak 47 miliona km i čak 70 miliona km od Sunca. Merkur ima najtanju atmosferu od bilo koje planete u Sunčevom sistemu. Atmosfera je toliko tanka da naučnici imaju drugo ime za nju - egzosfera. Merkurova egzosfera se sastoji uglavnom od kiseonika, natrijuma, vodonika, helijuma i kalijuma, navodi NASA.",
            venera:"VENERA",
            venera1:"Zanimljive činjenice o Veneri:",
            venera2:"Dan na Veneri je duži od godine Veneri je potrebno duže da se jednom okrene oko svoje ose nego da završi jednu orbitu oko Sunca. To je 243 zemaljska dana da se jednom rotiraju najduža rotacija bilo koje planete u Sunčevom sistemu i samo 224,7 zemaljskih dana da se završi orbita oko Sunca. Venera je toplija od Merkura uprkos tome što je dalje od Sunca Njegova srednja temperatura je 462°C. To je zbog visoke koncentracije ugljen-dioksida u Venerinoj atmosferi, koja radi na stvaranju intenzivnog efekta staklene bašte. Toplota je zarobljena u atmosferi poput ćebeta, što dovodi do toga da temperatura planete bude mnogo viša nego što bi sugerisala njena blizina Suncu.",
            venera3:"Za razliku od drugih planeta u našem Sunčevom sistemu, Venera se okreće u smeru kazaljke na satu oko svoje ose Sve ostale planete se okreću suprotno smeru kazaljke na satu oko svoje ose i kruže oko Sunca u smeru suprotnom od kazaljke na satu. Venera takođe kruži oko Sunca u smeru suprotnom od kazaljke na satu, ali njena neuobičajena rotacija ose je zbog toga što je okrenuta naopačke ranije u svojoj istoriji bila je izbačena iz svog uspravnog položaja! Venera je drugi najsjajniji prirodni objekat na noćnom nebu posle Meseca Oblaci sumporne kiseline u atmosferi Venere čine je reflektujućom i sjajnom, zaklanjajući nam pogled na njenu površinu. Njegova svetlost čini ga vidljivim čak i tokom dana - ako je vedro i znate gde da tražite",
            venera4:"Venera ima 90 puta veći atmosferski pritisak od Zemljinog To je otprilike isto kao i pritisak koji se nalazi na dubini od 1 km u Zemljinim okeanima.Smatra se da je Venera dobila ime po prelepoj rimskoj boginji (pandan grčkoj Afroditi) zbog svog sjajnog, sjajnog izgleda na nebu. Od pet planeta poznatih drevnim astronomima, bila bi najsjajnija.",
            venera5:"Pošto je Veneru lako uočiti golim okom, nemoguće je reći ko je otkrio planetu. Ali tokom vekova bili smo u mogućnosti da izmerimo kretanje Venere, uključujući retki tranzit Venere, kada izgleda da planeta prelazi ispred Sunca. Prateći pravila latinskog, trebalo bi da kažemo „venerean“ kao pridev da opišemo stvari vezane za Veneru. Međutim, smatra se da je ovo suviše blisko reči „venerički“. Češće korišćena reč je „Venerina“ uprkos njenoj nezgrapnoj etimologiji.",
            zemlja:"ZEMLJA",
            zemlja1:"Zemlja je jedina poznata planeta koja podržava atmosferu sa slobodnim kiseonikom, vodom i najlepšim i vitalnim fenomenom koji je život. Planeta Zemlja je sfernog oblika, sa prosečnim radijusom od 6371 km.Prerežite ga na pola i lako ćete koristiti 3-D geometriju, paralelne geografske širine i dužinu luka da biste izračunali rastojanje između 2 zemlje na sferi. Zanimljivo je kako matematika povezuje sve što znamo o planeti i pomaže nam da se upoznamo sa raznim konceptima u geonaukama, nauci o životnoj sredini, ekologiji i još mnogo toga. Da nije matematike, i dalje bismo bili pod utiskom da ostajemo na jednoj od retkih planeta koje kruže oko zvezde u pozadini naizgled nepokretnih svetala.",
            zemlja2:"Ističući značaj matematike iza naše veličanstvene planete povodom Dana planete Zemlje i Meseca svesti o matematici i statistici, MANAN KHURMA, osnivač i predsednik Cuemath-a (program za učenje matematike na mreži), navodi sedam zanimljivih matematičkih činjenica o Zemlji.",
            zemlja3:"To je lopta sa masom i bez težine Zemljina masa je približno 5,97 × 1024 kg. Ili 6 sekstiliona tona. Pošto slobodno lebdi u svemiru, smatra se da ima samo masu i da nema težinu. Sastoji se uglavnom od gvožđa (32,1%), kiseonika (30,1%), silicijuma (15,1%), magnezijuma (13,9%), sumpora (2,9%), nikla (1,8%), kalcijuma (1,5%) i aluminijuma ( 1,4%), dok preostalih 1,2% čine količine drugih elemenata u tragovima. Plava planeta: 70% Zemljine površine je prekriveno vodom, a okeani drže oko 96,5% sve Zemljine vode. Zbog toga je planeta dobila nadimak „plava planeta“. Preostalih 30% planete čini čvrsta kora koja se nalazi iznad nivoa mora i naziva se „kontinentalna kora“.",
            zemlja4:"Živimo u kući staroj 4.543 milijarde godina.Čišćenjem najstarijih stena za koje je utvrđeno da su stare 4,03 milijarde godina i prikupljanjem meteorita koji su se srušili na planetu, starost Zemlje je data između 4,4 i 4,5 milijardi godina. Tokom ovog vremena, videli smo da dinosaurusi postoje i da su izumrli nakon što su živeli na Zemlji oko 165 miliona godina. Dinosaurusi su postojali na ovoj planeti toliko dugo da su postojali fosili dinosaurusa iz prethodnih epoha, dok su drugi dinosaurusi iz budućih epoha još bili živi!Zemlja se kreće 34,8 puta brže od prosečnog konja Zemlja se kreće kroz Sunčev sistem brzinom od 1.669,8 km/h, dobijenom deljenjem Zemljinog ekvatorijalnog obima sa 24 sata.",
            zemlja5:"Zemljina rotacija oko svoje ose ne traje 24 sata Da, potrebno je otprilike 23 sata, 56 minuta i 4 sekunde. Ova rotacija je u odnosu na udaljene „fiksne“ zvezde i naziva se „siderični dan“. Ali pošto postojanje Sunca ima veći uticaj na život na Zemlji, mi koristimo ovu najbližu zvezdu - solarnu udaljenost i na tome se zasnivaju naši kalendari i satovi. Pored toga, Zemlji je potrebno oko 365,25 dana da kruži oko Sunca, što se obično zaokružuje na 365 dana u kalendarskoj godini. Da bi se nadoknadio delimični dan koji nedostaje, jedan dan se dodaje u kalendar svake četiri godine, što ga čini prestupnom.",
            zemlja6:"Kosmos i račun:Dok je razmišljao o kretanju Halejeve komete, ser Isak Njutn je shvatio da matematika koja se koristi za opisivanje fizičkog kretanja masivnih tela neće biti dovoljna da bi se razumela prostranstva univerzuma i kosmosa. Njutn je nastavio sa razvojem Računa kako bi tačno objasnio kretanje Halejeve komete, dok je takođe objašnjavao matematički model svih drugih nebeskih tela koja su se kretala po nebu.Priroda na Zemlji i Fibonačijevi nizovi: Spiralni oblici suncokreta, šišarki, ananasa i drugih šara u prirodi prate Fibonačijev niz koji počinje brojevima 1 i 1, a zatim se svaki sledeći broj dobija sabiranjem prethodna dva broja.",
            pocetna:"POCETNA",
            istorija:"ISTORIJA",
            zanimljivosti:"ZANIMLJIVOSTI",
            onama:"O NAMA",
            kontakt:"KONTAKT",
            tplanete:"Teresticke planete",
            trio:"Planetarni trio",
            divovi:"Ledeni divovi i crne rupe",

            // Dodajte ostale prevode za srpski jezik ovdje
        }
    };

    const elementsToTranslate = {
        zanimljivosti1:document.querySelector('[data-translate="zanimljivosti1"]'),
        nas:document.querySelector('[data-translate="nas"]'),
        merkur: document.querySelector('[data-translate="merkur"]'),
        merkur1: document.querySelector('[data-translate="merkur1"]'),
        merkur2: document.querySelector('[data-translate="merkur2"]'),
        merkur3: document.querySelector('[data-translate="merkur3"]'),
        merkur4: document.querySelector('[data-translate="merkur4"]'),
        merkur5: document.querySelector('[data-translate="merkur5"]'),
        venera: document.querySelector('[data-translate="venera"]'),
        venera1: document.querySelector('[data-translate="venera1"]'),
        venera2: document.querySelector('[data-translate="venera2"]'),
        venera3: document.querySelector('[data-translate="venera3"]'),
        venera4: document.querySelector('[data-translate="venera4"]'),
        venera5: document.querySelector('[data-translate="venera5"]'),
        zemlja: document.querySelector('[data-translate="zemlja"]'),
        zemlja1: document.querySelector('[data-translate="zemlja1"]'),
        zemlja2: document.querySelector('[data-translate="zemlja2"]'),
        zemlja3: document.querySelector('[data-translate="zemlja3"]'),
        zemlja4: document.querySelector('[data-translate="zemlja4"]'),
        zemlja5: document.querySelector('[data-translate="zemlja5"]'),
        zemlja6: document.querySelector('[data-translate="zemlja6"]'),
       
        pocetna:document.querySelector('[data-translate="pocetna"]'),
        istorija:document.querySelector('[data-translate="istorija"]'),
        zanimljivosti:document.querySelector('[data-translate="zanimljivosti"]'),
        onama:document.querySelector('[data-translate="onama"]'),
        kontakt:document.querySelector('[data-translate="kontakt"]'),
        tplanete:document.querySelector('[data-translate="tplanete"]'),
        trio:document.querySelector('[data-translate="trio"]'),
        divovi:document.querySelector('[data-translate="divovi"]'),
        // Dodajte ostale elemente koje želite prevesti ovdje
    };

    for (const key in elementsToTranslate) {
        if (elementsToTranslate.hasOwnProperty(key)) {
            elementsToTranslate[key].textContent = translations[language][key];
        }
    }
}

// Inicijalna postavka prevoda na osnovu trenutno odabranog jezika
translatePage(languageSelect.value);
