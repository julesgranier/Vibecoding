import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';
import MateLogo from '@/components/MateLogo';

const AvisoLegal: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Logo Mate en haut à gauche */}
      <div className="px-6 pt-6 flex items-center justify-between">
        <Link to="/">
          <MateLogo />
        </Link>
        <Link 
          to="/legal-notice" 
          className="text-2xl hover:scale-110 transition-transform"
          title="English"
        >
          🇬🇧
        </Link>
      </div>
      
      <main className="container mx-auto px-6 py-8 max-w-4xl">
        <h1 className="text-4xl font-bold text-mate-yellow mb-8 text-center">
          Aviso Legal
        </h1>
        
        <div className="space-y-8 text-gray-300 leading-relaxed">
          <p>
            La presente información, normas y condiciones (conjunto denominado como Aviso Legal) tienen por objeto regular, en lo que sea aplicable, el uso del/de los sitio/s web que Your Mates Tech, S.L., pone a disposición del público para así cumplir con las obligaciones legales al respecto.
          </p>
          
          <p>
            El presente Aviso Legal fue modificado el 22/10/2024.
          </p>

          <section>
            <h2 className="text-2xl font-bold text-mate-yellow mb-4">ACERCA DE Your Mates Tech, S.L.</h2>
            <h3 className="text-xl font-semibold text-mate-yellow mb-3">SITIOS WEB Y DOMINIOS</h3>
            <p className="mb-4">
              Your Mates Tech, S.L. opera en la red, para ofrecer sus servicios, con los siguientes dominios.
            </p>
            <p className="mb-4">
              <strong>mateapp.es</strong>
            </p>
            <p className="mb-4">
              considerando mateapp.es como dominio principal.
            </p>
            <p className="mb-4">
              <strong>MUY IMPORTANTE:</strong> Algunos servicios ofrecidos en el/los sitio/s de Your Mates Tech, S.L., accesibles para los usuarios de Internet, pueden estar sometidos a condiciones particulares e instrucciones que, en su caso, sustituyen, completan y/ó modifican el presente Aviso Legal y que deberán ser aceptadas por el Usuario antes de iniciarse la prestación del servicio correspondiente. Esto es de aplicación, particularmente, en los casos en que se efectúen reservas o contraten servicios o productos, en cuyo caso deberá aplicarse el contenido de las condiciones generales de contratación (identificadas como TÉRMINOS Y CONDICIONES en las páginas correspondientes).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-mate-yellow mb-4">OBJETO Y FUNCIONALIDAD DE LOS SITIOS DE Your Mates Tech, S.L.</h2>
            <p className="mb-4">
              Your Mates Tech, S.L. gestiona una red social que permite a sus usuarios contactar entre ellos.
            </p>
            <p className="mb-4">
              Your Mates Tech, S.L. se reserva el derecho de modificar en cualquier momento las presentes condiciones de uso, así como cualesquiera otras condiciones particulares.
            </p>
            <p className="mb-4">
              Your Mates Tech, S.L. hace todos los esfuerzos necesarios dentro de sus medios para ofrecer la información contenida en sus sitios web de forma veraz y sin errores tipográficos. En el caso que en algún momento se produjera algún error de este tipo, ajeno en todo momento a la voluntad de Your Mates Tech, S.L., se procedería a su corrección inmediatamente después de su conocimiento, no pudiendo aceptar ningún tipo de responsabilidad derivada de los perjuicios que pudieran derivarse de los errores u omisiones de la información contenida en los sitios.
            </p>
            <p className="mb-4">
              Si cualquier cláusula incluida en estas condiciones generales fuese declarada, total o parcialmente, nula o ineficaz, tal nulidad o ineficacia afectará tan sólo a dicha disposición o a la parte de la misma que resulte nula o ineficaz, subsistiendo las condiciones generales en todo lo demás, teniéndose tal disposición, o la parte de la misma que resultase afectada, por no puesta.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-mate-yellow mb-4">INFORMACIÓN GENERAL (DATOS IDENTIFICATIVOS Y DE CONTACTO)</h2>
            <p className="mb-4">
              En cumplimiento con el art. 10 de la Ley 34/2002, de 11 de julio, de servicios de la sociedad de la información y del comercio electrónico, le informamos que Your Mates Tech, S.L., Aribau 254, pral. 1ª, 08006, Barcelona, España con NIF B56745144, está inscrita en el Registro Mercantil de Barcelona, en el tomo 49066, folio 59, hoja B-606374, inscripción 29/11/2023.
            </p>
            <p className="mb-2">Pueden contactar con nosotros, además de estar a su disposición en nuestras oficinas, usando los siguientes medios:</p>
            <ul className="list-disc list-inside mb-4 space-y-1">
              <li>Por correo electrónico a través de la dirección rgpd@mateapp.es</li>
              <li>Por teléfono al número de atención al cliente +34 608 092 696.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-mate-yellow mb-4">SOBRE LOS USUARIOS</h2>
            <p className="mb-4">
              El acceso y/o uso del/de los sitio/s de Your Mates Tech, S.L. por parte de una persona atribuye la condición de USUARIO a esa persona. El USUARIO acepta, para el uso y acceso del/de los distintos sitios/s de Your Mates Tech, S.L., las Condiciones Generales de Uso del/de los sitio/s Your Mates Tech, S.L. presentadas a continuación.
            </p>
            <p className="mb-4">
              El Usuario del/de los sitio/s Your Mates Tech, S.L. debe leer atentamente el presente Aviso Legal en cada una de las ocasiones en que se proponga usarlos, ya que éstos y las condiciones de uso recogidas en el presente Aviso Legal pueden haber sufrido modificaciones.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-mate-yellow mb-4">CONDICIONES DE USO DEL/DE LOS SITIO/S DE Your Mates Tech, S.L.</h2>
            <p className="mb-4">
              El/Los sitio/s de Your Mates Tech, S.L. ofrecen acceso a diversos contenidos (servicios, informaciones, datos, etc.). El USUARIO asume la responsabilidad del uso por su parte del/de los sitio/s Your Mates Tech, S.L. Por ello es responsabilidad, compromiso y obligación del usuario hacer un uso adecuado de los contenidos y servicios que Your Mates Tech, S.L. ofrece a través del/de los sitio/s de Your Mates Tech, S.L. Especialmente el USUARIO se compromete a no emplearlos en acciones que puedan:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-1">
              <li>Incurrir en actividades ilícitas o ilegales según el ordenamiento jurídico europeo y español.</li>
              <li>Vulnerar la legislación española e internacional en materia de propiedad intelectual e industrial.</li>
              <li>Difundir contenidos o propaganda de carácter racista, xenófobo, pornográfico-ilegal, de apología del terrorismo o atentatorio contra los derechos humanos.</li>
              <li>Provocar daños en los sistemas informáticos de Your Mates Tech, S.L. de sus proveedores o de terceras personas.</li>
              <li>Introducir o difundir en la red software malicioso, virus informáticos o cualesquiera otros sistemas físicos o lógicos que sean susceptibles de provocar los daños mencionados en el punto anterior.</li>
              <li>Intentar acceder o, en su caso, utilizar las cuentas de otros usuarios y modificar o manipular sus datos.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-mate-yellow mb-4">EDAD DE LOS USUARIOS</h2>
            <p className="mb-4">
              Nuestros servicios están dirigidos exclusivamente a personas mayores de 18 años. Si sospecha que un usuario es menor de esta edad, le rogamos que lo comunique a través de nuestro sistema de contacto. Nos tomamos muy en serio esta restricción y hemos implementado medidas para garantizar su cumplimiento. En caso de detectar que un miembro es menor de 18 años, procederemos a eliminar su cuenta y todos los datos asociados de forma inmediata. Si tiene alguna sospecha sobre la edad de un usuario, no dude en informarnos para que podamos tomar las acciones pertinentes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-mate-yellow mb-4">REPORTES Y BLOQUEOS</h2>
            <p className="mb-4">
              Dentro de la APP Mate que ofrece Your Mates Tech, S.L., los usuarios cuentan con la opción de reportar y bloquear a otros usuarios en caso de que consideren que han infringido las normas de convivencia o comportamiento. Cuando un usuario reporta a otro, podrá añadir una descripción del motivo del reporte en un campo habilitado para ello.
            </p>
            <p className="mb-4">
              Desde Your Mates Tech, S.L. nos comprometemos a revisar dichos reportes de forma interna y tomar las medidas que considere oportunas en el menor plazo de tiempo posible. Las decisiones derivadas de esta revisión pueden incluir advertencias, suspensiones temporales o la eliminación definitiva del perfil infractor, garantizando así un entorno de uso seguro y respetuoso para todos los usuarios.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-mate-yellow mb-4">RESPONSABILIDADES</h2>
            
            <h3 className="text-xl font-semibold text-mate-yellow mb-3">RESPONSABILIDADES DEL USUARIO Y DE Your Mates Tech, S.L.</h3>
            <p className="mb-4">
              El USUARIO es el único responsable de las infracciones en las que pueda incurrir o de los perjuicios que pueda causar por la utilización inadecuada del/de los sitio/s Your Mates Tech, S.L., quedando Your Mates Tech, S.L. exonerada de cualquier clase de responsabilidad que se pudiera derivar por las acciones del USUARIO.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-mate-yellow mb-4">REGISTRO DE USUARIOS</h2>
            <p className="mb-4">
              Para acceder a determinados servicios se precisa la condición de USUARIO REGISTRADO. Es responsabilidad del USUARIO la custodia de la contraseña usada para evitar la usurpación de su identidad en los sitios Your Mates Tech, S.L. a los que tuviera acceso por su condición de usuario registrado.
            </p>
            <p className="mb-4">
              Así mismo el usuario declara que toda la información de carácter personal suministrada por él para el acceso al/los sitio/s de Your Mates Tech, S.L. y durante de la utilización del mismo, es verdadera, completa y precisa y se compromete a mantenerla actualizada en los sucesivos usos que pueda hacer de los servicios ofrecidos.
            </p>
            <p className="mb-4">
              El envío y la remisión de datos que se realice por el usuario a través del sitio web de Your Mates Tech, S.L. o la información que ésta remita, se encuentra protegida por las más modernas técnicas de seguridad electrónica en la red. Asimismo, los datos suministrados y almacenados en nuestras bases de datos se encuentran igualmente protegidos por sistemas de seguridad que impiden el acceso de terceros no autorizados a los mismos. Your Mates Tech, S.L. realiza sus mejores esfuerzos para disponer de los sistemas más actualizados para la eficacia de estos sistemas de seguridad.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-mate-yellow mb-4">PROPIEDAD INTELECTUAL SOBRE LOS CONTENIDOS DEL SITIO WEB</h2>
            <p className="mb-4">
              Todos los elementos que forman el sitio Web, así como su estructura, diseño y código fuente de la misma, son titularidad de Your Mates Tech, S.L. y están protegidos por la normativa de propiedad intelectual e industrial.
            </p>
            <p className="mb-4">
              Se prohíbe la reproducción total o parcial de los contenidos de este sitio Web, así como su modificación y/o distribución sin citar su origen o solicitar previamente autorización.
            </p>
            <p className="mb-4">
              Your Mates Tech, S.L. no asumirá ninguna responsabilidad derivada del uso por terceros del contenido del sitio Web y podrá ejercitar todas las acciones civiles o penales que le correspondan en caso de infracción de estos derechos por parte del usuario.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-mate-yellow mb-4">ENLACES (LINKS)</h2>
            <p className="mb-4">
              Esta Web incluye enlaces que permiten al Usuario acceder a otras páginas de Internet externas al/los sitio/s de Your Mates Tech, S.L. En caso de que el USUARIO use estos enlaces, Your Mates Tech, S.L. le informa que no ejerce ningún tipo de control sobre dichos sitios, sus contenidos y la posibilidad de que recopilen información de sus actividades en Internet, incluidas las realizadas en nuestro propio sitio.
            </p>
            <p className="mb-4">
              En ningún caso Your Mates Tech, S.L. asumirá responsabilidad alguna por los contenidos de algún enlace perteneciente a un sitio web ajeno, ni garantizará la disponibilidad técnica, calidad, fiabilidad, exactitud, amplitud, veracidad, validez y legalidad de cualquier material o información contenida en ninguno de dichos hipervínculos u otros sitios de Internet.
            </p>
            <p className="mb-4">
              Si cualquier usuario tiene conocimiento de que los enlaces remiten a páginas cuyos contenidos o servicios son ilícitos, nocivos, denigrantes, violentos o inmorales le agradeceremos que contacte con Your Mates Tech, S.L. indicándolo para, así, proceder a eliminar dicho enlace.
            </p>
            <p className="mb-4">
              Toda actividad efectuada en los sitios que no son titularidad de Your Mates Tech, S.L. está regulada por sus propias normas y condiciones, por lo que recomendamos que, antes de su uso, los usuarios se informen sobre ello en los apartados de aviso legal, o similares, en los sitios fuera del control directo de Your Mates Tech, S.L.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-mate-yellow mb-4">NORMATIVA Y RESOLUCIÓN DE CONFLICTOS</h2>
            <p className="mb-4">
              En todos los aspectos, las reglas de uso de Your Mates Tech, S.L. se rigen por la legislación española. El idioma utilizado para redactar y comprender este aviso legal es el español. No se guarda una copia individual de este aviso legal para cada usuario, pero estará siempre disponible en línea en Your Mates Tech, S.L.
            </p>
            <p className="mb-4">
              En caso de que surja alguna controversia o reclamación relacionada con este texto o cualquier actividad de Your Mates Tech, S.L., los usuarios tienen la opción de someterse al Sistema Arbitral de Consumo, en el cual Your Mates Tech, S.L. participa. Sin embargo, para resolver disputas relacionadas con actividades que requieran una colegiación, los usuarios deben dirigirse al órgano apropiado del colegio de abogados correspondiente.
            </p>
            <p className="mb-4">
              Si los usuarios cumplen con la definición de consumidores o usuarios según la legislación española y residen en la Unión Europea, y experimentan problemas con una compra en línea realizada en Your Mates Tech, S.L., pueden buscar una solución extrajudicial a través de la Plataforma de Resolución de Litigios en Línea, establecida por la Unión Europea y desarrollada por la Comisión Europea conforme al Reglamento (UE) 524/2013.
            </p>
            <p>
              Puede visitar el siguiente enlace: <a href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=ES" target="_blank" rel="noopener noreferrer" className="text-mate-yellow hover:underline">https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=ES</a>
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AvisoLegal;
