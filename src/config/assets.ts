/**
 * ============================================
 * CONFIGURACIÓN COMPLETA DE ASSETS
 * ============================================
 * Sistema de 3 marcos + template con máscara de color
 * ============================================
 */

// ============================================
// MEDIDAS EXACTAS DE LA CARTA (px)
// ============================================
export const CARD_DIMENSIONS = {
  // Marco exterior de la carta
  CARD_FRAME: {
    width: 413.9014,
    height: 578.148,
  },
  // Template (fondo con información)
  CARD_TEMPLATE: {
    width: 375.6962,
    height: 540.6523,
  },
  // Área de ilustración (hueco del fondo)
  ILLUSTRATION_AREA: {
    width: 337.3334,
    height: 288.5933,
  },
  // Marco interno decorativo
  INNER_FRAME: {
    width: 346.1391,
    height: 296.8294,
  },
  // Icono de clase/tipo
  CLASS_ICON: {
    width: 72.4444,
    height: 79.3645,
  },
};

// ============================================
// ASSETS BASE PREDETERMINADOS
// ============================================
export const DEFAULT_ASSETS = {
  // Template base (fondo con información) - REQUERIDO
  template: '/assets/templates/Fondo_base.webp',
  
  // Marco externo (borde exterior) - REQUERIDO
  outerFrame: '/assets/outer-frames/Marco_gris.webp',
  
  // Marco interno (borde del área de ilustración) - REQUERIDO
  innerFrame: '/assets/inner-frames/Marco_interno_gris.webp',
};

// ============================================
// MARCOS EXTERNOS (Borde exterior)
// ============================================
// Coloca marcos adicionales en: /assets/outer-frames/
export const OUTER_FRAMES = {
  default: DEFAULT_ASSETS.outerFrame,
  gris: DEFAULT_ASSETS.outerFrame,
  cobre:"/assets/outer-frames/Marco_cobre.webp",
  plata:"/assets/outer-frames/Marco_plata.webp",
  oro:"/assets/outer-frames/Marco_oro.webp",
  diamante:"/assets/outer-frames/Marco_diamante.webp",
  // Agrega más marcos externos aquí
  // cobre: '/assets/outer-frames/outer-cobre.png',
  // plata: '/assets/outer-frames/outer-plata.png',
};

export const OUTER_FRAME_CONFIG = [
  {
    id: 'default',
    label: 'Gris',
    image: OUTER_FRAMES.default,
  },
  {
    id: 'cobre',
    label: 'Cobre',
    image: OUTER_FRAMES.cobre,
  },
  {
    id: 'plata',
    label: 'Plata',
    image: OUTER_FRAMES.plata,
  },
  {
    id: 'oro',
    label: 'Oro',
    image: OUTER_FRAMES.oro,
  },
  {
    id: 'diamante',
    label: 'Diamante',
    image: OUTER_FRAMES.diamante,
  },
];

// ============================================
// TEMPLATES (Fondo con información)
// ============================================
// Coloca templates adicionales en: /assets/templates/
export const TEMPLATES = {
  default: DEFAULT_ASSETS.template,
  base: DEFAULT_ASSETS.template,
  // Agrega más templates aquí
  // classic: '/assets/templates/template-classic.png',
  // modern: '/assets/templates/template-modern.png',
};

export const TEMPLATE_CONFIG = [
  {
    id: 'default',
    label: 'Base',
    image: TEMPLATES.default,
  },
  {
    id: 'base',
    label: 'FullArt',
    image: TEMPLATES.base,
  },
];

// ============================================
// MARCOS INTERNOS (Borde de ilustración)
// ============================================
// Coloca marcos internos adicionales en: /assets/inner-frames/
export const INNER_FRAMES = {
  default: DEFAULT_ASSETS.innerFrame,
  cobre:"/assets/inner-frames/Marco_interno_cobre.webp",
  plata:"/assets/inner-frames/Marco_interno_plata.webp",
  oro:"/assets/inner-frames/Marco_interno_oro.webp",
  diamante:"/assets/inner-frames/Marco_interno_diamante.webp",
  // Agrega más marcos internos aquí
  // elegant: '/assets/inner-frames/inner-elegant.png',
  // ornate: '/assets/inner-frames/inner-ornate.png',
};

export const INNER_FRAME_CONFIG = [
  {
    id: 'default',
    label: 'Gris',
    image: INNER_FRAMES.default,
  },
  {
    id: 'cobre',
    label: 'Cobre',
    image: INNER_FRAMES.cobre,
  },
  {
    id: 'plata',
    label: 'Plata',
    image: INNER_FRAMES.plata,
  },
  {
    id: 'oro',
    label: 'Oro',
    image: INNER_FRAMES.oro,
  },
  {
    id: 'diamante',
    label: 'Diamante',
    image: INNER_FRAMES.diamante,
  },
];

