// ============================================
// TIPOS Y ESTRUCTURA DE DATOS DE LA CARTA
// ============================================

export interface Attack {
  id: string;
  name: string;
  energyCost: string[]; // IDs de energías
  description: string;
  damage: string;
  rarity: string
}

export interface CardData {
  // ===== MARCOS (3 niveles) =====
  outerFrame: string; // Marco externo/borde
  template: string; // Template/fondo con información
  innerFrame: string; // Marco interno (borde ilustración)
  
  // ===== COLOR DEL TEMPLATE (máscara) =====
  templateColor: string; // Color hex para aplicar al template
  
  // ===== INFORMACIÓN DEL PERSONAJE =====
  name: string; // Nombre del personaje
  prefix: string; // Prefijo (ej: EX, Ultra, etc)
  classTypes: string[]; // Tipos/Clases (max 2)
  hp: string; // Puntos de salud (PS)
  
  
  // ===== PASIVOS =====
  passive: string; // Texto de habilidad pasiva
  
  // ===== ATAQUES =====
  attacks: Attack[]; // Lista de ataques (max 2)
  
  // ===== ATRIBUTOS =====
  weakness: string; // Debilidad (clase)
  retreat: number; // Coste de retirada (0-5)
  rarity: string; // Rareza de la carta
  
  // ===== IMAGEN DEL PERSONAJE =====
  characterImage: {
    src: string | null;
    x: number;
    y: number;
    scale: number;
    opacity: number;
    flipX: boolean;
  };
  
  // ===== DESCRIPCIÓN DE IMAGEN =====
  imageDescription: string; // Texto descriptivo de la ilustración
}

export const initialCardData: CardData = {
  // Marcos predeterminados
  outerFrame: 'default',
  template: 'default',
  innerFrame: 'default',
  rarity: 'common',
  
  // Color predeterminado del template (turquesa)
  templateColor: '#1dd1a1',
  
  // Información
  name: '',
  prefix: '',
  classTypes: [],
  hp: '000',
  passive: '',
  attacks: [
    {
      id: '1',
      name: '',
      energyCost: [],
      description: '',
      damage: '',
      rarity: 'common'
    },
  ],
  weakness: '',
  retreat: 0,
  characterImage: {
    src: null,
    x: 0,
    y: 0,
    scale: 1,
    opacity: 1,
    flipX: false,
  },
  imageDescription: '',
};
