
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';
import MateLogo from '@/components/MateLogo';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Logo Mate en haut à gauche */}
      <div className="px-6 pt-6 flex items-center justify-between">
        <Link to="/">
          <MateLogo />
        </Link>
        <Link 
          to="/politica-de-privacidad" 
          className="text-2xl hover:scale-110 transition-transform"
          title="Español"
        >
          🇪🇸
        </Link>
      </div>
      
      <main className="container mx-auto px-6 py-8 max-w-4xl">
        <h1 className="text-4xl font-bold text-mate-yellow mb-8 text-center">
          Privacy Policy
        </h1>
        
        <div className="space-y-8 text-gray-300 leading-relaxed">
          <p>
            <strong>IMPORTANT:</strong> We invite you to read this Privacy Statement carefully to learn why we collect your personal data and how it is processed by Your Mates Tech, S.L., Aribau 254, pral. 1ª, 08006, Barcelona, Spain.
          </p>
          
          <p>
            This policy is subject to change and should be consulted each time you decide to visit us.
          </p>
          
          <p>
            This Privacy Policy was modified on 22/10/2024.
          </p>

          <section>
            <h2 className="text-2xl font-bold text-mate-yellow mb-4">SCOPE</h2>
            <p>
              This online privacy statement of Your Mates Tech, S.L., is public and accessible to all users and customers of Your Mates Tech, S.L., and applies to all websites, applications, events, and other services of Your Mates Tech, S.L. being mateapp.es the main site or domain. It also applies to those documents or messages issued by Your Mates Tech, S.L. that link to this policy or privacy statement or, where appropriate, indicate access to it so that you know how Your Mates Tech, S.L. uses your personal data. Some services may have their own privacy policies. If so, those policies apply instead of this one. Next, we inform you in a general way about the uses of your personal information. These uses and treatments are detailed below.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-mate-yellow mb-4">PERSONAL INFORMATION WE COLLECT</h2>
            <p className="mb-4">
              Information on the use of personal data, as provided for in Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data (RGPD) and Organic Law 3/2018 of 5 December on the Protection of Personal Data and Guarantee of Digital Rights, which adapts the Regulation to the Spanish legal system and completes and develops its provisions (LOPDGDDD). Your Mates Tech, S.L. respects your right to privacy and applies all the regulations in force in order to protect the personal data of its customers and users.
            </p>
            <p className="mb-4">
              Your personal data are treated with the utmost confidentiality, having adopted Your Mates Tech, S.L., as Responsible for Treatment, the technical and organizational measures necessary to ensure the confidentiality and security of personal data, avoiding its alteration, loss, treatment or unauthorized access.
            </p>
            <p className="mb-4">
              In order for you to receive information and, where applicable, to be able to reserve or use the products and services offered by Your Mates Tech, S.L. through the site(s) of Your Mates Tech, S.L., it is necessary for you to inform us of certain personal data necessary in order to be able to personalize our services and adjust them to your interests and needs.
            </p>
            <p className="mb-4">
              We remind you that it is the user's duty to inform us of any change in their data, to Your Mates Tech, S.L., and that had registered our sites, to proceed to its maintenance in the corresponding files. In order to improve the services, we offer you, it is possible that you will receive a satisfaction survey. You will be asked for an assessment of the services received and a brief comment on your experience.
            </p>
            <p className="mb-4">
              We collect your personal information for several reasons: When you create an account, you provide us with your login details, basic profile information (e.g., gender, date of birth). You can share additional information (e.g., bio, interests, photos, videos). Profile information such as biography, interests, photos, videos, etc. Respond to requests for services, realization of the services, send you status messages of ongoing services, sending of promotions that we consider interesting for our clients, quality and satisfaction surveys for the improvement of the services carried out by Your Mates Tech, S.L.
            </p>

            <h3 className="text-xl font-semibold text-mate-yellow mb-3">Information we receive from others:</h3>
            <p className="mb-4">
              Other members may provide information about you when they interact with our services. Through social networks, you can share information via your social media account (e.g., Facebook, Google, Instagram). We may receive information from partners for advertising and security purposes.
            </p>

            <h3 className="text-xl font-semibold text-mate-yellow mb-3">Automatically collected information:</h3>
            <p className="mb-4">
              We collect data about your activities within our services. We collect information about the devices you use to access our services. We use cookies to recognize and identify your devices. For more details, see our "Cookie Policy". With your permission, we may collect precise geolocation data. If you use features such as facial recognition, we collect data to verify your identity. With your consent, we collect additional information, such as photos and videos. You may revoke this consent at any time and exercise your rights of access, rectification, deletion, limitation of treatment, forgetfulness, portability of data, and opposition by the means indicated in the chapter "EXERCISE OF RIGHTS" of this document.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-mate-yellow mb-4">COLLECTION METHODS</h2>
            <p>
              Your Mates Tech, S.L. collects personal data through several channels: on the website mateapp.es; in the call center of Your Mates Tech, S.L.; in the same physical centers of Your Mates Tech, S.L., when requesting a service; on the page of Your Mates Tech, S.L. on Instagram, Tik Tok. In any case and as long as it is applicable, we will give you the option of refusing to allow us to use your data for the purpose of sending or advertising communications.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-mate-yellow mb-4">HOW WE USE YOUR INFORMATION</h2>
            <p className="mb-4">
              We use your personal information to provide, maintain, and improve our services, ensuring your security and optimizing your experience on our platform. Our goal is to provide you with a secure and personalized experience, while complying with all applicable legal obligations.
            </p>
            <p className="mb-2">Specific uses of your information include:</p>
            <ul className="list-disc list-inside mb-4 space-y-1">
              <li>We use your information to create and manage your account, facilitating your access and effective use of our platform.</li>
              <li>Your information allows us to provide you with support, respond to your inquiries and resolve any issues that may arise while using our services.</li>
              <li>We use your information to keep in touch with you regarding our services, including updates, notifications and changes to our terms or policies.</li>
              <li>We tailor our services to your preferences and behavior, improving your user experience. This includes personalized recommendations and tailoring content based on your interests and activities.</li>
              <li>We may use your information to run and measure the effectiveness of our advertising campaigns, ensuring that the ads you see are relevant to your interests.</li>
              <li>By analyzing your use of our services, we may identify areas for improvement and develop new features that better meet your needs.</li>
              <li>We are committed to protecting our users. Your information helps us prevent, detect, and combat fraud, abuse, and other illegal activities on our platform.</li>
              <li>We process your information to comply with our legal obligations, including cooperating with authorities when necessary, and to ensure that our practices are aligned with applicable regulations.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-mate-yellow mb-4">Processing of personal data</h2>
            <p className="mb-2">The information we collect is processed for the following purposes:</p>
            <ul className="list-disc list-inside mb-4 space-y-1">
              <li>To create, manage and maintain your account on our platform.</li>
              <li>To tailor our services to your preferences, providing you with an engaging and personalized experience.</li>
              <li>To protect our users by preventing, detecting, and addressing security threats, fraud, and illegal activities.</li>
              <li>To comply with our legal and regulatory obligations, ensuring that all data processing activities are performed in accordance with applicable laws.</li>
            </ul>
            <p>
              We retain your personal information only for as long as necessary to fulfill the purposes described above and in accordance with legal requirements. Once the data is no longer needed for these purposes, we will securely delete or anonymize it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-mate-yellow mb-4">HOW WE SHARE YOUR INFORMATION</h2>
            <p className="mb-4">
              Primarily, we share your information with other members of the platform, as well as with service providers and partners who help us manage and improve our services.
            </p>
            <p className="mb-2">Details of the information sharing include:</p>
            <ul className="list-disc list-inside mb-4 space-y-1">
              <li>We share your information with other members when you disclose it through the service (for example, in your profile).</li>
              <li>We share data with vendors that support our operations, such as those involved in hosting, analytics, and customer support.</li>
              <li>We share information with Mate affiliates for operational and security purposes.</li>
              <li>We may disclose information to comply with legal process or to protect the safety of our users and services.</li>
              <li>We may also share your information with third parties when we have your explicit consent.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-mate-yellow mb-4">REGISTRATION THROUGH THIRD PARTY PLATFORMS</h2>
            <p className="mb-4">
              The User may register and access the App through authentication services provided by third parties, such as Apple, Google, or other equivalent services (hereinafter, "Third Party Platforms"). By opting for this mode of registration, the User authorizes the transfer of certain personal data, such as name, email address, and any other information that the Third Party Platform has authorized to be shared with our platform, in accordance with the terms and conditions governing its relationship with such Third Party Platform.
            </p>
            <p className="mb-4">
              The collection and use of information provided through Third Party Platforms will be subject to the privacy policies and terms of use of such Third Party Platforms. Mate assumes no responsibility for the operation, availability, or security of the Third Party Platforms or for the treatment that such platforms may make of the User's personal information.
            </p>
            <p>
              The User acknowledges and agrees that any access or interaction with our platform through a Third Party Platform shall also be governed by the terms and policies established by such platform, which may differ from these Terms and Conditions. Mate is not responsible for any incidents arising from the authentication or use of credentials provided by these Third Party Platforms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-mate-yellow mb-4">DISCLOSURE TO THIRD PARTIES</h2>
            <p>
              We are committed to ensuring that your personal data is protected, regardless of where it is processed or stored. In certain circumstances, your information may be transferred to and processed in countries outside of your own, including countries outside the European Economic Area (EEA).
            </p>

            <h3 className="text-xl font-semibold text-mate-yellow mb-3 mt-6">International data transfers</h3>
            <p className="mb-4">
              When we transfer your personal data outside the EEA, we ensure that such transfers are carried out in accordance with applicable data protection regulations. We use the following safeguards to protect your data:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-1">
              <li>We use the European Commission's standard contractual clauses, which are designed to ensure that your personal data receives the same level of protection it would within the EEA.</li>
              <li>In some cases, we may transfer your data to countries that the European Commission has deemed to provide an adequate level of data protection.</li>
              <li>When necessary, we implement additional safeguards, such as binding corporate rules, to ensure that your data is protected during international transfers.</li>
            </ul>
            <p>
              By employing these legal mechanisms and safeguards, we strive to ensure that your data remains secure and that your privacy rights are respected, regardless of where your data is processed.
            </p>

            <h3 className="text-xl font-semibold text-mate-yellow mb-3 mt-6">Your rights and options</h3>
            <p className="mb-4">
              We are committed to providing you with clear and accessible choices to manage your personal data. Depending on your location, you may have certain legal rights regarding your personal data, and we have implemented tools and settings to help you exercise these rights.
            </p>

            <h3 className="text-xl font-semibold text-mate-yellow mb-3">Tools and settings</h3>
            <ul className="list-disc list-inside mb-4 space-y-1">
              <li>You can access and update your personal information directly within our service.</li>
              <li>You have control over your device settings, allowing you to manage the collection and use of your data by our services.</li>
              <li>If you choose to delete your account, you can do so directly through the service interface. Once your account is deleted, your data will be handled in accordance with our Data Retention Policy.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-mate-yellow mb-4">TREATMENTS AND USES</h2>
            <p className="mb-4">
              You may revoke your consent at any time in order to allow your data to be used in a specific manner. Such revocation of authorization may not have retroactive effect. Realization and management of the contracted service and invoicing. Without the requested data it will not be possible to carry out the service.
            </p>
            <p className="mb-4">
              The personal data, as well as those related to the service will be kept in our files for the time necessary to be able to make effective the guarantee of the service provided (5 years). The data relating to the invoicing of the service will be kept in our files for the time necessary to comply with the legal and fiscal obligations applicable to the services provided by Your Mates Tech, S.L. (5 years + current year).
            </p>
            <p className="mb-2">With regard to this data processing, you may, if you consider it necessary, exercise the following rights:</p>
            <ul className="list-disc list-inside mb-4 space-y-1">
              <li>Access to know what data we keep and treat.</li>
              <li>Of rectification in case you consider that the data are not correct or because they have changed (for example, your contact details).</li>
            </ul>

            <h3 className="text-xl font-semibold text-mate-yellow mb-3 mt-6">Editing Queries</h3>
            <p className="mb-4">
              Personal and contact data, images, will be kept in our files for the time necessary to carry out the requested management.
            </p>
            <p className="mb-2">If you consider it necessary, you will be able to exercise the following rights with regard to this data processing:</p>
            <ul className="list-disc list-inside mb-4 space-y-1">
              <li>Access to know what data we keep and treat.</li>
              <li>Of opposition and limitation, so that personal data will not be processed -since your request is processed- for the purpose of the information service.</li>
              <li>Of rectification in the case that considers that the data are not correct or because they have changed.</li>
              <li>Deletion or deletion in the event that you withdraw your consent for this treatment.</li>
            </ul>

            <h3 className="text-xl font-semibold text-mate-yellow mb-3 mt-6">Quality Service</h3>
            <p className="mb-4">
              In order to comply with our commitments of quality with the client, we carry out a survey punctually to know the satisfaction with the work carried out to our clients and users in order to be able to improve our services. These surveys are carried out by electronic means (you receive an e-mail with a link to the website where the survey is carried out) and they do not collect any personal data additional to those you have previously provided.
            </p>
            <p className="mb-4">
              In any case, the personal contact data collected for the purpose of sending you the quality survey will only be used if you give us your explicit consent. Personal data relating to this processing will be kept for this purpose for 3 months.
            </p>
            <p className="mb-2">You may, if you consider it necessary, exercise the following rights with regard to this data processing:</p>
            <ul className="list-disc list-inside mb-4 space-y-1">
              <li>Of opposition and limitation, so that personal data will not be processed -since your request is processed- for the purpose of quality service.</li>
              <li>Of rectification in the case that considers that the data are not correct or because they have changed.</li>
            </ul>

            <h3 className="text-xl font-semibold text-mate-yellow mb-3 mt-6">Information on the services of Your Mates Tech, S.L.</h3>
            <p className="mb-4">
              In order to keep you informed about the services provided by Your Mates Tech, S.L. and about specific promotions, we need to treat your contact details. On the other hand, in each communication sent you will be offered the opportunity to unsubscribe from them; additionally, you can exercise the rights indicated below at any time.
            </p>
            <p className="mb-2">You may, if you consider it necessary, exercise the following rights with regard to this data processing:</p>
            <ul className="list-disc list-inside mb-4 space-y-1">
              <li>Of opposition and limitation, so that personal data will not be processed -since your request is processed- for the purpose of the information service.</li>
              <li>Of rectification in the case that considers that the data are not correct or because they have changed.</li>
              <li>Deletion or deletion in the event that you withdraw your consent for this treatment.</li>
            </ul>

            <h3 className="text-xl font-semibold text-mate-yellow mb-3 mt-6">Study of job applications</h3>
            <p className="mb-4">
              The data you provide us, to participate in our recruitment processes, if you are selected for the next phase, we will inform you of this decision. The data provided by you will be kept for a maximum of 1 year last which will be deleted.
            </p>
            <p className="mb-2">If you consider it necessary, you may exercise the following rights with regard to this data processing:</p>
            <ul className="list-disc list-inside mb-4 space-y-1">
              <li>Access to know what data we keep and process.</li>
              <li>To rectify if you consider that the data are not correct or because they have changed (for example, your contact details).</li>
              <li>Deletion or deletion in the event that you withdraw your consent for this treatment.</li>
            </ul>

            <h3 className="text-xl font-semibold text-mate-yellow mb-3 mt-6">Navigation</h3>
            <p>
              By browsing Your Mates Tech, S.L. you can collect unidentifiable data, which may include, IP addresses, geographic location (approximately), a record of how services and sites are used, and other data that cannot be used to identify the user. Among the non-identifying data are also those related to your browsing habits through third-party services. We use this information to analyze trends, administer the site, track the movements of users around the site and to gather demographic information about our user base as a whole.
            </p>

            <h3 className="text-xl font-semibold text-mate-yellow mb-3 mt-6">Service reCAPTCHA</h3>
            <p>
              The browsing IP address will be sent to Google as part of the system in order to discern a human from an automated form filling and submission system. Full details about Google's privacy policy can be found at https://policies.google.com/privacy?hl=en.
            </p>

            <h3 className="text-xl font-semibold text-mate-yellow mb-3 mt-6">Remarketing</h3>
            <p className="mb-4">
              The remarketing function allows us to reach people who have visited the Your Mates Tech, S.L. website before and associate a certain audience with a specific message. Remarketing is a method of getting users who have visited the site to do so again. Your Mates Tech, S.L. collects information for this remarketing function within its web site.
            </p>
            <p className="mb-4">
              The information collected through this function is collected by cookies from Instagram, Google Adwords. To know the data collected by these cookies visit the following privacy policies of Instagram, Google Adwords. If you do not want your information to be collected by these cookies, you can disable the use of Google cookies through the Google Ad Settings. You may also disable the use of cookies from a third party vendor through the Network Advertising Initiative opt-out page.
            </p>
            <p>
              This type of service allows you to interact with social networks or other external platforms directly from the pages of this website. Interactions and information obtained by this website will always be subject to the user's privacy settings on each social network. If a service is installed that allows interaction with social networks, it is possible that, even if users do not use the service, it will collect web traffic data related to the pages where they are installed.
            </p>

            <h3 className="text-xl font-semibold text-mate-yellow mb-3 mt-6">Meta Business and TikTok Business</h3>
            <p className="mb-4">
              At Your Mates Tech, S.L. we use Meta Business, Meta's advertising platform, which allows us to create campaigns and advertisements. We also use TikTok Business for the same purpose.
            </p>
            <p className="mb-2">When creating an advertisement, the audience can be segmented by:</p>
            <ul className="list-disc list-inside mb-4 space-y-1">
              <li>Location</li>
              <li>Demographic data (age, sex, etc.)</li>
              <li>Interests (activities, hobbies, etc.)</li>
              <li>What they buy online and through other channels, etc.</li>
            </ul>
            <p>
              The data obtained through these platforms are subject to this privacy policy from the moment the user leaves their data in the form on this website to join the subscription newsletter. Under no circumstances will the information from these means be used for a different purpose.
            </p>

            <h3 className="text-xl font-semibold text-mate-yellow mb-3 mt-6">Google Adwords</h3>
            <p className="mb-4">
              Adwords is a Google platform aimed at ADVERTISERS who want to advertise on GOOGLE. At Your Mates Tech, S.L. we use Google Adwords, Google's advertising platform, which allows us to create campaigns and ads to display on other websites.
            </p>
            <p className="mb-2">When generating an ad, you can segment the audience by:</p>
            <ul className="list-disc list-inside mb-4 space-y-1">
              <li>Place</li>
              <li>Demographic data (age, sex, etc.)</li>
              <li>Interests (activities, hobbies, etc.)</li>
              <li>What they buy online and through other channels, etc.</li>
            </ul>
            <p>
              The data obtained through Google Adwords are subject to this privacy policy from the moment the user leaves their data in the form of this website to join the subscription newsletter. In no case will the information from Google be used for a different purpose.
            </p>

            <h3 className="text-xl font-semibold text-mate-yellow mb-3 mt-6">reCAPTCHA</h3>
            <p className="mb-4">
              We use the reCAPTCHA service of Google Inc. (Google) service to protect the data sent through the forms on our users' pages. This service differentiates data sent by individuals from automated messages and involves the transmission of IP address and other data required by Google to use the reCAPTCHA service. For this purpose, the data will be transmitted to Google to be used.
            </p>
            <p className="mb-4">
              The IP address will be encrypted by Google in the member states of the European Union as well as in the states associated with the European Economic Area. Only in exceptional cases will IP addresses be transmitted to Google's server in the United States for encryption. On behalf of the owner of this website, Google will use this information to evaluate the use of the service by users. The IP address transmitted by reCAPTCHA will be kept separate from other Google data. The Google privacy policy applies to this data. Full details of Google's privacy policy can be found at https://policies.google.com/privacy?hl=en.
            </p>
            <p>
              By using the reCAPTCHA service, you consent to the processing of data about you by Google in the manner and for the purposes set out above.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-mate-yellow mb-4">GOOGLE ANALYTICS</h2>
            <p className="mb-4">
              This website uses Google Analytics, a web analytics service provided by Google, Inc. a Delaware company whose principal office is at 1600 Amphitheatre Parkway, Mountain View (California), CA 94043, United States ("Google"). Google Analytics uses "cookies", which are text files placed on your computer, to help the website analyze how users use the website.
            </p>
            <p className="mb-4">
              The information generated by the cookie about your use of the website (including your IP address) will be directly transmitted to and stored by Google on servers in the United States. Google will use this information on our behalf for the purpose of tracking your use of the website, compiling reports on website activity and providing other services relating to website activity and internet usage.
            </p>
            <p className="mb-4">
              Google may also transfer this information to third parties where required to do so by law, or where such third parties process the information on Google's behalf. Google will not associate your IP address with any other data held by Google. You may refuse the use of cookies by selecting the appropriate settings on your browser, however, you should be aware that if you do so you may not be able to use the full functionality of this website.
            </p>
            <p>
              By using this website you consent to the processing of information about you by Google in the manner and for the purposes set out above.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-mate-yellow mb-4">EXERCISE OF RIGHTS</h2>
            <p className="mb-4">You may direct written communications for the exercise of your rights to:</p>
            <div className="mb-4">
              <p>Your Mates Tech, S.L.</p>
              <p>B56745144</p>
              <p>inscribed in the Commercial Registry of Barcelona, in the volume 49066, page 59, sheet B-606374, inscription 29/11/2023,</p>
              <p>sending your requests to the following address:</p>
              <p>Your Mates Tech, S.L.</p>
              <p>Aribau 254, pral. 1ª, 08006, Barcelona, Spain</p>
            </div>
            
            <p className="mb-2">You can also direct your communications through the following channels:</p>
            <ul className="list-disc list-inside mb-4 space-y-1">
              <li>In person, in our offices</li>
              <li>By e-mail to the address rgpd@mateapp.es</li>
              <li>Contacting to the telephone +34 608 092 696 where we are to your disposition to take care of you.</li>
            </ul>
            
            <p className="mb-4">
              Submitted data requests may require you to provide additional documentation necessary to confirm your identity.
            </p>
            
            <p className="mb-2">You can also complain directly to the Spanish Data Protection Agency (AEPD) in these situations:</p>
            <ul className="list-disc list-inside mb-4 space-y-1">
              <li>if you have requested to exercise your rights and have not received a response from the data controller within one month.</li>
              <li>If you have received a response, but do not agree with it.</li>
              <li>If you believe that the controller has violated data protection regulations in any of its activities.</li>
            </ul>
            
            <p>
              In any case, you can obtain general information about privacy and Personal Data Protection at the following link: www.agpd.es
            </p>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
