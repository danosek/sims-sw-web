/*
Seznam produktů

name: Jméno
url: Odkaz na stránce nebo suffix pro soubor
img: Název ikony v ProductCard.astro
imgMockup: Název obrázku v Product.astro
desc: Text popisu pro ProductCard.astro a Product.astro
color: Barva z https://teaf.tescosw.cz/mw/design/system/palette/
simsEdition: bool
*/

const products = {
    desktop: {
        name: "SIMS Desktop",
        url: "desktop",
        img: "computer",
        imgMockup: "hero-desktop",
        desc: "Komplexní systém pro bezpečnostní agentury připojující na PCO (pult centrální ochrany) libovolný počet střežených objektů.",
        color: "deeppurple",
        simsEdition: true,
    },
    web: {
        name: "SIMS Web",
        url: "web",
        img: "app-window-mac",
        imgMockup: "hero-web",
        desc: "Jednoduchá intuitivní webová aplikace vhodná například pro správce budov, vrátnice, výjezdové služby nebo pro koncové zákazníky.",
        color: "aqua",
        simsEdition: true,
    },
    mobile: {
        name: "SIMS Mobile",
        url: "mobile",
        img: "smartphone",
        imgMockup: "hero-mobile",
        desc: "Mobilní nativní aplikace vytvořena v moderní technologii React Native s využitím pro bezpečnostní agentury – výjezdové služby, technické a manažerské pracovníky, pro koncové zákazníky bezpečnostních agentur, kteří chtějí mít svůj objekt neustále pod kontrolou a pro zákazníky, kteří si díky této aplikaci můžou svůj objekt střežit sami.",
        color: "lightgreen",
        simsEdition: true,
    },
    eniterm: {
        name: "Eniterm Service",
        url: "eniterm",
        img: "radio",
        imgMockup: "hero-eniterm",
        desc: "Aplikace EnitermSvc disponuje ovladači všech nejčastěji používaných bezpečnostních systémů, komunikátorů a lokátorů. Na základě toho jsme schopni přijímat data ze zařízení téměř všech výrobců.",
        color: "deeporange",
        simsEdition: false,
    },
}

export default products