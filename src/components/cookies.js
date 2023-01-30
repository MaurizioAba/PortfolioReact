import React from "react";
import CookieConsent, { Cookies } from "react-cookie-consent";

class CookiesCons extends React.Component {

  render() {

    Cookies.set("cookies", "nice")

    return (
      <div className="test">
        <CookieConsent>
        Questo sito web utilizza i cookie{" "}
          <span style={{ fontSize: "10px" }}> Cliccando sul pulsante "Accetta" acconsenti all'uso dei soli cookie tecnici.
          </span>
        </CookieConsent>
      </div>
    );
  }
}

export default CookiesCons;