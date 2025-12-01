# 🗂️ Estructura del Proyecto - Editor de Cartas TSG

## 📂 Organización de Archivos

```
/
├── 📁 assets/                    ← TUS IMÁGENES VAN AQUÍ
│   ├── frames/                   ← Marcos de las cartas
│   ├── templates/                ← Plantillas base
│   ├── energy-icons/             ← Iconos de energía
│   ├── hp-icons/                 ← Iconos de PS
│   ├── symbols/                  ← Logos y símbolos
│   ├── backgrounds/              ← Fondos predefinidos
│   └── fonts/                    ← Fuentes personalizadas
│
├── 📁 config/                    ← CONFIGURACIÓN
│   ├── assets.ts                 ← Rutas de todos los assets
│   └── COMO-AGREGAR-ELEMENTOS.md ← Guía para expandir
│
├── 📁 types/                     ← TIPOS TYPESCRIPT
│   └── card.ts                   ← Estructura de datos de la carta
│
├── 📁 contexts/                  ← ESTADO GLOBAL
│   └── CardContext.tsx           ← Contexto con historial undo/redo
│
├── 📁 components/                ← COMPONENTES REACT
│   ├── Sidebar.tsx               ← Menú lateral de navegación
│   ├── EditorPanel.tsx           ← Panel derecho con editores
│   ├── TemplateSelector.tsx      ← Selector de plantilla y marco
│   ├── TextEditor.tsx            ← Editor de textos y ataques
│   ├── ImageEditor.tsx           ← Editor de imagen del personaje
│   ├── BackgroundEditor.tsx      ← Editor de fondos
│   ├── CardCanvas.tsx            ← Vista previa de la carta
│   └── EditorTools.tsx           ← Herramientas (zoom, undo, export)
│
├── 📁 styles/                    ← ESTILOS
│   └── globals.css               ← Estilos globales y tokens
│
├── 📄 App.tsx                    ← COMPONENTE PRINCIPAL
├── 📄 INSTRUCCIONES-ASSETS.md    ← GUÍA COMPLETA DE ASSETS
└── 📄 ESTRUCTURA-DEL-PROYECTO.md ← Este archivo
```

---

## 🎯 Flujo de Datos

```
┌─────────────────────────────────────────────────────────────┐
│                      App.tsx                                 │
│                  (Componente raíz)                           │
└────────────────────┬────────────────────────────────────────┘
                     │
         ┌───────────▼──────────┐
         │   CardProvider       │ ← Estado global + Undo/Redo
         │  (CardContext.tsx)   │
         └───────────┬──────────┘
                     │
         ┌───────────▼──────────────────────────────────┐
         │                                               │
    ┌────▼─────┐  ┌──────▼──────┐  ┌─────────▼────────┐
    │ Sidebar  │  │ EditorPanel │  │   CardCanvas     │
    │          │  │             │  │  (Vista previa)  │
    └──────────┘  └──────┬──────┘  └──────────────────┘
                         │
         ┌───────────────┼───────────────┐
         │               │               │
    ┌────▼───────┐  ┌───▼────────┐  ┌──▼──────────┐
    │ Template   │  │  Text      │  │   Image     │
    │ Selector   │  │  Editor    │  │   Editor    │
    └────────────┘  └────────────┘  └─────────────┘
                         │
                    ┌────▼──────────┐
                    │  Background   │
                    │    Editor     │
                    └───────────────┘
```

---

## 🔄 Cómo Funciona el Estado

### CardContext (Estado Global)

```typescript
CardData {
  ├── template: Plantilla seleccionada
  ├── frame: Marco seleccionado
  ├── era: Generación seleccionada
  ├── name: Nombre del personaje
  ├── prefix: Prefijo (EX, GX, etc.)
  ├── energyTypes: [Tipos de energía]
  ├── hp: Puntos de salud
  ├── attacks: [Lista de ataques]
  │   └── { name, energyCost, description, damage }
  ├── weakness: Debilidad
  ├── resistance: Resistencia
  ├── retreatCost: Coste de retirada
  ├── characterImage: {
  │   ├── src: Imagen subida
  │   ├── x, y: Posición
  │   ├── scale: Escala
  │   ├── opacity: Opacidad
  │   └── flipX: Volteo horizontal
  │ }
  └── background: {
      ├── type: 'color' | 'texture'
      ├── color: Color hexadecimal
      ├── texture: Imagen de fondo
      └── intensity: Intensidad (0-100)
  }
}
```