// ============================================
// COLORES PREDEFINIDOS PARA TEMPLATE
// ============================================
export const TEMPLATE_COLORS = [
  { id: 'turquoise', label: 'Turquesa', color: '#1dd1a1' },
  { id: 'red', label: 'Rojo', color: '#ee5a6f' },
  { id: 'blue', label: 'Azul', color: '#54a0ff' },
  { id: 'purple', label: 'Púrpura', color: '#9b59b6' },
  { id: 'orange', label: 'Naranja', color: '#f39c12' },
  { id: 'green', label: 'Verde', color: '#26de81' },
  { id: 'yellow', label: 'Amarillo', color: '#fed330' },
  { id: 'pink', label: 'Rosa', color: '#fd79a8' },
  { id: 'cyan', label: 'Cian', color: '#00d2d3' },
  { id: 'lime', label: 'Lima', color: '#7bed9f' },
  { id: 'brown', label: 'Marrón', color: '#a55eea' },
  { id: 'gray', label: 'Gris', color: '#95a5a6' },
];

// ============================================
// CLASES/TIPOS (7 clases disponibles)
// ============================================
// Coloca tus iconos de clases en: /assets/class-icons/



export const CLASS_ICONS = {
  ingeniero: '/assets/class-icons/Icono_ingeniero.webp',
  lucha: '/assets/class-icons/Icono_lucha.png',
  mago: '/assets/class-icons/Icono_mago.webp',
  mecha: '/assets/class-icons/Icono_mecha.webp',
  tirador: '/assets/class-icons/Icono_tirador.webp',
  soporte: '/assets/class-icons/Icono_soporte.webp',
  bestia: '/assets/class-icons/Icono_bestia.webp',
};


export const CLASS_TYPES = [
  { 
    id: 'ingeniero', 
    label: '🛠️ Ingeniero', 
    icon:  CLASS_ICONS.ingeniero,
  },
  { 
    id: 'lucha', 
    label: 'Lucha', 
    icon: CLASS_ICONS.lucha,
  },
  { 
    id: 'mago', 
    label: 'Mago', 
    icon: CLASS_ICONS.mago,
  },
  { 
    id: 'mecha', 
    label: 'Mecha', 
    icon: CLASS_ICONS.mecha,
  },
  { 
    id: 'tirador', 
    label: 'Tirador', 
    icon: CLASS_ICONS.tirador,
  },
  { 
    id: 'soporte', 
    label: 'Soporte', 
    icon: CLASS_ICONS.soporte,
  },
  { 
    id: 'bestia', 
    label: 'Bestia', 
    icon: CLASS_ICONS.bestia,
  },
];

// ============================================
// ENERGÍAS (3 tipos de energía)
// ============================================
// Coloca tus iconos de energía en: /assets/energy-icons/
export const ENERGY_ICONS = {
  aceite: '/assets/energy-icons/Icono_energia_aceite.webp',
  mana: '/assets/energy-icons/Icono_energia_mana.webp',
  incolora: '/assets/energy-icons/Icono_energia_nocolor.webp',
  
};

export const FOOTER_BG = '/assets/symbols/rectangulo_inferior.webp';


export const ENERGY_TYPES = [
  { 
    id: 'aceite', 
    label: 'Aceite', 
    icon: ENERGY_ICONS.aceite,
  },
  { 
    id: 'mana', 
    label: 'Maná', 
    icon: ENERGY_ICONS.mana,
  },
  { 
    id: 'incolora', 
    label: 'Incolora', 
    icon: ENERGY_ICONS.incolora,
  },
];


export const WEAKNESS_ICONS = {
  ingeniero: '/assets/symbols/Icono_debilidad_ingeniero.webp',
  lucha: '/assets/symbols/Icono_debilidad_lucha.webp',
  mago: '/assets/symbols/Icono_debilidad_mago.webp',
  mecha: '/assets/symbols/Icono_debilidad_mecha.webp',
  tirador: '/assets/symbols/Icono_debilidad_tirador.webp',
  soporte: '/assets/symbols/Icono_debilidad_soporte.webp',
  bestia: '/assets/symbols/Icono_debilidad_bestia.webp',
};


export const RARITY_ICONS = {
  common: '/assets/symbols/Icono_rareza_gris.webp',
  prismatic: '/assets/symbols/Icono_rareza_colores.webp',
  rare: '/assets/symbols/Icono_rareza_oro.webp',
  
};

export const RARITY_TYPES = [
  { 
    id: 'common', 
    label: 'Común', 
    icon: RARITY_ICONS.common,
  },
  { 
    id: 'prismatic', 
    label: 'Poco Común', 
    icon: RARITY_ICONS.prismatic,
  },
  { 
    id: 'rare', 
    label: 'Raro', 
    icon: RARITY_ICONS.rare,
  },
];

// ============================================
// ORDEN DE CAPAS EN EL CANVAS
// ============================================


// ============================================
// CONFIGURACIÓN MODULAR EXPANDIBLE
// ============================================

/**
 * Para agregar un nuevo marco externo:
 * 1. Coloca la imagen en /assets/outer-frames/
 * 2. Agrega la entrada en OUTER_FRAMES
 * 3. Agrega el objeto en OUTER_FRAME_CONFIG
 */

/**
 * Para agregar un nuevo template:
 * 1. Coloca la imagen en /assets/templates/
 * 2. Agrega la entrada en TEMPLATES
 * 3. Agrega el objeto en TEMPLATE_CONFIG
 */

/**
 * Para agregar un nuevo marco interno:
 * 1. Coloca la imagen en /assets/inner-frames/
 * 2. Agrega la entrada en INNER_FRAMES
 * 3. Agrega el objeto en INNER_FRAME_CONFIG
 */
