


const languageSelect = document.getElementById("languageSelect");

languageSelect.addEventListener("change", function() {
    const selectedLanguage = languageSelect.value;
    translatePage(selectedLanguage);
});

function translatePage(language) {
    const translations = {
        en: {
            welcome: "Welcome to Astromath, your unique destination for exploring the marvelous blend of mathematics and astronomy!Our site is dedicated to spreading knowledge and understanding about how mathematics plays a key role in the exploration of celestial bodies and the understanding of the cosmos.",
            whyMath: "Why is mathematics important in astronomy?",
            oldest:"Astronomy is one of the oldest sciences and is often called the oldest of all sciences. But what is it that allows astronomers to study stars, planets, galaxies and black holes? The answer is math! Mathematics is the language of the cosmos, and here we provide you with the key to deciphering that language.",
            nauciti:"What can you learn here?",
            osnove:"Basic Astronomical Mathematics: Learn fundamental mathematical concepts that are essential for understanding astronomy, including trigonometry, geometry, and algebra. Simulations and Modeling: Familiarize yourself with sophisticated mathematical models and simulations that astronomers use to explore the cosmos, predict eclipses, planetary orbits, and much more.Astronomical Formulas: Review key astronomical formulas that enable you to calculate distances, velocities, and characteristics of celestial bodies.",
            istrazivanje:"Explore the Universe: Dive Deeper into the World of Astronomy with informative articles, video materials, and interactive tasks that will help you explore the cosmos on your own.Astronomy News: Stay updated on the latest news and discoveries in the world of astronomy with our regularly updated articles and news.",
            namena:"The Cosmic Mathematical Guide is intended for everyone, regardless of their level of mathematical knowledge. Whether you are a student, a college student, an astronomy enthusiast, or just a curious individual, you will find useful information and resources that will help you expand your understanding of mathematics and astronomy. Dive with us into the fascinating world of mathematics in astronomy, where you will discover that numbers are the key to understanding the endless expanses of the cosmos. We provide you with tools to uncover cosmic secrets and to join sky explorers in their adventures. Come and become a part of our community of space mathematics enthusiasts. Together, we will illuminate the path through the cosmic labyrinth! ",
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
            welcome: "Dobrodošli u Astromath, vašu jedinstvenu destinaciju za istraživanje čudesnog spoja matematike i astronomije!Naša stranica je posvećena širenju znanja i razumevanju o tome kako matematika igra ključnu ulogu u istraživanju nebeskih tela i razumevanju kosmosa.",
            whyMath: "Zašto je matematika važna u astronomiji?",
            oldest:"Astronomija je jedna od najstarijih nauka i često se naziva najstarijom od svih nauka. Ali šta je to što omogućava astronomima da proučavaju zvezde, planete, galaksije i crne rupe? Odgovor je matematika! Matematika je jezik kosmosa, a mi vam ovde pružamo ključ za dešifrovanje tog jezika.",
            nauciti:"Šta možete naučiti ovde?",
            osnove:"Osnove Astronomske Matematike: Naučite osnovne matematičke koncepte koji su od suštinskog značaja za razumevanje astronomije, uključujući trigonometriju, geometriju i algebru. Simulacije i Modeliranje: Upoznajte se sa sofisticiranim matematičkim modelima i simulacijama koje astronomi koriste kako bi istraživali kosmos, predviđali pomračenja, orbite planeta i još mnogo toga. Astronomske Formula: Pregledajte ključne astronomske formule koje vam omogućavaju da izračunate razdaljine, brzine i karakteristike nebeskih tela.",
            istrazivanje:"Istraživanje Svemira: Dublje se udubite u svet astronomije kroz informativne članke, video materijale i interaktivne zadatke koji će vam pomoći da sami istražujete svemir. Aktuelnosti u Astronomiji: Pratite najnovije vesti i otkrića u svetu astronomije uz pomoć naših redovno ažuriranih članaka i vesti.",
            namena:"Svemirski Matematički Vodič je namenjen svima, bez obzira na nivo matematičkog znanja. Bez obzira da li ste učenik, student, zaljubljenik u astronomiju ili samo radoznali pojedinac, pronaći ćete korisne informacije i resurse koji će vam pomoći da proširite svoje razumevanje matematike i astronomije.Zaronite s nama u fascinantan svet matematike u astronomiji, gde ćete otkriti da su brojevi ključ za razumevanje beskrajnih prostranstava kosmosa. Pružamo vam alate da otkrijete kosmičke tajne i da se pridružite istraživačima neba u njihovim avanturama. Dođite i postanite deo naše zajednice zaljubljenika u svemirsku matematiku. Zajedno ćemo osvetliti put kroz kosmički lavirint!",
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
        welcome: document.querySelector(".container p"),
        whyMath: document.querySelectorAll(".container p")[1],
        oldest: document.querySelector('[data-translate="oldest"]'),
        osnove: document.querySelector('[data-translate="osnove"]'),
        nauciti: document.querySelector('[data-translate="nauciti"]'),
        istrazivanje: document.querySelector('[data-translate="istrazivanje"]'),
        namena: document.querySelector('[data-translate="namena"]'),
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
