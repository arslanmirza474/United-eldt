import React from "react";
import { Translator, Translate } from "react-auto-translate";
import CallToPhone from "./CallToPhone";

export default function ({ language }) {
  return (
    <div>
      <Translator
        from="en"
        to={language || "en"}
        googleApiKey={process.env.REACT_APP_GOOGLE_TRANSLATE_KEY}
      >
       
        <div className="call-to-phone-block">
          <div className="container-full">
            <CallToPhone language={language} />
          </div>
        </div>
      </Translator>
    </div>
  );
}