### Historial Undo/Redo

```
[Historial]
  ├── Estado 0 (inicial)
  ├── Estado 1 (después de cambio 1)
  ├── Estado 2 (después de cambio 2)
  └── Estado 3 (actual) ← historyIndex
```

Cada cambio crea un nuevo estado en el historial.

---

## 🎨 Sistema de Capas en CardCanvas

```
┌─────────────────────────────────────────┐
│         MARCO (z-40)                     │ ← Capa superior
│  ┌──────────────────────────────────┐   │
│  │    CONTENIDO (z-30)               │   │
│  │  ┌────────────────────────────┐  │   │
│  │  │  Header: Nombre + HP       │  │   │
│  │  └────────────────────────────┘  │   │
│  │  ┌────────────────────────────┐  │   │
│  │  │  Tipos de energía (iconos) │  │   │
│  │  └────────────────────────────┘  │   │
│  │  ┌────────────────────────────┐  │   │
│  │  │  IMAGEN DEL PERSONAJE      │  │   │
│  │  │  + Fondo                   │  │   │
│  │  └────────────────────────────┘  │   │
│  │  ┌────────────────────────────┐  │   │
│  │  │  Ataques                   │  │   │
│  │  └────────────────────────────┘  │   │
│  │  ┌────────────────────────────┐  │   │
│  │  │  Atributos + Logo          │  │   │
│  │  └────────────────────────────┘  │   │
│  └──────────────────────────────────┘   │
│                                          │
│  PLANTILLA BASE (z-10) ← Debajo          │
└─────────────────────────────────────────┘
   FONDO BLANCO (z-0)
```

**Orden de renderizado:**
1. Fondo blanco (base)
2. Plantilla de generación (diseño base)
3. Contenido (imagen, textos, iconos)
4. Marco exterior (encima de todo)

---

## 📋 Archivos Clave y Sus Funciones

### 🔧 Configuración

| Archivo | Descripción | ¿Editable? |
|---------|-------------|-----------|
| `/config/assets.ts` | Rutas a todas las imágenes y configuraciones | ✅ Sí |
| `/types/card.ts` | Estructura de datos TypeScript | ✅ Sí |

### 🎨 Componentes Editores

| Archivo | Qué Controla | Assets que Usa |
|---------|--------------|----------------|
| `TemplateSelector.tsx` | Plantilla, marco, generación | `frames/`, `templates/` |
| `TextEditor.tsx` | Nombre, tipos, HP, ataques | `energy-icons/` |
| `ImageEditor.tsx` | Imagen del personaje | - |
| `BackgroundEditor.tsx` | Fondo del área de imagen | `backgrounds/` |

### 👁️ Componentes Visuales

| Archivo | Qué Hace |
|---------|----------|
| `CardCanvas.tsx` | Renderiza la vista previa completa de la carta |
| `EditorTools.tsx` | Botones de zoom, undo, redo, exportar |
| `Sidebar.tsx` | Menú de navegación entre secciones |

### 🎛️ Infraestructura

| Archivo | Propósito |
|---------|-----------|
| `CardContext.tsx` | Estado global + sistema de historial |
| `App.tsx` | Componente raíz que une todo |

---

## 🔍 Dónde Editar Para...

### Cambiar cómo se ve la carta
➡️ **`CardCanvas.tsx`**
- Cambia posiciones, tamaños, fuentes
- Ajusta el layout general

### Agregar un nuevo tipo de input
➡️ **`TextEditor.tsx`** o crea nuevo editor
- Agrega campos de formulario
- Conecta con el estado usando `updateCardData()`

