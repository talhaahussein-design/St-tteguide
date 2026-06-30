import { Link } from "react-router-dom";

export default function Paragraph42() {
  return (
    <div style={{ padding: "2rem", maxWidth: "900px", margin: "0 auto" }}>
      <h1>§42 – Tabt arbejdsfortjeneste</h1>

      <p style={{ fontSize: "1.1rem" }}>
        Du kan få dækket tabt arbejdsfortjeneste, hvis du må gå ned i tid
        eller helt stoppe med at arbejde for at passe dit barn.
      </p>

      <hr style={{ margin: "2rem 0" }} />

      <h2>Hvem kan få §42?</h2>
      <ul>
        <li>Barnet har betydelig og varig nedsat funktionsevne</li>
        <li>Der er dokumenteret behov for pasning i hjemmet</li>
        <li>Det er nødvendigt, at du reducerer din arbejdstid</li>
      </ul>

      <hr style={{ margin: "2rem 0" }} />

      <h2>Hvad dækker ordningen?</h2>
      <ul>
        <li>Lønkompensation for mistede arbejdstimer</li>
        <li>Pensionsbidrag</li>
        <li>Feriepenge</li>
      </ul>

      <p>
        Udbetalingen beregnes individuelt og kan ikke overstige et fastsat loft.
      </p>

      <hr style={{ margin: "2rem 0" }} />

      <h2>Typiske afvisninger fra kommunen</h2>
      <ul>
        <li>“Behovet er ikke dokumenteret tilstrækkeligt”</li>
        <li>“Barnet kan passes i eksisterende tilbud”</li>
        <li>“Du kan bruge ferie eller fleksibilitet på arbejde”</li>
      </ul>

      <p>
        Hvis du får afslag, har du ret til en skriftlig begrundelse og mulighed
        for at klage.
      </p>

      <hr style={{ margin: "2rem 0" }} />

      <h2>Hvad kan du skrive i din ansøgning?</h2>

      <p>
        Eksempel på formulering:
      </p>

      <blockquote style={{ background: "#f4f4f4", padding: "1rem" }}>
        Jeg ansøger om tabt arbejdsfortjeneste efter servicelovens §42,
        da mit barns behov medfører, at jeg må reducere min arbejdstid.
        Behovet er dokumenteret ved vedlagte lægefaglige vurdering.
      </blockquote>

      <hr style={{ margin: "2rem 0" }} />

      <h2>Beregn vejledende ydelse</h2>

      <p>
        Du kan bruge vores beregner til at få et vejledende estimat.
      </p>

      <Link to="/calculator">
        Gå til beregner
      </Link>

      <hr style={{ margin: "2rem 0" }} />

      <h3>Vigtigt</h3>
      <p style={{ fontSize: "0.9rem", opacity: 0.8 }}>
        Denne side er vejledende og erstatter ikke juridisk rådgivning.
        Tjek altid gældende lovgivning på retsinformation.dk.
      </p>
    </div>
  );
}
