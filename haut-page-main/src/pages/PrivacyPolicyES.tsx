import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';
import MateLogo from '@/components/MateLogo';

const PrivacyPolicyES: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Logo Mate en haut à gauche */}
      <div className="px-6 pt-6 flex items-center justify-between">
        <Link to="/">
          <MateLogo />
        </Link>
        <Link 
          to="/privacy" 
          className="text-2xl hover:scale-110 transition-transform"
          title="English"
        >
          🇬🇧
        </Link>
      </div>
      
      <main className="container mx-auto px-6 py-8 max-w-4xl">
        <h1 className="text-4xl font-bold text-mate-yellow mb-8 text-center">
          Política de Privacidad
        </h1>
        
        <div className="space-y-8 text-gray-300 leading-relaxed">
          <p>
            <strong>IMPORTANTE:</strong> Le invitamos a leer atentamente esta Declaración de Privacidad para conocer por qué recopilamos sus datos personales y cómo son procesados por Your Mates Tech, S.L., Aribau 254, pral. 1ª, 08006, Barcelona, España.
          </p>
          
          <p>
            Esta política está sujeta a cambios y debe consultarse cada vez que decida visitarnos.
          </p>
          
          <p>
            Esta Política de Privacidad fue modificada el 22/10/2024.
          </p>

          <section>
            <h2 className="text-2xl font-bold text-mate-yellow mb-4">ÁMBITO DE APLICACIÓN</h2>
            <p>
              Esta declaración de privacidad en línea de Your Mates Tech, S.L., es pública y accesible a todos los usuarios y clientes de Your Mates Tech, S.L., y se aplica a todos los sitios web, aplicaciones, eventos y otros servicios de Your Mates Tech, S.L. siendo mateapp.es el sitio o dominio principal. También se aplica a aquellos documentos o mensajes emitidos por Your Mates Tech, S.L. que enlacen con esta política o declaración de privacidad o, en su caso, indiquen el acceso a la misma para que conozca cómo Your Mates Tech, S.L. utiliza sus datos personales. Algunos servicios pueden tener sus propias políticas de privacidad. Si es así, esas políticas se aplican en lugar de esta. A continuación, le informamos de manera general sobre los usos de su información personal. Estos usos y tratamientos se detallan a continuación.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-mate-yellow mb-4">INFORMACIÓN PERSONAL QUE RECOPILAMOS</h2>
            <p className="mb-4">
              Información sobre el uso de datos personales, según lo previsto en el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos (RGPD) y la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y Garantía de los Derechos Digitales, que adapta el Reglamento al ordenamiento jurídico español y completa y desarrolla sus disposiciones (LOPDGDDD). Your Mates Tech, S.L. respeta su derecho a la privacidad y aplica toda la normativa vigente con el fin de proteger los datos personales de sus clientes y usuarios.
            </p>
            <p className="mb-4">
              Sus datos personales son tratados con la máxima confidencialidad, habiendo adoptado Your Mates Tech, S.L., como Responsable del Tratamiento, las medidas técnicas y organizativas necesarias para garantizar la confidencialidad y seguridad de los datos personales, evitando su alteración, pérdida, tratamiento o acceso no autorizado.
            </p>
            <p className="mb-4">
              Para que usted pueda recibir información y, en su caso, poder reservar o utilizar los productos y servicios ofrecidos por Your Mates Tech, S.L. a través del/de los sitio/s de Your Mates Tech, S.L., es necesario que nos informe de ciertos datos personales necesarios para poder personalizar nuestros servicios y ajustarlos a sus intereses y necesidades.
            </p>
            <p className="mb-4">
              Le recordamos que es deber del usuario informarnos de cualquier cambio en sus datos, a Your Mates Tech, S.L., y que hubiera registrado en nuestros sitios, para proceder a su mantenimiento en los archivos correspondientes. Con el fin de mejorar los servicios que le ofrecemos, es posible que reciba una encuesta de satisfacción. Se le pedirá una valoración de los servicios recibidos y un breve comentario sobre su experiencia.
            </p>
            <p className="mb-4">
              Recopilamos su información personal por varias razones: Cuando crea una cuenta, nos proporciona sus credenciales de acceso, información básica del perfil (por ejemplo, género, fecha de nacimiento). Puede compartir información adicional (por ejemplo, biografía, intereses, fotos, vídeos). Información del perfil como biografía, intereses, fotos, vídeos, etc. Respuesta a solicitudes de servicios, realización de los servicios, envío de mensajes de estado de servicios en curso, envío de promociones que consideramos interesantes para nuestros clientes, encuestas de calidad y satisfacción para la mejora de los servicios realizados por Your Mates Tech, S.L.
            </p>

            <h3 className="text-xl font-semibold text-mate-yellow mb-3">Información que recibimos de otros:</h3>
            <p className="mb-4">
              Otros miembros pueden proporcionar información sobre usted cuando interactúan con nuestros servicios. A través de redes sociales, puede compartir información a través de su cuenta de redes sociales (por ejemplo, Facebook, Google, Instagram). Podemos recibir información de socios con fines publicitarios y de seguridad.
            </p>

            <h3 className="text-xl font-semibold text-mate-yellow mb-3">Información recopilada automáticamente:</h3>
            <p className="mb-4">
              Recopilamos datos sobre sus actividades dentro de nuestros servicios. Recopilamos información sobre los dispositivos que utiliza para acceder a nuestros servicios. Utilizamos cookies para reconocer e identificar sus dispositivos. Para más detalles, consulte nuestra "Política de Cookies". Con su permiso, podemos recopilar datos de geolocalización precisa. Si utiliza funciones como el reconocimiento facial, recopilamos datos para verificar su identidad. Con su consentimiento, recopilamos información adicional, como fotos y vídeos. Puede revocar este consentimiento en cualquier momento y ejercer sus derechos de acceso, rectificación, supresión, limitación del tratamiento, olvido, portabilidad de datos y oposición por los medios indicados en el capítulo "EJERCICIO DE DERECHOS" de este documento.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-mate-yellow mb-4">MÉTODOS DE RECOPILACIÓN</h2>
            <p>
              Your Mates Tech, S.L. recopila datos personales a través de varios canales: en el sitio web mateapp.es; en el centro de llamadas de Your Mates Tech, S.L.; en los mismos centros físicos de Your Mates Tech, S.L., al solicitar un servicio; en la página de Your Mates Tech, S.L. en Instagram, Tik Tok. En cualquier caso y siempre que sea aplicable, le daremos la opción de negarse a permitirnos usar sus datos con el fin de enviar comunicaciones publicitarias.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-mate-yellow mb-4">CÓMO USAMOS SU INFORMACIÓN</h2>
            <p className="mb-4">
              Utilizamos su información personal para proporcionar, mantener y mejorar nuestros servicios, garantizando su seguridad y optimizando su experiencia en nuestra plataforma. Nuestro objetivo es proporcionarle una experiencia segura y personalizada, mientras cumplimos con todas las obligaciones legales aplicables.
            </p>
            <p className="mb-2">Los usos específicos de su información incluyen:</p>
            <ul className="list-disc list-inside mb-4 space-y-1">
              <li>Utilizamos su información para crear y gestionar su cuenta, facilitando su acceso y uso efectivo de nuestra plataforma.</li>
              <li>Su información nos permite brindarle soporte, responder a sus consultas y resolver cualquier problema que pueda surgir mientras usa nuestros servicios.</li>
              <li>Utilizamos su información para mantener contacto con usted en relación con nuestros servicios, incluidas actualizaciones, notificaciones y cambios en nuestros términos o políticas.</li>
              <li>Adaptamos nuestros servicios a sus preferencias y comportamiento, mejorando su experiencia de usuario. Esto incluye recomendaciones personalizadas y adaptación de contenido según sus intereses y actividades.</li>
              <li>Podemos usar su información para ejecutar y medir la efectividad de nuestras campañas publicitarias, asegurando que los anuncios que ve sean relevantes para sus intereses.</li>
              <li>Al analizar su uso de nuestros servicios, podemos identificar áreas de mejora y desarrollar nuevas funciones que satisfagan mejor sus necesidades.</li>
              <li>Estamos comprometidos a proteger a nuestros usuarios. Su información nos ayuda a prevenir, detectar y combatir el fraude, el abuso y otras actividades ilegales en nuestra plataforma.</li>
              <li>Procesamos su información para cumplir con nuestras obligaciones legales, incluida la cooperación con las autoridades cuando sea necesario, y para garantizar que nuestras prácticas estén alineadas con las regulaciones aplicables.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-mate-yellow mb-4">Tratamiento de datos personales</h2>
            <p className="mb-2">La información que recopilamos se procesa para los siguientes fines:</p>
            <ul className="list-disc list-inside mb-4 space-y-1">
              <li>Para crear, gestionar y mantener su cuenta en nuestra plataforma.</li>
              <li>Para adaptar nuestros servicios a sus preferencias, proporcionándole una experiencia atractiva y personalizada.</li>
              <li>Para proteger a nuestros usuarios previniendo, detectando y abordando amenazas de seguridad, fraude y actividades ilegales.</li>
              <li>Para cumplir con nuestras obligaciones legales y regulatorias, asegurando que todas las actividades de procesamiento de datos se realicen de acuerdo con las leyes aplicables.</li>
            </ul>
            <p>
              Conservamos su información personal solo durante el tiempo necesario para cumplir con los fines descritos anteriormente y de acuerdo con los requisitos legales. Una vez que los datos ya no sean necesarios para estos fines, los eliminaremos o anonimizaremos de forma segura.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-mate-yellow mb-4">CÓMO COMPARTIMOS SU INFORMACIÓN</h2>
            <p className="mb-4">
              Principalmente, compartimos su información con otros miembros de la plataforma, así como con proveedores de servicios y socios que nos ayudan a gestionar y mejorar nuestros servicios.
            </p>
            <p className="mb-2">Los detalles del intercambio de información incluyen:</p>
            <ul className="list-disc list-inside mb-4 space-y-1">
              <li>Compartimos su información con otros miembros cuando la divulga a través del servicio (por ejemplo, en su perfil).</li>
              <li>Compartimos datos con proveedores que respaldan nuestras operaciones, como aquellos involucrados en alojamiento, análisis y atención al cliente.</li>
              <li>Compartimos información con afiliados de Mate con fines operativos y de seguridad.</li>
              <li>Podemos divulgar información para cumplir con procesos legales o para proteger la seguridad de nuestros usuarios y servicios.</li>
              <li>También podemos compartir su información con terceros cuando tenemos su consentimiento explícito.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-mate-yellow mb-4">REGISTRO A TRAVÉS DE PLATAFORMAS DE TERCEROS</h2>
            <p className="mb-4">
              El Usuario puede registrarse y acceder a la App a través de servicios de autenticación proporcionados por terceros, como Apple, Google u otros servicios equivalentes (en adelante, "Plataformas de Terceros"). Al optar por este modo de registro, el Usuario autoriza la transferencia de ciertos datos personales, como nombre, dirección de correo electrónico y cualquier otra información que la Plataforma de Terceros haya autorizado compartir con nuestra plataforma, de conformidad con los términos y condiciones que rigen su relación con dicha Plataforma de Terceros.
            </p>
            <p className="mb-4">
              La recopilación y uso de información proporcionada a través de Plataformas de Terceros estará sujeta a las políticas de privacidad y términos de uso de dichas Plataformas de Terceros. Mate no asume ninguna responsabilidad por el funcionamiento, disponibilidad o seguridad de las Plataformas de Terceros o por el tratamiento que dichas plataformas puedan hacer de la información personal del Usuario.
            </p>
            <p>
              El Usuario reconoce y acepta que cualquier acceso o interacción con nuestra plataforma a través de una Plataforma de Terceros también se regirá por los términos y políticas establecidos por dicha plataforma, que pueden diferir de estos Términos y Condiciones. Mate no es responsable de ningún incidente que surja de la autenticación o uso de credenciales proporcionadas por estas Plataformas de Terceros.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-mate-yellow mb-4">DIVULGACIÓN A TERCEROS</h2>
            <p>
              Nos comprometemos a garantizar que sus datos personales estén protegidos, independientemente de dónde se procesen o almacenen. En determinadas circunstancias, su información puede transferirse y procesarse en países fuera del suyo, incluidos países fuera del Espacio Económico Europeo (EEE).
            </p>

            <h3 className="text-xl font-semibold text-mate-yellow mb-3 mt-6">Transferencias internacionales de datos</h3>
            <p className="mb-4">
              Cuando transferimos sus datos personales fuera del EEE, nos aseguramos de que dichas transferencias se realicen de acuerdo con las regulaciones de protección de datos aplicables. Utilizamos las siguientes salvaguardas para proteger sus datos:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-1">
              <li>Utilizamos las cláusulas contractuales estándar de la Comisión Europea, que están diseñadas para garantizar que sus datos personales reciban el mismo nivel de protección que recibirían dentro del EEE.</li>
              <li>En algunos casos, podemos transferir sus datos a países que la Comisión Europea ha considerado que proporcionan un nivel adecuado de protección de datos.</li>
              <li>Cuando sea necesario, implementamos salvaguardas adicionales, como reglas corporativas vinculantes, para garantizar que sus datos estén protegidos durante las transferencias internacionales.</li>
            </ul>
            <p>
              Al emplear estos mecanismos legales y salvaguardas, nos esforzamos por garantizar que sus datos permanezcan seguros y que se respeten sus derechos de privacidad, independientemente de dónde se procesen sus datos.
            </p>

            <h3 className="text-xl font-semibold text-mate-yellow mb-3 mt-6">Sus derechos y opciones</h3>
            <p className="mb-4">
              Estamos comprometidos a proporcionarle opciones claras y accesibles para gestionar sus datos personales. Dependiendo de su ubicación, puede tener ciertos derechos legales con respecto a sus datos personales, y hemos implementado herramientas y configuraciones para ayudarle a ejercer estos derechos.
            </p>

            <h3 className="text-xl font-semibold text-mate-yellow mb-3">Herramientas y configuraciones</h3>
            <ul className="list-disc list-inside mb-4 space-y-1">
              <li>Puede acceder y actualizar su información personal directamente dentro de nuestro servicio.</li>
              <li>Tiene control sobre la configuración de su dispositivo, lo que le permite gestionar la recopilación y el uso de sus datos por nuestros servicios.</li>
              <li>Si elige eliminar su cuenta, puede hacerlo directamente a través de la interfaz del servicio. Una vez que se elimine su cuenta, sus datos se manejarán de acuerdo con nuestra Política de Retención de Datos.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-mate-yellow mb-4">TRATAMIENTOS Y USOS</h2>
            <p className="mb-4">
              Puede revocar su consentimiento en cualquier momento para permitir que sus datos se utilicen de una manera específica. Dicha revocación de autorización puede no tener efecto retroactivo. Realización y gestión del servicio contratado y facturación. Sin los datos solicitados no será posible realizar el servicio.
            </p>
            <p className="mb-4">
              Los datos personales, así como los relacionados con el servicio se conservarán en nuestros archivos durante el tiempo necesario para poder hacer efectiva la garantía del servicio prestado (5 años). Los datos relativos a la facturación del servicio se conservarán en nuestros archivos durante el tiempo necesario para cumplir con las obligaciones legales y fiscales aplicables a los servicios prestados por Your Mates Tech, S.L. (5 años + año en curso).
            </p>
            <p className="mb-2">Con respecto a este tratamiento de datos, puede, si lo considera necesario, ejercer los siguientes derechos:</p>
            <ul className="list-disc list-inside mb-4 space-y-1">
              <li>Acceso para saber qué datos conservamos y tratamos.</li>
              <li>De rectificación en caso de que considere que los datos no son correctos o porque han cambiado (por ejemplo, sus datos de contacto).</li>
            </ul>

            <h3 className="text-xl font-semibold text-mate-yellow mb-3 mt-6">Consultas de edición</h3>
            <p className="mb-4">
              Los datos personales y de contacto, imágenes, se conservarán en nuestros archivos durante el tiempo necesario para llevar a cabo la gestión solicitada.
            </p>
            <p className="mb-2">Si lo considera necesario, podrá ejercer los siguientes derechos con respecto a este tratamiento de datos:</p>
            <ul className="list-disc list-inside mb-4 space-y-1">
              <li>Acceso para saber qué datos conservamos y tratamos.</li>
              <li>De oposición y limitación, de modo que los datos personales no se procesarán -desde que se procese su solicitud- con el fin del servicio de información.</li>
              <li>De rectificación en el caso de que considere que los datos no son correctos o porque han cambiado.</li>
              <li>Supresión o eliminación en caso de que retire su consentimiento para este tratamiento.</li>
            </ul>

            <h3 className="text-xl font-semibold text-mate-yellow mb-3 mt-6">Servicio de calidad</h3>
            <p className="mb-4">
              Para cumplir con nuestros compromisos de calidad con el cliente, realizamos una encuesta puntualmente para conocer la satisfacción con el trabajo realizado a nuestros clientes y usuarios con el fin de poder mejorar nuestros servicios. Estas encuestas se realizan por medios electrónicos (recibe un correo electrónico con un enlace al sitio web donde se realiza la encuesta) y no recopilan ningún dato personal adicional a los que usted ha proporcionado previamente.
            </p>
            <p className="mb-4">
              Los datos recabados se conservarán en nuestros archivos mientras dure la relación contractual y, posteriormente, durante el tiempo necesario para cumplir con las obligaciones legales derivadas del tratamiento. El único tratamiento que se realiza es el análisis estadístico de los datos para detectar mejoras en los servicios.
            </p>
            <p className="mb-2">Si lo considera necesario, podrá ejercer los siguientes derechos:</p>
            <ul className="list-disc list-inside mb-4 space-y-1">
              <li>Acceso para saber qué datos conservamos y tratamos.</li>
              <li>De oposición y limitación, de modo que los datos personales no se procesarán desde que se procese su solicitud.</li>
              <li>De rectificación en el caso de que considere que los datos no son correctos o porque han cambiado.</li>
              <li>Supresión o eliminación en caso de que retire su consentimiento para este tratamiento.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-mate-yellow mb-4">EJERCICIO DE DERECHOS</h2>
            <p className="mb-4">
              Puede ejercer sus derechos de acceso, rectificación, supresión, limitación del tratamiento, portabilidad de datos y oposición dirigiéndose por escrito a Your Mates Tech, S.L., en la dirección Aribau 254, pral. 1ª, 08006, Barcelona, o enviando un correo electrónico a rgpd@mateapp.es, adjuntando copia de su documento de identidad.
            </p>
            <p className="mb-4">
              Si considera que no hemos tratado sus datos personales de acuerdo con la normativa, puede contactar con nuestro Delegado de Protección de Datos en la dirección anteriormente indicada.
            </p>
            <p>
              Asimismo, le informamos de que puede presentar una reclamación ante la Agencia Española de Protección de Datos, especialmente cuando no haya obtenido satisfacción en el ejercicio de sus derechos. Para más información puede consultar su página web <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-mate-yellow hover:underline">www.aepd.es</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-mate-yellow mb-4">SEGURIDAD DE LOS DATOS</h2>
            <p>
              Nos tomamos muy en serio la seguridad de sus datos personales. Hemos implementado medidas técnicas y organizativas apropiadas para proteger sus datos contra el acceso no autorizado, la pérdida, la destrucción o el daño. Sin embargo, tenga en cuenta que ningún método de transmisión por Internet o método de almacenamiento electrónico es 100% seguro. Aunque nos esforzamos por proteger sus datos personales, no podemos garantizar su seguridad absoluta.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-mate-yellow mb-4">CAMBIOS EN ESTA POLÍTICA DE PRIVACIDAD</h2>
            <p>
              Podemos actualizar esta Política de Privacidad de vez en cuando. Le notificaremos cualquier cambio publicando la nueva Política de Privacidad en esta página y actualizando la fecha de "última modificación". Le recomendamos que revise esta Política de Privacidad periódicamente para estar informado sobre cómo protegemos su información.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-mate-yellow mb-4">CONTACTO</h2>
            <p className="mb-2">Si tiene alguna pregunta sobre esta Política de Privacidad, puede contactarnos:</p>
            <ul className="list-disc list-inside mb-4 space-y-1">
              <li>Por correo electrónico: rgpd@mateapp.es</li>
              <li>Por teléfono: +34 608 092 696</li>
              <li>Por correo postal: Your Mates Tech, S.L., Aribau 254, pral. 1ª, 08006, Barcelona, España</li>
            </ul>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicyES;