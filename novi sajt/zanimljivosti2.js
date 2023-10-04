
const languageSelect = document.getElementById("languageSelect");

languageSelect.addEventListener("change", function() {
    const selectedLanguage = languageSelect.value;
    translatePage(selectedLanguage);
});

function translatePage(language) {
    const translations = {
        en: {
            mars:"MARS",
            mars1:"Mars is about 4.5 billion years old, and after forming from the dust and remnants of the early solar system, it likely had a thick atmosphere with clouds that somewhat resembled Earth. It is very possible that basic life existed on the surface of Mars at some point in the planet's early history.",
            mars2:"But now, all of that is gone. All that remains is a barren icy wasteland with an atmosphere too thin to insulate the planet, and any remaining liquid or life is buried deep underground. It is estimated that in the last four billion years, Mars has had temperatures below freezing, as determined by studying Martian meteorites that have reached Earth. The question is, what happened?",
            mars3:"We've determined that most of the gas that was ever present in Mars' atmosphere has been lost to space,said Bruce Jakosky, the principal investigator of the Mars Atmosphere spacecraft. Details of the team's latest findings were published today in the journal Science, and the research shows that a whopping 65 percent of the argon that was ever in Mars' atmosphere has been blown away into space. Mars is also known as the Red Planet. That's because Mars is covered in soil, rock, and dust made up of iron oxides, giving its surface a rusty red color.",
             mars4:"MARS",
            mars5:"Mars is the fourth planet from the Sun. It is located 227,936,637 kilometers from the Sun. It would take about 300 days (around 8 months) to reach it from Earth. Mars is smaller than Earth with a diameter of 4,217 miles. This makes it the second smallest planet in our solar system.",
            mars6:"A day on Mars lasts 24 hours and 37 minutes. One year on Mars lasts 687 days. That's 1.9 Earth years. This is because Mars is farther from the Sun, so it takes more time to orbit around it. Mars has a thin atmosphere made up of 95.9% carbon dioxide and 2.7% nitrogen. The atmosphere is so thin that it doesn't trap solar heat well, making it very cold, ranging from -100℃ in winter to 20℃ in summer",
            mars7:"Mars has very weak gravity. The gravity on Mars is 37% less than on Earth. This means you can jump three times higher on Mars than on Earth. Mars is a terrestrial planet because it has a solid, rocky surface. Its northern side is full of flat plains, while the southern side has ridges and craters. The surface of Mars has many channels, plains, and canyons that could have been caused by water erosion (water wearing away the surface). This could be evidence that liquid water once existed on the surface billions of years ago.",
            mars8:"Being so close to Earth, Mars is likely the planet that humans will step foot on and explore first",
           
          jupiter:"JUPITER", 
          jupiter1:"Jupiter is appropriately named after the king of the gods. It's enormous, has a strong magnetic field, and more moons than any other planet in the solar system. Although it has been known to astronomers for a long time, the discovery of telescopes and the advent of modern astronomy have taught us so much about this gas giant. In short, there are countless fascinating facts about this gas giant that many people simply don't know. And we here at Universe Today have taken the liberty of compiling a list of ten especially interesting ones that we think will fascinate and surprise you. Think you know everything about Jupiter? Think again!", 
          jupiter2:"Jupiter is massive: It's no secret that Jupiter is the largest planet in the solar system. But this description doesn't really do it justice. For example, Jupiter's mass is 318 times that of Earth. In fact, Jupiter is 2.5 times more massive than all the other planets in the solar system combined. But here's what's really interesting...", 
          jupiter3:"Jupiter is the largest planet in our solar system, with 2.5 times the mass of all the other planets combined. If Jupiter were to gain more mass, it would actually become smaller. Additional mass would make the planet denser, causing it to start collapsing in on itself. Astronomers estimate that Jupiter could have four times its current mass and still remain roughly the same size.", 
          jupiter4:"Jupiter can't become a star: Astronomers sometimes call Jupiter a failed star, but that's not quite an accurate description. While it's true that, like a star, Jupiter is rich in hydrogen and helium, Jupiter doesn't have nearly enough mass to initiate the fusion reaction in its core. This is how stars generate energy by fusing hydrogen atoms under extreme heat and pressure to create helium, releasing light and heat in the process.", 
          jupiter5:"This is made possible by their immense weight. For Jupiter to ignite the process of nuclear fusion and become a star, it would need more than 70 times its current mass. If you could combine dozens of Jupiters together, you might have a shot at creating a new star. But in the meantime, Jupiter will remain a large gas giant with no hope of becoming a star. Sorry, Jupiter!", 
          jupiter6:"Jupiter is the fastest-spinning planet in the solar system: Despite its size and mass, Jupiter rotates rapidly. In fact, with a rotational speed of 12.6 kilometers per second (~7.45 meters per second) or 45,300 kilometers per hour (28,148 mph), the planet takes only about 10 hours to complete a full rotation on its axis. And since it rotates so quickly, the planet is slightly flattened at the poles and bulging at its equator. In fact, points on Jupiter's equator are more than 4,600 kilometers farther from the center than at the poles. In other words, the polar radius of the planet measures 66,854 ± 10 kilometers (or 10,517 Earth's), while its equatorial diameter is 71,492 ± 4 kilometers (or 11,209 Earth's). This rapid rotation also contributes to the creation of Jupiter's powerful magnetic fields and contributes to the dangerous radiation surrounding it.", 
           saturn:"",
           saturn1:"Saturn's rings are composed of millions of icy particles orbiting the planet. Saturn is less dense than water, making it float in water.",
           saturn2:"Saturn is a gas giant. Unlike Earth, it lacks a solid surface. In fact, its surface is primarily made up of helium, the same gas you find in birthday balloons.",
           saturn3:"Saturn's rings are enormous. The main rings are at the same distance as from Earth to the Moon. The incredible rings around Saturn are not solid; they consist of bits of ice, dust, and rocks. Some of these pieces are smaller than grains of sand, while others are taller than skyscrapers! Saturn experiences very high winds. Winds around Saturn's equator can reach speeds of 1,800 kilometers per hour. The fastest wind ever recorded on Earth was 407 kilometers per hour.",
           saturn4:"SATURN",
           saturn5:"Saturn can be seen through a telescope. Since it's visible in the night sky, Saturn was known to ancient civilizations, including the Babylonians. Saturn has more moons than any other planet in the solar system, with 82 confirmed moons. There are likely more yet to be discovered. Imagine how incredible it would be to gaze at the night sky from there!",
           saturn6:"Saturn has a moon larger than Mercury. Saturn's largest moon is called Titan, and it's so large that it's actually bigger than Mercury. A day on Saturn lasts only 10.7 hours, while a year is equivalent to 29 Earth years. Saturn revolves around the Sun once every 29 Earth years, making a Saturnian year 29 Earth years long.",
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
            mars:"MARS",
            mars1:"Mars je star oko 4,5 milijardi godina, a nakon što se formirao od prašine i ostataka ranog Sunčevog sistema, verovatno je imao lepu gustu atmosferu sa oblacima koji su pomalo ličili na Zemlju. Vrlo je moguće da je osnovni život postojao na površini Marsa negde u ranoj istoriji planete.",
            mars2:"Ali sada je sve to nestalo. Sve što je ostalo je pusta ledena pustoš sa atmosferom suviše tankom da bi izolovala planetu, a svaka preostala tečnost ili život je odbačen duboko pod zemlju. Pretpostavlja se da je u poslednje četiri milijarde godina Mars imao temperaturu okoline ispod nule, što je utvrđeno proučavanjem marsovskih meteorita koji su stigli do Zemlje. Pitanje je šta se dogodilo?",
            mars3:"„Utvrdili smo da je većina gasa ikada prisutnog u atmosferi Marsa izgubljena u svemiru“, rekao je Brus Jakoski , glavni istraživač svemirske letelice Mars Atmosphere. Rad sa detaljima o najnovijim nalazima tima objavljen je danas u časopisu Science, a istraživanje pokazuje da je ogromnih 65 posto argona koji je ikada bio u Marsovoj atmosferi izduvano u svemir. Mars je poznat i kao Crvena planeta. To je zato što je Mars prekriven zemljom, stenom i prašinom napravljenom od oksida gvožđa koji površini daje crvenu zarđalu boju.",
            mars4:"MARS",
            mars5:"Mars je 4. planeta od Sunca. Udaljeno je 227,936,637 km od sunca. Bilo bi potrebno 300 dana (oko 8 meseci) da se stigne tamo sa Zemlje. Mars je manji od Zemlje sa prečnikom od 4217 milja. To je čini drugom najmanjom planetom u našem Sunčevom sistemu.",
            mars6:"Dan na Marsu traje 24 sata i 37 minuta. Jedna godina na Marsu traje 687 dana. To je 1,9 zemaljskih godina. To je zato što je Mars udaljeniji od Sunca pa mu je potrebno više vremena da kruži oko njega. Nagib na osi Marsa je 25 stepeni, što znači da planeta doživljava godišnja doba kao i mi na Zemlji jer su različiti delovi planete bliži suncu u različitim vremenima njegove orbite. Mars ima tanku atmosferu napravljenu od 95,9% ugljen-dioksida i 2,7% azota. Atmosfera je toliko tanka da nije dovoljno gusta da zadrži sunčevu toplotu pa je veoma hladna - u rasponu od -100℃ zimi do 20℃ leti.",
            mars7:"Mars ima veoma slabu gravitaciju. Gravitacija na Marsu je 37% manja nego na Zemlji. To znači da na Marsu možete skočiti 3 puta više nego na Zemlji. Mars je zemaljska planeta jer ima tvrdu i stenovitu površinu. Njena severna strana je puna ravnih ravnica, a južna ima grebene i kratere. Površina Marsa ima mnogo kanala, ravnica i kanjona koji su mogli biti uzrokovani erozijom vode (voda koja istroši površinu). Ovo bi mogao biti dokaz da je otvorena voda u tečnom obliku nekada postojala na površini pre više milijardi godina.",
            mars8:"Pošto je tako blizu Zemlji, Mars je planeta na koju će ljudi najverovatnije zakoračiti i prvo istražiti.",
          jupiter:"JUPITER", 
          jupiter1:"Jupiter je dobio odgovarajuće ime po kralju bogova. Ogroman je, ima snažno magnetno polje i više meseci od bilo koje planete u Sunčevom sistemu. Iako je astronomima poznat od davnina, pronalazak teleskopa i pojava moderne astronomije naučili su nas toliko o ovom gasnom divu. Ukratko, postoji bezbroj zanimljivih činjenica o ovom gasnom gigantu za koje mnogi ljudi jednostavno ne znaju. A mi ovde u Universe Todai-u smo uzeli slobodu da sastavimo listu od deset posebno zanimljivih za koje mislimo da će vas fascinirati i iznenaditi. Mislite da znate sve o Jupiteru? Razmisli ponovo!", 
          jupiter2:"Jupiter je masivan: Nije tajna da je Jupiter najveća planeta u Sunčevom sistemu. Ali ovaj opis to zaista ne čini pravdu. Na primer, masa Jupitera je 318 puta veća od Zemlje. U stvari, Jupiter je 2,5 puta masivniji od svih ostalih planeta u Sunčevom sistemu zajedno. Ali evo šta je zaista zanimljivo…", 
          jupiter3:"Jupiter je najveća planeta u našem Sunčevom sistemu, sa 2,5 puta većom masom od svih ostalih planeta zajedno. Ako bi Jupiter postao masivniji, zapravo bi postao manji. Dodatna masa bi zapravo učinila planetu gustijom, što bi dovelo do toga da počne da je uvlači u sebe. Astronomi procenjuju da bi Jupiter mogao da ima 4 puta veću masu od sadašnje, a da i dalje ostane približno iste veličine.", 
          jupiter4:"Jupiter ne može postati zvezda: Astronomi nazivaju Jupiter propalom zvezdom, ali to baš i nije odgovarajući opis. Iako je tačno da je, poput zvezde, Jupiter bogat vodonikom i helijumom, Jupiter nema ni približno dovoljno mase da izazove reakciju fuzije u svom jezgru. Ovako zvezde generišu energiju spajanjem atoma vodonika pod ekstremnom toplotom i pritiskom da bi stvorile helijum, oslobađajući svetlost i toplotu u procesu.", 
          jupiter5:"To je omogućeno njihovom ogromnom težinom. Da bi Jupiter zapalio proces nuklearne fuzije i postao zvezda, trebalo bi mu više od 70 puta više od njegove trenutne mase. Ako biste mogli da srušite desetine Jupitera zajedno, možda biste imali priliku da napravite novu zvezdu. Ali u međuvremenu, Jupiter će ostati veliki gasni gigant bez nade da će postati zvezda. Izvini, Jupiteru!", 
          jupiter6:"Jupiter je planeta koja se najbrže okreće u Sunčevom sistemu: Bez obzira na svoju veličinu i masu, Jupiter se sigurno kreće brzo. U stvari, sa brzinom rotacije od 12,6 km/s (~7,45 m/s) ili 45,300 km/h (28,148 mph), planeti je potrebno samo oko 10 sati da završi punu rotaciju oko svoje ose. I pošto se okreće tako brzo, planeta se malo spljoštila na polovima i ispupčena je na svom ekvatoru. U stvari, tačke na Jupiterovom ekvatoru su više od 4.600 km dalje od centra od polova. Ili drugačije rečeno, polarni radijus planete meri 66.854 ± 10 km (ili 10.517 Zemljinog), dok je njen prečnik na ekvatoru 71.492 ± 4 km (ili 11.209 Zemljinog). Ova brza rotacija takođe pomaže u stvaranju Jupiterovih moćnih magnetnih polja i doprinosi opasnom zračenju koje ga okružuje.",
           saturn:"SATURN",
           saturn1:"Saturnovi prstenovi su sastavljeni od miliona ledenih čestica koje kruže oko planete. Saturn je manje gust od vode, što ga čini plutajućim u vodi.",
           saturn2:"Saturn je gasni džin. To znači da za razliku od Zemlje nema čvrstu površinu. U stvari, njegova površina je uglavnom napravljena od helijuma, istog gasa koji nalazite u rođendanskim balonima.",
           saturn3:"Prstenovi na Saturnu su ogromni. Glavni prstenovi su na istoj udaljenosti kao od Zemlje do Meseca. Neverovatni prstenovi oko Saturna nisu čvrsti. Sastoje se od komadića leda, prašine i kamenja. Neki od ovih komada su manji od zrna peska, dok su drugi viši od nebodera! Na Saturnu je veoma vetrovito. Vetrovi oko Saturnovog ekvatora mogu biti 1.800 kilometara na sat. Najbrži ikada zabeleženi vetar na Zemlji bio je 407 kilometara na sat.",
           saturn4:"SATURN",
           saturn5:"Saturn možete videti kroz teleskop. Pošto se može videti na nebu, Saturn je bio poznat drevnim civilizacijama, uključujući i Vavilonce. Saturn ima više meseci nego bilo koja druga planeta u Sunčevom sistemu Saturn ima 82 potvrđena meseca. Verovatno ima još toga što još nismo otkrili.Kako bi bilo neverovatno gledati noćno nebo odatle?!",
           saturn6:"Saturn ima mesec veći od Merkura Najveći Saturnov mesec se zove Titan - toliko je velik da je zapravo veći od Merkura. Dan na Saturnu traje samo 10,7 sati, a godina 29 zemaljskih godina Dan na Saturnu je mnogo brži od dana na Zemlji. Saturnu je potrebno samo 10,7 sati da se jednom okrene, ovako se meri dan. Saturn kruži oko Sunca jednom u 29 zemaljskih godina - to znači da godina na Saturnu iznosi 29 zemaljskih godina.",
           
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
        mars: document.querySelector('[data-translate="mars"]'),
        mars1: document.querySelector('[data-translate="mars1"]'),
        mars2: document.querySelector('[data-translate="mars2"]'),
        mars3: document.querySelector('[data-translate="mars3"]'),
        mars4: document.querySelector('[data-translate="mars4"]'),
        mars5: document.querySelector('[data-translate="mars5"]'),
        mars6: document.querySelector('[data-translate="mars6"]'),
        mars7: document.querySelector('[data-translate="mars7"]'),
        jupiter1: document.querySelector('[data-translate="jupiter"]'),
        jupiter2: document.querySelector('[data-translate="jupiter1"]'),
        jupiter3: document.querySelector('[data-translate="jupiter2"]'),
        jupiter4: document.querySelector('[data-translate="jupiter3"]'),
        jupiter5: document.querySelector('[data-translate="jupiter4"]'),
        jupiter6: document.querySelector('[data-translate="jupiter5"]'),
        jupiter: document.querySelector('[data-translate="jupiter6"]'),
        saturn: document.querySelector('[data-translate="saturn"]'),
        saturn1: document.querySelector('[data-translate="saturn1"]'),
        saturn2: document.querySelector('[data-translate="saturn2"]'),
        saturn3: document.querySelector('[data-translate="saturn3"]'),
        saturn4: document.querySelector('[data-translate="saturn4"]'),
        saturn5: document.querySelector('[data-translate="saturn5"]'),
        saturn6: document.querySelector('[data-translate="saturn6"]'),
      
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
