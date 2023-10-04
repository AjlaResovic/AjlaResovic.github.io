


const languageSelect = document.getElementById("languageSelect");

languageSelect.addEventListener("change", function() {
    const selectedLanguage = languageSelect.value;
    translatePage(selectedLanguage);
});

function translatePage(language) {
    const translations = {
        en: {
            dobrodosli:"Welcome to Astromath!",
            astro:"Astromath is a website dedicated to exploring the fascinating connections between mathematics and astronomy. Our passion for these two wondrous worlds leads us into the deep spaces of the universe and the intricate patterns of mathematical concepts.",
            posebnim:"What Makes Us Special?",
            fuzija:"Knowledge Fusion",
            verujemo:"At Astromath, we believe that mathematics and astronomy cannot be separated. Our goal is to explore these two disciplines together to uncover deeper connections between them. Whether you are an expert or an enthusiast in these fields, you will find inspiration, education, and entertainment on our website.",
            ucenje:"Learning and Discovery",
            omogucava:"Astronomy allows us to peek into the mysterious secrets of the universe, while mathematics provides the tools to understand these mysteries. At Astromath, we share with you the latest discoveries from both fields and provide resources for learning and exploration.",
            zajednica:"Community of Experts and Enthusiasts",
            sajt:"Astromath is not just a website but a community of people who share the same passion for mathematics and astronomy. Here, you can exchange ideas, ask questions, and connect with like-minded individuals. Regardless of your level of knowledge, you are welcome to join our community. Join us on this journey through the cosmos and mathematical concepts. Explore, learn, and get inspired. Astromath is your key to discovering the fascinating world of mathematics and astronomy.",
            deo:"Thank you for being a part of the Astromath community!",
            pocetna:"HOME",
            istorija:"HISTORY",
            zanimljivosti:"INTERESTING FACTS",
            onama:"ABOUT US",
            kontakt:"CONTACT",
            tplanete:"Terrestial planets",
            trio:"Planetary trio",
            divovi:"Ice giants and black holes",

            // Dodajte ostale prevode za srpski jezik ovdje
        },
        sr: {
            dobrodosli:"Dobrodošli na Astromath!",
            astro:"Astromath je stranica posvećena istraživanju fascinantnih veza između matematike i astronomije. Naša strast prema ovim dva čudesna sveta vodi nas u duboke prostore svemira i kompleksne obrasce matematičkih koncepta.",
            posebnim:"Šta nas čini posebnim?",
            fuzija:"Fuzija Znanja",
            verujemo:"Na Astromath-u, verujemo da se matematika i astronomija ne mogu razdvajati. Naš cilj je istraživati ove dve discipline zajedno kako bismo otkrili dublje veze između njih. Bez obzira da li ste stručnjak ili zaljubljenik u ove oblasti, naći ćete inspiraciju, edukaciju i zabavu na našem sajtu.",
            ucenje:"Učenje i Otkriće",
            omogucava:"Astronomija nam omogućava da zavirimo u tajanstvene tajne svemira, dok matematika pruža alate za razumevanje tih tajni. Na Astromath-u, delimo sa vama najnovija otkrića iz oba polja i pružamo vam resurse za učenje i istraživanje.",
            zajednica:"Zajednica Stručnjaka i Entuzijasta",
            sajt:"Astromath nije samo sajt, već i zajednica ljudi koji dele istu strast prema matematici i astronomiji. Ovde možete razmenjivati ideje, postavljati pitanja i povezivati se sa istomišljenicima. Bez obzira na vaš nivo znanja, dobrodošli ste da se pridružite našoj zajednici. Pridružite nam se na ovom putovanju kroz kosmos i matematičke koncepte. Istražujte, učite i inspirišite se. Astromath je vaš ključ za otkrivanje fascinantnog sveta matematike i astronomije.",
            deo:"Hvala što ste deo Astromath zajednice!",
            pocetna:"POCETNA",
            istorija:"ISTORIJA",
            zanimljivosti:"ZANIMLJIVOSTI",
            onama:"O NAMA",
            kontakt:"KONTAKT",
            tplanete:"Teresticke planete",
            trio:"Planetarni trio",
            divovi:"Ledeni divovi i crne rupe",

        }
    };

    const elementsToTranslate = {
       
        dobrodosli: document.querySelector('[data-translate="dobrodosli"]'),
        astro: document.querySelector('[data-translate="astro"]'),
        posebnim: document.querySelector('[data-translate="posebnim"]'),
        fuzija: document.querySelector('[data-translate="fuzija"]'),
        verujemo: document.querySelector('[data-translate="verujemo"]'),
        ucenje:document.querySelector('[data-translate="ucenje"]'),
        omogucava: document.querySelector('[data-translate="omogucava"]'),
        zajednica: document.querySelector('[data-translate="zajednica"]'),
        sajt: document.querySelector('[data-translate="sajt"]'),
        deo:document.querySelector('[data-translate="deo"]'),
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