### Cambiar los assets que se muestran
➡️ **`/config/assets.ts`**
- Modifica rutas
- Agrega nuevos elementos a los arrays

### Modificar la estructura de datos
➡️ **`/types/card.ts`**
- Actualiza la interfaz `CardData`
- Modifica `initialCardData`

### Cambiar colores del editor
➡️ **`/styles/globals.css`**
- Modifica tokens de color
- Ajusta tema oscuro/claro

---

## 🚀 Ciclo de Vida de un Cambio

```mermaid
1. Usuario hace un cambio en un editor
         ↓
2. Editor llama a updateCardData({ campo: valor })
         ↓
3. CardContext crea nuevo estado en historial
         ↓
4. Todos los componentes se re-renderizan con nuevo estado
         ↓
5. CardCanvas actualiza la vista previa automáticamente
```

---

## 🛠️ Puntos de Extensión

### Fácil de Agregar:
- ✅ Nuevos marcos
- ✅ Nuevas plantillas
- ✅ Nuevos tipos de energía
- ✅ Nuevos fondos predefinidos
- ✅ Nuevos campos de texto

### Moderado:
- 🟡 Nuevas secciones en el sidebar
- 🟡 Nuevos editores personalizados
- 🟡 Cambios al layout de la carta
- 🟡 Nuevos símbolos/iconos

### Avanzado:
- 🔴 Múltiples tamaños de carta
- 🔴 Exportar a PDF
- 🔴 Importar/Exportar JSON
- 🔴 Templates completamente dinámicos

---

## 📖 Guías de Referencia

| Tema | Archivo |
|------|---------|
| Cómo colocar tus imágenes | `INSTRUCCIONES-ASSETS.md` |
| Cómo agregar elementos nuevos | `/config/COMO-AGREGAR-ELEMENTOS.md` |
| Qué va en cada carpeta de assets | `/assets/README.md` |
| Detalles de cada carpeta | `/assets/*/README.md` |

---

## 💡 Tips para Desarrolladores

### 🐛 Debugging

```typescript
// En cualquier componente, puedes ver el estado actual:
import { useCard } from '../contexts/CardContext';

function MiComponente() {
  const { cardData } = useCard();
  console.log('Estado actual:', cardData);
  // ...
}
```

### 🎯 Agregar Fallbacks

Todos los assets tienen fallbacks automáticos:
```typescript
<img
  src={miImagen}
  onError={(e) => {
    // Si la imagen no carga, ocultar o mostrar alternativa
    e.currentTarget.style.display = 'none';
  }}
/>
```

### 📦 Importar Assets

Siempre importa desde `/config/assets.ts`:
```typescript
import { FRAMES, ENERGY_ICONS, BACKGROUNDS } from '../config/assets';
```

---

## ✅ Checklist de Personalización

### Nivel 1: Básico
- [ ] Coloca tus 4 marcos en `/assets/frames/`
- [ ] Coloca tus 3 plantillas en `/assets/templates/`
- [ ] Coloca tus iconos de energía en `/assets/energy-icons/`
- [ ] Coloca tu logo en `/assets/symbols/`

### Nivel 2: Intermedio
- [ ] Personaliza colores en `/config/assets.ts`
- [ ] Agrega fondos predefinidos
- [ ] Configura fuentes personalizadas
- [ ] Ajusta layout en `CardCanvas.tsx`

### Nivel 3: Avanzado
- [ ] Crea nuevos editores personalizados
- [ ] Agrega campos de datos adicionales
- [ ] Modifica el sistema de exportación
- [ ] Implementa plantillas por tipo

---

## 🎓 Recursos de Aprendizaje

- **React Context**: Para entender cómo funciona el estado global
- **TypeScript**: Para modificar tipos e interfaces
- **Tailwind CSS**: Para ajustar estilos
- **html2canvas**: Para entender el sistema de exportación

---

¡Ahora tienes un mapa completo del proyecto! 🗺️

Si tienes dudas específicas, revisa los comentarios en cada archivo `.tsx` - están documentados para guiarte.
