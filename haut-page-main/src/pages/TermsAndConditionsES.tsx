import React from "react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import MateLogo from "@/components/MateLogo";

const TermsAndConditionsES: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Logo Mate en haut à gauche */}
      <div className="px-6 pt-6 flex items-center justify-between">
        <Link to="/">
          <MateLogo />
        </Link>
        <Link to="/terms" className="text-2xl hover:scale-110 transition-transform" title="English">
          🇬🇧
        </Link>
      </div>

      <main className="container mx-auto px-6 py-8 max-w-4xl">
        <h1 className="text-4xl font-bold text-mate-yellow mb-8 text-center">
          TÉRMINOS Y CONDICIONES DE USO DE LA APLICACIÓN MATE
        </h1>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <p>
            Los presentes Términos y Condiciones de Uso (en adelante, los «Términos») constituyen un acuerdo legalmente
            vinculante entre el Usuario y YOUR MATES TECH, S.L. (en adelante, «Mate»), entidad titular de la plataforma
            digital accesible a través de la aplicación móvil «Mate» (en adelante, la «App»).
          </p>
          <p>
            Al registrarse, acceder o utilizar la App, usted declara que ha leído, comprendido y acepta íntegramente
            estos Términos, así como nuestra Política de Privacidad. Si no está de acuerdo con alguno de estos Términos,
            le recomendamos abstenerse de utilizar nuestros servicios.
          </p>
          <p>
            Es esencial que lea detenidamente este documento antes de comenzar a utilizar la App, ya que regula los
            derechos y obligaciones aplicables a su condición de Usuario. El uso de Mate implica la aceptación plena y
            sin reservas de todas las cláusulas aquí contenidas, así como de cualquier versión modificada que pueda
            publicarse en el futuro, de conformidad con lo previsto en estos Términos.
          </p>

          <section>
            <h2 className="text-2xl font-bold text-mate-yellow mb-4">INFORMACIÓN GENERAL</h2>
            <p className="mb-4">
              Estos Términos y Condiciones regulan el acceso, la navegación y el uso de la aplicación móvil Mate (en
              adelante, la «App» o «Mate»), desarrollada y gestionada por:
            </p>
            <ul className="list-none space-y-2 mb-4">
              <li>
                <strong>Denominación social:</strong> YOUR MATES TECH S.L.
              </li>
              <li>
                <strong>Domicilio social:</strong> C/ Aribau, 254, Pral 1a (08006, Barcelona)
              </li>
              <li>
                <strong>Datos de inscripción en el Registro Mercantil:</strong> Registro Mercantil de Barcelona Tomo:
                49066, Folio: 59, Hoja: 606374, Inscripción 1
              </li>
              <li>
                <strong>Número de Identificación Fiscal:</strong> B-56.745.144
              </li>
              <li>
                <strong>Correo electrónico:</strong> contact@mateapp.es
              </li>
            </ul>
            <p className="mb-4">
              Mate es una red social enfocada en la creación y el descubrimiento de planes sociales. A través de la App,
              los usuarios pueden conectar con otras personas, participar en comunidades temáticas, organizar o asistir
              a eventos y explorar perfiles con intereses afines, todo ello en un entorno digital diseñado para el ocio,
              la afinidad personal y la interacción social.
            </p>
            <p className="mb-4">
              El acceso a la App implica la condición de usuario (el «Usuario») y supone la aceptación plena y sin
              reservas de la versión vigente de estos Términos y Condiciones. Si el Usuario no está de acuerdo con
              alguna de las condiciones aquí establecidas, deberá abstenerse de utilizar la App o darse de baja.
            </p>
            <p className="mb-4">
              El Usuario declara ser mayor de edad (mínimo 18 años) y tener capacidad legal para contratar y aceptar
              estos Términos. Mate no está dirigida a menores, por lo que, si existe evidencia o sospecha razonable de
              que un menor ha creado una cuenta, Mate podrá suspenderla sin previo aviso. El Usuario será responsable de
              la veracidad de la información facilitada y del uso que haga de la App, así como del cumplimiento de lo
              dispuesto en este documento.
            </p>
            <p>
              La versión más actualizada de estos Términos y Condiciones estará siempre disponible en la App y/o en el
              sitio web asociado. Mate se reserva el derecho a modificar el contenido de estos Términos, con efectos
              desde su publicación o, cuando la ley lo exija, desde su notificación expresa al Usuario. El uso
              continuado de la App tras dichas modificaciones implica su aceptación.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-mate-yellow mb-4">OBJETO Y CONDICIONES DE ACCESO A MATE</h2>
            <p className="mb-4">
              Mate es una red social digital cuyo objetivo es permitir que los usuarios registrados conecten entre sí y
              organicen planes de forma libre, voluntaria y no profesional. El uso de la plataforma implica la
              aceptación íntegra de estos Términos y Condiciones, así como el compromiso del Usuario de utilizar la App
              conforme a la legislación vigente, a la buena fe y a los principios de respeto y convivencia establecidos
              en este documento.
            </p>
            <p className="mb-4">
              La App está destinada exclusivamente a personas mayores de 18 años. Si un menor facilita información falsa
              o utiliza medios fraudulentos para registrarse, será plenamente responsable de las consecuencias de dicho
              uso, eximiendo a Mate de toda responsabilidad. Del mismo modo, los padres, tutores o representantes
              legales del menor responderán íntegramente de daños, reclamaciones o procedimientos derivados del uso por
              parte del menor, sin limitación, conforme a la legislación vigente. Mate se reserva el derecho de
              suspender cualquier cuenta respecto de la cual tenga motivos razonables para considerar que se ha
              incumplido este requisito.
            </p>

            <h3 className="text-xl font-semibold text-mate-yellow mb-3 mt-6">2.1 Cuentas gratuitas</h3>
            <p className="mb-4">
              La versión gratuita de Mate permite a los Usuarios crear un perfil, interactuar con otros usuarios,
              explorar el feed general, unirse a comunidades de interés y participar en eventos públicos, respetando
              siempre los límites y condiciones establecidos por Mate para este tipo de cuenta. El acceso a determinadas
              funcionalidades avanzadas o personalizadas quedará restringido a usuarios con cuenta Premium.
            </p>

            <h3 className="text-xl font-semibold text-mate-yellow mb-3">2.2 Cuentas Premium</h3>
            <p className="mb-4">
              La cuenta Premium ofrece a los Usuarios funcionalidades adicionales diseñadas para mejorar su experiencia
              en la App, como mayor visibilidad mediante herramientas como Boost, acceso al mapa de eventos y usuarios
              cercanos (previa aceptación de la geolocalización), activación del Modo Incógnito, prioridad de
              visualización, opciones ampliadas para crear eventos y otras funciones que podrán modificarse o ampliarse
              en el futuro.
            </p>
            <p className="mb-4">
              El acceso a estas funciones requiere el pago de una suscripción mensual, que puede abonarse mediante
              Stripe, Apple Pay u otros sistemas habilitados, y podrá incluir renovación automática si así lo determina
              el Usuario en el momento de la compra. En ningún caso se garantiza un resultado concreto derivado de la
              compra de una cuenta Premium, como interacciones, contactos, asistencia a eventos o mayor participación,
              ya que dichos elementos dependen exclusivamente del comportamiento de otros usuarios.
            </p>
            <p>
              Las suscripciones no son reembolsables una vez iniciado el periodo de suscripción. Esto no afecta al
              derecho legal de desistimiento del Usuario dentro de 14 días cuando sea aplicable según la normativa de
              consumo de la UE o del Reino Unido. Tampoco afecta a otros derechos legales de desistimiento o reembolso
              que puedan resultar de aplicación conforme a la legislación de consumo imperativa, la cual prevalecerá
              sobre esta cláusula. Mate podrá suspender o cancelar una cuenta Premium, de forma temporal o definitiva,
              en casos de incumplimiento grave, fraude o uso abusivo o ilícito, sin previo aviso. En tales casos, el
              Usuario no tendrá derecho a reembolso o compensación por el periodo restante no utilizado, salvo que la
              ley imperativa establezca lo contrario.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-mate-yellow mb-4">REGISTRO</h2>
            <p className="mb-4">
              Para reforzar la seguridad y la confianza, Mate ofrece un proceso integral de verificación de identidad
              operado por Markets ProLive 360, S.L., empresa independiente que opera bajo la marca Didit. La
              verificación se realiza a través de la API oficial de Didit, que valida la identidad del usuario mediante
              sistemas biométricos y de cotejo documental. Mate no accede, almacena ni trata ningún dato personal,
              imagen o documento utilizado durante este proceso. Mate únicamente recibe un resultado («verificado» o «no
              verificado») con fines informativos.
            </p>
            <p className="mb-4">
              Esta verificación es meramente indicativa y no constituye garantía oficial de identidad o autenticidad por
              parte de Mate. Toda responsabilidad técnica y jurídica del proceso de verificación recae exclusivamente en
              Markets ProLive 360, S.L. (Didit), cuyas condiciones y política de privacidad resultan de aplicación y
              pueden consultarse en su sitio web oficial.
            </p>
            <p className="mb-4">
              El Usuario reconoce que el uso de esta funcionalidad es voluntario y que el consentimiento para el
              tratamiento de su vídeo puede revocarse en cualquier momento, ya sea desde los ajustes de la App o
              mediante solicitud expresa a contact@mateapp.es.
            </p>
            <p className="mb-4">
              Para utilizar la App, el Usuario debe registrarse previamente. El registro implica la aceptación íntegra
              de estos Términos y Condiciones y conlleva la obligación de cumplir una serie de requisitos esenciales. En
              particular, el Usuario manifiesta y garantiza que: (i) es una persona física mayor de 18 años, (ii) tiene
              capacidad legal suficiente para contratar conforme a la legislación del país en el que se encuentra, (iii)
              no dispone de más de una cuenta activa en la App y (iv) no ha sido expulsado o dado de baja con
              anterioridad de la plataforma, salvo autorización expresa de Mate para volver a registrarse.
            </p>
            <p className="mb-4">
              El proceso de registro puede completarse mediante formulario manual (correo y contraseña) o a través de
              sistemas de autenticación proporcionados por plataformas de terceros como Apple o Google. En cualquier
              caso, el Usuario es responsable de facilitar información veraz, actualizada y completa, y se compromete a
              mantener sus datos siempre al día.
            </p>
            <p className="mb-4">
              Se prohíbe compartir cuentas entre varias personas o utilizar la cuenta de otro Usuario. Si Mate detecta
              que una cuenta se ha creado de forma fraudulenta, pertenece a un menor o incumple cualquiera de los
              requisitos de esta cláusula, podrá suspenderla o cancelarla de forma inmediata y sin previo aviso.
            </p>
            <p>
              Si se registra a través de plataformas de terceros (en adelante, «Plataformas de Terceros»), usted
              autoriza a dichas plataformas a transferir a Mate los datos necesarios para crear y autenticar su cuenta,
              como nombre, correo electrónico u otros datos autorizados. La relación entre usted y esas plataformas
              externas se rige por las políticas de privacidad y términos de cada una de ellas. Por tanto, Mate no asume
              responsabilidad por el tratamiento de sus datos personales por dichas plataformas ni por incidencias
              derivadas de su uso.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-mate-yellow mb-4">NORMAS DE MATE</h2>
            <p className="mb-4">
              El uso de Mate exige el estricto cumplimiento de normas básicas de conducta y respeto, esenciales para
              mantener un entorno seguro, fiable y agradable para todos los Usuarios. Al utilizar la App, el Usuario se
              compromete a actuar conforme a la ley, a la buena fe y a los principios de convivencia digital que
              inspiran estos Términos y Condiciones.
            </p>
            <p className="mb-4">
              Queda expresamente prohibido utilizar la App para acosar, intimidar, engañar, suplantar a terceros o
              cometer actos ilegales de cualquier índole. El Usuario no puede utilizar la App con fines fraudulentos ni
              para obtener beneficios económicos, personales o publicitarios mediante engaño o manipulación del sistema.
              Asimismo, se prohíbe la publicación o difusión de contenido ofensivo, discriminatorio, violento,
              sexualmente explícito, que incite al odio o que vulnere los derechos fundamentales de las personas.
            </p>
            <p className="mb-4">
              El Usuario se abstendrá de utilizar la App para promocionar productos, servicios o plataformas externas,
              salvo autorización específica de Mate. Igualmente, se prohíbe la creación de perfiles con el único fin de
              redirigir tráfico, realizar actividades comerciales encubiertas o interferir en la experiencia de otros
              Usuarios. La reactivación de cuentas previamente suspendidas sin autorización o la creación de múltiples
              cuentas para eludir controles se considerará una infracción grave.
            </p>
            <p className="mb-4">
              Mate podrá suspender temporal o definitivamente la cuenta de cualquier Usuario que infrinja estas normas,
              sin previo aviso y sin derecho a reembolso. Mate también se reserva el derecho de eliminar cualquier
              contenido o perfil que, a su juicio, vulnere estas normas, pudiendo adoptar medidas proactivas o
              reactivo-preventivas para preservar la integridad de la comunidad. En los casos más graves, podrá
              emprender acciones legales o poner los hechos en conocimiento de las autoridades competentes.
            </p>
            <p className="mb-4">
              Para proteger la privacidad y la seguridad de los Usuarios, está estrictamente prohibido incluir
              información personal sensible o identificativa en su perfil público o en cualquier contenido visible
              dentro de la App, como:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-1">
              <li>Números de teléfono, direcciones postales, correos personales o laborales.</li>
              <li>Datos bancarios, números de tarjeta, cuentas de pago u otra información financiera.</li>
              <li>
                Documentos oficiales de identificación, números de seguridad social u otros identificadores personales
                protegidos.
              </li>
            </ul>
            <p className="mb-4">
              Los Usuarios son los únicos responsables de la información que decidan compartir dentro de la App, tanto
              en su perfil como en sus interacciones con otros Usuarios. Si decide divulgar datos personales fuera de
              los canales establecidos, lo hace bajo su exclusiva responsabilidad. Mate recomienda actuar con la misma
              cautela que en cualquier otro entorno público o digital.
            </p>
            <p>
              Si Mate detecta la publicación de datos personales en contra de estas normas, podrá eliminar el contenido,
              advertir al Usuario o suspender temporal o definitivamente la cuenta infractora, sin perjuicio de otras
              medidas adicionales conforme a estos Términos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-mate-yellow mb-4">OBLIGACIONES</h2>

            <h3 className="text-xl font-semibold text-mate-yellow mb-3">Obligaciones del Usuario</h3>
            <p className="mb-4">
              El Usuario se compromete a utilizar la App de forma diligente, ética y conforme a la legislación vigente,
              a estos Términos y Condiciones, a la moral, al orden público y a los principios de buena fe y respeto que
              rigen el uso de entornos digitales. El acceso y uso de la App implica, entre otras cosas, que el Usuario
              se compromete a:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-1">
              <li>Cumplir en todo momento estos Términos y revisarlos periódicamente.</li>
              <li>
                Actuar conforme a la legislación vigente, incluyendo normas sobre protección de datos, propiedad
                intelectual, publicidad, comunicaciones electrónicas y normativa anti spam.
              </li>
              <li>
                Asumir la responsabilidad exclusiva por el contenido que publique o comparta en la App, así como por sus
                interacciones con otros Usuarios.
              </li>
            </ul>
            <p className="mb-2">En este sentido, queda expresamente prohibido, a título enunciativo y no limitativo:</p>
            <ul className="list-disc list-inside mb-4 space-y-1">
              <li>Suplantar a terceros, falsificar datos personales, fotos de perfil, edad o afiliaciones.</li>
              <li>Compartir información personal de otros sin consentimiento expreso.</li>
              <li>
                Publicar contenido ofensivo, acosador, discriminatorio, obsceno, violento, amenazante, sexualmente
                explícito o que promueva odio, racismo, sexismo, intolerancia o conductas ilegales.
              </li>
              <li>
                Utilizar la App para acosar, intimidar, perseguir, difamar, atacar o dañar a otros usuarios, física o
                psicológicamente.
              </li>
              <li>Solicitar dinero, regalos o compensaciones a otros Usuarios.</li>
              <li>
                Participar en esquemas fraudulentos, piramidales, actividades ilegales o con ánimo de lucro encubierto.
              </li>
              <li>Usar cuentas ajenas o permitir el uso compartido de cuentas.</li>
              <li>
                Publicar contenido comercial, promocional o publicitario no autorizado, o crear perfiles con el fin de
                redirigir tráfico a otras plataformas.
              </li>
              <li>Introducir virus, malware o realizar ingeniería inversa de la App o sus funciones.</li>
              <li>
                Usar bots, crawlers, proxies o herramientas para extraer, copiar o manipular el contenido u operación de
                la App.
              </li>
              <li>Realizar denuncias falsas contra otros usuarios o abusar del sistema de reportes.</li>
              <li>Crear nuevas cuentas tras una suspensión sin autorización previa de Mate.</li>
              <li>
                Difundir contenidos relacionados con autolesiones, trastornos alimentarios, desafíos peligrosos o
                extremismo violento.
              </li>
              <li>Comprar, vender o transferir cuentas.</li>
              <li>
                Usar la App con fines de campaña electoral o política, salvo la expresión de opiniones personales en un
                marco de respeto.
              </li>
              <li>Promover, aceptar o facilitar el incumplimiento de estos Términos.</li>
            </ul>
            <p className="mb-4">
              El contenido subido por el Usuario será de su exclusiva responsabilidad. Mate no responderá por las
              consecuencias derivadas de dicho contenido, ni por su legalidad, exactitud, veracidad o idoneidad.
            </p>
            <p>
              Cualquier Usuario puede reportar usos indebidos o infracciones a través del sistema de reportes de la App
              o escribiendo a: contact@mateapp.es.
            </p>

            <h3 className="text-xl font-semibold text-mate-yellow mb-3 mt-6">Obligaciones de Mate</h3>
            <p className="mb-4">
              Mate es una red social que pone a disposición de sus Usuarios una infraestructura tecnológica que facilita
              la conexión social, la organización de planes, la participación en comunidades temáticas y el uso de
              funcionalidades adicionales como Boost, geolocalización, modo incógnito o recompensas. No obstante, Mate
              no interviene en la relación entre Usuarios, no organiza eventos ni garantiza resultados derivados del uso
              de la App.
            </p>
            <p className="mb-2">Mate no asume responsabilidad por:</p>
            <ul className="list-disc list-inside mb-4 space-y-1">
              <li>El contenido generado, compartido o publicado por los Usuarios.</li>
              <li>
                La veracidad, legalidad, exactitud, actualidad o idoneidad de la información intercambiada entre
                Usuarios.
              </li>
              <li>Las interacciones, contactos, relaciones o consecuencias que puedan derivarse del uso de la App.</li>
              <li>La asistencia, organización o seguridad de los eventos creados por los Usuarios.</li>
              <li>Opiniones o mensajes difundidos en comunidades, eventos o espacios de participación.</li>
            </ul>
            <p className="mb-4">
              En particular, Mate no pre-verifica ni edita el contenido generado por los Usuarios, salvo en casos de
              moderación automática o cuando actúe de oficio.
            </p>
            <p className="mb-4">
              En los eventos presenciales, el usuario creador del evento (el «anfitrión») será el único responsable de
              su desarrollo, incluidas comunicaciones, condiciones, datos personales tratados y cualquier incidencia.
              Los asistentes participan bajo su exclusiva responsabilidad.
            </p>
            <p className="mb-4">
              Además, la App incluye un sistema de moderación basado en inteligencia artificial que analiza, bloquea o
              elimina automáticamente contenido que contravenga estos Términos. Mate podrá suspender o cancelar la
              cuenta de un Usuario, temporal o definitivamente, cuando razonablemente determine que se han vulnerado
              estos Términos, la legislación aplicable o los estándares comunitarios. Salvo en casos de urgencia en los
              que sea estrictamente necesaria una acción inmediata para proteger la seguridad de otros Usuarios, la
              integridad de la plataforma o cumplir obligaciones legales, Mate realizará esfuerzos razonables para
              notificar al Usuario la medida adoptada y sus motivos. El Usuario tendrá derecho a solicitar una revisión
              de la decisión mediante un recurso escrito a contact@mateapp.es dentro del plazo razonable indicado en la
              notificación. La revisión se llevará a cabo de buena fe y la decisión de Mate tras dicha revisión será
              definitiva, sin perjuicio de los derechos legales que resulten de aplicación conforme a la normativa de
              consumidores o de protección de datos.
            </p>
            <p className="mb-4">
              Mate tampoco garantiza la exactitud de los sistemas de geolocalización, que dependen de la configuración
              del dispositivo y del consentimiento del Usuario. En ningún caso se mostrará la ubicación exacta sin la
              autorización expresa de la persona afectada.
            </p>
            <p className="mb-4">
              En la medida permitida por la ley y salvo lo expresamente previsto en estos Términos, Mate no será
              responsable de daños directos, indirectos, incidentales, especiales o consecuenciales, incluyendo pérdida
              de beneficios, interrupciones de servicio, pérdida de datos o lesiones personales derivadas del uso o de
              la imposibilidad de uso de la App.
            </p>
            <p>
              Los Usuarios que incumplan estas obligaciones responderán íntegramente de los daños y perjuicios que
              pudieran ocasionar, eximiendo a Mate frente a terceros.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-mate-yellow mb-4">CONTENIDO DE MATE Y PROPIEDAD INTELECTUAL</h2>
            <p className="mb-4">
              A través de la App de Mate, el Usuario puede acceder y crear distintos tipos de contenido, que se
              clasifican en tres categorías: (i) contenido generado por el Usuario («Su Contenido»), (ii) contenido
              generado por otros usuarios de la App («Contenido de Miembros») y (iii) contenido titularidad de Mate,
              incluyendo software, bases de datos, elementos gráficos o audiovisuales, textos y marcas («Nuestro
              Contenido»). Al utilizar la App, el Usuario reconoce y acepta los derechos y obligaciones derivados de
              cada uno de estos tipos de contenido.
            </p>

            <h3 className="text-xl font-semibold text-mate-yellow mb-3">Su Contenido</h3>
            <p className="mb-4">
              El Usuario puede subir, compartir o transmitir contenido en distintos formatos (mensajes, imágenes,
              audios, sonidos, vídeos, etc.) dentro de la App. El Usuario garantiza ser titular de los derechos
              necesarios sobre dicho contenido y será el único responsable de que cumpla la legislación vigente, las
              normas internas de la App y los derechos de terceros, incluidos derechos de autor, de imagen y de
              privacidad. Al publicar contenido en la App, el Usuario concede a YOUR MATES TECH, S.L. una licencia
              mundial, gratuita, no exclusiva, sublicenciable y transferible, por el máximo tiempo legal aplicable, para
              usar, reproducir, modificar, adaptar, traducir, distribuir y comunicar públicamente dicho contenido,
              incluida la imagen de perfil y el nombre de usuario, exclusivamente con fines asociados al funcionamiento
              normal de la App y a su promoción institucional. Esta cesión es revocable en cualquier momento mediante
              comunicación escrita a contact@mateapp.es.
            </p>

            <h3 className="text-xl font-semibold text-mate-yellow mb-3">Contenido de Miembros</h3>
            <p className="mb-4">
              El contenido generado por otros usuarios pertenece exclusivamente a sus autores. Los Usuarios se
              comprometen a no utilizar dicho contenido con fines comerciales, ni a copiarlo, reproducirlo, distribuirlo
              o explotarlo sin el consentimiento expreso de su titular. El uso indebido podrá conllevar la suspensión o
              cancelación de la cuenta del infractor.
            </p>

            <h3 className="text-xl font-semibold text-mate-yellow mb-3">Nuestro Contenido</h3>
            <p className="mb-4">
              Todos los derechos de propiedad intelectual sobre el diseño, desarrollo, funcionalidades, software, bases
              de datos, imágenes, logotipos, nombres comerciales, marcas y demás elementos de la App son propiedad
              exclusiva de YOUR MATES TECH, S.L. o de terceros con los que la compañía ha suscrito las licencias
              correspondientes. El Usuario dispone de una licencia limitada, no exclusiva, personal e intransferible
              para utilizar la App y su contenido conforme a su finalidad y en el marco de estos Términos y Condiciones.
            </p>

            <h3 className="text-xl font-semibold text-mate-yellow mb-3">Moderación y supervisión</h3>
            <p className="mb-4">
              Mate no asume la obligación de monitorizar el contenido generado por los Usuarios, pero se reserva el
              derecho a revisar, eliminar, bloquear o moderar cualquier contenido que vulnere estos Términos o que
              resulte ofensivo, ilegal o inapropiado. Esta revisión podrá realizarse también mediante sistemas de
              moderación automatizados.
            </p>

            <h3 className="text-xl font-semibold text-mate-yellow mb-3">Cesión de derechos de imagen</h3>
            <p className="mb-4">
              El Usuario consiente expresamente que Mate pueda utilizar su imagen de perfil, nombre de usuario y otros
              elementos visibles asociados a su cuenta con carácter limitado, gratuito, no exclusivo, revocable y no
              comercial, con la finalidad de mostrar y promover el funcionamiento ordinario de la App. Esta licencia
              puede incluir el uso en campañas informativas dentro de la propia App (como secciones de usuarios
              destacados o sugerencias), en redes sociales oficiales de Mate o en otras comunicaciones institucionales
              no publicitarias, siempre relacionadas con el entorno funcional y social de la plataforma.
            </p>
            <p className="mb-4">
              El Usuario acepta que su perfil pueda aparecer en iniciativas promocionales internas como «tu nuevo Mate
              te espera» u otras campañas destinadas a fomentar la participación en la App y el descubrimiento de nuevos
              perfiles, sin que ello implique el uso de sus datos en campañas comerciales de terceros o fuera del
              contexto social de Mate.
            </p>
            <p className="mb-4">
              En ningún caso esta licencia supondrá el uso de la imagen del Usuario en anuncios patrocinados, campañas
              comerciales externas o cualquier cesión a terceros sin consentimiento previo y específico.
            </p>
            <p className="mb-4">
              El Usuario podrá revocar esta autorización en cualquier momento y solicitar la retirada de cualquier
              contenido en el que aparezca su imagen escribiendo a contact@mateapp.es. Mate atenderá la solicitud en un
              plazo razonable, eliminando el contenido afectado salvo en los casos legalmente justificados o cuando la
              eliminación resulte técnicamente inviable.
            </p>

            <h3 className="text-xl font-semibold text-mate-yellow mb-3">Propiedad intelectual</h3>
            <p className="mb-4">
              Los contenidos relativos a marcas, dominios, logotipos, diseños, interfaces, código fuente, software,
              programas informáticos, funcionalidades, estructuras de navegación, elementos visuales u otros componentes
              susceptibles de protección por la legislación de propiedad intelectual o industrial accesibles a través de
              la App son propiedad exclusiva de YOUR MATES TECH, S.L. o se encuentran licenciados a su favor. Todos los
              derechos de uso, explotación, reproducción, distribución, transformación o comunicación pública quedan
              expresamente reservados.
            </p>
            <p className="mb-4">
              La autorización concedida al Usuario para acceder y utilizar la App y los servicios ofrecidos no implica,
              en ningún caso, transmisión de derechos de propiedad intelectual o industrial, salvo lo expresamente
              previsto en esta cláusula. El Usuario podrá utilizar el material exclusivamente en la forma autorizada por
              Mate y sujeta a estos Términos y Condiciones.
            </p>
            <p className="mb-4">
              La App otorga al Usuario una licencia limitada, no exclusiva, personal e intransferible, válida en todo el
              mundo y limitada en duración a la vigencia de su cuenta activa, para acceder y utilizar la App conforme a
              su finalidad y funciones. Cualquier uso fuera de dicho alcance requiere autorización previa y por escrito
              de Mate.
            </p>
            <p className="mb-2">El Usuario se compromete expresamente a no retirar, borrar, alterar ni manipular:</p>
            <ul className="list-disc list-inside mb-4 space-y-1">
              <li>
                Menciones legales, símbolos o signos distintivos incorporados por Mate (como ©, ®, ™, marcas de agua,
                huellas digitales u otros dispositivos de protección).
              </li>
              <li>
                Referencias a la titularidad de derechos incorporadas en contenidos digitales, documentos, materiales o
                funcionalidades.
              </li>
            </ul>
            <p className="mb-4">
              El Usuario no está autorizado a copiar, distribuir, comunicar públicamente, modificar, transformar,
              sublicenciar ni explotar comercialmente de ningún modo, total o parcialmente, los contenidos protegidos de
              la App, salvo autorización expresa y por escrito del titular de los derechos. Cualquier incumplimiento
              podrá conllevar la terminación inmediata de la cuenta, acciones legales y reclamación de daños y
              perjuicios.
            </p>
            <p>
              Mate se reserva expresamente todos los derechos de propiedad intelectual e industrial que le correspondan,
              así como el derecho a modificar o revocar, total o parcialmente, las licencias otorgadas en estos Términos
              y Condiciones.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-mate-yellow mb-4">
              FUNCIONALIDADES SOCIALES Y DINÁMICAS DE INTERACCIÓN
            </h2>

            <h3 className="text-xl font-semibold text-mate-yellow mb-3">Eventos generados por usuarios</h3>
            <p className="mb-4">
              Mate permite a los usuarios registrados crear y gestionar eventos sociales dentro de la App. Estos eventos
              pueden configurarse como públicos, accesibles previa solicitud o completamente privados. Los eventos
              públicos estarán disponibles para todos los usuarios y permitirán la inscripción libre; los eventos con
              solicitud requerirán aprobación del creador del evento (el «Anfitrión»). Los eventos privados no
              aparecerán en el feed general ni en búsquedas y solo podrán compartirse mediante enlaces directos.
            </p>
            <p className="mb-4">
              El Anfitrión será el único responsable de todos los aspectos del evento: nombre, descripción, imagen,
              fecha, hora, número máximo de asistentes, ubicación (opcional), método de acceso y, si lo desea, un coste
              asociado (que no será gestionado por Mate). En ciertos casos, el Anfitrión podrá activar la función de
              geovallado, que permite marcar a los usuarios como asistentes si autorizan el uso de su ubicación.
            </p>
            <p className="mb-4">
              La creación de eventos no implica intervención, respaldo ni verificación por parte de Mate. El Anfitrión
              es responsable del cumplimiento de la normativa vigente, de la veracidad de la información, de las
              interacciones con los participantes y del tratamiento de datos personales si se producen comunicaciones
              fuera de la App. Mate queda exenta de responsabilidad por incidencias, daños o conflictos surgidos en el
              contexto de eventos organizados por usuarios.
            </p>
            <p>
              Tras un evento, los participantes podrán valorar al Anfitrión y viceversa. Este sistema de valoraciones
              cruzadas fomenta el uso responsable de la App. Mate podrá restringir o suspender la capacidad de crear
              eventos a Anfitriones con valoraciones consistentemente negativas o que infrinjan estos Términos.
            </p>

            <h3 className="text-xl font-semibold text-mate-yellow mb-3 mt-6">Comunidades temáticas</h3>
            <p className="mb-4">
              Mate ofrece la posibilidad de unirse a comunidades organizadas por intereses (fútbol, motor, arte, música,
              etc.) y asociadas a localizaciones específicas. Estas comunidades fomentan la interacción entre usuarios
              con intereses comunes.
            </p>
            <p className="mb-4">
              Cada comunidad puede contar con moderadores o administradores que tendrán facultades para aceptar o
              rechazar miembros, gestionar contenidos, expulsar usuarios y fijar normas internas, siempre conforme a
              estos Términos y Condiciones.
            </p>
            <p className="mb-4">
              El contenido publicado en las comunidades es responsabilidad exclusiva de los usuarios que lo crean. Mate
              no responde por la veracidad, legalidad o idoneidad del contenido, ni por las acciones u omisiones de
              miembros o moderadores. La participación en comunidades implica la aceptación de las normas internas
              definidas para cada comunidad.
            </p>
            <p>
              Cualquier conducta ofensiva, abusiva, ilegal o contraria a estos Términos podrá ser reportada mediante las
              herramientas disponibles en la App. Mate se reserva el derecho de suspender, eliminar o modificar
              cualquier comunidad si detecta infracciones, conductas poco éticas o actividad ilícita, pudiendo
              intervenir de forma proactiva o reactiva según las circunstancias.
            </p>

            <h3 className="text-xl font-semibold text-mate-yellow mb-3 mt-6">Sistema de recompensas y gamificación</h3>
            <p className="mb-4">
              Para incentivar la participación activa, Mate ha incorporado un sistema de recompensas basado en puntos
              virtuales. Se pueden obtener puntos por acciones como invitar amigos, crear eventos, participar en
              comunidades u otras funciones habilitadas.
            </p>
            <p className="mb-4">
              Estos puntos no tienen valor monetario y no pueden canjearse por dinero ni utilizarse fuera del entorno de
              Mate. Su único propósito es habilitar ventajas dentro de la App, como activar Boosts o desbloquear
              insignias simbólicas que reflejen la actividad del usuario.
            </p>
            <p className="mb-4">
              Mate podrá modificar, sustituir o cancelar el sistema de puntos sin previo aviso. Cualquier cambio
              relevante será comunicado a través de la App. Las insignias obtenidas mediante este sistema tienen valor
              simbólico y no implican ventajas funcionales adicionales ni reconocimiento público oficial por parte de
              Mate.
            </p>

            <h3 className="text-xl font-semibold text-mate-yellow mb-3 mt-6">Mensajes internos promocionales</h3>
            <p className="mb-4">
              Mate puede enviar mensajes informativos o promocionales a través del sistema de mensajería interna de la
              App. Estos mensajes pueden contener novedades de producto, recordatorios, nuevas funciones, encuestas u
              otra información relevante para la experiencia del usuario.
            </p>
            <p className="mb-4">
              Estos mensajes se envían desde un perfil institucional que no representa a un usuario real y que no
              mantiene conversaciones personales. Al aceptar estos Términos, el Usuario consiente la recepción de dichos
              mensajes. No obstante, puede silenciarlos o bloquearlos desde la configuración de su cuenta.
            </p>
            <p>
              Este sistema de comunicación forma parte del funcionamiento normal de la App y está destinado a mantener
              informados a los usuarios sin constituir comunicaciones comerciales no solicitadas.
            </p>

            <h3 className="text-xl font-semibold text-mate-yellow mb-3 mt-6">Funciones avanzadas</h3>
            <p className="mb-4">
              La App ofrece determinadas funciones avanzadas diseñadas para mejorar la experiencia y la visibilidad del
              Usuario dentro de la plataforma. Estas funciones incluyen:
            </p>
            <p className="mb-4">
              <strong>Boost:</strong> La función Boost permite a los usuarios Premium aumentar la visibilidad de su
              perfil o de los eventos creados dentro de la App, logrando una posición destacada en los algoritmos de
              recomendación y en otros espacios visibles de la plataforma. Este impulso de visibilidad es temporal y
              está sujeto a las condiciones técnicas de funcionamiento de la App. No obstante, Mate no garantiza que la
              activación de Boost genere un número específico de visualizaciones, interacciones, contactos o asistencia
              a eventos. Boost no implica resultados garantizados, sino un incremento temporal de la exposición del
              contenido seleccionado.
            </p>
            <p>
              <strong>Modo Incógnito:</strong> El Modo Incógnito es una función disponible exclusivamente para usuarios
              con cuenta Premium. Al activarlo, el perfil del usuario dejará de ser visible para otros en el feed
              general, mapas, recomendaciones o cualquier otro espacio visible dentro de la App. Sin embargo, este modo
              no elimina ni oculta interacciones previas dentro de Mate, ni impide que el usuario siga recibiendo
              mensajes o solicitudes de quienes ya hayan mantenido conversaciones o conexiones anteriores. Su efecto se
              limita a la visibilidad futura mientras esté activado y no afecta a vínculos o contenidos ya generados.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-mate-yellow mb-4">
              NOTIFICACIONES Y FUNCIONES BASADAS EN LA UBICACIÓN
            </h2>
            <p className="mb-4">
              Al utilizar la App, el Usuario podrá recibir comunicaciones sobre su cuenta, funcionalidades de la
              plataforma y otros aspectos relevantes para su experiencia. Estas comunicaciones pueden consistir en
              correos electrónicos, mensajes de texto (SMS), notificaciones push, alertas internas u otros tipos de
              mensajes relacionados con el funcionamiento, mantenimiento, promociones o novedades de Mate. Al descargar
              la App, se solicitará al Usuario el consentimiento expreso para recibir notificaciones push. Si las
              acepta, dichas notificaciones se enviarán automáticamente a través del sistema operativo del dispositivo.
              El Usuario puede cambiar sus preferencias en cualquier momento desde los ajustes de su dispositivo o desde
              la sección «Notificaciones» dentro de la App.
            </p>
            <p className="mb-4">
              En cuanto a mensajes enviados por otros canales, como correos electrónicos o SMS, el Usuario podrá darse
              de baja o limitar su recepción siguiendo las instrucciones incluidas en cada mensaje, o escribiendo a la
              dirección de contacto facilitada por Mate: contact@mateapp.es. No obstante, algunas comunicaciones
              técnicas, de seguridad o administrativas relacionadas con el funcionamiento esencial del servicio pueden
              permanecer activas mientras la cuenta del Usuario esté activa, por ser esenciales para la correcta
              prestación del servicio.
            </p>
            <p className="mb-4">
              Asimismo, la App de Mate puede incluir funciones basadas en la ubicación, como recomendaciones
              geolocalizadas, eventos cercanos o verificación de asistencia mediante geovallado. Para disponer de estas
              funciones, el Usuario debe autorizar a la App a acceder a la información de ubicación de su dispositivo.
              Esta autorización puede configurarse en cualquier momento a través de los ajustes del sistema operativo
              del dispositivo. Si el Usuario no concede acceso a la ubicación, no podrá disfrutar de los servicios
              específicos que dependen de esta funcionalidad.
            </p>
            <p>
              El uso de estas herramientas de geolocalización está sujeto al consentimiento previo del Usuario, que
              puede revocarse en cualquier momento. Para más información sobre cómo tratamos y almacenamos los datos de
              ubicación, consulte nuestra Política de Privacidad.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-mate-yellow mb-4">PROTECCIÓN DE DATOS PERSONALES</h2>
            <p className="mb-4">
              <strong>Tratamiento de datos personales.</strong> Mate tratará los datos personales de los usuarios en
              pleno cumplimiento de la normativa aplicable en materia de protección de datos, incluido el Reglamento
              (UE) 2016/679 (Reglamento General de Protección de Datos, RGPD) y, cuando proceda, la Ley Orgánica 3/2018
              de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD), así como cualquier otra
              normativa obligatoria vigente.
            </p>
            <p className="mb-4">
              <strong>Responsable del tratamiento.</strong> El responsable del tratamiento de los datos personales
              recabados a través de la App es YOUR MATES TECH, S.L. Puede contactarnos en cualquier momento en
              contact@mateapp.es.
            </p>
            <p className="mb-2">
              <strong>Finalidades del tratamiento.</strong> Los datos personales facilitados por el usuario (nombre,
              correo, foto, ubicación, contenido generado, etc.) se tratarán para:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-1">
              <li>Gestionar su registro y acceso a la App.</li>
              <li>Permitir el uso de funcionalidades sociales, eventos y comunidades.</li>
              <li>
                Mejorar la experiencia mediante recomendaciones, sistemas de recompensas y personalización de
                contenidos.
              </li>
              <li>Enviar notificaciones internas y comunicaciones relevantes para el funcionamiento de la App.</li>
              <li>Atender solicitudes de soporte o el ejercicio de derechos.</li>
              <li>Cumplir obligaciones legales o contractuales.</li>
            </ul>
            <p className="mb-4">
              <strong>Base jurídica.</strong> El tratamiento se basa en la ejecución del contrato de uso de la App, en
              el consentimiento del usuario (cuando sea necesario, como en geolocalización o notificaciones push), en el
              cumplimiento de obligaciones legales y en el interés legítimo de Mate de garantizar el correcto
              funcionamiento de la plataforma.
            </p>
            <p className="mb-4">
              <strong>Destinatarios y transferencias.</strong> Los datos podrán ser tratados por proveedores
              tecnológicos que prestan servicios a Mate (por ejemplo, alojamiento, analítica, soporte técnico), con los
              que se han suscrito contratos conforme al artículo 28 del RGPD. No se realizarán transferencias
              internacionales sin garantías adecuadas.
            </p>
            <p className="mb-4">
              <strong>Plazo de conservación.</strong> Los datos se conservarán mientras el usuario mantenga su cuenta
              activa o hasta que solicite su supresión. Posteriormente, los datos personales permanecerán con acceso
              restringido durante los plazos legalmente exigidos, únicamente a efectos probatorios, de rendición de
              cuentas y de limitación de acciones, y no se utilizarán para otros fines.
            </p>
            <p className="mb-4">
              <strong>Ejercicio de derechos.</strong> El usuario puede ejercer sus derechos de acceso, rectificación,
              supresión, oposición, limitación del tratamiento y portabilidad, así como revocar su consentimiento en
              cualquier momento, escribiendo a contact@mateapp.es. Si considera que sus derechos no han sido debidamente
              atendidos, puede presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es).
            </p>
            <p>
              <strong>Más información.</strong> Para información detallada sobre cómo tratamos los datos, los usuarios
              pueden consultar la Política de Privacidad completa disponible en el sitio web.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-mate-yellow mb-4">
              CANCELACIÓN DE CUENTA Y SUSPENSIÓN DEL SERVICIO
            </h2>
            <p className="mb-4">
              El Usuario puede cancelar su cuenta en cualquier momento accediendo a las opciones de configuración de la
              App o enviando una solicitud por correo a contact@mateapp.es. La cancelación conlleva la eliminación del
              perfil visible y del acceso a las funcionalidades de la App, sin perjuicio de la conservación de ciertos
              datos durante el tiempo legalmente exigido conforme a la Política de Privacidad.
            </p>
            <p className="mb-4">
              Por su parte, Mate se reserva el derecho de suspender o cancelar cualquier cuenta de usuario, temporal o
              definitivamente, si detecta comportamientos que vulneren estos Términos y Condiciones, incumplan la
              legislación vigente o afecten negativamente a la comunidad o al correcto funcionamiento de la App.
            </p>
            <p>
              La suspensión o cancelación no dará derecho al Usuario al reembolso de importes abonados por servicios
              Premium ni a compensación alguna. En los casos más graves, Mate podrá limitar el acceso futuro del Usuario
              a la plataforma.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-mate-yellow mb-4">EXCLUSIÓN DE GARANTÍAS Y RESPONSABILIDAD</h2>
            <p className="mb-4">
              El uso de Mate se realiza bajo la exclusiva responsabilidad del Usuario. La App y todos los servicios,
              contenidos y funcionalidades que ofrece se proporcionan «tal cual», sin garantías de ningún tipo, expresas
              o implícitas, incluidas, entre otras, garantías de disponibilidad, idoneidad para un propósito particular,
              fiabilidad, exactitud o ausencia de errores.
            </p>
            <p className="mb-4">
              Mate no garantiza que la App funcione sin interrupciones, de forma segura o libre de errores, ni que los
              defectos sean corregidos. Aunque existen medidas técnicas y organizativas para mantener la seguridad de
              los sistemas, no se garantiza que la App esté libre de virus, software malicioso o vulnerabilidades
              técnicas.
            </p>
            <p className="mb-4">
              Nada de lo contenido en estos Términos excluirá o limitará la responsabilidad por fraude, muerte o
              lesiones personales causadas por negligencia, negligencia grave, dolo o cualquier responsabilidad que no
              pueda excluirse o limitarse conforme a la ley aplicable.
            </p>
            <p className="mb-2">Asimismo, Mate no asume responsabilidad por:</p>
            <ul className="list-disc list-inside mb-4 space-y-1">
              <li>La veracidad, legalidad, adecuación o actualización del contenido generado por los usuarios.</li>
              <li>
                La celebración, calidad, seguridad o resultados de los eventos, planes o encuentros organizados por
                usuarios.
              </li>
              <li>
                Las interacciones entre usuarios dentro o fuera de la App, ni por el comportamiento de los miembros.
              </li>
              <li>
                Interrupciones del servicio por mantenimiento, incidencias técnicas, fuerza mayor o actuaciones de
                terceros.
              </li>
              <li>
                Daños directos o indirectos derivados del uso de la App, incluso si se advirtió de la posibilidad de
                tales daños.
              </li>
            </ul>
            <p>
              El Usuario reconoce que Mate no es responsable de supervisar en todo momento la actividad o el contenido
              de los usuarios. No obstante, si detecta un uso indebido de la App o una vulneración de estos Términos y
              Condiciones, podrá adoptar las medidas que considere necesarias, incluida la suspensión o cancelación del
              perfil correspondiente.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-mate-yellow mb-4">
              ELIMINACIÓN, SUSPENSIÓN Y MEDIDAS DISCIPLINARIAS
            </h2>
            <p className="mb-4">
              <strong>Eliminación voluntaria de la cuenta.</strong> El Usuario puede eliminar su cuenta en cualquier
              momento mediante: (a) notificación por escrito a Mate al correo contact@mateapp.es, y/o (b) uso de la
              función «Eliminar tu cuenta» disponible en la App, dentro de la sección de configuración de la cuenta.
            </p>
            <p className="mb-4">
              Una vez eliminada la cuenta, los datos personales del Usuario se suprimirán conforme a la cláusula de
              Protección de Datos y a la Política de Privacidad, sin perjuicio de las obligaciones legales de
              conservación aplicables.
            </p>
            <p className="mb-2">
              <strong>Medidas posibles.</strong> En función de la gravedad de la infracción, Mate podrá adoptar diversas
              medidas, entre ellas:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-1">
              <li>Avisos formales.</li>
              <li>Limitación de funcionalidades (por ejemplo, creación de eventos o acceso a comunidades).</li>
              <li>Suspensión temporal del perfil.</li>
              <li>Cancelación permanente de la cuenta.</li>
              <li>Retirada o eliminación de contenido publicado.</li>
            </ul>
            <p className="mb-4">
              Mate utiliza moderación basada en IA para detectar infracciones. Según la gravedad, la IA puede bloquear o
              eliminar contenido, o suspender temporalmente una cuenta. Cuando resulte estrictamente necesaria una
              acción inmediata para proteger a los Usuarios, la integridad de la plataforma o cumplir la ley, Mate podrá
              imponer una suspensión permanente sin intervención humana previa. En todos los casos, Mate realizará
              esfuerzos razonables para notificar al Usuario y ofrecer un derecho de apelación según se indica en la
              sección de Moderación anterior. El resultado de la revisión será definitivo, sin perjuicio de los derechos
              imperativos aplicables.
            </p>
            <p className="mb-4">
              <strong>Notificación y procedimiento.</strong> Siempre que sea posible, se informará al usuario por correo
              electrónico o notificación interna de la medida adoptada y sus motivos. En casos de especial gravedad o
              urgencia, Mate podrá proceder a la suspensión o eliminación inmediata sin previo aviso, especialmente
              cuando esté en riesgo la seguridad o integridad de otros usuarios o de la propia plataforma.
            </p>
            <p>
              <strong>Revisión de decisiones.</strong> El usuario afectado podrá solicitar la revisión de una decisión
              enviando un correo a contact@mateapp.es, explicando los motivos por los que considera injustificada la
              medida. Mate valorará cada caso individualmente y podrá, en su caso, restituir la cuenta o levantar la
              restricción impuesta, sin derecho a compensación.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-mate-yellow mb-4">DISPOSICIONES VARIAS</h2>

            <h3 className="text-xl font-semibold text-mate-yellow mb-3">13.1 Reclamaciones</h3>
            <p className="mb-4">
              En caso de que el Usuario desee presentar una reclamación, incidencia o queja relacionada con el uso de la
              App o los servicios prestados por Mate, podrá iniciar el procedimiento correspondiente contactando con
              Atención al Cliente a través del correo contact@mateapp.es.
            </p>
            <p className="mb-4">
              Una vez recibida la comunicación, el equipo de Mate trabajará con el Usuario para recabar la información
              necesaria y responder a la reclamación en un plazo razonable, adoptando las medidas oportunas para
              resolverla.
            </p>

            <h3 className="text-xl font-semibold text-mate-yellow mb-3">13.2 Independencia de las cláusulas</h3>
            <p className="mb-4">
              Si alguna disposición de estos Términos y Condiciones fuera declarada, total o parcialmente, nula,
              inválida o inaplicable por un tribunal u órgano competente, dicha disposición se tendrá por no puesta, sin
              que ello afecte a la validez del resto del documento, que permanecerá en pleno vigor y efecto.
            </p>

            <h3 className="text-xl font-semibold text-mate-yellow mb-3">
              13.3 Actualización y modificación de la App y de los Términos
            </h3>
            <p className="mb-4">
              Mate se reserva el derecho a modificar, actualizar o suprimir la estructura, el diseño, la funcionalidad o
              el contenido de la App, así como estos Términos y Condiciones y la Política de Privacidad, en cualquier
              momento y sin previo aviso.
            </p>
            <p className="mb-4">
              Cualquier modificación se publicará en la App, indicando expresamente su fecha de entrada en vigor. Los
              Usuarios también recibirán una notificación electrónica informándoles de dichos cambios antes de su
              implementación, para que puedan revisar los nuevos términos y condiciones antes de continuar utilizando
              los servicios.
            </p>
            <p className="mb-4">
              El acceso o uso continuado de la App tras la publicación de las modificaciones implicará la aceptación de
              los Términos y Condiciones actualizados.
            </p>
            <p>
              Mate no garantiza la ausencia de interrupciones, errores o falta de actualización en los contenidos
              accesibles desde la App, si bien se compromete, siempre que no existan causas que lo imposibiliten o
              dificulten razonablemente, a corregir cualquier incidencia técnica y a actualizar los contenidos tan
              pronto tenga conocimiento de ello.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-mate-yellow mb-4">IDIOMA</h2>
            <p>
              MATE puede traducir estos Términos y Condiciones o cualquier otra política publicada en la Plataforma. En
              caso de conflicto con otras traducciones, prevalecerá la versión en español.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-mate-yellow mb-4">RESOLUCIÓN EXTRAJUDICIAL DE CONFLICTOS</h2>
            <p className="mb-4">
              Salvo cuando la legislación de protección de consumidores exija lo contrario, cualquier disputa,
              controversia o reclamación derivada de o relacionada con estos Términos, su interpretación, validez,
              ejecución o terminación se regirá por la ley española y se someterá a los Juzgados y Tribunales de
              Barcelona, España. Las partes renuncian expresamente a cualquier otro fuero que pudiera corresponderles,
              sin perjuicio de los derechos que puedan asistir a los consumidores en virtud de la normativa imperativa
              aplicable.
            </p>
            <p className="mb-4">
              De conformidad con el Reglamento (UE) n.º 524/2013 del Parlamento Europeo y del Consejo, de 21 de mayo de
              2013, relativo a la resolución de litigios en línea en materia de consumo, MATE informa de que, en caso de
              litigio, los Usuarios residentes en la Unión Europea pueden utilizar la «Plataforma de Resolución de
              Litigios en Línea» desarrollada por la Comisión Europea para intentar resolver extrajudicialmente
              cualquier controversia derivada de la prestación de servicios por parte de MATE.
            </p>
            <p>
              El Usuario puede acceder a la «Plataforma de Resolución de Litigios en Línea» a través del siguiente
              enlace:{" "}
              <a
                href="http://ec.europa.eu/consumers/odr/"
                className="text-mate-yellow hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                http://ec.europa.eu/consumers/odr/
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-mate-yellow mb-4">ACEPTACIÓN DE LOS TÉRMINOS Y CONDICIONES</h2>
            <p className="mb-4">
              Estos Términos constituyen un acuerdo legalmente vinculante entre usted, como usuario, y YOUR MATES TECH
              S.L.
            </p>
            <p>Los Términos fueron actualizados el 01/10/2025.</p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsAndConditionsES;
