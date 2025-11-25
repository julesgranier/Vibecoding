import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';
import MateLogo from '@/components/MateLogo';

const LegalNotice: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Logo Mate at top left */}
      <div className="px-6 pt-6 flex items-center justify-between">
        <Link to="/">
          <MateLogo />
        </Link>
        <Link 
          to="/aviso-legal" 
          className="text-2xl hover:scale-110 transition-transform"
          title="Español"
        >
          🇪🇸
        </Link>
      </div>
      
      <main className="container mx-auto px-6 py-8 max-w-4xl">
        <h1 className="text-4xl font-bold text-mate-yellow mb-8 text-center">
          LEGAL NOTICE
        </h1>
        
        <div className="space-y-8 text-gray-300 leading-relaxed">
          <p>
            The purpose of this information, rules and conditions (known as Legal Notice) is to regulate, as far as applicable, the use of the website(s) that Your Mates Tech, S.L. makes available to the public in order to comply with the legal obligations in this respect.
          </p>
          
          <p>
            This Legal Notice was modified on 22/10/2024.
          </p>

          <section>
            <h2 className="text-2xl font-bold text-mate-yellow mb-4">ABOUT YOUR MATES TECH, S.L.</h2>
            <h3 className="text-xl font-semibold text-mate-yellow mb-3">WEBSITES AND DOMAINS</h3>
            <p className="mb-4">
              Your Mates Tech, S.L. operates in the network, to offer its services, with the following domains.
            </p>
            <p className="mb-4">
              <strong>mateapp.es</strong>
            </p>
            <p className="mb-4">
              considering mateapp.es as the main domain.
            </p>
            <p className="mb-4">
              <strong>VERY IMPORTANT:</strong> Some services offered on the site(s) of Your Mates Tech, S.L., accessible to Internet users, may be subject to particular conditions and instructions which, where applicable, replace, complete and/or modify this Legal Notice and which must be accepted by the User before the corresponding service is provided. This is particularly applicable in cases where reservations are made or services or products are contracted, in which case the content of the general conditions (identified as TERMS AND CONDITIONS in the corresponding pages) must be applied.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-mate-yellow mb-4">OBJECT AND FUNCTIONALITY OF YOUR MATES TECH, S.L. SITES</h2>
            <p className="mb-4">
              Your Mates Tech, S.L. manages a social network that allows its users to connect with each other.
            </p>
            <p className="mb-4">
              Your Mates Tech, S.L. reserves the right to modify at any time the present conditions of use, as well as any other particular conditions.
            </p>
            <p className="mb-4">
              Your Mates Tech, S.L. makes every effort within its means to offer the information contained in its websites truthfully and without typographical errors. In the event that at any time an error of this type should occur, which is at all times beyond the control of Your Mates Tech, S.L., it will be corrected immediately upon becoming aware of it, and it will not be possible to accept any type of responsibility derived from the damages that may derive from the errors or omissions of the information contained in the sites.
            </p>
            <p className="mb-4">
              If any clause included in these general conditions were to be declared, totally or partially, null or ineffective, such nullity or ineffectiveness shall only affect said provision or the part of the same that is null or ineffective, and the general conditions shall subsist in all the rest, such provision being considered, or the part of the same that is affected, as not put.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-mate-yellow mb-4">GENERAL INFORMATION (IDENTIFICATION AND CONTACT DETAILS)</h2>
            <p className="mb-4">
              In compliance with art. 10 of Law 34/2002, of 11 July, on information society services and electronic commerce, we inform you that Your Mates Tech, S.L., Aribau 254, pral. 1ª, 08006, Barcelona, Spain with NIF B56745144, is registered in the Commercial Register of Barcelona, in the volume 49066, page 59, sheet B-606374, inscription 29/11/2023.
            </p>
            <p className="mb-2">You can contact us, in addition to being at your disposal in our offices, using the following means:</p>
            <ul className="list-disc list-inside mb-4 space-y-1">
              <li>By email through the address rgpd@mateapp.es</li>
              <li>By telephone to the customer service number +34 608 092 696.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-mate-yellow mb-4">ABOUT THE USERS</h2>
            <p className="mb-4">
              The access and/or use of the site(s) of Your Mates Tech, S.L. by a person attributes the condition of USER to that person. The USER accepts, for the use of and access to the different sites of Your Mates Tech, S.L., the General Conditions of Use of the site(s) Your Mates Tech, S.L. presented below.
            </p>
            <p className="mb-4">
              The User of the site(s) Your Mates Tech, S.L. must carefully read this Legal Notice each time he intends to use them, as they and the conditions of use contained in this Legal Notice may have changed.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-mate-yellow mb-4">CONDITIONS OF USE OF THE YOUR MATES TECH, S.L. SITES</h2>
            <p className="mb-4">
              The site(s) of Your Mates Tech, S.L. offer access to various contents (services, information, data, etc.). The USER assumes responsibility for the use of the Your Mates Tech, S.L. site(s) on his/her part. Therefore, it is the responsibility, commitment and obligation of the user to make appropriate use of the contents and services that Your Mates Tech, S.L. offers through the Your Mates Tech, S.L. site(s):
            </p>
            <ul className="list-disc list-inside mb-4 space-y-1">
              <li>Engage in illicit or illegal activities according to the European and Spanish legal system.</li>
              <li>Violate Spanish and international legislation on intellectual and industrial property.</li>
              <li>Disseminate content or propaganda of a racist, xenophobic, pornographic-illegal, apology of terrorism or offensive against human rights.</li>
              <li>Causing damage to the computer systems of Your Mates Tech, S.L. of its suppliers or third parties.</li>
              <li>Introduce or disseminate malicious software, computer viruses or any other physical or logical systems that are likely to cause the damage mentioned in the previous point.</li>
              <li>Attempt to access or, as the case may be, use the accounts of other users and modify or manipulate their data.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-mate-yellow mb-4">AGE OF USERS</h2>
            <p className="mb-4">
              Our services are intended exclusively for individuals over 18 years of age. If you suspect that a user is under this age, please report it through our contact system. We take this restriction very seriously and have implemented measures to ensure compliance. If we detect that a member is under 18, we will immediately delete their account and all associated data. If you have any suspicions about a user's age, please inform us so that we can take the appropriate actions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-mate-yellow mb-4">REPORTS AND BLOCKS</h2>
            <p className="mb-4">
              Within the Mate APP offered by Your Mates Tech, S.L., users have the option to report and block other users if they consider that they have violated the rules of coexistence or behavior. When a user reports another, they can add a description of the reason for the report in a field provided for this purpose.
            </p>
            <p className="mb-4">
              At Your Mates Tech, S.L. we are committed to reviewing said reports internally and taking the measures we consider appropriate in the shortest possible time. The decisions derived from this review may include warnings, temporary suspensions or the permanent elimination of the offending profile, thus guaranteeing a safe and respectful user environment for all users.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-mate-yellow mb-4">RESPONSIBILITIES</h2>
            
            <h3 className="text-xl font-semibold text-mate-yellow mb-3">USER AND YOUR MATES TECH, S.L. RESPONSIBILITIES</h3>
            <p className="mb-4">
              The USER is solely responsible for any infringements that may be incurred or damages that may be caused by the improper use of the site(s) Your Mates Tech, S.L., leaving Your Mates Tech, S.L. exonerated from any kind of liability that may arise from the actions of the USER.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-mate-yellow mb-4">USER REGISTRATION</h2>
            <p className="mb-4">
              In order to access certain services, it is necessary to be a REGISTERED USER. It is the responsibility of the USER the custody of the password used to avoid the usurpation of his identity in the sites Your Mates Tech, S.L. to which he had access by his condition of registered user.
            </p>
            <p className="mb-4">
              Likewise, the user declares that all the personal information provided by him for access to the site(s) of Your Mates Tech, S.L. and during the use thereof, is true, complete and accurate and he undertakes to keep it updated in the successive uses he may make of the services offered.
            </p>
            <p className="mb-4">
              The sending and forwarding of data carried out by the user through the Your Mates Tech, S.L. website or the information it sends is protected by the most modern electronic security techniques on the network. Also, the data supplied and stored in our databases are also protected by security systems that prevent access by unauthorized third parties to them. Your Mates Tech, S.L. makes its best efforts to have the most updated systems for the effectiveness of these security systems.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-mate-yellow mb-4">INTELLECTUAL PROPERTY ON THE CONTENTS OF THE WEBSITE</h2>
            <p className="mb-4">
              All the elements that make up the website, as well as its structure, design and source code, are owned by Your Mates Tech, S.L. and are protected by intellectual and industrial property regulations.
            </p>
            <p className="mb-4">
              The total or partial reproduction of the contents of this website, as well as its modification and/or distribution without mentioning its origin or requesting prior authorisation, is prohibited.
            </p>
            <p className="mb-4">
              Your Mates Tech, S.L. will not assume any responsibility derived from the use by third parties of the content of the website and may exercise all civil or criminal actions that correspond in case of infringement of these rights by the user.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-mate-yellow mb-4">LINKS</h2>
            <p className="mb-4">
              This Web includes links that allow the User to access other Internet pages external to the site(s) of Your Mates Tech, S.L. In the event that the USER uses these links, Your Mates Tech, S.L. informs the USER that it does not exercise any type of control over these sites, their contents and the possibility of compiling information on their activities on the Internet, including those carried out on our own site.
            </p>
            <p className="mb-4">
              In no event shall Your Mates Tech, S.L. assume any responsibility for the contents of any link belonging to a third-party website, nor shall it guarantee the technical availability, quality, reliability, accuracy, breadth, veracity, validity and legality of any material or information contained in any of the said hyperlinks or other Internet sites.
            </p>
            <p className="mb-4">
              If any user is aware that the links refer to pages whose content or services are illegal, harmful, denigrating, violent or immoral, please contact Your Mates Tech, S.L. indicating so, and proceed to remove the link.
            </p>
            <p className="mb-4">
              All activity carried out on sites not owned by Your Mates Tech, S.L. is regulated by its own rules and conditions, so we recommend that, before use, users are informed about it in the legal notice sections, or similar, on sites outside the direct control of Your Mates Tech, S.L.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-mate-yellow mb-4">REGULATION AND CONFLICT RESOLUTION</h2>
            <p className="mb-4">
              In all aspects, the rules of use of Your Mates Tech, S.L. are governed by Spanish law. The language used to draft and understand this legal notice is Spanish. No individual copy of this legal notice is kept for each user, but will always be available online at Your Mates Tech, S.L.
            </p>
            <p className="mb-4">
              In case of any dispute or claim related to this text or any activity of Your Mates Tech, S.L., users have the option to submit to the Consumer Arbitration System, in which Your Mates Tech, S.L. participates. However, to resolve disputes related to activities that require membership, users should refer to the appropriate body of the relevant bar association.
            </p>
            <p className="mb-4">
              If users meet the definition of consumers or users under Spanish law and reside in the European Union, and experience problems with an online purchase made on Your Mates Tech, S.L., they may seek out-of-court resolution through the Online Dispute Resolution Platform, established by the European Union and developed by the European Commission pursuant to Regulation (EU) 524/2013.
            </p>
            <p>
              You can visit the following link: <a href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show" target="_blank" rel="noopener noreferrer" className="text-mate-yellow hover:underline">https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show</a>
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LegalNotice;
