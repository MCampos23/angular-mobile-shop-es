export interface Product {
  id: number;
  name: string;
  price: number;
  description1: string;
  description2: string;
  description3: string;
  excerpt: string;
  img:string;
}

export const products = [
  {
    id: 1,
    name: 'Cubot Note 20',
    price: 87.98,
    excerpt: 'El teléfono gratuito NOTE 20 tiene una gran pantalla de gotas de lluvia de 6.5 pulgadas con esquinas redondeadas, ofrece una mejor experiencia visual.',
    description1: '【Pantalla grande de 6.5 pulgadas NOTA El móvil gratuito NOTE 20 tiene una gran pantalla de gota de agua de 6.5 pulgadas con esquinas redondeadas, ofrece una mejor experiencia visual, puede ver una pantalla completa, ya sean videos, juegos o cualquier otra cosa, es tu mejor socio. 【Cámara cuádruple SONY】 El móvil NOTE 20 barato y bueno con cámara trasera cuádruple diseñada en forma redonda, se ve a la moda. ',
    description2: '【Con la cámara principal SONY IMX486 12.0MP capture las bellezas de su vida con claridad, con el sensor Sony IMX350 20MP capture retratos como un director de cine con modo película. La cámara frontal de 8MP mejora las imágenes con IA, registra cada punto de tu belleza. Batería de 3GB + 64GB + 4200mAh】 ',
    description3: 'El teléfono inteligente 4G tiene una batería grande de 4200 mAh, suficiente para su uso diario, pasa todo el día usándolo y siempre con energía. La capacidad ROM de 64GB te permite tomar múltiples fotos y videos, instalar más aplicaciones y juegos, si aún no tienes suficiente memoria, amplíala con una tarjeta tf de hasta 128GB. ',
    img: 'assets/img/mobile-models/Cubot.webp'
  },
  {
    id: 2,
    name: 'Dodge Pro2021',
    price: 199,
    excerpt: 'DOOGEE S59 Pro viene con una enorme batería de 10050 mAh en el interior y puede manejar juegos intensos durante largas horas.',
    description1: 'DOOGEE S59 Pro viene con una enorme batería de 10050 mAh en el interior y puede manejar juegos intensos durante largas horas. Disfrute de una carga rápida con cables de 24 W en cualquier momento y en cualquier lugar. Debido a que este teléfono puede proporcionar hasta 700 horas de tiempo de espera, puede deshacerse fácilmente del problema de ansiedad de la batería. ',
    description2: 'Con hasta 4GB RAM y 128GB de almacenamiento interno, revela el rendimiento energético del DOOGEE S59 Pro, brindándole mucho más espacio que otros teléfonos inteligentes en el mismo rango.',
    description3: 'Android 10.0 ha sido completamente modificado para mejorar tu experiencia de velocidad y potencia. Con un procesador octa-core, puede realizar múltiples tareas a alta velocidad, proporcionando una respuesta fluida y una experiencia de reproducción ultrarrápida. ',
    img: 'assets/img/mobile-models/Doodge Pro2021.webp'
  },
  {
    id: 3,
    name: 'Huawei P Smart S',
    price: 169,
    excerpt: 'Pantalla OLED de gota de rocío de 6.3 ": con una relación de pantalla del 90.17% y una resolución ultra clara de 2400 x 1080, la pantalla OLED de gota de rocío de 6.3" brinda una experiencia de visualización extraordinaria.',
    description1: 'Pantalla OLED de gota de rocío de 6.3 ": con una relación de pantalla de 90.17% y una resolución ultra clara de 2400 x 1080, la pantalla OLED de gota de rocío de 6.3" brinda una experiencia visual notable y una gama de colores cinematográfica.',
    description2: 'Huella digital en pantalla: con tecnología avanzada de huellas digitales en pantalla, la velocidad de desbloqueo y la tasa de éxito de HUAWEI P Smart S se han mejorado enormemente.',
    description3: 'Cámara AI triple de 48MP: lente principal ultra clara de 48MP, lente ultra gran angular de 8MP y lente de profundidad de 2MP, lo ayudan a explorar la naturaleza misteriosa.',
    img: 'assets/img/mobile-models/Huawei P Smart S.webp'
  },
  {
    id: 4,
    name: 'Motorola E7 Plus',
    price: 130.55,
    excerpt: 'sistema de cámara de 48 MP. * Capture fotos más nítidas y brillantes incluso de noche y agregue un hermoso efecto de desenfoque a sus retratos. ',
    description1: 'Sistema de cámara de 48 MP. * Capture fotos más nítidas y brillantes incluso de noche y agregue un hermoso efecto de desenfoque a sus retratos. Duración de la batería de más de dos días. 1 Sigue divirtiéndote sin tener que cargar tu teléfono gracias a una batería de 5000 mAh llena de energía. ',
    description2: 'Rendimiento habilitado con IA un 50% más rápido # Tome sus mejores fotos y sienta el poder de un procesador Qualcomm Snapdragon de ocho núcleos y 4GB de memoria. Pantalla HD + Max Vision de 6.5 ". ',
    description3: 'Déjese llevar jugando, viendo películas y hablando con sus amigos en una pantalla ultra ancha. 64 GB de almacenamiento interno. ',
    img: 'assets/img/mobile-models/Motorola E7 Plus.webp'
  },
  {
    id: 5,
    name: 'Redmi note 10',
    price: 118.25,
    excerpt: 'Redmi 9; La increíble serie Redmi te ofrece la mejor experiencia, continuando el legado de sus predecesores. ',
    description1: 'Redmi 9; La increíble serie Redmi te ofrece la mejor experiencia, continuando el legado de sus predecesores. Sistema de imagen mejorado, cámara cuádruple de 13 MP con IA y cámara frontal para selfies de 8 MP. ',
    description2: 'Redmi 9 cuenta con una pantalla HD + DotDisplay de 6.53 "con certificación TÜV Rheinland de luz azul baja. Procesador MediaTek Helio G80, procesador de 8 núcleos de alto rendimiento.',
    description3: 'Batería mejorada de 5020 mAh (típica), puede disfrutar de una energía duradera; Junto con la carga rápida de 18 W, puede disfrutar de su dispositivo en poco tiempo. ',
    img: 'assets/img/mobile-models/REdmi note 10.webp'
  },
  {
    id: 6,
    name: 'Samsung Galaxy A21s',
    price: 177.75,
    excerpt: 'Cámara del teléfono móvil: cámara principal de 48 MP, cámara focal de 2 MP, ultra gran angular de 8 MP, cámara macro de 2 MP y cámara frontal nominal de 13 MP',
    description1: 'Cámara del teléfono móvil: cámara principal de 48 MP, cámara focal de 2 MP, ultra gran angular de 8 MP, cámara macro de 2 MP y cámara frontal nominal de 13 MP. Pantalla del teléfono inteligente: pantalla TFT LCD Infinity-O de 6.5 pulgadas, resolución de 720 x 1600 píxeles, densidad de 409 ppp y 16 millones de colores. ',
    description2: 'Memoria del teléfono inteligente: tarjeta microSD de hasta 512 GB; una memoria ampliable para tus fotos, tu música y mucho más. ',
    description3: 'Batería del teléfono móvil: batería de iones de litio de alto rendimiento de 5000 mAh con carga rápida de 15 W. Smartphone con sistema operativo Android V10.0. ',
    img: 'assets/img/mobile-models/Samsung Galaxy A21s.webp'
  },
  {
    id: 7,
    name: 'Ulefon Note 10',
    price: 94.99,
    excerpt: 'Ulefone Note 10 Mobile Phone ejecuta el último sistema operativo Android 11 Go Edition listo para usar, le permite verificar fácilmente mensajes importantes y administrar conversaciones.',
    description1: 'El teléfono móvil Ulefone Note 10 ejecuta el último sistema operativo Android 11 Go Edition listo para usar, le permite verificar fácilmente mensajes importantes y administrar conversaciones, dispositivos conectados, configuraciones de privacidad y otro contenido de una manera más conveniente.',
    description2: '[CPU de alto rendimiento + 4G Dual SIM] UlefoneNote10 usa un chip SC9863A, procesador de ocho núcleos, RAM2GB + 32GB ROM (el máximo se puede expandir a 128GB). El rendimiento operativo es estable, lo que puede reducir eficazmente el consumo de energía y proporcionar suficiente búfer para la operación y el espacio de almacenamiento. Tiene 3 ranuras para tarjetas y puede usar 2 tarjetas nano SIM al mismo tiempo, por lo que puede cambiar fácilmente entre el trabajo y el uso privado. ',
    description3: '【Pantalla HD 6.52 + Diseño de degradado de color 3D】 Con su diseño casi sin bordes, el teléfono puede brindar una experiencia de inmersión ininterrumpida cuando juegas, miras películas o lees libros electrónicos. Ulefone Note 10 usa un diseño de degradado de color 3D en su contraportada. Tiene un degradado de color dinámico en forma de prisma en la parte posterior, que brilla cada vez que se mueve. Y la textura mate lo hace antihuellas. [Batería de gran capacidad 5500mAh + OTG] Ulefone Note10P está equipado con una batería de alta capacidad de 5500mAh, (carga rápida de 10W) ​​proporciona una experiencia perfecta, sin preocuparse por la duración de la batería no es larga, y se deshará del problema de la carga . Puede disfrutar de juegos y videos. También tiene función de carga inversa OTG. ',
    img: 'assets/img/mobile-models/Ulefon Note 10.webp'
  },
  {
    id: 8,
    name: 'Xiaomi Redmi 9',
    price: 299,
    excerpt: 'Redmi 9; La increíble serie Redmi te ofrece la mejor experiencia, continuando el legado de sus predecesores ',
    description1: 'Redmi 9; La increíble serie Redmi te ofrece la mejor experiencia, continuando el legado de sus predecesores. Sistema de imagen mejorado, cámara cuádruple de 13 MP con IA y cámara frontal para selfies de 8 MP. ',
    description2: 'Redmi 9 cuenta con una pantalla HD + DotDisplay de 6.53 "con certificación TÜV Rheinland de luz azul baja. Procesador MediaTek Helio G80, procesador de alto rendimiento de 8 núcleos. Batería mejorada de 5020 mAh (típica), puede disfrutar de una energía duradera.' ,
    description3: 'Junto con la carga rápida de 18 W, puedes disfrutar de tu dispositivo en poco tiempo.',
    img: 'assets/img/mobile-models/Xiaomi Redmi 9.webp'
  }
];

