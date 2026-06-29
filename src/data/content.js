export const config = {
  minimumThreshold: 5500, // kr pr år - opdateres efter nye satser
};

export const content = {
  welcome: {
    title: "Velkommen til StøtteGuide",
    description: "At navigere i det kommunale system, når man har et barn med særlige behov, kan føles som en uoverskuelig labyrint. StøtteGuide er skabt til at hjælpe dig med at finde vej.\n\nHer kan du få et hurtigt overblik over de ydelser, der er mest relevante for din familie, og få hjælp til at tage det næste skridt i ansøgningsprocessen.",
    rolesTitle: "Hvem er du?",
    roles: [
      { id: "foraeldre", title: "👤 Forældre", description: "Guide til kommunale ydelser, skabeloner og beregnere", flow: "parent" },
      { id: "boern-unge", title: "🧒 Barn / Unge", description: "Korte videoer, tips og tjeklister til dig", flow: "kids" },
      { id: "paedagog", title: "🏫 Pædagog / Fagperson", description: "Værktøjer og guides til dit arbejde", flow: "professional" }
    ],
    footer: "StøtteGuide er en uafhængig vejviser. Vi gemmer ikke dine personlige data, og vores mål er udelukkende at gøre lovgivningen forståelig og tilgængelig for dig."
  },
  kidsUniverse: {
    title: "Børneunivers",
    description: "Korte videoer og gode råd til dig",
    categories: [
      {
        id: "learning",
        title: "🧠 Læringskort",
        description: "Om følelser, pauser, ro og hvordan du har det",
        items: [
          { title: "Vand og dig", emoji: "💧", text: "Husk at drikke vand hver dag. Det giver dig mere energi.", tip: "Sæt en alarm på din telefon" },
          { title: "Mavefornemmelser", emoji: "🫣", text: "Din mave kan mærke, når du er glad, bange eller spændt.", tip: "Prøv at trække vejret dybt 3 gange" },
          { title: "Følelser", emoji: "😊", text: "Alle følelser er okay. Det handler om, hvad du gør med dem.", tip: "Tegn hvordan du har det" },
          { title: "Pauser", emoji: "☕", text: "Tag små pauser i løbet af dagen. Få ro og kom tilbage.", tip: "Sæt 5 minutters pause på" },
          { title: "Ro", emoji: "🧘", text: "Find et roligt sted, når det hele bliver for meget.", tip: "Lyt til rolig musik" },
          { title: "Sikkerhed", emoji: "🛡️", text: "Spørg altid en voksen, hvis du er i tvivl.", tip: "Sig til hvis noget føles forkert" }
        ]
      },
      {
        id: "travel",
        title: "🚗 Klar til tur",
        description: "Tjeklister og gode råd til rejser og udflugter",
        items: [
          { title: "Poolvand", emoji: "🏊", text: "Tjek om der er klor i vandet. Nogle reagerer på det.", tip: "Tag badebriller med" },
          { title: "Mad på tur", emoji: "🍱", text: "Husk mad du kan lide. Nye steder kan have anderledes mad.", tip: "Tag snacks med hjemmefra" },
          { title: "Toilet", emoji: "🚽", text: "Find ud af hvor toiletterne er, når I ankommer.", tip: "Tag vådservietter med" },
          { title: "Varme", emoji: "☀️", text: "Husk solcreme, hat og nok vand når det er varmt.", tip: "Sæt dig i skyggen en gang imellem" },
          { title: "Væske", emoji: "💧", text: "Drik vand jævnligt. Især når I er aktive.", tip: "Tag en drikkedunk med" },
          { title: "Ventetid", emoji: "⏳", text: "Nogle gange skal man vente. Det kan være kedeligt.", tip: "Hav en lille leg eller bog med" },
          { title: "Svimmelhed", emoji: "😵", text: "Hvis du bliver svimmel, så sæt dig ned og få noget at drikke.", tip: "Sig til en voksen med det samme" }
        ]
      }
    ]
  },
  screening: {
    title: "Find de rette ydelser",
    description: "Svar på disse 5 spørgsmål for at se, hvilken støtte der er mest relevant for jer lige nu.",
    questions: [
      { id: "age", question: "Hvor gammelt er dit barn?", options: ["0-5 år (Småbørn/Børnehave)", "6-17 år (Skolealderen)", "18+ år (Overgang til voksenlivet)"] },
      { id: "diagnosis", question: "Har dit barn en officiel diagnose?", options: ["Ja, barnet har en diagnose (fx autisme, ADHD).", "Nej, barnet er under udredning.", "Nej, vi oplever udfordringer, men er ikke i gang med udredning endnu."] },
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
      { id: "contact", question: "Er I allerede i kontakt med en sagsbehandler i kommunen?", options: ["Ja, vi har en fast sagsbehandler i børne-familieafdelingen.", "Ja, men vi hører sjældent fra dem.", "Nej, vi har ikke kontakt til kommunen endnu."] },
      { id: "impact", question: "Hvordan påvirker barnets behov jeres hverdag?", options: ["Barnet kræver konstant opsyn og støtte.", "Vi har svært ved at få arbejdslivet til at hænge sammen.", "Barnet har brug for særlige hjælpemidler eller diæt."] }
    ]
  },
  services: {
    title: "Overblik over støttemuligheder",
    description: "Baseret på din profil er her de kategorier af ydelser, der typisk er relevante. Klik på en kategori for at læse mere om de specifikke paragraffer.",
    categories: [
      { id: "economy", title: "💰 Økonomisk støtte", description: "Hvis dit barn har en betydelig og varig funktionsnedsættelse, kan du søge om dækning af de ekstra udgifter, det medfører, eller få kompensation, hvis du må gå ned i tid for at passe dit barn.", paragraphs: ["§41", "§42"] },
      { id: "respite", title: "🛋️ Aflastning og pasning", description: "Når hverdagen er tung, kan kommunen tilbyde aflastning enten i eget hjem, i en plejefamilie eller på en institution. Formålet er at give forældre og søskende et pusterum.", paragraphs: ["§84", "§44"] },
      { id: "school", title: "🏫 Støtte i skole og dagtilbud", description: "Har dit barn brug for ekstra støtte til at trives i skolen eller børnehaven? Dette kan være alt fra pædagogisk støtte til specialundervisning eller hjælpemidler.", paragraphs: ["Folkeskoleloven", "Dagtilbudsloven"] },
      { id: "leisure", title: "🏃 Fritid og socialt liv", description: "Støtte til at barnet kan deltage i fritidsaktiviteter, eller en ledsagerordning til unge over 12 år, der ikke kan færdes alene.", paragraphs: ["§45"] }
    ]
  },
  serviceDetails: {
    "§41": {
      title: "Merudgifter",
      intro: "Merudgifter er ekstra udgifter, som familien har på grund af barnets handicap eller langvarige sygdom.",
      sections: [
        { title: "Hvad er det?", text: "Merudgifter dækker de udgifter, familien ikke ville have haft, hvis barnet ikke havde haft det behov." },
        { title: "Hvem kan søge?", text: "Forældre til et barn under 18 år med betydelig og varigt nedsat fysisk eller psykisk funktionsevne eller en indgribende langvarig sygdom, når barnet bor hjemme." },
        { title: "Hvad kan det dække?", items: ["Medicin", "Transport", "Ekstra vask", "Kost", "Særligt udstyr", "Andre nødvendige ekstra udgifter"] },
        { title: "Hvad skal du gøre?", steps: ["Skriv de ekstra udgifter ned.", "Gem kvitteringer.", "Saml lægepapirer og anden dokumentation.", "Kontakt kommunen.", "Bed om hjælp til at lave et overslag for det kommende år."] },
        { title: "Hvad skal dokumenteres?", items: ["Barnets behov/funktionsnedsættelse", "Hvilke udgifter der er tale om", "Hvorfor udgifterne er nødvendige", "Kvitteringer og notater"] },
        { title: "Godt at vide", text: "Kommunen vurderer den samlede situation. Der er typisk en minimumsgrænse, før hjælp kan udbetales." }
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
      intro: "Tabt arbejdsfortjeneste er økonomisk kompensation til forældre, som må gå ned i tid eller stoppe med at arbejde for at passe et barn med handicap eller langvarig sygdom.",
      sections: [
        { title: "Hvad er det?", text: "Ydelsen dækker det indtægtstab, en forælder har, hvis det er nødvendigt at være hjemme hos barnet helt eller delvist." },
        { title: "Hvem kan søge?", text: "Forældre til et barn under 18 år med betydelig og varigt nedsat fysisk eller psykisk funktionsevne eller en indgribende kronisk eller langvarig lidelse, når det er nødvendigt, at en forælder passer barnet." },
        { title: "Hvornår kan det være relevant?", items: ["Barnet har mange indlæggelser.", "Barnet skal til hyppige kontroller.", "Barnet har behov for støtte i hjemmet.", "Forælderen må reducere arbejdstid eller stoppe midlertidigt."] },
        { title: "Hvad skal du gøre?", steps: ["Skriv ned, hvor meget arbejde du mister.", "Saml dokumentation for løn og arbejdstid.", "Beskriv barnets behov.", "Kontakt kommunen.", "Bed om vurdering af tabt arbejdsfortjeneste."] },
        { title: "Hvad skal dokumenteres?", items: ["Barnets behov og funktionsnedsættelse", "Hvorfor pasning i hjemmet er nødvendig", "Lønindkomst før reduktion", "Arbejdstid før og efter", "Varighed og omfang af fravær"] },
        { title: "Godt at vide", text: "Ydelsen beregnes ud fra tidligere bruttoindtægt, og der er et loft på beløbet. Kommunen vurderer altid den konkrete sag." }
      ],
      ctas: [
        { label: "Se om jeg kan søge", action: "screening" },
        { label: "Beregn mit indtægtstab", action: "calculator_tabt" },
        { label: "Skriv til kommunen", action: "templates" },
        { label: "Gem dokumentation", action: "checklist" }
      ]
    },
    "§84": { title: "§84 - Afløsning og aflastning", what: "Afløsning gives i hjemmet (fx en person der kommer og passer barnet), mens aflastning foregår uden for hjemmet (fx i en aflastningsinstitution eller hos en netværksfamilie).", who: "Forældre, der har et særligt behov for aflastning for at kunne opretholde en almindelig hverdag og give omsorg til barnet og eventuelle søskende.", next: "Beskriv jeres ugeprogram for sagsbehandleren for at synliggøre behovet for pauser." },
    "§44": { title: "§44 - Hjælp til dækning af tabt arbejdsfortjeneste ved pasning af nærtstående", what: "§44 giver mulighed for, at kommunen kan bevilge hjælp til dækning af udgifter til pasning af et barn med handicap i eget hjem, som supplement til aflastning efter §84.", who: "Forældre til børn med betydelig og varigt nedsat fysisk eller psykisk funktionsevne, der har behov for pasning i hjemmet.", next: "Kontakt din sagsbehandler i Børne- og familieafdelingen for at drøfte, om §44 kan kombineres med §84 i jeres situation." },
    "§45": { title: "§45 - Ledsageordning", what: "Unge mellem 12 og 18 år kan få 15 timers ledsagelse om måneden til aktiviteter uden for hjemmet, som de ikke kan deltage i alene.", who: "Børn/unge der ikke kan færdes alene på grund af deres funktionsnedsættelse.", next: "Ansøg specifikt om 'Ledsagelse til unge' hos din kommune." },
    "Folkeskoleloven": { title: "Folkeskoleloven – Støtte i skolen", what: "Folkeskoleloven sikrer, at alle børn har ret til undervisning tilpasset deres behov. Det kan være specialundervisning, støttetimer, hjælpemidler eller placering i specialklasse eller specialskole.", who: "Alle børn i folkeskolealderen med behov for særlig støtte, uanset om de har en diagnose eller ej. Skolen har pligt til at tilbyde støtte, når der er behov for det.", next: "Kontakt skolens leder eller PP-rådgiveren (Pædagogisk Psykologisk Rådgivning) og bed om en vurdering af barnets støttebehov." },
    "Dagtilbudsloven": { title: "Dagtilbudsloven – Støtte i dagtilbud", what: "Dagtilbudsloven giver kommunen mulighed for at bevilge ekstra støtte til børn i vuggestue og børnehave, fx en fast støttepædagog, reduceret børnehavetid eller specialbørnehave.", who: "Børn i alderen 0-6 år i dagtilbud med særlige behov for støtte til trivsel og udvikling.", next: "Tal med lederen af barnets dagtilbud eller kontakt kommunens PPR for at anmode om en vurdering og evt. støttepædagog." }
  },
  checklist: {
    title: "Tjekliste: Før du ansøger",
    description: "Når du søger kommunen om støtte, øger det dine chancer for et hurtigt og korrekt svar, hvis du har forberedt dig godt. Brug denne tjekliste:",
    items: ["Indhent lægelig dokumentation", "Beskriv hverdagen", "Dokumenter merudgifter", "Børnefaglig udtalelse", "Find din sagsbehandler", "Forbered spørgsmål til mødet", "Hav en bisidder klar"],
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
