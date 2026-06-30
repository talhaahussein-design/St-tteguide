export default function AppealGuide() {
  return (
    <div style={{ padding: "2rem", maxWidth: "900px", margin: "0 auto" }}>
      <h1>Klage over kommunens afgørelse</h1>

      <p style={{ fontSize: "1.1rem" }}>
        Hvis du får afslag på §41, §42 eller anden støtte, har du ret til at klage.
      </p>

      <hr style={{ margin: "2rem 0" }} />

      <h2>1. Få en skriftlig afgørelse</h2>
      <p>
        Kommunen skal give dig en skriftlig afgørelse med begrundelse og
        henvisning til lovgrundlag.
      </p>

      <h2>2. Frist for klage</h2>
      <p>
        Du har normalt 4 uger fra den dag, du modtager afgørelsen.
      </p>

      <h2>3. Hvad skal klagen indeholde?</h2>
      <ul>
        <li>Hvilken afgørelse du klager over</li>
        <li>Hvorfor du mener den er forkert</li>
        <li>Evt. ny dokumentation</li>
      </ul>

      <hr style={{ margin: "2rem 0" }} />

      <h2>Eksempel på klageformulering</h2>

      <blockquote style={{ background: "#f4f4f4", padding: "1rem" }}>
        Jeg klager hermed over kommunens afgørelse af [dato] vedrørende
        tabt arbejdsfortjeneste efter servicelovens §42.
        Jeg mener, at afgørelsen ikke i tilstrækkelig grad tager højde
        for mit barns dokumenterede behov.
      </blockquote>

      <hr style={{ margin: "2rem 0" }} />

      <h3>Hvad sker der efter du klager?</h3>
      <p>
        Kommunen skal genvurdere sagen. Hvis de fastholder afslaget,
        sendes sagen videre til Ankestyrelsen.
      </p>

      <p style={{ fontSize: "0.9rem", opacity: 0.8 }}>
        Denne vejledning er generel information og ikke juridisk rådgivning.
      </p>
    </div>
  );
}
