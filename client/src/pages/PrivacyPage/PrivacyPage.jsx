import React from "react";
import { HeadlineWithUnderline } from "../../components/HeadlineWithUnderline/headlineWithUnderline.jsx";
import "./PrivacyPageStyle.css";
import { Box, Grid, Typography } from "@mui/material";

const PrivacyPage = () => {
  return (
    <div className="privacy-page-container">
      <Grid container justifyContent="center">
        <Grid item textAlign="center" xs={12}>
          {HeadlineWithUnderline("Privacy Policy", 140, 0, "#212121", "36px")}
        </Grid>
        <Grid item xs={6}>
          <main>
            <section>
              <h5 className="subtitle">Privacy notice</h5>
              <p>
                This privacy notice discloses the privacy practices for
                melioraimpact.no. This privacy notice applies solely to
                information collected by this website. It will notify you of the
                following:
              </p>
              <ol>
                <li>
                  What personally identifiable information is collected from you
                  through the website, how it is used and with whom it may be
                  shared.
                </li>
                <li>
                  What choices are available to you regarding the use of your
                  data.
                </li>
                <li>
                  The security procedures in place to protect the misuse of your
                  information.
                </li>
                <li>
                  How you can correct any inaccuracies in the information.
                </li>
              </ol>
            </section>
            <section>
              <h5 className="subtitle">
                Information collection, use, and sharing
              </h5>
              <p>
                We are the sole owners of the information collected on this
                site. We only have access to/collect information that you
                voluntarily give us via email or other direct contact from you.
                We will not sell or rent this information to anyone. We will use
                your information to respond to you, regarding the reason you
                contacted us. We will not share your information with any third
                party outside of our organization, other than as necessary to
                work with you directly. Unless you ask us not to, we may contact
                you via email in the future to tell you about changes to our
                services, or changes to this privacy policy.
              </p>
            </section>
            <section>
              <h5 className="subtitle">
                Your access and control over information
              </h5>
              <p>
                You may opt out of any future contacts from us at any time. You
                can do the following at any time by contacting us via the email
                address or phone number given on our website:
              </p>
              <ul>
                <li>See what data we have about you, if any.</li>
                <li>Change/correct any data we have about you.</li>
                <li>Have us delete any data we have about you.</li>
                <li>
                  Express any concern you have about our use of your data.
                </li>
              </ul>
            </section>

            <section>
              <h5 className="subtitle">Orders</h5>
              <p>
                We may request information from you on our order forms. To buy
                from us, you must provide contact information (like name,
                physical address and email address) and financial information
                (like credit card number, expiration date). We use an outside
                billing and invoicing company, and a credit card processing
                company to bill users for goods and services. These companies do
                not retain, share, store or use personally identifiable
                information for any secondary purposes beyond responding to your
                request for services. This information is used for billing
                purposes and to keep track of our deliverables. If we have
                trouble processing an order, we'll use this information to
                contact you.
              </p>
            </section>
            <section>
              <h5 className="subtitle">Security</h5>
              <p>
                We take precautions to protect your information. When you submit
                sensitive information via the website, your information is
                protected both online and offline. Wherever we collect sensitive
                information (such as credit card data), that information is
                encrypted and transmitted to us in a secure way. You can verify
                this by looking for a lock icon in the address bar and looking
                for "https" at the beginning of the address of the Web page.
                While we use encryption to protect sensitive information
                transmitted online, we also protect your information offline.
                Only employees who need the information to perform a specific
                job (for example, billing or customer service) are granted
                access to personally identifiable information. The
                computers/servers in which we store personally identifiable
                information are kept in a secure environment.
              </p>
            </section>
            <section>
              <h5 className="subtitle">Cookies</h5>
              <p>
                We occasionally use "cookies" on this site. A cookie is a piece
                of data stored on a site visitor's hard drive to help us improve
                your access to our site and identify repeat visitors to our
                site. For instance, when we use a cookie to identify you, you
                would not have to log in a password more than once, thereby
                saving time while on our site. Cookies can also enable us to
                track and target the interests of our users to enhance the
                experience on our site. Usage of a cookie is in no way linked to
                any personally identifiable information on our site.
              </p>
            </section>
            <section>
              <p>
                If you feel that we are not abiding by this privacy policy, you
                should contact us immediately via email at{" "}
                <span
                  style={{
                    color: "#490374",
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                >
                  legal@melioraimpact.no.
                </span>
              </p>
            </section>
          </main>
        </Grid>
      </Grid>
    </div>
  );
};

export default PrivacyPage;
