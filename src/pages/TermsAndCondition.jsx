import React from "react";
import PageBanner from "../components/global/PageBanner";
import { useSelector } from "react-redux";
import { Translator, Translate } from "react-auto-translate";

export default function TermsAndCondition() {
  const languageState = useSelector((state) => state.language);

  return (
    <>
      <PageBanner
        pageTitle={"Terms & Conditions"}
        homePageUrl="/"
        homePageText={"Home"}
        activePageText={"Terms & Conditions"}
      />

      <Translator
        from="en"
        to={languageState.language.value || "en"}
        googleApiKey={process.env.REACT_APP_GOOGLE_TRANSLATE_KEY}
      >
        <div className="privacy-policy-area ptb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="privacy-policy-content">
                  <p>
                    <i>
                      <Translate>
                        Terms and conditions for UnitedELDT.com
                      </Translate>
                    </i>
                  </p>
                  <h3>
                    <Translate>1. ACCEPTANCE OF TERMS</Translate>
                  </h3>

                  <blockquote className="blockquote">
                    <p>
                      <Translate>
                        By accessing or using the United ELDT website (the “https://unitedeldt.com/”), you agree to be bound by these Terms and conditions. If you do not agree with these terms, please do not use the Website.
                      </Translate>
                    </p>
                  </blockquote>

                  <h3>
                    <Translate>2.PRIVACY POLICY</Translate>
                  </h3>
                  <p>
                    <Translate>
                      Your use of the Website is also governed by our Privacy Policy. Please review the Privacy Policy to understand how we collect, use, and protect your personal information.
                    </Translate>
                  </p>
                  <h3>
                    <Translate>3. USER RESPONSIBILITIES</Translate>
                  </h3>
                  <ol type="a">
                    <li>

                      <Translate>
                        You must use the Website in a manner consistent with all applicable laws and regulations.
                      </Translate>
                    </li>
                    <li>

                      <Translate>
                        You agree not to engage in any harmful, disruptive, or illegal activities on the Website.
                      </Translate>
                    </li>
                  </ol>


                  <h3>
                    <Translate>4. WEBSITE CONTENT</Translate>
                  </h3>
                  <ol type="a">
                    <li>
                      <Translate>
                        All content on the Website, including text, images, and multimedia, is the property of United ELDT and protected by intellectual property laws.
                      </Translate>
                    </li>
                    <li>
                      <Translate>
                        You may not use, reproduce, or distribute the content without explicit permission.
                      </Translate>
                    </li>

                  </ol>
                  <h3>
                    <Translate>
                      5.  USER ACCOUNTS
                    </Translate>
                  </h3>
                  <ol type="a">
                    <li>
                      <Translate>
                        If you create an account on the Website, you are responsible for maintaining the confidentiality of your account information.                      </Translate>
                    </li>
                    <li>
                      <Translate>
                        You are responsible for all activities that occur under your account.                      </Translate>
                    </li>

                  </ol>


                  <h3>
                    <Translate>6. TERMINATION</Translate>
                  </h3>
                  <ol type="a">
                    <li>
                      <Translate>
                        The information on the Website is provided for general informational purposes and should not be considered professional advice.
                      </Translate>
                    </li>
                    <li>
                      <Translate>
                        United ELDT does not guarantee the accuracy, completeness, or reliability of the content on the Website.                </Translate>
                    </li>

                  </ol>

                  <h3>
                    <Translate>7. DISCLAIMERS</Translate>
                  </h3>
                  <ol type="a">
                    <li>
                      <Translate>
                        The information on the Website is provided for general informational purposes and should not be considered professional advice.                                            </Translate>
                    </li>
                    <li>
                      <Translate>
                        United ELDT does not guarantee the accuracy, completeness, or reliability of the content on the Website.
                      </Translate>
                    </li>

                  </ol>

                  <h3>
                    <Translate>8.  LIMITATION OF LIABILITY</Translate>
                  </h3>
                  <p>
                    <Translate>
                      United ELDT is not liable for any direct, indirect, incidental, consequential, or special damages arising out of or in connection with your use of the Website.
                    </Translate>
                  </p>
                  <h3>
                    <Translate>9. GOVERNING LAW AND JURISDICTION
                    </Translate>
                  </h3>
                  <p>
                    <Translate>
                      These terms are governed by the laws of [Your Jurisdiction]. Any disputes related to these terms will be subject to the exclusive jurisdiction of the courts in [Your Jurisdiction].

                    </Translate>
                  </p>
                  <h3>
                    <Translate>10. CHANGES TO TERMS</Translate>
                  </h3>
                  <p>
                    <Translate>
                      United ELDT reserves the right to modify these Terms and conditions at any time. You are responsible for regularly reviewing the terms, and continued use of the Website constitutes acceptance of any changes.
                    </Translate>
                  </p> <h3>
                    <Translate>12. ENTIRE AGREEMENT
                    </Translate>
                  </h3>
                  <p>
                    <Translate>
                      These Terms and conditions constitute the entire agreement between you and United ELDT regarding your use of the Website.
                    </Translate>
                  </p>
                  <h3>
                    <Translate>13. SEVERABILITY
                    </Translate>
                  </h3>
                  <p>
                    <Translate>
                      If any part of these terms is found to be unenforceable, the remaining provisions will continue to be in effect.
                    </Translate>
                  </p>

                  <p>
                    <Translate>
                      By using the United ELDT Website, you acknowledge that you have read and understood these Terms and conditions and agree to comply with them.                    </Translate>
                  </p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </Translator>
    </>
  );
}
