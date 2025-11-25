import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';
import MateLogo from '@/components/MateLogo';

const TermsAndConditions: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Logo Mate en haut à gauche */}
      <div className="px-6 pt-6 flex items-center justify-between">
        <Link to="/">
          <MateLogo />
        </Link>
        <Link 
          to="/terminos-y-condiciones" 
          className="text-2xl hover:scale-110 transition-transform"
          title="Español"
        >
          🇪🇸
        </Link>
      </div>
      
      <main className="container mx-auto px-6 py-8 max-w-4xl">
        <h1 className="text-4xl font-bold text-mate-yellow mb-8 text-center">
          TERMS AND CONDITIONS OF USE OF THE MATE APPLICATION
        </h1>
        
        <div className="space-y-8 text-gray-300 leading-relaxed">
          <p>
            These Terms and Conditions of Use (hereinafter, the "Terms") constitute a binding legal agreement between the User and YOUR MATES TECH, S.L. (hereinafter, "Mate"), the entity that owns the digital platform accessible through "Mate" mobile application (hereinafter, the "App").
          </p>
          <p>
            By registering, accessing or using the App, you declare that you have read, understood and fully accept these Terms, as well as our Privacy Policy. If you do not agree with any of these Terms, we recommend that you refrain from using our services.
          </p>
          <p>
            It is essential that you read this document carefully before you start using the App, as it regulates the rights and obligations applicable to your status as a User. Use of Mate implies full and unreserved acceptance of all the clauses contained herein, as well as any modified version that may be published in the future, in accordance with the provisions of these Terms.
          </p>

          <section>
            <h2 className="text-2xl font-bold text-mate-yellow mb-4">GENERAL INFORMATION</h2>
            <p className="mb-4">
              These Terms and Conditions regulate the access, navigation and use of the Mate mobile application (hereinafter, the "App" or "Mate"), developed and managed by:
            </p>
            <ul className="list-none space-y-2 mb-4">
              <li><strong>Business name:</strong> YOUR MATES TECH S.L.</li>
              <li><strong>Registered office:</strong> C/ Aribau, 254, Pral 1a (08006, Barcelona)</li>
              <li><strong>Registration data in the Commercial Registry:</strong> Barcelona Commercial Registry Volume: 49066, Sheet: 59, Registration Sheet: 606374, Entry 1</li>
              <li><strong>Tax Identification Number:</strong> B-56.745.144</li>
              <li><strong>Email:</strong> contact@mateapp.es</li>
            </ul>
            <p className="mb-4">
              Mate is a social network focused on creating and discovering social plans. Through the App, users can connect with other people, participate in themed communities, organize or attend events, and explore profiles with similar interests, all in a digital environment designed for leisure, personal affinity, and social interaction.
            </p>
            <p className="mb-4">
              Access to the app implies user status (the "User") and entails full and unreserved acceptance of the current version of these Terms and Conditions. If the User does not agree with any of the conditions set forth herein, they must refrain from using the app or unsubscribe from it.
            </p>
            <p className="mb-4">
              The User declares that they are of legal age (minimum 18 years old) and have the legal capacity to enter into contracts and accept these Terms. Mate is not intended for minors, so if there is evidence or reasonable suspicion that a minor has created an account, Mate may suspend it without prior notice. The User shall be responsible for the accuracy of the information provided and for their use of the App, as well as for compliance with the provisions of this document.
            </p>
            <p>
              The most up-to-date version of these Terms and Conditions will always be available on the App and/or on the associated website. Mate reserves the right to modify the content of these Terms, with effect from the moment of their publication or, when legally required, from their express notification to the User. Continued use of the App after such changes implies acceptance thereof.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-mate-yellow mb-4">PURPOSE AND CONDITIONS OF ACCESS TO MATE</h2>
            <p className="mb-4">
              Mate is a digital social network whose purpose is to allow registered users to connect with each other and organize plans freely, voluntarily and non-professionally. Use of the platform implies full acceptance of these Terms and Conditions, as well as the User's commitment to use the App in accordance with current legislation, good faith, and the principles of respect and coexistence established in this document.
            </p>
            <p className="mb-4">
              The App is intended exclusively for persons over the age of 18. If a minor provides false information or uses fraudulent means to register, they will be fully liable for the consequences of such use, exempting Mate from any liability. Likewise, the parents, guardians, or legal representatives of the minor will be fully liable for any damages, claims or proceedings arising from the minor's use, without limitation, in accordance with the provisions of current legislation. Mate reserves the right to suspend any account for which it has reasonable grounds to believe that this requirement has been breached.
            </p>

            <h3 className="text-xl font-semibold text-mate-yellow mb-3 mt-6">2.1 Free Accounts</h3>
            <p className="mb-4">
              The free version of Mate allows Users to create a profile, interact with other users, explore the general feed, join communities of interest, and participate in public events, always respecting the limits and conditions established by Mate for this type of account. Access to certain advanced or customized features will be restricted to users with a Premium account.
            </p>

            <h3 className="text-xl font-semibold text-mate-yellow mb-3">2.2 Premium Accounts</h3>
            <p className="mb-4">
              The Premium Account offers Users additional features designed to improve their experience on the App, such as increased visibility through tools such as Boost, access to the map of events and nearby users (upon acceptance of geolocation), activation of Incognito Mode, priority display, expanded options for creating events, and other features that may be modified or expanded in the future.
            </p>
            <p className="mb-4">
              Access to these features requires payment of a monthly subscription, which can be paid via Stripe, Apple Pay, or other enabled systems, and may include automatic renewal if so determined by the User at the time of purchase. Under no circumstances is a specific result guaranteed from the purchase of a Premium Account, such as interactions, contacts, event attendance, or increased participation, as these elements depend exclusively on the behavior of other users.
            </p>
            <p>
              Subscriptions are non-refundable once the subscription period has commenced. This does not affect the User's statutory right of withdrawal within 14 days where applicable under EU or UK consumer protection laws. This does not affect any statutory rights of withdrawal or refund that may apply under mandatory consumer protection legislation, which shall prevail over this clause. Mate may suspend or terminate a Premium Account, temporarily or permanently, in cases of serious breach, fraud, abusive or unlawful use, without prior notice. In such cases, the User shall not be entitled to any refund or compensation for the remaining unused period, except where mandatory law requires otherwise.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-mate-yellow mb-4">REGISTRATION</h2>
            <p className="mb-4">
              To enhance user safety and trust, Mate offers a comprehensive identity verification process operated by Markets ProLive 360, S.L., an independent company trading under the brand Didit. The verification is carried out through Didit's official API, which validates the user's identity using biometric and document-matching systems. Mate does not access, store, or process any personal data, images, or documents used during this process. Mate only receives an outcome ("verified" or "not verified") for informational purposes.
            </p>
            <p className="mb-4">
              This verification is purely indicative and does not constitute any official guarantee of identity or authenticity by Mate. All technical and legal responsibility for the verification process lies exclusively with Markets ProLive 360, S.L. (Didit), whose own terms and privacy policy apply and can be consulted on their official website.
            </p>
            <p className="mb-4">
              The User acknowledges that the use of this feature is voluntary, and that consent for the processing of their video may be revoked at any time, either through the App settings or by submitting an explicit request to contact@mateapp.es.
            </p>
            <p className="mb-4">
              To use the App, the User must first register. Registration implies full acceptance of these Terms and Conditions and entails the obligation to comply with a series of essential requirements. Specifically, the User represents and guarantees that: (i) they are a natural person over 18 years of age; (ii) they have sufficient legal capacity to enter into contracts under the legislation of the country in which they are located; (iii) they do not have more than one active account on the App; and (iv) they have not previously been expelled or removed from the platform, unless expressly authorized by Mate to register again.
            </p>
            <p className="mb-4">
              The registration process can be completed using a manual form (email and password) or through authentication systems provided by third-party platforms such as Apple or Google. In either case, the User is responsible for providing accurate, up-to-date, and complete information and agrees to keep their data updated at all times.
            </p>
            <p className="mb-4">
              Sharing accounts among multiple people or using another User's account is prohibited. If Mate detects that an account has been created fraudulently, belongs to a minor, or violates any of the requirements of this clause, it may immediately suspend or terminate it without prior notice.
            </p>
            <p>
              If you register through third-party platforms (hereinafter, "Third-Party Platforms"), you authorize said platforms to transfer to Mate the data necessary to create and authenticate your account, such as your name, email address, or any other authorized data. The relationship between you and these external platforms is governed by the privacy policies and terms of each of them. Therefore, Mate assumes no responsibility for the processing of your personal data by these platforms or for any incidents arising from their use.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-mate-yellow mb-4">MATE RULES</h2>
            <p className="mb-4">
              Using Mate requires strict compliance with basic rules of conduct and respect, which are essential to maintaining a safe, reliable, and enjoyable environment for all Users. By using the App, the User agrees to act in accordance with the law, good faith, and the principles of digital coexistence that inspire these Terms and Conditions.
            </p>
            <p className="mb-4">
              It is expressly prohibited to use the App to harass, intimidate, deceive, impersonate others, or commit illegal acts of any kind. The User may not use the App for fraudulent purposes or to obtain economic, personal, or advertising benefits through deception or manipulation of the system. Likewise, the publication or dissemination of offensive, discriminatory, violent, sexually explicit content that incites hatred or violates the fundamental rights of individuals is prohibited.
            </p>
            <p className="mb-4">
              The User shall refrain from using the App to promote external products, services, or platforms, unless specifically authorized by Mate. Likewise, the creation of profiles for the sole purpose of redirecting traffic, conducting covert commercial activities, or interfering with other Users' experiences is prohibited. Reactivating previously suspended accounts without authorization or creating multiple accounts to circumvent controls will be considered a serious violation.
            </p>
            <p className="mb-4">
              Mate may temporarily or permanently suspend the account of any User who violates these rules without prior notice and without the right to a refund. Mate also reserves the right to remove any content or profile that, in its opinion, violates these rules and may take proactive or reactive measures to preserve the integrity of the community. In the most serious cases, legal action may be taken or the facts may be reported to the appropriate authorities.
            </p>
            <p className="mb-4">
              In order to protect the privacy and security of Users, it is strictly prohibited to include sensitive or identifying personal information in your public profile or any content visible within the App, such as:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-1">
              <li>Phone numbers, postal addresses, personal or work emails.</li>
              <li>Bank details, card numbers, payment accounts, or other financial information.</li>
              <li>Official identification documents, social security numbers, or any other protected personal identifiers.</li>
            </ul>
            <p className="mb-4">
              Users are solely responsible for the information they choose to share within the App, both on their profile and in interactions with other Users. If you choose to disclose personal data outside of established channels, you do so at your own risk. Mate recommends exercising the same caution as you would in any other public or digital environment.
            </p>
            <p>
              If Mate detects the publication of personal data in violation of these rules, it may remove the content, warn the User, or temporarily or permanently suspend the offending account, without prejudice to any other additional measures in accordance with these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-mate-yellow mb-4">OBLIGATIONS</h2>
            
            <h3 className="text-xl font-semibold text-mate-yellow mb-3">User Obligations</h3>
            <p className="mb-4">
              The User agrees to use the App diligently, ethically, and in accordance with current legislation, these Terms and Conditions, morality, public order, and the principles of good faith and respect that govern the use of digital environments. Access to and use of the App implies, among other things, that the User agrees to:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-1">
              <li>Comply with these Terms at all times and review them periodically.</li>
              <li>Act in accordance with current legislation, including regulations on data protection, intellectual property, advertising, electronic communications, and anti-spam regulations.</li>
              <li>You assume sole responsibility for the content you publish or share within the App, as well as for any interactions you have with other Users.</li>
            </ul>
            <p className="mb-2">In this sense, it is expressly prohibited, by way of example and not limitation:</p>
            <ul className="list-disc list-inside mb-4 space-y-1">
              <li>Impersonating others, falsifying personal data, profile photos, age, or affiliations.</li>
              <li>Sharing personal information about others without express consent.</li>
              <li>Posting content that is offensive, harassing, discriminatory, obscene, violent, threatening, sexually explicit, or that promotes hatred, racism, sexism, intolerance, or illegal conduct.</li>
              <li>Use the App to harass, intimidate, stalk, defame, attack, or harm other users, whether physically or psychologically.</li>
              <li>Asking for money, gifts or compensation from other Users.</li>
              <li>Participating in fraudulent schemes, pyramid schemes, illegal activities, or activities that pursue a hidden profit motive.</li>
              <li>Using other people's accounts or allowing account sharing.</li>
              <li>Post unauthorized commercial, promotional, or advertising content, or create profiles for the purpose of redirecting traffic to other platforms.</li>
              <li>Introduce viruses, malware, or reverse engineer the App or its features.</li>
              <li>Use bots, crawlers, proxies, or tools to extract, copy, or manipulate the content or operation of the App.</li>
              <li>Making false reports against other users or abusing the reporting system.</li>
              <li>Creating new accounts after a suspension without prior authorization from Mate.</li>
              <li>Disseminating content related to self-harm, eating disorders, dangerous challenges, or violent extremism.</li>
              <li>Buy, sell or transfer accounts.</li>
              <li>Use the App for electoral or political campaign purposes, except to express personal opinions within the framework of respect.</li>
              <li>Promote, accept or facilitate the breach of these Terms.</li>
            </ul>
            <p className="mb-4">
              The content uploaded by the User shall be their sole responsibility. Mate shall not be liable for the consequences arising from such content, nor for its legality, accuracy, truthfulness, or suitability.
            </p>
            <p>
              Any User may report misuse or violations through the App's reporting system or by writing to: contact@mateapp.es.
            </p>

            <h3 className="text-xl font-semibold text-mate-yellow mb-3 mt-6">Mate's Obligations</h3>
            <p className="mb-4">
              Mate is a social network that provides its Users with a technological infrastructure that facilitates social connection, organizing plans, participating in thematic communities, and using additional features such as Boost, geolocation, incognito mode, or rewards. However, Mate does not intervene in the relationship between Users, organize events, or guarantee any results derived from the use of the App.
            </p>
            <p className="mb-2">Mate assumes no responsibility for:</p>
            <ul className="list-disc list-inside mb-4 space-y-1">
              <li>The content generated, shared or published by Users.</li>
              <li>The truthfulness, legality, accuracy, timeliness or suitability of the information exchanged between Users.</li>
              <li>Any interactions, contacts, relationships, or consequences that may arise from the use of the App.</li>
              <li>The assistance, organization or security of events created by Users.</li>
              <li>Opinions or messages disseminated within communities, events, or participation spaces.</li>
            </ul>
            <p className="mb-4">
              In particular, Mate does not pre-verify or edit content generated by Users, except in cases of automatic moderation or when acting ex officio.
            </p>
            <p className="mb-4">
              For physical events, the user who created the event (the "host") will be solely responsible for its conduct, including communications, conditions, personal data processed, and any incidents. Attendees do so under their sole responsibility.
            </p>
            <p className="mb-4">
              Additionally, the App includes an artificial intelligence–based moderation system that automatically analyzes, blocks, or removes content that contravenes these Terms. Mate may suspend or terminate a User's account, temporarily or permanently, where it reasonably determines that these Terms, applicable law, or community standards have been violated. Except in cases of urgency where immediate action is strictly necessary to protect the safety of other Users, the integrity of the platform, or to comply with legal obligations, Mate shall make reasonable efforts to notify the User of the measure taken and the reasons for it. The User shall have the right to request a review of such decision by submitting a written appeal to contact@mateapp.es within a reasonable period specified in the notification. The review shall be conducted in good faith, and Mate's decision following such review shall be final, without prejudice to any statutory rights that may apply under mandatory consumer protection or data protection legislation.
            </p>
            <p className="mb-4">
              Mate also does not guarantee the exact accuracy of geolocation systems, which depend on device settings and the User's consent. Under no circumstances will the exact location be displayed without the express authorization of the affected party.
            </p>
            <p className="mb-4">
              To the extent permitted by law, and except as expressly provided in these Terms, Mate will not be liable for direct, indirect, incidental, special or consequential damages, including, but not limited to, loss of profits, service interruptions, loss of data, or personal injury arising from the use or inability to use the App.
            </p>
            <p>
              Users who fail to comply with these obligations will be fully liable for any damages they may incur, exempting Mate from any liability to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-mate-yellow mb-4">MATE CONTENT AND INTELLECTUAL PROPERTY</h2>
            <p className="mb-4">
              Through the Mate App, the User may access and create different types of content, which are classified into three categories: (i) content generated by the User ("Your Content"); (ii) content generated by other users of the App ("Member Content"); and (iii) content owned by Mate, including software, databases, graphic or audiovisual elements, texts, and trademarks ("Our Content"). By using the App, the User acknowledges and accepts the rights and obligations that arise from each of these types of content.
            </p>

            <h3 className="text-xl font-semibold text-mate-yellow mb-3">Your Content</h3>
            <p className="mb-4">
              The User may upload, share or transmit content in different formats (messages, images, audios, sounds, videos, etc.) within the App. The User guarantees that they are the owner of the necessary rights to said content and will be solely responsible for ensuring that it complies with current legislation, the internal rules of the App and the rights of third parties, including copyright, image and privacy rights. By publishing content on the App, the User grants YOUR MATES TECH, S.L. a worldwide, free, non-exclusive, sublicensable and transferable license, for the maximum applicable legal duration, to use, reproduce, modify, adapt, translate, distribute and publicly communicate said content, including the profile image and username, exclusively for purposes associated with the normal operation of the App and its institutional promotion. This assignment is revocable at any time by written communication to the address contact@mateapp.es.
            </p>

            <h3 className="text-xl font-semibold text-mate-yellow mb-3">Member Content</h3>
            <p className="mb-4">
              Content generated by other users belongs exclusively to its respective authors. Users agree not to use such content for commercial purposes, nor to copy, reproduce, distribute, or exploit it without the express consent of its owner. Any misuse may result in the suspension or termination of the offender's account.
            </p>

            <h3 className="text-xl font-semibold text-mate-yellow mb-3">Our Content</h3>
            <p className="mb-4">
              All intellectual property rights in the design, development, functionality, software, databases, images, logos, trade names, trademarks, and other elements of the App are the exclusive property of YOUR MATES TECH, S.L. or third parties with whom the Company has entered into the corresponding licenses. The User has a limited, non-exclusive, personal, and non-transferable license to use the App and its content for its intended purpose and within the framework of these Terms and Conditions.
            </p>

            <h3 className="text-xl font-semibold text-mate-yellow mb-3">Moderation and Supervision</h3>
            <p className="mb-4">
              Mate assumes no obligation to monitor User-generated content, but reserves the right to review, remove, block, or moderate any content that violates these Terms or is offensive, illegal, or inappropriate. This review may also be conducted through automated moderation systems.
            </p>

            <h3 className="text-xl font-semibold text-mate-yellow mb-3">Assignment of Image Rights</h3>
            <p className="mb-4">
              The User expressly consents that Mate may use their profile image, username, and other visible elements associated with their account on a limited, free, non-exclusive, revocable, and non-commercial basis, for the purpose of displaying and promoting the ordinary operation of the App. This license may include use in informational campaigns within the App itself (such as featured-user sections or suggestions), on Mate's official social networks, or in other non-advertising institutional communications, always related to the platform's functional and social environment.
            </p>
            <p className="mb-4">
              The User agrees that their profile may appear in internal promotional initiatives such as "your new Mate awaits you" or similar campaigns intended to encourage participation in the App and the discovery of new profiles, without this implying the use of their data in third-party commercial campaigns or outside Mate's social context.
            </p>
            <p className="mb-4">
              Under no circumstances will this license entail the use of the User's image in sponsored advertisements, external commercial campaigns, or any transfer to third parties without prior and specific consent.
            </p>
            <p className="mb-4">
              The User may revoke this authorization at any time and request the removal of any content in which their image appears by writing to contact@mateapp.es. Mate will address such request within a reasonable timeframe, removing the affected content except in cases that are legally justified or where such removal is technically unfeasible.
            </p>

            <h3 className="text-xl font-semibold text-mate-yellow mb-3">Intellectual Property</h3>
            <p className="mb-4">
              The content related to trademarks, domains, logos, drawings, interfaces, source code, software, computer programs, functionalities, navigation structures, visual elements, or any other component susceptible to protection by intellectual or industrial property legislation that may be accessible through the App are the exclusive property of YOUR MATES TECH, S.L. or are licensed to it. All rights of use, exploitation, reproduction, distribution, transformation, or public communication are expressly reserved.
            </p>
            <p className="mb-4">
              The authorization granted to the User to access and use the App and the services offered therein does not, under any circumstances, imply any transfer of intellectual or industrial property rights, except as expressly provided in this clause. The User may use the material exclusively in the manner authorized by Mate and subject to these Terms and Conditions.
            </p>
            <p className="mb-4">
              The App grants the User a limited, non-exclusive, personal, and non-transferable license, valid worldwide and limited in duration to the duration of the User's active account, to access and use the App in accordance with its purpose and functions. Any use outside of this scope is subject to prior written authorization from Mate.
            </p>
            <p className="mb-2">The User expressly agrees not to remove, delete, alter or manipulate:</p>
            <ul className="list-disc list-inside mb-4 space-y-1">
              <li>Legal mentions, symbols or distinctive signs incorporated by Mate (such as ©, ®, ™, watermarks, fingerprints or other protective devices).</li>
              <li>References to the ownership of rights incorporated in digital content, documents, materials or functionalities.</li>
            </ul>
            <p className="mb-4">
              The User is not authorized to copy, distribute, publicly communicate, modify, transform, sublicense, or commercially exploit in any way, whether in whole or in part, the protected content of the App, except with the express written authorization of the copyright holder. Any breach may result in immediate account termination, legal action, and a claim for damages.
            </p>
            <p>
              Mate expressly reserves all intellectual and industrial property rights to which it belongs, as well as the right to modify or revoke, in whole or in part, the licenses granted under these Terms and Conditions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-mate-yellow mb-4">SOCIAL FUNCTIONALITIES AND INTERACTION DYNAMICS</h2>
            
            <h3 className="text-xl font-semibold text-mate-yellow mb-3">User-generated events</h3>
            <p className="mb-4">
              Mate allows registered users to create and manage social events within the app. These events can be configured as public, accessible by request, or completely private. Public events will be available to all users and allow free registration; requested events will require approval from the event creator (the "Host"). Private events will not appear in the general feed or in searches and can only be shared via direct links.
            </p>
            <p className="mb-4">
              The Host will be solely responsible for all aspects of the event: name, description, image, date, time, maximum number of attendees, location (optional), access method, and, if desired, an associated cost (which will not be managed by Mate). In certain cases, the Host may activate the geofencing feature, which allows users to be marked as attending if they authorize the use of their location.
            </p>
            <p className="mb-4">
              The creation of events does not imply any intervention, endorsement, or verification by Mate. The Host is responsible for compliance with current regulations, the accuracy of the information, interactions with participants, and the processing of personal data if communications occur outside the App. Mate is exempt from any liability for incidents, damages, or conflicts arising in the context of events organized by users.
            </p>
            <p>
              After an event, participants will be able to rate the Host and vice versa. This cross-review system encourages responsible use of the App. Mate may restrict or suspend the ability to create events for Hosts with consistently negative reviews or who violate these Terms.
            </p>

            <h3 className="text-xl font-semibold text-mate-yellow mb-3 mt-6">Thematic communities</h3>
            <p className="mb-4">
              Mate offers the opportunity to join communities organized by interest (soccer, motorsports, art, music, etc.) and associated with specific locations. These communities encourage interaction between users with common interests.
            </p>
            <p className="mb-4">
              Each community may have moderators or administrators who will have the power to accept or reject members, manage content, expel users, and set internal rules, always in accordance with these Terms and Conditions.
            </p>
            <p className="mb-4">
              The content posted in communities is the sole responsibility of the users who create it. Mate is not responsible for the veracity, legality, or appropriateness of the content, nor for the actions or omissions of members or moderators. Participation in communities implies acceptance of the internal rules defined for each community.
            </p>
            <p>
              Any offensive, abusive, illegal, or otherwise unlawful behavior that violates these Terms may be reported using the tools available in the App. Mate reserves the right to suspend, remove, or modify any community if it detects violations, unethical behavior, or illegal activity, and may intervene both proactively and reactively depending on the circumstances.
            </p>

            <h3 className="text-xl font-semibold text-mate-yellow mb-3 mt-6">Reward and gamification system</h3>
            <p className="mb-4">
              To encourage active participation, Mate has incorporated a reward system based on virtual points. Points can be earned for actions such as inviting friends, creating events, participating in communities, or other enabled features.
            </p>
            <p className="mb-4">
              These points have no monetary value and cannot be exchanged for cash or used outside of the Mate environment. Their sole purpose is to enable in-app benefits, such as activating Boosts or unlocking token badges that reflect user activity.
            </p>
            <p className="mb-4">
              Mate may modify, replace, or cancel the points system without prior notice. Any relevant changes will be communicated through the App. The badges earned through this system have a symbolic value and do not imply additional functional advantages or official public recognition by Mate.
            </p>

            <h3 className="text-xl font-semibold text-mate-yellow mb-3 mt-6">Promotional internal messages</h3>
            <p className="mb-4">
              Mate may send informational or promotional messages through the App's internal messaging system. These messages may contain product news, reminders, new features, surveys, or other information relevant to the user experience.
            </p>
            <p className="mb-4">
              These messages will be sent from an institutional profile that does not represent a real user and does not engage in personal conversations. By accepting these Terms, the User consents to receiving these messages. However, they may mute or block them from their account settings.
            </p>
            <p>
              This communication system is part of the App's normal operation and is intended to keep users informed without constituting unsolicited commercial communications.
            </p>

            <h3 className="text-xl font-semibold text-mate-yellow mb-3 mt-6">Ads and Third-Party Content</h3>
            <p className="mb-4">
              Mate may display advertisements, promotions, or links to third-party products and services within the App. Such content does not imply any endorsement by Mate, which does not control and is not responsible for the content, legality, or availability of such third-party services.
            </p>
            <p className="mb-4">
              Any relationship the User establishes with advertisers will be exclusive between both parties, and the terms and conditions of those third parties will apply. Mate does not intervene in or guarantee the fulfillment of offers, promotions, or advertised products.
            </p>
            <p>
              The User will not receive compensation for viewing these ads, and their presence does not affect normal use of the App. We recommend always reviewing the terms and policies of third parties before contracting with them or providing personal data.
            </p>

            <h3 className="text-xl font-semibold text-mate-yellow mb-3 mt-6">Advanced features</h3>
            <p className="mb-4">
              The App offers certain advanced features designed to improve the User experience and visibility within the platform. These features include:
            </p>
            <p className="mb-4">
              <strong>Boost:</strong> The Boost feature allows Premium users to increase the visibility of their profile or events created within the App, achieving a prominent position in recommendation algorithms and other visible spaces on the platform. This visibility boost is temporary and subject to the App's technical operating conditions. However, Mate does not guarantee that activating the Boost will generate a specific number of views, interactions, contacts, or event attendance. Boost does not imply guaranteed results, but rather a temporary increase in the exposure of the selected content.
            </p>
            <p>
              <strong>Incognito Mode:</strong> Incognito Mode is a feature exclusively available to Premium account users. When activated, the user's profile will no longer be visible to others in the general feed, maps, recommendations, or any other publicly visible space within the app. However, this mode does not delete or hide previous interactions within Mate, nor does it prevent the user from continuing to receive messages or requests from other users with whom they have had previous conversations or connections. Its effect is exclusively limited to future visibility while it is activated, but it does not affect links or content that has already been generated.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-mate-yellow mb-4">LOCATION-BASED NOTIFICATIONS AND FEATURES</h2>
            <p className="mb-4">
              By using the App, the User may receive communications regarding their account, platform features, and other aspects relevant to their user experience. These communications may consist of emails, text messages (SMS), push notifications, internal alerts, or any other type of message related to the operation, maintenance, promotions, or news from Mate. Upon downloading the App, the User will be asked to expressly consent to receive push notifications. If they accept them, these notifications will be sent automatically through the mobile device's operating system. The User may change their preferences at any time from their device settings or from the "Notifications" section within the App.
            </p>
            <p className="mb-4">
              Regarding messages sent through other channels, such as emails or SMS, the User may unsubscribe or limit their reception by following the instructions contained in each message, or by writing to the contact address provided by Mate: contact@mateapp.es. However, some technical, security, or administrative communications related to the essential functioning of the service may remain active while the User has an active account, as they are essential for the proper provision of the service.
            </p>
            <p className="mb-4">
              Additionally, the Mate App may include location-based features, such as geolocated recommendations, nearby events, or attendance verification via geofencing. For these features to be available, the User must authorize the App to access their device's location information. This authorization can be configured at any time through the mobile device's operating system settings. If the User does not grant location access, they will not be able to enjoy the specific services that rely on this feature.
            </p>
            <p>
              The use of these geolocation tools is subject to the User's prior consent, which may be revoked at any time. For more information on how we process and store location data, please consult our Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-mate-yellow mb-4">PROTECTION OF PERSONAL DATA</h2>
            <p className="mb-4">
              <strong>Processing of personal data.</strong> Mate will process users' personal data in full compliance with applicable data protection laws, including Regulation (EU) 2016/679 (General Data Protection Regulation – GDPR) and, where applicable, the Spanish Organic Law 3/2018 on Data Protection and Digital Rights (LOPDGDD), as well as any other mandatory data protection regulations in force.
            </p>
            <p className="mb-4">
              <strong>Data controller.</strong> The person responsible for the processing of personal data collected through the App is YOUR MATES TECH, S.L. You can contact us at any time at contact@mateapp.es.
            </p>
            <p className="mb-2"><strong>Purposes of the treatment.</strong> The personal data provided by the user (name, email, photo, location, generated content, etc.) will be processed for:</p>
            <ul className="list-disc list-inside mb-4 space-y-1">
              <li>Manage your registration and access to the App.</li>
              <li>Allow the use of social features, events, and communities.</li>
              <li>Improve user experience through recommendations, rewards systems, and content personalization.</li>
              <li>Send internal notifications and communications relevant to the operation of the App.</li>
              <li>Respond to support requests or exercise user rights.</li>
              <li>Comply with legal or contractual obligations.</li>
            </ul>
            <p className="mb-4">
              <strong>Legal basis.</strong> Processing is based on the execution of the App usage contract, user consent (when necessary, such as in the case of geolocation or push notifications), compliance with legal obligations, and Mate's legitimate interest in ensuring the proper functioning of the platform.
            </p>
            <p className="mb-4">
              <strong>Recipients and transfers.</strong> Data may be processed by technology providers that provide services to Mate (e.g., hosting, analytics, technical support), with whom contracts have been signed pursuant to Article 28 of the GDPR. International data transfers will not be carried out without appropriate safeguards.
            </p>
            <p className="mb-4">
              <strong>Retention period.</strong> Data will be retained as long as the user maintains their account active or until they request its deletion. After that, personal data will thereafter be retained under restricted access for the legally required retention periods, solely for purposes of evidence, accountability, and limitation of actions, and will not be used for any other purposes.
            </p>
            <p className="mb-4">
              <strong>Exercise of rights.</strong> The user may exercise their rights of access, rectification, deletion, objection, restriction of processing, and portability, as well as revoke their consent at any time, by writing to contact@mateapp.es. If you consider that your rights have not been properly respected, you may file a complaint with the Agencia Española de Protección de Datos (Spanish Data Protection Agency) (www.aepd.es).
            </p>
            <p>
              <strong>More information.</strong> For detailed information on how we process data, users can consult the full Privacy Policy available on the Website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-mate-yellow mb-4">ACCOUNT CANCELLATION AND SERVICE SUSPENSION</h2>
            <p className="mb-4">
              The User may cancel their account at any time by accessing the App's settings options or by sending a request via email to contact@mateapp.es. Cancellation entails the deletion of the visible profile and access to the App's features, without prejudice to the retention of certain data for the time legally required in accordance with the Privacy Policy.
            </p>
            <p className="mb-4">
              For its part, Mate reserves the right to suspend or cancel any user account, temporarily or permanently, if it detects behavior that violates these Terms and Conditions, breaches current legislation, or negatively affects the community or the proper functioning of the App.
            </p>
            <p>
              Suspension or cancellation shall not entitle the User to a refund of amounts paid for Premium services or to any compensation. In the most serious cases, Mate may limit the User's future access to the platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-mate-yellow mb-4">EXCLUSION OF WARRANTIES AND LIABILITY</h2>
            <p className="mb-4">
              The use of Mate is carried out under the sole responsibility of the User. The App and all the services, content, and functionalities it offers are provided "as is," without warranties of any kind, whether express or implied, including, without limitation, warranties of availability, fitness for a particular purpose, reliability, accuracy, or absence of errors.
            </p>
            <p className="mb-4">
              Mate does not guarantee that the App will operate without interruption, securely or error-free, or that defects will be corrected. Although technical and organizational measures are in place to maintain the security of the systems, there is no guarantee that the App is free of viruses, malicious software or technical vulnerabilities.
            </p>
            <p className="mb-4">
              Nothing in these Terms shall exclude or limit liability for fraud, death or personal injury caused by negligence, gross negligence, wilful misconduct, or any liability that cannot be excluded or limited under applicable law.
            </p>
            <p className="mb-2">Likewise, Mate assumes no responsibility for:</p>
            <ul className="list-disc list-inside mb-4 space-y-1">
              <li>The veracity, legality, adequacy or updating of the content generated by users.</li>
              <li>The celebration, quality, safety, or results of the events, plans, or gatherings organized by users.</li>
              <li>Interactions between users inside or outside the App, nor by the behavior of members.</li>
              <li>Service interruptions due to maintenance, technical incidents, force majeure, or actions of third parties.</li>
              <li>Any direct or indirect damages arising from the use of the App, even if advised of the possibility of such damages.</li>
            </ul>
            <p>
              The User acknowledges that Mate is not responsible for monitoring user activity or content at all times. However, if it detects misuse of the App or a violation of these Terms and Conditions, it may take any measures it deems necessary, including the suspension or cancellation of the corresponding profile.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-mate-yellow mb-4">ELIMINATION, SUSPENSION AND DISCIPLINARY MEASURES</h2>
            <p className="mb-4">
              <strong>Voluntary account deletion.</strong> The User may delete their account at any time by: (a) notifying Mate in writing by email at contact@mateapp.es; and/or (b) using the "Delete your account" feature available in the App, within the account settings section.
            </p>
            <p className="mb-4">
              Once the account is deleted, the User's personal data will be deleted in accordance with the Data Protection clause and the Privacy Policy, without prejudice to any applicable legal retention obligations.
            </p>
            <p className="mb-2"><strong>Possible measures.</strong> Depending on the severity of the breach, Mate may take various measures, including:</p>
            <ul className="list-disc list-inside mb-4 space-y-1">
              <li>Formal warnings.</li>
              <li>Limitation of functionalities (for example, event creation or access to communities).</li>
              <li>Temporary suspension of the profile.</li>
              <li>Permanent cancellation of the account.</li>
              <li>Removal or deletion of published content.</li>
            </ul>
            <p className="mb-4">
              Mate uses AI-based moderation to detect violations. Depending on severity, the AI may block or delete content, or temporarily suspend an account. Where immediate action is strictly necessary to protect Users, platform integrity, or comply with law, Mate may impose a permanent suspension without prior human intervention. In all cases, Mate will make reasonable efforts to notify the User and provide a right to appeal as set out in the Moderation section above. The outcome of the review shall be final, without prejudice to mandatory statutory rights.
            </p>
            <p className="mb-4">
              <strong>Notification and procedure.</strong> Whenever possible, the user will be informed by email or internal notification of the measure taken and the reasons for it. In cases of particular seriousness or urgency, Mate may proceed with immediate suspension or deletion without prior notice, especially when the security or integrity of other users or the platform itself is at risk.
            </p>
            <p>
              <strong>Review of decisions.</strong> The affected user may request a review of a decision by sending an email to contact@mateapp.es, explaining the reasons why the measure is considered unjustified. Mate will assess each case individually and may, where appropriate, reinstate the account or lift the imposed restriction, without any right to compensation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-mate-yellow mb-4">MISCELLANY</h2>
            
            <h3 className="text-xl font-semibold text-mate-yellow mb-3">13.1 Claims</h3>
            <p className="mb-4">
              In the event that the User wishes to file a claim, incident or complaint related to the use of the App or the services provided by Mate, they may initiate the corresponding procedure by contacting Customer Service via email contact@mateapp.es.
            </p>
            <p className="mb-4">
              Once the communication is received, the Mate team will work with the User to gather the necessary information and respond to the complaint within a reasonable timeframe, taking any appropriate measures to resolve it.
            </p>

            <h3 className="text-xl font-semibold text-mate-yellow mb-3">13.2 Independence of clauses</h3>
            <p className="mb-4">
              If any provision of these Terms and Conditions is declared, in whole or in part, null, void, or unenforceable by a court or other competent body, such provision shall be deemed severed, without affecting the validity of the remainder of the document, which shall remain in full force and effect.
            </p>

            <h3 className="text-xl font-semibold text-mate-yellow mb-3">13.3 Update and modification of the App and the Terms</h3>
            <p className="mb-4">
              Mate reserves the right to modify, update, or remove the structure, design, functionality, or content of the App, as well as these Terms and Conditions and the Privacy Policy, at any time and without prior notice.
            </p>
            <p className="mb-4">
              Any modifications will be published in the App, expressly indicating their effective date. Users will also receive an electronic notification informing them of such changes before their implementation, so they can review the new terms and conditions before continuing to use the services.
            </p>
            <p className="mb-4">
              Continued access or use of the App after the publication of modifications will imply acceptance of the updated Terms and Conditions.
            </p>
            <p>
              Mate does not guarantee the absence of interruptions, errors, or lack of updates in the content accessible from the App, although it undertakes, provided there are no causes that make this impossible or reasonably difficult, to correct any technical incident and update the content as soon as it becomes aware of it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-mate-yellow mb-4">LANGUAGE</h2>
            <p>
              MATE may translate these Terms and Conditions or any other policy that may be published on the Platform. The Spanish version will prevail in the event of a conflict with other translations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-mate-yellow mb-4">EXTRAJUDICIAL CONFLICT RESOLUTION</h2>
            <p className="mb-4">
              Except where mandatory consumer protection law requires otherwise, any dispute, controversy, or claim arising out of or in connection with these Terms, their interpretation, validity, performance, or termination shall be governed by Spanish law and submitted to the Courts and Tribunals of Barcelona, Spain. The parties expressly waive any other jurisdiction that might otherwise apply, without prejudice to the rights that consumers may have under applicable mandatory legislation.
            </p>
            <p className="mb-4">
              Pursuant to the provisions of the Reglamento (UE) nº 524/2013 del Parlamento Europeo y del Consejo, de 21 de mayo de 2013, relativo a la resolución de litigios en línea en materia de consumo, MATE informs you that, in the event of a dispute, Users residing in the European Union may use the "Online Dispute Resolution Platform" developed by the European Commission to attempt to resolve out of court any dispute arising from the provision of services by MATE.
            </p>
            <p>
              The User can access the "Online Dispute Resolution Platform" through the following link: <a href="http://ec.europa.eu/consumers/odr/" className="text-mate-yellow hover:underline" target="_blank" rel="noopener noreferrer">http://ec.europa.eu/consumers/odr/</a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-mate-yellow mb-4">ACCEPTANCE OF TERMS AND CONDITIONS</h2>
            <p className="mb-4">
              These Terms constitute a legally binding agreement between you as a user and YOUR MATES TECH S.L.
            </p>
            <p>
              The Terms were updated on 01/10/2025.
            </p>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TermsAndConditions;