import React from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
function PrivacyPolicy() {
  //so the page scrolls to top when mounted
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  <Helmet>
    <title>BrandMobile - Privacy Policy</title>
    <meta name="description" content="BrandMobile ApS privacy policy" />
    <meta name="keywords" content="Webdesign, Platform, Concept, Development" />
  </Helmet>;
  return (
    <>
      <section className="privacyPol">
        <div className="privacy-wrapper">
          <h1>Brandmobile Privacy Policy</h1>
          <h2>What personal data we collect</h2>
          <p>
            It is BrandMobile’s policy to respect your privacy regarding any
            information we may collect while operating our website. This Privacy
            Policy applies to https://www.brandmobile.com (hereinafter, “us”,
            “we”, or “https://www.brandmobile.com”). We respect your privacy and
            are committed to protecting personally identifiable information you
            may provide us through the Website. We have adopted this privacy
            policy (“Privacy Policy”) to explain what information may be
            collected on our Website, how we use this information, and under
            what circumstances we may disclose the information to third parties.
            <br></br>
            <br></br> This Privacy Policy applies only to information we collect
            through the Website and does not apply to our collection of
            information from other sources. This Privacy Policy, together with
            the Terms and conditions posted on our Website, set forth the
            general rules and policies governing your use of our Website.
            Depending on your activities when visiting our Website, you may be
            required to agree to additional terms and conditions.
          </p>
          <h2>Web site visitors</h2>
          <p>
            Like most website operators, BrandMobile collects
            non-personally-identifying information of the sort that web browsers
            and servers typically make available, such as the browser type,
            language preference, referring site, and the date and time of each
            visitor request. BrandMobile’s purpose in collecting non-personally
            identifying information is to better understand how BrandMobile’s
            visitors use its website. From time to time, BrandMobile may release
            non-personally-identifying information in the aggregate, e.g., by
            publishing a report on trends in the usage of its website. <br></br>
            <br></br>
            BrandMobile also collects potentially personally-identifying
            information like Internet Protocol (IP) addresses for logged in
            users and for users leaving comments on https://www.brandmobile.com
            blog posts. BrandMobile only discloses logged in user and commenter
            IP addresses under the same circumstances that it uses and discloses
            personally-identifying information as described below.
          </p>
          <h2>Contact forms and personal information</h2>
          <p>
            Certain visitors to BrandMobile’s websites choose to interact with
            BrandMobile in ways that require BrandMobile to gather
            personally-identifying information. The amount and type of
            information that BrandMobile gathers depends on the nature of the
            interaction. For example, we ask visitors who sign up for a blog at
            https://www.brandmobile.com to provide a username and email address.
          </p>
          <h2>Security</h2>
          <p>
            The security of your Personal Information is important to us, but
            remember that no method of transmission over the Internet, or method
            of electronic storage is 100% secure. While we strive to use
            commercially acceptable means to protect your Personal Information,
            we cannot guarantee its absolute security.
          </p>
          <h2>Embedded content from other websites and links</h2>
          <p>
            Our Service may contain links to external sites that are not
            operated by us. If you click on a third party link, you will be
            directed to that third party’s site. We strongly advise you to
            review the Privacy Policy and terms and conditions of every site you
            visit.<br></br>
            <br></br>
            We have no control over, and assume no responsibility for the
            content, privacy policies or practices of any third party sites,
            products or services.
          </p>
          <h2>Google Adwords</h2>
          <p>
            Https://www.brandmobile.com uses the remarketing services to
            advertise on third party websites (including Google) to previous
            visitors to our site. It could mean that we advertise to previous
            visitors who haven’t completed a task on our site, for example using
            the contact form to make an enquiry. This could be in the form of an
            advertisement on the Google search results page, or a site in the
            Google Display Network. Third-party vendors, including Google, use
            cookies to serve ads based on someone’s past visits. Of course, any
            data collected will be used in accordance with our own privacy
            policy and Google’s privacy policy. <br></br>
            <br></br>
            You can set preferences for how Google advertises to you using the
            Google Ad Preferences page, and if you want to you can opt out of
            interest-based advertising entirely by cookie settings or
            permanently using a browser plugin.
          </p>
          <h2>Aggregated statistics</h2>
          <p>
            BrandMobile may collect statistics about the behavior of visitors to
            its website. BrandMobile may display this information publicly or
            provide it to others. However, BrandMobile does not disclose your
            personally-identifying information.
          </p>
          <h2>Cookies</h2>
          <p>
            To enrich and perfect your online experience, BrandMobile uses
            “Cookies”, similar technologies and services provided by others to
            display personalized content, appropriate advertising and store your
            preferences on your computer. <br></br>
            <br></br>A cookie is a string of information that a website stores
            on a visitor’s computer, and that the visitor’s browser provides to
            the website each time the visitor returns. BrandMobile uses cookies
            to help BrandMobile identify and track visitors, their usage of
            https://www.brandmobile.com, and their website access preferences.
            BrandMobile visitors who do not wish to have cookies placed on their
            computers should set their browsers to refuse cookies before using
            BrandMobile’s websites, with the drawback that certain features of
            BrandMobile’s websites may not function properly without the aid of
            cookies. <br></br>
            <br></br>
            By continuing to navigate our website without changing your cookie
            settings, you hereby acknowledge and agree to BrandMobile’s use of
            cookies.
          </p>
          <h2>Privacy Policy Changes</h2>
          <p>
            Although most changes are likely to be minor, BrandMobile may change
            its Privacy Policy from time to time, and in BrandMobile’s sole
            discretion. BrandMobile encourages visitors to frequently check this
            page for any changes to its Privacy Policy. Your continued use of
            this site after any change in this Privacy Policy will constitute
            your acceptance of such change.
          </p>
          <h2>Credit</h2>
          <p>
            This privacy policy was created at
            https://termsandconditionstemplate.com/privacy-policy-generator/. If
            you have any questions about this Privacy Policy, please contact us
            via or phone.
          </p>
          <h2>Contact</h2>
          <p>
            BrandMobile, Østergade 6, 1100 Copenhagen
            <br></br> Phone: +45 26 85 85 85 <br></br> E-mail:
            letsamplify@brandmobile.com
          </p>
        </div>
      </section>
    </>
  );
}

export default PrivacyPolicy;
