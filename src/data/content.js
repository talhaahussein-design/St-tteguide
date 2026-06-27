export const config = {
  minimumThreshold: 5500, // kr pr år - opdateres efter nye satser
};

export const content = {
  welcome: {
    title: "Velkommen til StøtteGuide",
    description: "At navigere i det kommunale system, når man har et barn med særlige behov, kan føles som en uoverskuelig labyrint. StøtteGuide é skabt til at hjælpe dig med at finde vej.\n\nHer kan du få et hurtigt overblik over de ydelser, der er mest relevante for din familie, og få hjælp til at tage det næste skridt i ansøgningsprocessen.",
    rolesTitle: "Hvem er du?",
    roles: [
      { 
        id: "foraeldre", 
        title: "👤 Forældre", 
        description: "Guide til kommunale ydelser, skabeloner og beregnere",
        flow: "parent"
      },
      { 
        id: "boern-unge", 
        title: "🧒 Barn / Unge", 
        description: "Korte videoer, tips og tjeklister til dig",
        flow: "kids"
      },
      { 
        id: "paedagog", 
        title: "🏫 Pædagog / Fagperson", 
        description: "Værktøjer og guides til dit arbejde",
        flow: "professional"
      }
    ],
    footer: "StøtteGuide er en uafhængig vejviser. Vi gemmer ikke dine personlige data, og vores mål er udelukkende at gøre lovgivningen forståelig og tilgængelig for dig."
  },
  kidsUniverse: {
    title: "Klar til tur",
    description: "Hvad skal du være opmærksom på, når du er ude at rejse?",
    categories: [
      {
        id: "travel",
        title: "🚗 Klar til tur",
        description: "Om lufthavne, fly, hoteller og alt det du møder på rejsen",
        items: [
          {
            "title": "Lufthavnen",
            "emoji": "✈️",
            "text": "Lufthavnen er et sted med mange regler og ventetid.",
            "tip": "Hav din yndlingsting i din håndbagage.",
            "script": "Først tjekker vi taskerne ind. Så går vi gennem sikkerhedskontrollen, hvor vi tager overtøjet af. Bagefter venter vi ved gaten, indtil vi må gå ombord på flyet. Det er helt normalt, at der er meget ventetid.",
            "images": ["seq_lufthavn_01.png", "seq_lufthavn_02.png", "seq_lufthavn_03.png"]
          },
          {
            "title": "Flyvning",
            "emoji": "🛩️",
            "text": "Flyet tager dig højt op i luften til det nye land.",
            "tip": "Tyg tyggegummi eller drik lidt vand, når flyet letter.",
            "script": "Når flyet letter, kan det give et sjovt tryk i ørerne. Hvis du tygger eller drikker lidt vand, forsvinder trykket igen. Husk at have selen spændt, så du sidder sikkert i dit sæde under hele turen.",
            "images": ["seq_flyvning_01.png", "seq_flyvning_02.png"]
          },
          {
            "title": "Nyt hotelværelse",
            "emoji": "🏨",
            "text": "Dit nye værelse kan føles og lugte anderledes end hjemme.",
            "tip": "Find toilettet og din kuffert som det første.",
            "script": "Hotelværelset lugter måske af noget andet, end du er vant til, og sengen føles anderledes. Det er helt okay, at det tager lidt tid at vænne sig til det. Start med at finde ud af, hvor toilettet er, og pak din kuffert ud, så du har dine egne ting omkring dig.",
            "images": ["seq_hotel_01.png", "seq_hotel_02.png"]
          },
          {
            "title": "Pool og bad",
            "emoji": "🏊",
            "text": "Det er sjovt at bade, men vandet er ikke som det derhjemme.",
            "tip": "Skyl dig med ferskvand, når du har badet i poolen.",
            "script": "Vandet i poolen har klor i sig, så det holder sig rent. Du må aldrig drikke poolvandet, for det kan give dig ondt i maven. Når du er færdig med at bade, skal du skylle din krop med ferskvand, så din hud ikke klør.",
            "images": ["seq_pool_01.png", "seq_pool_02.png", "seq_pool_03.png"]
          },
          {
            "title": "Sol og varme",
            "emoji": "☀️",
            "text": "Solen er meget stærkere i udlandet end i Danmark.",
            "tip": "Brug solcreme og solhat hver dag.",
            "script": "Solen é stærk, og uden solcreme bliver din hud rød og gør ondt. Derfor skal du smøre dig ind i solcreme og bruge en hat, når du er udenfor. Det passer på din hud, så du kan lege videre i varmen uden smerter.",
            "images": ["seq_sol_01.png", "seq_sol_02.png"]
          },
          {
            "title": "Mad på rejsen",
            "emoji": "🍱",
            "text": "I et nyt land smager maden ofte anderledes, end du er vant til.",
            "tip": "Hav altid en lille snack med, som du kender hjemmefra.",
            "script": "Når man rejser, ser maden måske mærkelig ud eller smager anderledes. Det er helt okay, hvis du ikke har lyst til at smage det hele. Hvis du har dine egne snacks med, ved du altid, hvad du skal spise, og så føler du dig mere tryg.",
            "images": ["seq_mad_01.png", "seq_mad_02.png"]
          },
          {
            "title": "Toilet – hvor?",
            "emoji": "🚽",
            "text": "Det er rart at vide, hvor man kan komme på toilettet.",
            "tip": "Find toilettet med det samme, når I kommer til et nyt sted.",
            "script": "Når I ankommer til et nyt sted, så bed de voksne om at hjælpe med at finde toilettet som det første. Når du ved, hvor det er, giver det ro i din krop. Så skal du ikke lede efter det, når du pludselig har travlt.",
            "images": ["seq_toilet_01.png", "seq_toilet_02.png"]
          },
          {
            "title": "Når sanserne bliver for mange",
            "emoji": "🙉",
            "text": "Rejser er fulde af nye lyde, lugte og mange mennesker.",
            "tip": "Brug høretelefoner eller find et stille sted til en pause.",
            "script": "Nogle gange kan alle de nye indtryk blive for meget for din hjerne. Det kan larme meget, eller der kan være for mange mennesker. Det hjælper at tage høretelefoner på eller finde et roligt hjørne. Sig altid til en voksen, hvis du har brug for en pause.",
            "images": ["seq_sanser_01.png", "seq_sanser_02.png"]
          },
          {
            "title": "Bliv tæt på de voksne",
            "emoji": "👥",
            "text": "På nye steder med mange mennesker skal man passe på hinanden.",
            "tip": "Hold dig tæt på din familie og find en person i uniform, hvis du bliver væk.",
            "script": "I lufthavne og på feriesteder er der mange mennesker, og man kan let fare vild. Sørg altid for at blive tæt på din familie eller de voksne, du rejser med. Hvis I bliver væk fra hinanden, skal du finde en person, der arbejder der og har uniform på.",
            "images": ["seq_taet_01.png", "seq_taet_02.png"]
          }
        ]
      }
    ]
  },
  screening: {
    title: "Find de rette ydelser",
    description: "Svar på disse 5 spørgsmål for at se, hvilken støtte der er mest relevant for jer lige nu.",
    questions: [
      { 
        id: "age", 
        question: "Hvor gammelt er dit barn?", 
        options: ["0-5 år (Småbørn/Børnehave)", "6-17 år (Skolealderen)", "18+ år (Overgang til voksenlivet)"] 
      },
      { 
        id: "diagnosis", 
        question: "Har dit barn en officiel diagnose?", 
        options: ["Ja, barnet har en diagnose (fx autisme, ADHD).", "Nej, barnet er under udredning.", "Nej, vi oplever udfordringer, men er ikke i gang med udredning endnu."] 
      },
      { 
        id: "needs", 
        question: "Hvad er jeres mest presserende behov lige nu?", 
        multi: true, 
        options: [
          { label: "Økonomi", description: "Dækning af merudgifter eller kompensation for tabt arbejdsfortjeneste." },
          { label: "Aflastning", description: "Behov for en pause eller hjælp i hjemmet." },
          { label: "Skole/Institution", description: "Støtte til barnets trivsel i hverdagen." },
          { label: "Fritid", description: "Hjælp til at deltage i aktiviteter eller ledsagelse." }
        ] 
      },
      { 
        id: "contact", 
        question: "Er I allerede i kontakt med en sagsbehandler i kommunen?", 
        options: ["Ja, we har en fast sagsbehandler i børne-familieafdelingen.", "Ja, men vi hører sjældent fra dem.", "Nej, vi har ikke kontakt til kommunen endnu."] 
      },
      { 
        id: "impact", 
        question: "Hvordan påvirker barnets behov jeres hverdag?", 
        options: ["Barnet kræver konstant opsyn og støtte.", "Vi har svært ved at få arbejdslivet til at hænge sammen.", "Barnet har brug for særlige hjælpemidler eller diæt."] 
      }
    ]
  },
  services: {
    title: "Overblik over støttemuligheder",
    description: "Baseret på din profil er her de kategorier af ydelser, der typisk er relevante. Klik på en kategori for at læse mere om de specifikke paragraffer.",
    categories: [
      { 
        id: "economy",
        title: "💰 Økonomisk støtte", 
        description: "Hvis dit barn har en betydelig og varig funktionsnedsættelse, kan du søge om dækning af de ekstra udgifter, det medfører, eller få kompensation, hvis du må gå ned i tid for at passe dit barn.", 
        paragraphs: ["§41", "§42"] 
      },
      { 
        id: "respite",
        title: "Respite 🛋️ Aflastning og pasning", 
        description: "Når hverdagen er tung, kan kommunen tilbyde aflastning enten i eget hjem, i en plejefamilie eller på en institution. Formålet er at give forældre og søskende et pusterum.", 
        paragraphs: ["§84", "§44"] 
      },
      { 
        id: "school",
        title: "🏫 Støtte i skole og dagtilbud", 
        description: "Har dit barn brug for ekstra støtte til at trives i skolen eller børnehaven? Dette kan være alt fra pædagogisk støtte til specialundervisning eller hjælpemidler.", 
        paragraphs: ["Folkeskoleloven", "Dagtilbudsloven"] 
      },
      { 
        id: "leisure",
        title: "🏃 Fritid og socialt liv", 
        description: "Støtte til at barnet kan deltage i fritidsaktiviteter, eller en ledsagerordning til unge over 12 år, der ikke kan færdes alene.", 
        paragraphs: ["§45"] 
      }
    ]
  },
  serviceDetails: {
    "§41": { 
      title: "Merudgifter", 
      intro: "Merudgifter er ekstra udgifter, som familien har på grund af barnets handicap eller langvarige sygdom.", 
      sections: [
        {
          title: "Hvad er det?",
          text: "Merudgifter dækker de udgifter, familien ikke ville have haft, hvis barnet ikke havde haft det behov."
        },
        {
          title: "Hvem kan søge?",
          text: "Forældre til et barn under 18 år med betydelig og varigt nedsat fysisk eller psykisk funktionsevne eller en indgribende langvarig sygdom, når barnet bor hjemme."
        },
        {
          title: "Hvad kan det dække?",
          items: ["Medicin", "Transport", "Ekstra vask", "Kost", "Særligt udstyr", "Andre nødvendige ekstra udgifter"]
        },
        {
          title: "Hvad skal du gøre?",
          steps: [
            "Skriv de ekstra udgifter ned.",
            "Gem kvitteringer.",
            "Saml lægepapirer og anden dokumentation.",
            "Kontakt kommunen.",
            "Bed om hjælp til at lave et overslag for det kommende år."
          ]
        },
        {
          title: "Hvad skal dokumenteres?",
          items: ["Barnets behov/funktionsnedsættelse", "Hvilke udgifter der er tale om", "Hvorfor udgifterne er nødvendige", "Kvitteringer og notater"]
        },
        {
          title: "Godt at vide",
          text: "Kommunen vurderer den samlede situation. Der er typisk en minimumsgrænse, før hjælp kan udbetales."
        }
      ],
      ctas: [
        { label: "Se om jeg kan søge", action: "screening" },
        { label: "Lav mit udgifts-overblik", action: "calculator" },
        { label: "Skriv til kommunen", action: "templates" },
        { label: "Gem dokumentation", action: "checklist" }
      ]
    },
    "§42": {
      title: "Tabt arbejdsfortjeneste",
      intro: "Tabt arbejdsfortjeneste é økonomisk kompensation til forældre, som må gå ned i tid eller stoppe med at arbejde for at passe et barn med handicap eller langvarig sygdom.",
      sections: [
        {
          title: "Hvad er det?",
          text: "Ydelsen dækker det indtægtstab, en forælder har, hvis det er nødvendigt at være hjemme hos barnet helt eller delvist."
        },
        {
          title: "Hvem kan søge?",
          text: "Forældre til et barn under 18 år med betydelig og varigt nedsat fysisk eller psykisk funktionsevne eller en indgribende kronisk eller langvarig lidelse, når det er nødvendigt, at en forælder passer barnet."
        },
        {
          title: "Hvornår kan det være relevant?",
          items: ["Barnet har mange indlæggelser.", "Barnet skal til hyppige kontroller.", "Barnet har behov for støtte i hjemmet.", "Forælderen må reducere arbejdstid eller stoppe midlertidigt."]
        },
        {
          title: "Hvad skal du gøre?",
          steps: [
            "Skriv ned, hvor meget arbejde du mister.",
            "Saml dokumentation for løn og arbejdstid.",
            "Beskriv barnets behov.",
            "Kontakt kommunen.",
            "Bed om vurdering af tabt arbejdsfortjeneste."
          ]
        },
        {
          title: "Hvad skal dokumenteres?",
          items: ["Barnets behov og funktionsnedsættelse", "Hvorfor pasning i hjemmet er nødvendig", "Lønindkomst før reduktion", "Arbejdstid før og efter", "Varighed og omfang af fravær"]
        },
        {
          title: "Godt at vide",
          text: "Ydelsen beregnes ud fra tidligere bruttoindtægt, og der er et loft på beløbet. Kommunen vurderer altid den konkrete sag."
        }
      ],
      ctas: [
        { label: "Se om jeg kan søge", action: "screening" },
        { label: "Beregn mit indtægtstab", action: "calculator_tabt" },
        { label: "Skriv til kommunen", action: "templates" },
        { label: "Gem dokumentation", action: "checklist" }
      ]
    },
    "§84": { 
      title: "§84 - Afløsning og aflastning", 
      what: "Afløsning gives i hjemmet (fx en person der kommer og passer barnet), mens aflastning foregår uden for hjemmet (fx i en aflastningsinstitution eller hos en netværksfamilie).", 
      who: "Forældre, der har et særligt behov for aflastning for at kunne opretholde en almindelig hverdag og give omsorg til barnet og eventuelle søskende.", 
      next: "Beskriv jeres ugeprogram for sagsbehandleren for at synliggøre behovet for pauser." 
    },
    "§45": { 
      title: "§45 - Ledsageordning", 
      what: "Unge mellem 12 og 18 år kan få 15 timers ledsagelse om måneden til aktiviteter uden for hjemmet, som de ikke kan deltage i alene.", 
      who: "Børn/unge der ikke kan færdes alene på grund af deres funktionsnedsættelse.", 
      next: "Ansøg specifikt om 'Ledsagelse til unge' hos din kommune." 
    }
  },
  checklist: {
    title: "Tjekliste: Før du ansøger",
    description: "Når du søger kommunen om støtte, øger det dine chancer for et hurtigt og korrekt svar, hvis du har forberedt dig godt. Brug denne tjekliste:",
    items: [
      "Indhent lægelig dokumentation",
      "Beskriv hverdagen",
      "Dokumenter merudgifter",
      "Børnefaglig udtalelse",
      "Find din sagsbehandler",
      "Forbered spørgsmål til mødet",
      "Hav en bisidder klar"
    ],
    footer: "Husk: Du har altid ret til at få en skriftlig begrundelse for et afslag."
  },
  municipality: {
    title: "Find din kommune og kontaktinfo",
    description: "I Danmark er det din bopælskommune, der har ansvaret for at yde støtte. Her er, hvordan du finder frem til de rette personer.",
    steps: [
      { title: "Find kommunens hjemmeside", text: "De fleste kommuner har en underside dedikeret til 'Børn med særlige behov' eller 'Handicaprådgivning'. Søg på Google efter: [Din kommune] børn handicap støtte." },
      { title: "Borger.dk", text: "Du kan logge på Borger.dk med MitID. Her kan du ofte finde de digitale ansøgningsskemaer for §41 (merudgifter) og §42 (tabt arbejdsfortjeneste)." },
      { title: "Kontakt Børne- og Familieafdelingen", text: "Hvis du er i tvivl, så ring til kommunens hovednummer og bed om at tale med en sagsbehandler i Børne- og familieafdelingen." },
      { title: "Den åbne indgang", text: "Mange kommuner har en 'åben rådgivning', hvor man kan ringe og få vejledning anonymt, før man overhovedet sender en ansøgning." }
    ],
    adviceTitle: "Gode råd til kontakten:",
    advice: [
      "Vær konkret: Sig fx 'Jeg ringer, fordi jeg ønsker at søge om merudgiftsydelse efter Servicelovens §41'.",
      "Skriftlighed: Selvom du taler med dem i telefonen, så følg altid op med en mail, så der er dokumentation for, hvad der er aftalt.",
      "Journalindsigt: Du har altid ret til at se, hvad sagsbehandleren skriver i din sag."
    ]
  },
  templates: {
    title: "Skabeloner til kontakt",
    description: "Brug disse skabeloner som udgangspunkt, når du skriver til din sagsbehandler. Husk at tilrette dem til din specifikke situation.",
    items: [
      { 
        title: "Skabelon 1: Første henvendelse / Ansøgning om støtte", 
        subject: "Ansøgning om støtte efter Servicelovens §41 og §42 – [Barnets Navn] [CPR-nummer]", 
        body: "Kære [Navn på sagsbehandler eller Afdelingsnavn],\n\nJeg skriver til jer, da jeg ønsker at ansøge om støtte til mit barn, [Barnets Navn], der har [Diagnose/funktionsnedsættelse].\n\nVi oplever i hverdagen betydelige udfordringer i forhold til [beskriv kort udfordringerne, fx pasning, økonomi, transport]. Derfor søger vi hermed om:\n* Dækning af merudgifter jf. Servicelovens §41.\n* Vurdering af behov for tabt arbejdsfortjeneste jf. Servicelovens §42.\n\nJeg har vedhæftet følgende dokumentation:\n* [Fx lægeerklæring]\n* [Fx beskrivelse af hverdagen]\n\nJeg ser frem til at høre fra jer vedrørende det videre forløb og forventet sagsbehandlingstid.\n\nMed venlig hilsen,\n[Dit Navn]\n[Dit Telefonnummer]" 
      },
      { 
        title: "Skabelon 2: Huskeliste til møde (Dagsorden)", 
        body: "Dagsorden for møde d. [Dato] vedr. [Barnets Navn]\n\n1. Introduktion og formål med mødet.\n2. Gennemgang af barnets aktuelle trivsel og behov.\n3. Status på ansøgning om [Ydelse, fx §41].\n4. Drøftelse af behov for aflastning/pasning.\n5. Aftaler om næste skridt og tidsplan for afgørelser." 
      }
    ],
    rulesTitle: "Gode huskeregler:",
    rules: [
      "Tag noter: Skriv altid ned, hvad der bliver sagt på mødet.",
      "Referat: Bed sagsbehandleren om at sende et kort beslutningsreferat efter mødet.",
      "Bisidder: Husk at nævne i mailen, hvis du tager en bisidder med."
    ]
  },
  rejection: {
    title: "Hvis du får afslag",
    description: "Det er desværre ikke ualmindeligt at få afslag på en ansøgning om støtte. Det betyder ikke nødvendigvis, at du ikke har ret til støtte – det kan handle om manglende dokumentation eller en forkert vurdering.",
    sections: [
      { title: "1. Din ret til en begrundelse", text: "Du har altid krav på en skriftlig begrundelse for et afslag. Begrundelsen skal henvise til de konkrete regler (paragraffer), kommunen har truffet afgørelsen ud fra, og de faktiske oplysninger, der er lagt vægt på." },
      { title: "2. Klagefristen (4 uger)", text: "Hvis du vil klage over en afgørelse, har du typisk 4 uger fra du har modtaget afgørelsen. Din klage skal sendes til kommunen, som derefter skal genvurdere sagen." },
      { title: "3. Remonstration (Genvurdering)", text: "Når kommunen modtager din klage, skal de tage stilling til, om de vil give dig helt eller delvist medhold. Hvis de fastholder afslaget, skal de sende klagen videre til Ankestyrelsen." },
      { title: "4. Hvordan skriver man en klage?", text: "En god klage fokuserer på: Hvilke oplysninger mener du er overset eller misforstået? Hvorfor mener du, at barnets funktionsnedsættelse opfylder kravene i paragraffen? Vedlæg eventuelt ny dokumentation." }
    ],
    helpTitle: "Her kan du få hjælp",
    help: [
      { name: "DUKH", text: "Gratis og uvildig rådgivning til borgere med handicap.", link: "https://www.dukh.dk" },
      { name: "Retshjælp", text: "Mange byer har gratis retshjælp, der kan hjælpe med at formulere klager." },
      { name: "Patientforeninger", text: "Foreninger som ADHD-foreningen eller Landsforeningen Autisme har ofte rådgivere." }
    ]
  },
  socialStories: {
    settings: {
      nonVerbal: false,
      sensoryMode: false
    },
    categories: [
      {
        id: "hjemme",
        title: "🏠 Hjemme",
        stories: [
          {
            id: "sengetid",
            title: "Sengetid",
            pages: [
              { image: null, text: "Det er sengetid." },
              { image: null, text: "Jeg børster tænder." },
              { image: null, text: "Jeg tager nattøj på." },
              { image: null, text: "Jeg lægger mig i sengen." },
              { image: null, text: "Mor eller far læser en historie." },
              { image: null, text: "Hvis jeg har brug for noget, kan jeg kalde." },
              { image: null, text: "Godnat. I morgen er en ny dag." }
            ]
          }
        ]
      },
      {
        id: "skole",
        title: "🏫 Skole",
        stories: [
          {
            id: "foerste-skole-dag",
            title: "Første skoledag",
            pages: [
              { image: null, text: "I dag skal jeg i skole." },
              { image: null, text: "Jeg tager min taske på." },
              { image: null, text: "Jeg kommer frem til skolen." },
              { image: null, text: "Jeg siger hej til mi lærer." },
              { image: null, text: "Vi skal lave noget nyt." },
              { image: null, text: "Hvis det bliver svært, kan jeg få hjælp." },
              { image: null, text: "Det gik godt. Godt klaret!" }
            ]
          }
        ]
      },
      {
        id: "sundhed",
        title: "🏥 Sundhed",
        stories: [
          {
            id: "til-laegen",
            title: "Til lægen",
            pages: [
              { image: null, text: "Vi skal til lægen." },
              { image: null, text: "Vi venter i venteværelset." },
              { image: null, text: "Lægen taler med mig." },
              { image: null, text: "Lægen kigger på mig." },
              { image: null, text: "Hvis jeg bliver bange, kan jeg sige stop." },
              { image: null, text: "Bagefter er det slut." },
              { image: null, text: "Det gik godt. Jeg får et klap på skulderen." }
            ]
          }
        ]
      },
      {
        id: "ferie",
        title: "✈️ Ferie",
        stories: [
          {
            id: "rejse-med-fly",
            title: "Rejse med fly",
            pages: [
              { image: null, text: "Vi skal med fly." },
              { image: null, text: "Vi tjekker tasker ind." },
              { image: null, text: "Vi går gennem sikkerhed." },
              { image: null, text: "Vi venter ved gaten." },
              { image: null, text: "Vi sidder i flyet." },
              { image: null, text: "Hvis jeg får tryk i ørerne, kan jeg tygge." },
              { image: null, text: "Vi er fremme. Det gik godt!" }
            ]
          }
        ]
      },
      {
        id: "indkoeb",
        title: "🛒 Indkøb",
        stories: [
          {
            id: "i-supermarked",
            title: "I supermarkedet",
            pages: [
              { image: null, text: "Vi skal handle ind." },
              { image: null, text: "Vi tager en indkøbsvogn." },
              { image: null, text: "Vi finder varer på en liste." },
              { image: null, text: "Der er mange mennesker og lyde." },
              { image: null, text: "Hvis det bliver for meget, kan vi gå ud." },
              { image: null, text: "Vi betaler i kassen." },
              { image: null, text: "Vi tager hjem. Det var en god tur." }
            ]
          }
        ]
      },
      {
        id: "frisoer",
        title: "💇 Frisør",
        stories: [
          {
            id: "til-frisoeren",
            title: "Til frisøren",
            pages: [
              { image: null, text: "Vi skal til frisøren." },
              { image: null, text: "Jeg sidder i en stor stol." },
              { image: null, text: "Frisøren klipper mit hår." },
              { image: null, text: "Saksen siger klip-klip." },
              { image: null, text: "Hvis jeg vil holde pause, siger jeg til." },
              { image: null, text: "Frisøren børster håret af." },
              { image: null, text: "Jeg ser godt ud. Det gik fint!" }
            ]
          }
        ]
      },
      {
        id: "familie",
        title: "👨‍👩‍👧 Familie",
        stories: [
          {
            id: "besoeg-bedsteforaeldre",
            title: "Besøg hos bedsteforældre",
            pages: [
              { image: null, text: "Vi skal besøge bedsteforældre." },
              { image: null, text: "Vi kører eller går derhen." },
              { image: null, text: "Jeg siger hej, da vi kommer." },
              { image: null, text: "Vi spiser måske noget." },
              { image: null, text: "Hvis jeg bliver træt, kan jeg sidde stille." },
              { image: null, text: "Vi siger farvel og tager hjem." },
              { image: null, text: "Det var hyggeligt. Godt klaret!" }
            ]
          }
        ]
      },
      {
        id: "transport",
        title: "🚌 Transport",
        stories: [
          {
            id: "med-bus",
            title: "Med bus",
            pages: [
              { image: null, text: "Vi skal med bussen." },
              { image: null, text: "Vi venter ved busstoppestedet." },
              { image: null, text: "Bussen kommer. Vi stiger på." },
              { image: null, text: "Vi finder et sæde." },
              { image: null, text: "Vi kigger ud ad vinduet." },
              { image: null, text: "Bussen stopper. Vi stiger af." },
              { image: null, text: "Vi er fremme. Det gik godt!" }
            ]
          }
        ]
      },
      {
        id: "restaurant",
        title: "🍽 Restaurant",
        stories: [
          {
            id: "paa-restaurant",
            title: "På restaurant",
            pages: [
              { image: null, text: "Vi skal på restaurant." },
              { image: null, text: "Vi sidder ved et bord." },
              { image: null, text: "Vi kigger på maden på kortet." },
              { image: null, text: "Vi venter på maden." },
              { image: null, text: "Hvis jeg ikke kan lide maden, er det okay." },
              { image: null, text: "Vi spiser og hygger." },
              { image: null, text: "Vi betaler og går hjem. Det var godt." }
            ]
          }
        ]
      },
      {
        id: "svommehal",
        title: "🏊 Svømmehal",
        stories: [
          {
            id: "i-svommehallen",
            title: "I svømmehallen",
            pages: [
              { image: null, text: "Vi skal i svømmehallen." },
              { image: null, text: "Jeg skifter tøj i omklædningen." },
              { image: null, text: "Jeg tager bruser først." },
              { image: null, text: "Vandet føles måske koldt." },
              { image: null, text: "Jeg svømmer og leger." },
              { image: null, text: "Hvis jeg fryser, kan jeg holde pause." },
              { image: null, text: "Jeg tørrer mig og tager tøj på. Godt klaret!" }
            ]
          }
        ]
      },
      {
        id: "forlystelse",
        title: "🎢 Forlystelsespark",
        stories: [
          {
            id: "i-forlystelsespark",
            title: "I forlystelsesparken",
            pages: [
              { image: null, text: "Vi skal i forlystelsespark." },
              { image: null, text: "Der er mange mennesker." },
              { image: null, text: "Vi vælger en tur." },
              { image: null, text: "Vi venter i kø." },
              { image: null, text: "Turen starter. Det er sjovt." },
              { image: null, text: "Hvis jeg bliver utryg, kan vi stoppe." },
              { image: null, text: "Det var en god dag. Godt klaret!" }
            ]
          }
        ]
      },
      {
        id: "foedselsdag",
        title: "🎂 Fødselsdag",
        stories: [
          {
            id: "min-foedselsdag",
            title: "Min fødselsdag",
            pages: [
              { image: null, text: "I dag har jeg fødselsdag." },
              { image: null, text: "Der kommer gæster." },
              { image: null, text: "Vi synger og spiser kage." },
              { image: null, text: "Jeg får gaver." },
              { image: null, text: "Hvis der bliver for meget, kan jeg trække mig." },
              { image: null, text: "Det er min dag." },
              { image: null, text: "Tak for i dag. Det var fantastisk!" }
            ]
          }
        ]
      }
    ]
  }
};
