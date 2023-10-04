
const languageSelect = document.getElementById("languageSelect");

languageSelect.addEventListener("change", function() {
    const selectedLanguage = languageSelect.value;
    translatePage(selectedLanguage);
});

function translatePage(language) {
    const translations = {
        en: {
            uran:" Fiery Extremes",
            uran1:"First, we arrive at Uranus, a planet that is literally on its side. No, really! Uranus is the only planet in the Solar System that rotates almost horizontally, almost as if it's lying on its side while orbiting the Sun. This unusual rotation makes Uranus unique and mysterious. Uranus is also known for its extremely cold temperatures, although it's not the coldest planet. If we were to stand on Uranus' surface, we would feel winds blowing at speeds of nearly 900 km/h, making it the planet with the strongest winds in the entire Solar System. Uranus is a true star when it comes to extreme physics!",
            neptun:" Icy Lover",
            neptun1:"As we move away from Uranus, we reach Neptune, the last planet in the Solar System. Neptune is a true icy lover, shrouded in thick layers of gases and ice. Its atmosphere is full of secrets, including the fastest winds in the entire Solar System, reaching speeds of over 2,000 km/h. What makes Neptune special are its rings, which are among the most beautiful in the entire Solar System. These elegant rings add extra sparkle to this icy giant and make it a true gem among planets.",
            pluton:" Mysterious Dwarf",
            pluton1:"Finally, we arrive at Pluto, once the ninth planet in the Solar System, now classified as a dwarf planet. Pluto has long been a source of debate and intrigue for astronomers worldwide. Although small compared to other planets, Pluto is full of mysteries. It has five known moons, including Charon, which is almost half the size of Pluto itself. This is the only dwarf planet system in the Solar System where the dwarf is almost the same size as its moon. Pluto also has a heart of ice, an area with large reservoirs of nitrogen. Uranus, Neptune, and Pluto are just some of the members of this diverse family of planets, dwarfs, and asteroids that make our Solar System so exciting. As we continue to explore and discover new facts about these celestial bodies, we can't help but marvel at the wonders hidden in the endless expanses of space.",
            rupe:"The Exciting World of Black Holes",
            rupe1:"In the depths of the infinite universe, where light disappears, and time loses its meaning, lies one of the most fascinating mysteries of the cosmos - black holes. These enigmatic and unfathomable formations are often described as cosmic whirlpools where gravity becomes so strong that not even light can escape. While black holes evoke awe and curiosity, they are also mysterious gateways to unknown cosmic dimensions. Black holes are formed as a result of the collapse of massive stars. When a star exhausts its nuclear fuel, the gravitational pressure that balanced the internal pressure and external gravity becomes irresistible. The star collapses under its own weight, creating a black hole at its center. This black hole becomes a dark, hidden region in space from which nothing can escape.",
            rupe2:"According to Einstein's theory of general relativity, spacetime is more than just a rigid stage where the physics of the Universe plays out; it actually gets involved in the action. Massive objects, such as planets and stars, can distort the very fabric of spacetime, much like a heavy object placed on a mattress distorts the mattress. Gravity, which we experience as a force, is the result of the curvature of spacetime. Massive bodies like the Sun create a dip in spacetime, bending the path and visibly attracting less massive bodies like Earth. Black holes form when the curvature of spacetime becomes extreme (such as when a very massive star collapses to occupy a very small region of space). Gravity then becomes so strong that nothing, not even light, can escape from the region. Hence the name 'black hole.' All of this is theoretical, but until recently, there was still a lack of direct evidence of the existence of black holes. Physicists believed they existed but couldn't be certain. It's impossible to truly see black holes (after all, they are black), but one way to detect them is by observing their effects on spacetime. Just as a massive object moving through a lake creates ripples in the water, a massive object like a black hole moving through spacetime also creates waves.",
            rupe3:"Effects of Black Holes",
            rupe4:"Black holes are true cosmic monsters. Their gravity is so strong that even light has to overcome their overwhelming force to escape. This is known as the event horizon, the point of no return. Additionally, black holes have the power to warp both space and time, creating strange phenomena such as time loops and the gravitational bending of light - effects predicted by Albert Einstein in his theory of relativity. Black Holes: Keys to Understanding the Universe. Despite sounding terrifying, black holes are also key to understanding many aspects of the universe. Astronomers study them to understand how stars evolve and die. They also play a crucial role in the evolution of galaxies, as black holes are found at the centers of many galaxies, including our Milky Way. Black Holes: Bridges to the Unknown. Recent research suggests that black holes could serve as a kind of bridge to other parts of the universe. The concept of black holes as passages through space, known as a black hole bridge or Einstein-Rosen bridge, opens up possibilities for traveling between different parts of the universe in a way that is astounding even in science fiction. In conclusion, black holes represent one of the most mysterious and intriguing aspects of the cosmos. While they are dark and opaque, their fascination continues to grow as technology and scientific understanding of the universe advance. As we strive to comprehend these swirling abysses in space and time, black holes remain one of the most exciting and challenging mysteries of the universe waiting to be uncovered.",
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
            uran:"Uran: Vatreni Ekstremi",
            uran1:"Prvo stižemo do Urana, planete koja je doslovno na glavi. Ne, stvarno! Uran je jedina planeta u Sunčevom sistemu koja rotira gotovo horizontalno, gotovo kao da leži na boku dok se vrti oko Sunca. Ova nesvakidašnja rotacija čini Uran jedinstvenim i misterioznim mestom. Uran je takođe poznat po svojim izuzetno hladnim temperaturama, iako nije najhladniji planet. Kada bismo stali na Uranovu površinu, osetili bismo vetrove koji duvaju brzinama od gotovo 900 km/h, što ga čini planetom sa najjačim vetrovima u celom Sunčevom sistemu. Uran je prava zvezda kada je u pitanju ekstremna fizika!",
            neptun:"Neptun: Ledni Ljubavnik",
            neptun1:"Dok se udaljavamo od Urana, stižemo do Neptuna, poslednje planete u Sunčevom sistemu. Neptun je pravi ledeni ljubavnik, obavijen debelim slojevima gasova i leda. Njegova atmosfera je prepuna tajni, uključujući najbrže vetrove u celom Sunčevom sistemu, koji dostižu brzine preko 2.000 km/h. Ono što čini Neptun posebnim su njegovi prstenovi, koji su među najlepšim u celom Sunčevom sistemu. Ovi elegantni prstenovi dodaju dodatni sjaj ovom lednom divu i čine ga pravim draguljem među planetama.",
            pluton:"Pluton: Tajanstveni Patuljak",
            pluton1:"Napokon, stižemo do Plutona, nekadašnjeg devetog planeta u Sunčevom sistemu, koja je sada klasifikovana kao patuljak. Pluton je dugo vremena bio izvor debate i intrigirao astronome širom sveta. Iako je mali u poređenju sa ostalim planetama, Pluton je prepun tajni. Ima pet poznatih meseca, uključujući Charon, koji je gotovo polovinu veličine Plutona. Ovo je jedini sistem patuljka u Sunčevom sistemu u kojem je patuljak gotovo iste veličine kao i njegov mesec. Pluton takođe ima ledeno srce, što je područje sa velikim rezervoarima azota. Uran, Neptun i Pluton su samo neki od članova ove raznolike porodice planeta, patuljaka i asteroida koji čine naš Sunčev sistem tako uzbudljivim. Dok nastavljamo istraživati i otkrivati nove činjenice o ovim nebeskim telima, ne možemo se ne diviti čudima koja se kriju u beskrajnim prostranstvima kosmosa.",
            rupe:"Uzbudljivi svet crnih rupa",
            rupe1:"U dubinama beskrajnog svemira, tamo gdje svjetlost nestaje i vrijeme gubi svoje značenje, leže jedna od najfascinantnijih tajni svemira - crne rupe. Ove enigmatične i nepojmljive formacije često se opisuju kao svemirske vrtložne jame, gdje gravitacija postaje tako snažna da čak ni svjetlost ne može pobjeći. Dok crne rupe izazivaju strahopoštovanje i znatiželju, one su i misteriozna vrata u nepoznate svemirske dimenzije. Crne rupe nastaju kao posljedica kolapsa masivnih zvijezda. Kada zvijezda potroši svoje nuklearno gorivo, gravitacijski pritisak koji je održavao ravnotežu između unutarnjeg pritiska i vanjske gravitacije postaje neodoljiv. Zvijezda se sruši pod vlastitom težinom, stvarajući crnu rupu u svojem središtu. Ova crna rupa postaje tamna, skrivena regija u svemiru iz koje ništa ne može pobjeći.",
            rupe2:"Prema Ajnštajnovoj opštoj teoriji relativnosti, prostor-vreme je više od krute pozornice na kojoj se igra fizika Univerzuma: ono se zapravo uključuje u akciju. Masivna tela, kao što su planete i zvezde, mogu iskriviti samu tkaninu prostor-vremena, baš kao što težak predmet postavljen na dušek iskrivljuje dušek. Gravitacija, koju doživljavamo kao silu, rezultat je zakrivljenosti prostora i vremena. Masivno telo poput Sunca stvara pad u prostor-vremenu, skrećući tako put i očigledno privlačeći manje masivna tela poput Zemlje. Crne rupe nastaju kada zakrivljenost prostor-vremena postane ekstremna (na primer kada se veoma masivna zvezda kolabira da bi zauzela veoma mali deo prostora). Gravitacija tada postaje toliko jaka da ništa, čak ni svetlost, ne može pobeći iz regiona. Otuda i naziv crna rupa. Sve je to po teoriji, ali do juče su još uvek nedostajali direktni dokazi o postojanju crnih rupa. Fizičari su verovali da postoje, ali nisu mogli biti sigurni. Nemoguće je zaista videti crne rupe (na kraju krajeva, one su crne), ali jedan od načina da ih se otkrije je posmatranje njihovog uticaja na prostor-vreme. Baš kao što će masivni objekat koji se kreće u jezeru stvarati talase u vodi, tako će i masivni objekat, poput crne rupe, koji se kreće u prostor-vremenu, takođe stvarati talase.",
            rupe3:"Efekti Crnih Rupa",
            rupe4:"Crne rupe su prava svemirska čudovišta. Njihova gravitacija je tako snažna da čak i svjetlost mora savladati nadmoćnu silu kako bi izašla iz njih. Ovo je poznato kao horizont događaja, tačka s koje ništa ne može izaći. Osim toga, crne rupe imaju i moć povijanja svemirske tvari i vremena, stvarajući čudne fenomene kao što su vremenski vrtlozi i pojačano gravitaciono povijanje svjetlosti - efekte koje je predvidio Albert Einstein u svojoj teoriji relativnost. Crne Rupe: Ključ za Razumijevanje Svemira. Iako crne rupe zvuče zastrašujuće, one su također ključ za razumijevanje mnogih aspekata svemira. Astronomi ih proučavaju kako bi shvatili kako zvijezde evoluiraju i umiru. Također igraju ključnu ulogu u evoluciji galaksija, jer se crne rupe nalaze u središtima mnogih galaksija, uključujući i našu Mliječnu stazu.Crne Rupe: Most prema Nepoznatom. Najnovija istraživanja sugeriraju da bi crne rupe mogle služiti kao svojevrsni most prema drugim dijelovima svemira. Koncept crnih rupa kao prolaza kroz svemir, poznat kao crni rupski most ili Einstein-Rosen most, otvara mogućnosti za putovanje između različitih dijelova svemira na način koji je nevjerojatan čak i u znanstvenoj fantastici.U zaključku, crne rupe predstavljaju jedan od najmisterioznijih i najintrigantnijih aspekata svemira. Iako su tamne i neprozirne, njihova fascinacija ne prestaje rasti kako tehnologija i znanstveno razumijevanje svemira napreduju. Dok pokušavamo razumjeti ove vrtložne jame u prostoru i vremenu, crne rupe ostaju jedna od najuzbudljivijih i najizazovnijih tajni svemira koje čekaju da budu otkrivene.",

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
        uran: document.querySelector('[data-translate="uran"]'),
        uran1: document.querySelector('[data-translate="uran1"]'),
        neptun: document.querySelector('[data-translate="neptun"]'),
        neptun1: document.querySelector('[data-translate="neptun1"]'),
        pluton: document.querySelector('[data-translate="pluton"]'),
        pluton1: document.querySelector('[data-translate="pluton1"]'),
        rupe: document.querySelector('[data-translate="rupe"]'),
        rupe1: document.querySelector('[data-translate="rupe1"]'),
        rupe2: document.querySelector('[data-translate="rupe2"]'),
        rupe3: document.querySelector('[data-translate="rupe3"]'),
        rupe4: document.querySelector('[data-translate="rupe4"]'),
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
