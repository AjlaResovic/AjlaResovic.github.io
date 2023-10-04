

const languageSelect = document.getElementById("languageSelect");

languageSelect.addEventListener("change", function() {
    const selectedLanguage = languageSelect.value;
    translatePage(selectedLanguage);
});

function translatePage(language) {
    const translations = {
        en: {
            istorijaastro: "The History of Mathematics in Astronomy: Stars, Planets, and Numbers",
            astronomija: "Astronomy and mathematics have intertwined throughout the centuries, creating a fascinating story of our understanding of the cosmos. This symbiosis has enabled astronomers to precisely track the movement of planets, predict eclipses, and delve deeper into the secrets of the universe.",
            zbogcega: "Why do the planets of the Solar System lie in the same plane?",
            odgovor: "To answer this question, we must travel back to the very beginning of the formation of the Solar System, 4.5 billion years ago.",
            model: "If you've ever looked at a model of the Solar System, you've probably noticed that the Sun, planets, moons, and asteroids lie roughly in the same plane. Why is that? To answer this question, we must travel back to the very beginning of the formation of the Solar System, 4.5 billion years ago. That was a time when the Solar System was just a massive cloud of dust and gas spinning around,said Nejdar Hagigipur, an astronomer from the University of Hawaii. This massive cloud had a width of 12,000 astronomical units (1 AU is equal to the average distance between Earth and the Sun, or about 150 million kilometers). The cloud became so large that, even though it was filled with only dust and gas molecules, it began to collapse and shrink under its own mass, Hagigipur explained. As the rotating cloud of dust and gas started to collapse, it simultaneously flattened. For example, imagine how a pizza maker tosses dough into the air. As it spins, the dough spreads out but becomes thinner and flatter. That's exactly what happened to the young Solar System, the scientist says. In the meantime, at the center of this increasingly flattened cloud, all those gas molecules became so compressed that they heated up,Hagigipur said.",
            model: "As the rotating cloud of dust and gas started to collapse, it simultaneously flattened. For example, imagine how a pizza maker tosses dough into the air. As it spins, the dough spreads out but becomes thinner and flatter. That's exactly what happened to the young Solar System, the scientist says. In the meantime, at the center of this increasingly flattened cloud, all those gas molecules became so compressed that they heated up,Hagigipur said. In that heat and under pressure, hydrogen and helium atoms fused and initiated a nuclear reaction that lasted for a billion years and shaped the baby star: the Sun. Over the next 50 million years, the Sun continued to grow, collecting gas and dust from its surroundings while emitting waves of intense heat and radiation. The growing Sun gradually cleared the space around it. As the Sun grew, the cloud continued to collapse, forming a disk around the star that became flatter and wider,Hagigipur said. Eventually, the cloud became a flat structure called a protoplanetary disk, which circled the young star. Tens of millions of years later, the dust particles in the protoplanetary disk began to swirl, occasionally colliding with each other. Some even stuck together. And over several million years, those particles became millimeters long, and those grains became centimeter-sized pebbles, and the pebbles continued to collide and stick together. Eventually, most of the material in the protoplanetary disk clumped together and formed large objects. Some of these objects became so large that gravity shaped them into spherical planets, dwarf planets, and moons. Other objects took irregular shapes, like asteroids, comets, and some small moons. Despite the different sizes of these objects, they remained more or less in the same plane, from which their building material originated. That's why even today, eight planets of the Solar System and other celestial bodies orbit in roughly the same plane.",
            antika: "Antiquity: Early Astronomers and Basic Geometric Skills",
            drevno: "In ancient civilizations like Babylon and Egypt, astronomers tracked the movements of the heavens and developed basic geometric techniques for measuring distances and sizes of objects. Using mathematics to calculate the length of day and night, as well as predicting eclipses, became crucial for timekeeping and religious ceremonies.",
            pitagorejci: "Pythagoreans: The Sound of Spheres and Numerical Harmony",
            grcki: "The Greek philosopher Pythagoras and his followers believed in the numerical harmony of the universe. They believed that the motion of planets could be described using mathematical relationships and proportions, paving the way for modern astrophysics.",
            kepler: "Kepler: Laws of Planetary Motion",
            johanes: "Johannes Kepler formulated three laws of planetary motion in the 17th century, foundational for understanding how planets orbit the Sun. His mathematical models based on ellipses and trigonometry advanced astronomy and enabled precise predictions of planetary positions.",
            njutn: "Newton: Gravity and the Law of Universal Gravitation",
            isaac: "Isaac Newton, through his work on the laws of motion and gravity, created a mathematical framework for understanding not only the motion of planets but also all objects in the universe. His law of universal gravitation allowed for precise calculations of celestial body movements.",
            ajnstajn: "Einstein: Theory of Relativity and Modern Astronomical Mathematics",
            vek: "In the 20th century, Albert Einstein added a new dimension to astronomy with his theory of relativity. This theory predicts the motion of light and gravitational effects with remarkable precision, crucial for modern observational and measurement methods in astronomy.",
            danas: "Today, mathematics plays a crucial role in all branches of astronomy. From studying cosmic microwave background radiation to analyzing spectral lines and calculating the trajectories of space probes, mathematical tools enable astronomers to explore the mysteries of the universe. While instruments and technology have changed dramatically over the centuries, mathematics remains the timeless language of the cosmos, helping us understand our place in the vast universe and uncover the wonders that surround us. Without mathematics, our ability to unravel the secrets of the universe would be severely limited, while the combination of astronomy and mathematics allows us to delve into the infinite depths of space.",
            igra:"Today, mathematics plays an indispensable role in all branches of astronomy. From studying cosmic microwave background radiation and analyzing spectral lines to calculating the trajectories of space probes, mathematical tools enable astronomers to explore the secrets of the universe in ways previous generations could not even imagine. While telescopes and technology have dramatically changed over the centuries, mathematics remains the timeless language of the cosmos, helping us understand our place in the infinite universe and discover the wonders that surround us. Without mathematics, our ability to unravel the secrets of the universe would be severely limited, while the combination of astronomy and mathematics allows us to explore the boundless depths of cosmic space.",
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
            istorijaastro:"Istorija Matematike u Astronomiji: Zvezde, Planete i Brojevi",
            astronomija:"Astronomija i matematika su se međusobno isprepletale kroz vekove, stvarajući fascinantnu priču o našem razumevanju kosmosa. Ova simbioza je omogućila astronomima da precizno prate kretanje planeta, predviđaju pomračenja, i dublje proniknu u tajne svemira.",
            zbogcega:"Zbog čega planete Sunčevog sistema leže u istoj ravni?",
            odgovor:"Da bismo odgovorili na ovo pitanje, moramo da otputujemo na sam početak stvaranja Sunčevog sistema, 4,5 milijardi godina unazad.",
            model: "Ako ste ikada gledali model Sunčevog sistema, verovatno ste primetili da Sunce, planete, meseci i asteroidi leže otprilike na istoj ravni.  Zbog čega je to tako? Da bismo odgovorili na ovo pitanje, moramo da otputujemo na sam početak stvaranja Sunčevog sistema, 4,5 milijardi godina unazad. To je bilo vreme kada je Sunčev sistem bio samo ogroman oblak prašine i gasa koji se okretao, rekao je za Live Science Nejdar Hagigipur, astronom sa Univerziteta na Havajima. Taj masivni oblak imao je 12.000 astronomskih jedinica po širini (1 AJ jednaka je prosečnoj udaljenosti između Zemlje i Sunca, ili oko 150 miliona kilometara). Taj oblak je postao toliko veliki da je, iako je bio ispunjen samo molekulima prašine i gasa, počeo da se urušava i smanjuje pod sopstvenom masom, rekao je Hagigipur. Kako je rotirajući oblak prašine i gasa počeo da se urušava, on se istovremeno spljoštio. Na primer, zamislite kako majstor za picu baca testo u vazduh. Dok se okreće, testo se širi, ali postaje sve tanje i ravnije. Upravo to se dogodilo mladom Sunčevom sistemu, kaže naučnik.U međuvremenu, u središtu ovog sve spljoštenijeg oblaka, svi ti molekuli gasa su se toliko stisnuli da su se zagrejali, rekao je Hagigipur.",
            model:"Kako je rotirajući oblak prašine i gasa počeo da se urušava, on se istovremeno spljoštio. Na primer, zamislite kako majstor za picu baca testo u vazduh. Dok se okreće, testo se širi, ali postaje sve tanje i ravnije. Upravo to se dogodilo mladom Sunčevom sistemu, kaže naučnik.U međuvremenu, u središtu ovog sve spljoštenijeg oblaka, svi ti molekuli gasa su se toliko stisnuli da su se zagrejali, rekao je Hagigipur. U toj toploti i pod pritiskom, atomi vodonika i helijuma su se stopili i pokrenuli nuklearnu reakciju koja je trajala milijardu godina i oblikovala zvezdu-bebu: Sunca. Tokom narednih 50 miliona godina, Sunce je nastavilo da raste, skupljajući gas i prašinu iz okoline, a izbacujući talase velike toplote i zračenja. Rastuće Sunce je polako očistiloprostor oko sebe.Kako je Sunce raslo, oblak je nastavio da se urušava, formirajući disk oko zvezde koji je postajao sve ravniji i širi, rekao je Hagigipur.Na kraju je oblak postao pljosnata struktura nazvana protoplanetarni disk, koji kruži oko mlade zvezde. Desetine miliona godina nakon toga, čestice prašine u protoplanetarnom disku lagano su se vrtložile, povremeno udarajući jedna u drugu. Neki su se čak i držale zajedno. I tokom nekoliko miliona godina, te čestice su postale su milimetarska, a ta zrna su postala centimetar dugački kamenčići, a kamenčići su nastavili da se sudaraju i lepe zajedno.Na kraju se većina materijala na protoplanetarnom disku zalepila i formirala ogromne objekte. Neki od tih objekata su postali toliko veliki da ih je gravitacija oblikovala u sferne planete, patuljaste planete i mesece. Drugi objekti su postali nepravilnog oblika, poput asteroida, kometa i nekih malih meseca.Uprkos različitim veličinama ovih objekata, oni su ostali manje - više na istoj ravni, odakle potiče njihov gradivni materijal. Zato čak i danas osam planeta Sunčevog sistema i druga nebeska tela kruže u približno istoj ravni.", 
            antika:"Antika: Prvi Astronomi i Osnovne Geometrijske Veštine",
            drevno:"U drevnim civilizacijama poput Babilona i Egipta, astronomi su pratili kretanje neba i razvijali osnovne geometrijske tehnike za merenje udaljenosti i veličine objekata. Korišćenje matematike za izračunavanje dužine dana i noći, kao i za predviđanje pomračenja, postalo je ključno za praćenje vremena i obavljanje religijskih ceremonija.",
            pitagorejci:"Pitagorejci: Zvuk Sfera i Numerička Harmonija",
            grcki:"Grčki filozof Pitagora i njegovi sledbenici su verovali u numeričku harmoniju svemira. Smatrali su da se kretanje planeta može opisati pomoću matematičkih odnosa i proporcija, otvarajući put modernoj astrofizici.",
            kepler:"Kepler: Zakoni Planetarnog Kretanja",
            johanes:"Johannes Kepler je u 17. veku formulirao tri zakona planetarnog kretanja, koji su temeljni za razumevanje načina na koji planete orbitiraju oko Sunca. Njegovi matematički modeli zasnovani na elipsama i trigonometriji unapredili su astronomiju i omogućili precizno predviđanje položaja planeta.",
            njutn:"Newton: Gravitacija i Zakon Univerzalne Gravitacije",
            isaac:" Isaac Newton je svojim radom na zakonima kretanja i gravitaciji stvorio matematički okvir za razumevanje ne samo kretanja planeta, već i svih objekata u svemiru. Njegov zakon univerzalne gravitacije omogućio je precizne izračune kretanja nebeskih tela.",
            ajnstajn:">Einstein: Teorija Relativnosti i Savremena Astronomska Matematika",
            vek:"U 20. veku, Albert Einstein je svojom teorijom relativnosti dodao novu dimenziju astronomiji. Ova teorija predviđa kretanje svetlosti i gravitacione efekte na veoma precizan način, što je ključno za moderne metode posmatranja i merenja u astronomiji.",
            danas:"Danas, matematika igra ključnu ulogu u svim granama astronomije. Od izučavanja kosmičkog mikrotalasnog pozadinskog zračenja do analize crnih rupa, matematički alati omogućavaju astronomima da istražuju tajne svemira. Iako su se instrumenti i tehnologija promenili tokom vekova, matematika ostaje neprolazni jezik kosmosa, pomažući nam da razumemo naše mesto u beskrajnom univerzumu.",
            igra:"Danas, matematika igra nezaobilaznu ulogu u svim granama astronomije. Od izučavanja kosmičkog mikrotalasnog pozadinskog zračenja i analize spektralnih linija do proračuna putanja svemirskih sondi, matematički alati omogućavaju astronomima da istražuju tajne svemira na način koji prethodne generacije nisu mogle ni da zamisle. Iako su se teleskopi i tehnologija dramatično promenili tokom vekova, matematika ostaje neprolazni jezik kosmosa, pomažući nam da razumemo naše mesto u beskrajnom univerzumu i otkrivamo čuda koja nas okružuju. Bez matematike, naša sposobnost da razotkrijemo tajne svemira bila bi ozbiljno ograničena, dok nam spoj astronomije i matematike omogućava da istražujemo beskrajne dubine kosmičkog prostora.",
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
        istorijaastro: document.querySelector('[data-translate="istorijaastro"]'),
        astronomija: document.querySelector('[data-translate="astronomija"]'),
        zbogcega: document.querySelector('[data-translate="zbogcega"]'),
        odgovor: document.querySelector('[data-translate="odgovor"]'),
        model: document.querySelector('[data-translate="model"]'),
        antika: document.querySelector('[data-translate="antika"]'),
        drevno: document.querySelector('[data-translate="drevno"]'),
        pitagorejci:document.querySelector('[data-translate="pitagorejci"]'),
        grcki:document.querySelector('[data-translate="grcki"]'),
        kepler:document.querySelector('[data-translate="kepler"]'),
        johanes:document.querySelector('[data-translate="johanes"]'),
        njutn:document.querySelector('[data-translate="njutn"]'),
        isaac:document.querySelector('[data-translate="isaac"]'),
        ajnstajn:document.querySelector('[data-translate="ajnstajn"]'),
        vek:document.querySelector('[data-translate="vek"]'),
        danas:document.querySelector('[data-translate="danas"]'),
        igra:document.querySelector('[data-translate="igra"]'),
        istorija:document.querySelector('[data-translate="istorija"]'),
        zanimljivosti:document.querySelector('[data-translate="zanimljivosti"]'),
        pocetna:document.querySelector('[data-translate="pocetna"]'),
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

