import React from "react";
import CustomHeadline from "../../components/CustomHeadline/CustomHeadlineComponent";
import "./PrivacyPageStyle.css";

const PrivacyPage = () => {
  return (
    <div class="privacy-page-container">
      <CustomHeadline size="h4">Privacy Policy</CustomHeadline>

      <section>
        <h5>Privacy notice</h5>
        <p>
          This privacy notice discloses the privacy practices for
          melioraimpact.no. This privacy notice applies solely to information
          collected by this website. It will notify you of the following:
        </p>
        <ol>
          <li>
            What personally identifiable information is collected from you
            through the website, how it is used and with whom it may be shared.
          </li>
          <li>
            What choices are available to you regarding the use of your data.
          </li>
          <li>
            The security procedures in place to protect the misuse of your
            information.
          </li>
          <li>How you can correct any inaccuracies in the information.</li>
        </ol>
      </section>
    </div>
  );
};

export default PrivacyPage;
