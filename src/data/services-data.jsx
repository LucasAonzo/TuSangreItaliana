import React from "react"
import {
  Briefcase,
  Plane,
  FileText,
  Calendar,
  Phone,
  ClipboardCheck,
  MessageCircle,
  Home,
  FileCheck,
} from "lucide-react"

// Datos de servicios exportados para su reutilización en la aplicación
export const services = [
  {
    id: "armado-carpeta",
    title: "Armado de Carpeta",
    icon: <Briefcase className="h-5 w-5" aria-hidden="true" />,
    description: "Preparación completa de la documentación necesaria para tu solicitud de ciudadanía italiana.",
    fullDescription:
      "El servicio de Armado de Carpeta es fundamental para asegurar que tu solicitud de ciudadanía italiana sea procesada correctamente. Nuestro equipo de expertos se encarga de organizar meticulosamente toda la documentación requerida, siguiendo los estrictos criterios de las autoridades italianas.",
    features: [
      {
        title: "Organización Cronológica",
        description:
          "Ordenamos todos tus documentos en secuencia cronológica, creando una línea de tiempo clara que facilita la revisión por parte de las autoridades consulares.",
      },
      {
        title: "Verificación de Integridad",
        description:
          "Analizamos minuciosamente cada documento para asegurar que la línea de descendencia esté completa y sin interrupciones, identificando posibles problemas antes de la presentación.",
      },
      {
        title: "Preparación de Formularios",
        description:
          "Completamos todos los formularios oficiales requeridos por el consulado o comune italiano, asegurando que toda la información sea precisa y consistente.",
      },
      {
        title: "Asesoramiento Documental",
        description:
          "Identificamos documentos faltantes o con errores y te asesoramos sobre cómo obtenerlos o corregirlos para completar tu expediente.",
      },
      {
        title: "Estructura Consular",
        description:
          "Organizamos tu carpeta según los requisitos específicos del consulado o comune donde realizarás el trámite, maximizando las probabilidades de aprobación.",
      },
    ],
  },
  {
    id: "acompanamiento-italia",
    title: "Acompañamiento en Italia",
    icon: <Plane className="h-5 w-5" aria-hidden="true" />,
    description: "Asistencia personalizada durante tu estadía en Italia para el proceso de ciudadanía.",
    fullDescription:
      "Nuestro servicio de Acompañamiento en Italia está diseñado para brindarte apoyo integral durante tu estancia en territorio italiano. Entendemos que navegar por la burocracia italiana puede ser desafiante, especialmente con las barreras del idioma y las diferencias culturales.",
    features: [
      {
        title: "Asistencia en Municipios",
        description:
          "Te acompañamos a todas las citas en los comuni italianos, facilitando la comunicación con los funcionarios y asegurando que todos los procedimientos se realicen correctamente.",
      },
      {
        title: "Acompañamiento a Citas",
        description:
          "Estamos presentes en todas tus citas oficiales, desde la presentación inicial hasta la jura final, brindándote tranquilidad y apoyo durante todo el proceso.",
      },
      {
        title: "Traducción Simultánea",
        description:
          "Ofrecemos servicios de traducción en tiempo real durante todas tus gestiones, eliminando las barreras del idioma y asegurando una comunicación efectiva.",
      },
      {
        title: "Orientación Local",
        description:
          "Te proporcionamos información práctica sobre la vida en Italia, desde el transporte público hasta recomendaciones de alojamiento y servicios locales.",
      },
      {
        title: "Apoyo Logístico",
        description:
          "Coordinamos todos los aspectos logísticos de tu estadía, incluyendo traslados, citas y cualquier gestión adicional que pueda surgir durante el proceso.",
      },
    ],
  },
  {
    id: "actas-partidas",
    title: "Actas y Partidas",
    icon: <FileText className="h-5 w-5" aria-hidden="true" />,
    description: "Búsqueda y obtención de actas de nacimiento, matrimonio y defunción en Italia y Latinoamérica.",
    fullDescription:
      "El servicio de Actas y Partidas se especializa en la búsqueda, localización y obtención de documentos vitales esenciales para tu proceso de ciudadanía italiana. Nuestro equipo cuenta con amplia experiencia en la investigación en archivos históricos tanto en Italia como en Latinoamérica.",
    features: [
      {
        title: "Búsqueda en Archivos Históricos",
        description:
          "Investigamos en archivos comunales, parroquiales y estatales en Italia para localizar documentos de tus antepasados, incluso con información limitada.",
      },
      {
        title: "Obtención de Certificados",
        description:
          "Gestionamos la emisión de partidas de nacimiento, matrimonio y defunción tanto en Italia como en países latinoamericanos, cumpliendo con todos los requisitos legales.",
      },
      {
        title: "Rectificación de Errores",
        description:
          "Identificamos discrepancias en nombres, fechas u otros datos en los documentos y gestionamos las correcciones necesarias para mantener la consistencia en tu línea de descendencia.",
      },
      {
        title: "Certificados de No Naturalización",
        description:
          "Obtenemos documentos oficiales que confirman que tu ancestro italiano no renunció a su ciudadanía, un elemento crucial para establecer tu derecho a la ciudadanía.",
      },
      {
        title: "Investigación Genealógica",
        description:
          "Realizamos investigaciones genealógicas detalladas para establecer conexiones familiares cuando la información disponible es escasa o incompleta.",
      },
    ],
  },
  {
    id: "falta-turno",
    title: "Falta de Turno",
    icon: <Calendar className="h-5 w-5" aria-hidden="true" />,
    description: "Soluciones alternativas cuando no hay turnos disponibles en el consulado italiano.",
    fullDescription:
      "El servicio de Falta de Turno está diseñado para ayudarte a superar uno de los mayores obstáculos en el proceso de ciudadanía italiana: la escasez de citas consulares. Ante la creciente demanda y los limitados recursos consulares, ofrecemos estrategias alternativas para avanzar con tu proceso sin depender exclusivamente de la disponibilidad de turnos.",
    features: [
      {
        title: "Asesoramiento sobre Vías Alternativas",
        description:
          "Evaluamos tu caso particular y te presentamos todas las opciones disponibles cuando no hay turnos consulares, incluyendo la vía administrativa en Italia o la vía judicial.",
      },
      {
        title: "Preparación para Proceso en Italia",
        description:
          "Te orientamos sobre cómo prepararte para realizar el trámite directamente en Italia, incluyendo requisitos de residencia, documentación necesaria y procedimientos locales.",
      },
      {
        title: "Información sobre Vía Judicial",
        description:
          "Explicamos detalladamente el proceso judicial como alternativa a la falta de turnos, sus ventajas, requisitos y plazos estimados para obtener la ciudadanía por esta vía.",
      },
      {
        title: "Estrategias para Obtener Turnos",
        description:
          "Compartimos técnicas efectivas para maximizar tus posibilidades de obtener un turno consular, incluyendo horarios óptimos y sistemas de monitoreo.",
      },
      {
        title: "Monitoreo de Disponibilidad",
        description:
          "Ofrecemos servicios de monitoreo constante de la disponibilidad de turnos en el consulado correspondiente, alertándote inmediatamente cuando surjan oportunidades.",
      },
    ],
  },
  {
    id: "entrevista-personalizada",
    title: "Entrevista Personalizada",
    icon: <Phone className="h-5 w-5" aria-hidden="true" />,
    description: "Evaluación detallada de tu caso particular para determinar la mejor estrategia.",
    fullDescription:
      "La Entrevista Personalizada es el punto de partida ideal para tu proceso de ciudadanía italiana. Durante esta sesión exhaustiva, analizamos en profundidad tu situación específica, historia familiar y documentación disponible para diseñar una estrategia completamente adaptada a tus circunstancias particulares.",
    features: [
      {
        title: "Análisis de Línea de Descendencia",
        description:
          "Examinamos detalladamente tu árbol genealógico para identificar la conexión más directa y viable con tu ancestro italiano, estableciendo la base de tu derecho a la ciudadanía.",
      },
      {
        title: "Identificación de Obstáculos",
        description:
          "Anticipamos posibles complicaciones en tu proceso, como discrepancias en nombres, documentos faltantes o situaciones legales complejas, para abordarlas proactivamente.",
      },
      {
        title: "Recomendación de Vías",
        description:
          "Basándonos en tu situación específica, te aconsejamos sobre la vía más adecuada para tu caso: consular, administrativa en Italia o judicial, considerando factores como tiempo, costos y probabilidad de éxito.",
      },
      {
        title: "Plan de Acción Personalizado",
        description:
          "Desarrollamos un plan detallado y cronológico con todos los pasos necesarios para obtener tu ciudadanía, adaptado a tus circunstancias particulares y objetivos personales.",
      },
      {
        title: "Estimación Realista",
        description:
          "Te proporcionamos una evaluación honesta de los tiempos y recursos necesarios para completar tu proceso, basada en nuestra experiencia con casos similares y la situación actual.",
      },
    ],
  },
  {
    id: "control-carpeta",
    title: "Control de Carpeta",
    icon: <ClipboardCheck className="h-5 w-5" aria-hidden="true" />,
    description: "Revisión exhaustiva de tu documentación para asegurar que cumple con todos los requisitos.",
    fullDescription:
      "El servicio de Control de Carpeta ofrece una revisión minuciosa y profesional de toda tu documentación antes de presentarla a las autoridades italianas. Este servicio es ideal tanto para quienes han recopilado sus documentos de forma independiente como para quienes desean una segunda opinión experta antes de iniciar formalmente el proceso.",
    features: [
      {
        title: "Revisión Documental Detallada",
        description:
          "Examinamos cada documento de tu carpeta, verificando que cumpla con todos los requisitos legales y formales exigidos por las autoridades italianas.",
      },
      {
        title: "Verificación de Traducciones",
        description:
          "Comprobamos que todas las traducciones sean precisas y cumplan con los estándares requeridos, identificando posibles errores o inconsistencias que podrían causar problemas.",
      },
      {
        title: "Validación de Apostillas",
        description:
          "Confirmamos que todos los documentos internacionales cuenten con la apostilla correspondiente y que ésta cumpla con los requisitos de validez para Italia.",
      },
      {
        title: "Identificación de Faltantes",
        description:
          "Detectamos cualquier documento ausente o incompleto en tu expediente, proporcionándote orientación específica sobre cómo obtenerlos o completarlos.",
      },
      {
        title: "Recomendaciones de Mejora",
        description:
          "Ofrecemos sugerencias concretas para fortalecer tu expediente, maximizando las probabilidades de una resolución favorable y rápida de tu solicitud.",
      },
    ],
  },
  {
    id: "via-judicial",
    title: "Vía Judicial",
    icon: <MessageCircle className="h-5 w-5" aria-hidden="true" />,
    description: "Asistencia legal para obtener la ciudadanía italiana a través del sistema judicial.",
    fullDescription:
      "El servicio de Vía Judicial ofrece una alternativa eficaz cuando las vías administrativas tradicionales no son viables o presentan obstáculos significativos. A través de un proceso legal en los tribunales italianos, podemos ayudarte a obtener el reconocimiento de tu ciudadanía italiana incluso en casos complejos o cuando no hay disponibilidad de turnos consulares.",
    features: [
      {
        title: "Representación Legal en Italia",
        description:
          "Contamos con abogados especializados en derecho de ciudadanía que te representarán ante los tribunales italianos, eliminando la necesidad de tu presencia física durante la mayor parte del proceso.",
      },
      {
        title: "Preparación de Demanda",
        description:
          "Elaboramos una demanda judicial sólida y bien fundamentada, respaldada por toda la documentación necesaria para demostrar tu derecho a la ciudadanía italiana.",
      },
      {
        title: "Seguimiento del Proceso",
        description:
          "Monitoreamos constantemente el avance de tu caso en el sistema judicial italiano, manteniéndote informado sobre cada desarrollo y respondiendo a cualquier requerimiento adicional del tribunal.",
      },
      {
        title: "Comunicación con el Tribunal",
        description:
          "Gestionamos toda la comunicación con el tribunal y las autoridades italianas, superando barreras idiomáticas y burocráticas para agilizar el proceso.",
      },
      {
        title: "Gestión Post-Sentencia",
        description:
          "Una vez obtenida la sentencia favorable, te asistimos en todos los trámites posteriores, incluyendo la inscripción en el registro civil italiano y la solicitud de documentos de identidad.",
      },
    ],
  },
  {
    id: "fijar-residencia",
    title: "Fijar Residencia",
    icon: <Home className="h-5 w-5" aria-hidden="true" />,
    description: "Asistencia para establecer residencia legal en Italia, requisito para algunas vías de ciudadanía.",
    fullDescription:
      "El servicio de Fijar Residencia está diseñado para ayudarte a establecer tu residencia legal en Italia, un paso fundamental para quienes desean tramitar su ciudadanía directamente en territorio italiano. Te guiamos a través de todo el proceso, desde la búsqueda de alojamiento hasta la obtención del certificado de residencia oficial.",
    features: [
      {
        title: "Asesoramiento sobre Requisitos",
        description:
          "Te informamos detalladamente sobre todos los requisitos legales para establecer residencia en Italia, incluyendo documentación necesaria y procedimientos específicos según la región.",
      },
      {
        title: "Asistencia para Alojamiento",
        description:
          "Te ayudamos a encontrar opciones de alojamiento adecuadas que cumplan con los requisitos para la residencia legal, incluyendo contratos de alquiler formales o declaraciones de hospitalidad.",
      },
      {
        title: "Gestión de Trámites Municipales",
        description:
          "Te acompañamos en todos los trámites ante el municipio (comune) italiano, desde la presentación de la solicitud hasta la visita de verificación por parte de la policía local.",
      },
      {
        title: "Obtención de Certificado",
        description:
          "Gestionamos la obtención del certificado oficial de residencia (certificato di residenza), documento esencial para iniciar tu proceso de ciudadanía en Italia.",
      },
      {
        title: "Apoyo Durante la Residencia",
        description:
          "Te brindamos soporte continuo durante todo el período de residencia requerido, ayudándote a mantener tu estatus legal y a cumplir con todas las obligaciones administrativas.",
      },
    ],
  },
  {
    id: "asseverazione",
    title: "Asseverazione",
    icon: <FileCheck className="h-5 w-5" aria-hidden="true" />,
    description: "Certificación y legalización de traducciones para su validez en Italia.",
    fullDescription:
      "El servicio de Asseverazione garantiza que tus documentos traducidos sean legalmente válidos y aceptados por las autoridades italianas. Este proceso, también conocido como juramento de traducción, es esencial para que los documentos extranjeros tengan plena validez legal en Italia y puedan ser utilizados en tu proceso de ciudadanía.",
    features: [
      {
        title: "Traducción Oficial",
        description:
          "Realizamos traducciones precisas y profesionales de tus documentos al italiano, respetando la terminología legal y los formatos oficiales requeridos por las autoridades italianas.",
      },
      {
        title: "Certificación de Traducciones",
        description:
          "Gestionamos el proceso de certificación oficial de las traducciones, incluyendo el juramento ante el tribunal o consulado correspondiente para garantizar su validez legal.",
      },
      {
        title: "Legalización de Documentos",
        description:
          "Nos encargamos de todos los procesos de legalización necesarios para que tus documentos sean reconocidos en Italia, incluyendo apostillas y sellos consulares cuando sea necesario.",
      },
      {
        title: "Gestión de Apostillas",
        description:
          "Coordinamos la obtención de apostillas para documentos internacionales, asegurando que cumplan con los requisitos de la Convención de La Haya y sean aceptados en Italia.",
      },
      {
        title: "Verificación de Conformidad",
        description:
          "Comprobamos que todos los documentos traducidos y legalizados cumplan con los estándares específicos requeridos por las autoridades italianas para el proceso de ciudadanía.",
      },
    ],
  },
] 