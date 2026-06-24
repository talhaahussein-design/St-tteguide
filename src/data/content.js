export const content = {
  welcome: {
    title: "Velkommen til StøtteGuide",
    description: "At navigere i det kommunale system, når man har et barn med særlige behov, kan føles som en uoverskuelig labyrint. StøtteGuide er skabt til at hjælpe dig med at finde vej.\n\nHer kan du få et hurtigt overblik over de ydelser, der er mest relevante for din familie, og få hjælp til at tage det næste skridt i ansøgningsprocessen.",
    rolesTitle: "Hvem er du?",
    roles: [
      { id: "autism_adhd", title: "Jeg er forælder til et barn med autisme/ADHD", description: "Vælg denne, hvis dit barn har en diagnose eller er under udredning for neuropsykiske udfordringer." },
      { id: "other_needs", title: "Jeg er forælder til et barn med andre behov", description: "Vælg denne, hvis dit barn har andre fysiske eller psykiske funktionsnedsættelser." },
      { id: "relative_pro", title: "Jeg er pårørende eller professionel", description: "Vælg denne, hvis du søger information på vegne af en anden." }
    ],
    footer: "StøtteGuide er en uafhængig vejviser. Vi gemmer ikke dine personlige data, og vores mål er udelukkende at gøre lovgivningen forståelig og tilgængelig for dig."
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
        options: ["Ja, vi har en fast sagsbehandler i børne-familieafdelingen.", "Ja, men vi hører sjældent fra dem.", "Nej, vi har ikke kontakt til kommunen endnu."] 
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
      title: "§41 - Merudgiftsydelse", 
      what: "Dækning af nødvendige ekstraudgifter, som du har, fordi dit barn har en funktionsnedsættelse. Det kan være alt fra medicin og diæt til ekstra vask, kørsel til behandling eller særligt tøj.", 
      who: "Forældre til børn under 18 år med betydelig og varig fysisk eller psykisk funktionsnedsættelse. Udgifterne skal overstige et vist minimumsbeløb pr. år (ca. 5.500 kr. i 2024-takst).", 
      next: "Saml dokumentation for dine udgifter det seneste år og kontakt din sagsbehandler eller ansøg via borger.dk." 
    },
    "§42": { 
      title: "§42 - Tabt arbejdsfortjeneste", 
      what: "Kompensation for den indtægt, du mister, hvis du er nødt til at passe dit barn i hjemmet i stedet for at passe dit arbejde. Det kan være i nogle få timer om ugen eller på fuld tid.", 
      who: "Når det er en nødvendig konsekvens af barnets funktionsnedsættelse, at barnet passes i hjemmet, og det er mest hensigtsmæssigt.", 
      next: "Der skal laves en konkret beregning af behovet. Tal med kommunen om en '§42-vurdering'." 
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
  }
};
