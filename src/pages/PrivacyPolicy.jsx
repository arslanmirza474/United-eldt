import React from "react";
import PageBanner from "../components/global/PageBanner";
import { useSelector } from "react-redux";
import { Translator, Translate } from "react-auto-translate";

export default function PrivacyPolicy() {
  const languageState = useSelector((state) => state.language);

  return (
    <>
      <PageBanner
        pageTitle="Privacy Policy"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Privacy Policy"
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

                    <Translate>
                      United ELDT (Company) has prepared this Privacy Policy to explain what Personal Data (defined below) we collect, how we use and share that data, and your choices concerning our data practices; all only in the context of a Visitor’s use of the United ELDT website. We provide this service to you (as described in the applicable Terms of Service), including through our website located at www.unitedeldt.com (the “Site”), and through related services (collectively, such services and Site, and any new features thereof the “Service(s)”). This Privacy Policy is incorporated into and forms part of the Terms of Service available at www.unitedeldt.com/terms that are applicable to you. This Privacy Policy explains what Personal Data (defined below) we collect, how we use and share that data, and your choices concerning our data practices.                      </Translate>

                  </p>
                  <p>

                    <Translate>
                      Before using the applicable Services or submitting any Personal Data to Company, please review this Privacy Policy carefully and contact us if you have any questions. By using the applicable Services, you agree to the practices described in this Privacy Policy. If you do not agree to this Privacy Policy, please do not access the Site or otherwise use the Services.                       </Translate>

                  </p>
                  <h3>
                    <Translate>1. PERSONAL DATA WE COLLECT</Translate>
                  </h3>

                  <blockquote className="blockquote">
                    <p>
                      <Translate>
                        We collect information that alone or in combination with other information in our possession could be used to identify you (“Personal Data”) as follows:
                      </Translate>
                    </p>
                  </blockquote>

                  <h3>
                    <Translate>2. Personal Data You Provide:</Translate>
                  </h3>
                  <p>
                    <Translate>
                      We collect Personal Data when you visit the Site or use the Services (including submitting a contact form). The Personal Data collected during these interactions may include:

                    </Translate>
                  </p>
                  <h3>
                    <Translate>3. Identification Information:</Translate>
                  </h3>
                  <p>
                    <Translate>
                      your name, email address, telephone number, your zip code, and other information you share via the Service, in each case only to the extent permitted by applicable law.
                    </Translate>
                  </p>
                  <p>
                    <Translate>
                      Personal Data We Receive Automatically From Your Use of the Service: When you visit, use and interact with the Service, we may receive and store certain information about your visit, use or interactions. For example, we may monitor the number of people that visit the Service, broad geographical information, and navigation pattern. In particular, the following information is created and automatically logged in our systems:

                    </Translate>
                  </p>
                  <h3>
                    <Translate>4.Log Data:</Translate>
                  </h3>
                  <p>
                    <Translate>
                      Information that your browser automatically sends whenever you use the Service (“log data”). Log data includes your Internet Protocol address, browser type and settings, the date and time of your request, and how you interacted with the Service.

                    </Translate>
                  </p>
                  <h3>
                    <Translate>
                      5. Cookies Data:
                    </Translate>
                  </h3>
                  <p>
                    <Translate>
                      Please see the “Cookies” section below to learn more about how we use cookies.

                    </Translate>
                  </p>
                  <h3>
                    <Translate>
                      6. Device Data:
                    </Translate>
                  </h3>
                  <p>
                    <Translate>
                      Includes name of the device, operating system, and browser you are using. Information collected may depend on the type of device you use and its settings.
                    </Translate>
                  </p>

                  <h3>
                    <Translate>7. Usage Data:
                    </Translate>
                  </h3>
                  <p>
                    <Translate>
                      We collect information about how you use our Service, how you visit the Site, and other relevant data
                    </Translate>
                  </p>
                  <h3>
                    <Translate>8.
                      Geolocation Data:
                    </Translate>
                  </h3>
                  <p>
                    <Translate>
                      We collect your location information through the Service using your device IP address.
                    </Translate>
                  </p>
                  <h3>
                    <Translate>9. Cookies:
                    </Translate>
                  </h3>
                  <p>
                    <Translate>
                      We use cookies to operate and administer our Site, gather usage data on our Site and improve your experience on it. A “cookie” is a piece of information sent to your browser by a website you visit. For more details on cookies please visit All About Cookies.
                    </Translate>
                  </p>
                  <h3>
                    <Translate>10. Analytics:
                    </Translate>
                  </h3>
                  <p>
                    <Translate>
                      We use Google Analytics, a web analytics service provided by Google, Inc. (“Google”). Google Analytics uses cookies to help us analyze how users use the Site and enhance your experience when you use the Site. For more information on how Google uses this data, go to www.google.com/policies/privacy/partners/.
                    </Translate>
                  </p>
                  <h3>
                    <Translate>11.Your Choices:
                    </Translate>
                  </h3>
                  <p>
                    <Translate>
                      You can control the marketing emails and/or text messages you receive by updating your settings through your account. In addition, if at any time you do not wish to receive future marketing communications, you may contact us at admin@unitedeldt.com.
                    </Translate>
                  </p>
                  <h3>
                    <Translate>12.SHARING AND DISCLOSURE OF PERSONAL DATA
                    </Translate>
                  </h3>
                  <p>



                    <p>
                      <Translate>
                        Vendors and Service Providers: We share Personal Data with vendors and service providers, including providers of hosting services, cloud services and other information technology services providers, and other relevant services.
                      </Translate>
                    </p>
                    <h3>
                      <Translate>Business Transfers:
                      </Translate>
                    </h3>
                    <p>
                      <Translate>
                        If we are involved in a merger, acquisition, or any form of transfer of some or all of our assets, your Personal Data and other information may be shared and transferred as part of that transaction.

                      </Translate>
                    </p>
                    <h3>
                      <Translate> Legal Requirements:
                      </Translate>
                    </h3>
                    <p>
                      <Translate>
                        We may disclose your Personal Data if required to do so by law or in good faith belief that such action is necessary to comply with legal requirements, protect our rights, or the safety of others.

                      </Translate>
                    </p>


                  </p>

                  <h3>
                    <Translate>13. DATA RETENTION
                    </Translate>
                  </h3>
                  <p>
                    <Translate>
                      We keep Personal Data for as long as reasonably necessary for the purposes described in this Privacy Policy or as required by law.

                    </Translate>
                  </p>
                  <h3>
                    <Translate>14. UPDATE YOUR INFORMATION:
                    </Translate>
                  </h3>
                  <p>
                    <Translate>
                      Please contact us at admin@unitedeldt.com if you need to change or correct your Personal Data.                    </Translate>
                  </p>
                  <h3>
                    <Translate>14. AGE RESTRICTIONS:
                    </Translate>
                  </h3>
                  <p>
                    <Translate>
                      Our Service is not directed to individuals under the age of 18. We do not knowingly collect Personal Data from children under 13. If you believe a child under 13 has provided Personal Data to us, please contact us at admin@unitedeldt.com.                     </Translate>
                  </p>
                  <h3>
                    <Translate>15. SECURITY:
                    </Translate>
                  </h3>
                  <p>
                    <Translate>
                      You use the Service at your own risk. We implement commercially reasonable measures to protect Personal Data. However, no online transmission can ever be fully secure. Please keep this in mind when providing Personal Data to us.                </Translate>
                  </p>
                  <h3>
                    <Translate>16. CHANGES TO THE PRIVACY POLICY:
                    </Translate>
                  </h3>
                  <p>
                    <Translate>
                      We may change this Privacy Policy at any time. By continuing to use the Service after changes are made, you consent to the revised Privacy Policy.
                    </Translate>
                  </p>
                  <h3>
                    <Translate>17. CONTACT US:
                    </Translate>
                  </h3>
                  <p>
                    <Translate>
                      If you have any questions about our Privacy Policy or practices, please feel free to contact us at: admin@unitedeldt.com               </Translate>
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
