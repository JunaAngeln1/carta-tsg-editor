# 🎴 CONFIGURACIÓN COMPLETA DEL EDITOR DE CARTAS

## ✅ Estado Actual del Proyecto

El editor ha sido completamente reconfigurado según tus especificaciones exactas.

---

## 📋 CAMBIOS IMPLEMENTADOS

### ✅ 1. Módulos Eliminados
- ❌ Cuadro "Generar con IA" - **ELIMINADO**
- ❌ Módulo Gen1, PokéNCT2, PokéNCT3, PWLET - **ELIMINADO**
- ❌ Sección "Época" - **ELIMINADA**
- ❌ Botón "Agregar al carrito" - **ELIMINADO**

### ✅ 2. Plantillas (Solo 2)
- ✅ **Clásica**
- ✅ **FullArt**

### ✅ 3. Marcos (4 marcos)
- ✅ **Cobre**
- ✅ **Plata**
- ✅ **Oro**
- ✅ **Diamante**

### ✅ 4. Clases/Tipos (7 clases)
- ✅ Ingeniero ⚙️
- ✅ Lucha 🥊
- ✅ Mago 🔮
- ✅ Mecha 🤖
- ✅ Tirador 🎯
- ✅ Soporte 💚
- ✅ Bestia 🐺

**Nota:** Usando iconos provisionales (emojis). Coloca tus iconos reales en `/assets/class-icons/`

### ✅ 5. Energías (3 tipos)
- ✅ Aceite 🛢️
- ✅ Maná ✨
- ✅ Incolora ⚪

**Nota:** Usando iconos provisionales. Coloca tus iconos reales en `/assets/energy-icons/`

### ✅ 6. Medidas Exactas (px)
Todas las medidas están definidas en `/config/assets.ts`:

```typescript
CARD_DIMENSIONS = {
  CARD_FRAME: { width: 413.9014, height: 578.148 },
  CARD_BACKGROUND: { width: 375.6962, height: 540.6523 },
  ILLUSTRATION_AREA: { width: 337.3334, height: 288.5933 },
  INNER_FRAME: { width: 346.1391, height: 296.8294 },
  CLASS_ICON: { width: 72.4444, height: 79.3645 },
}
```

### ✅ 7. Sistema de Slots
Todos los espacios están identificados como slots preparados para tus assets:

- `slot_marco` → `/assets/frames/`
- `slot_fondo` → `/assets/backgrounds/`
- `slot_marco_interno` → `/assets/inner-frames/`
- `slot_ilustracion` → Área de imagen del personaje
- `slot_icono_clase` → `/assets/class-icons/`
- `slot_icono_energia` → `/assets/energy-icons/`
- `slot_estadisticas` → `/assets/stats/`
- `slot_texto` → `/assets/text-elements/`

### ✅ 8. Sistema Modular y Escalable
Todo el código está preparado para expansión:

✅ **Fácil agregar:**
- Nuevas clases
- Nuevas energías
- Nuevos marcos
- Nuevas plantillas
- Nuevos módulos

✅ **Archivos clave:**
- `/config/assets.ts` - Configuración central
- `/types/card.ts` - Tipos de datos
- Componentes modulares independientes

### ✅ 9. Orden de Capas (Según imagen de referencia)
```
z-0:  Fondo base blanco
z-10: Fondo de carta (azul/morado)
z-20: Marco interno decorativo
z-30: Ilustración + Textos + Stats
z-40: Iconos de clase
z-50: Iconos de energía
z-60: Textos y estadísticas
z-70: Marco exterior (encima de todo)
z-80: Efectos o brillos
```

### ✅ 10. Estructura de la Carta
Según la imagen de referencia:

```
┌─────────────────────────────────┐
│ [prefijo] Nombre          PS000 │ ← Header
├─────────────────────────────────┤
│                                 │
│     [Área de ilustración]       │ ← 337.3334 × 288.5933 px
│         [clase 1]               │ ← Iconos derecha
│         [clase 2]               │
│                                 │
├─────────────────────────────────┤
│   Descripción de la imagen      │ ← Texto descriptivo
├─────────────────────────────────┤
│         Pasivos                 │ ← Habilidades pasivas
├─────────────────────────────────┤
│ [⚡⚡] atk 1      [atk pwr]      │ ← Ataque 1
│ Descripción del ataque 1        │
├─────────────────────────────────┤
│ [⚡⚡] atk 2      [atk pwr]      │ ← Ataque 2
│ Descripción del ataque 2        │
├─────────────────────────────────┤
│ Debilidad     │      Retirada   │ ← Footer
│   [clase]     │      [●●●]      │
└─────────────────────────────────┘
```

---

## 📂 ESTRUCTURA DE CARPETAS PARA TUS ASSETS

```
/assets/
├── frames/              ← 4 marcos: cobre, plata, oro, diamante
│   ├── frame-cobre.png     (413.9014 × 578.148 px)
│   ├── frame-plata.png
│   ├── frame-oro.png
│   └── frame-diamante.png
│
├── templates/           ← 2 plantillas: clásica, fullart
│   ├── template-clasica.png
│   └── template-fullart.png
│
├── class-icons/         ← 7 iconos de clases
│   ├── class-ingeniero.png  (72.4444 × 79.3645 px)
│   ├── class-lucha.png
│   ├── class-mago.png
│   ├── class-mecha.png
│   ├── class-tirador.png
│   ├── class-soporte.png
│   └── class-bestia.png
│
├── energy-icons/        ← 3 iconos de energías
│   ├── energy-aceite.png
│   ├── energy-mana.png
│   └── energy-incolora.png
│
├── backgrounds/         ← Fondos predefinidos por clase
│   ├── bg-ingeniero.png
│   ├── bg-lucha.png
│   ├── bg-mago.png
│   ├── bg-mecha.png
│   ├── bg-tirador.png
│   ├── bg-soporte.png
│   └── bg-bestia.png
│
├── inner-frames/        ← Marcos internos decorativos (opcional)
│   └── inner-frame-default.png  (346.1391 × 296.8294 px)
│
└── symbols/             ← Símbolos y logos
    ├── hp-icon.png
    ├── weakness-icon.png
    ├── retreat-icon.png
    └── logo.png
```

---

## 🚀 CÓMO USAR TUS ASSETS

### 1. Coloca tus imágenes
Simplemente coloca tus archivos PNG en las carpetas correspondientes con los nombres exactos mostrados arriba.

### 2. Sin modificar código
No necesitas tocar el código. El sistema detectará automáticamente tus imágenes.

### 3. Fallbacks automáticos
Si una imagen no existe, el sistema mostrará:
- Un placeholder visual
- Un borde provisional
- Texto indicando el slot (ej: "slot_marco_oro")

---

## 🔧 ARCHIVOS DE CONFIGURACIÓN

### Archivo principal: `/config/assets.ts`

Este archivo contiene:
- ✅ Todas las rutas a los assets
- ✅ Medidas exactas de cada elemento
- ✅ Configuración de clases y energías
- ✅ Arrays de configuración para selectores

### Estructura de tipos: `/types/card.ts`

Define la estructura de datos de cada carta:
```typescript
{
  template: 'clasica' | 'fullart',
  frame: 'cobre' | 'plata' | 'oro' | 'diamante',
  name: string,
  prefix: string,
  classTypes: string[], // max 2
  hp: string,
  passive: string,
  attacks: Attack[], // max 2
  weakness: string,
  retreat: number,
  characterImage: {...},
  background: {...},
  imageDescription: string,
}
```

---

## 📐 ESPECIFICACIONES TÉCNICAS

### Formato de imágenes
- **Marcos**: PNG con transparencia, 413.9014 × 578.148 px
- **Plantillas**: PNG o JPG, 413.9014 × 578.148 px
- **Iconos de clase**: PNG con transparencia, 72.4444 × 79.3645 px
- **Iconos de energía**: PNG con transparencia, 32-64 px (cuadrado)
- **Fondos**: PNG o JPG, 337.3334 × 288.5933 px o mayor

### Recomendaciones
- ✅ Usar PNG con transparencia para marcos e iconos
- ✅ Resolución mínima 300 DPI para impresión
- ✅ Tamaño de archivo < 2MB por imagen
- ✅ Nombres sin espacios ni caracteres especiales

---

## 🎯 CÓMO EXPANDIR EL SISTEMA

### Agregar una nueva clase

1. **Coloca el icono**: `/assets/class-icons/class-nueva.png`

2. **Edita `/config/assets.ts`**:
```typescript
// Agregar al objeto CLASS_ICONS
nueva: '/assets/class-icons/class-nueva.png',

// Agregar al array CLASS_TYPES
{ 
  id: 'nueva', 
  label: '🆕 Nueva', 
  color: '#ff00ff',
  icon: CLASS_ICONS.nueva,
},
```

3. **¡Listo!** Aparecerá automáticamente en el selector.

### Agregar una nueva energía

1. **Coloca el icono**: `/assets/energy-icons/energy-nueva.png`

2. **Edita `/config/assets.ts`**:
```typescript
// Agregar al objeto ENERGY_ICONS
nueva: '/assets/energy-icons/energy-nueva.png',

// Agregar al array ENERGY_TYPES
{ 
  id: 'nueva', 
  label: '⚡ Nueva', 
  color: '#00ff00',
  icon: ENERGY_ICONS.nueva,
},
```

3. **¡Listo!** Estará disponible en los ataques.

### Agregar un nuevo marco

1. **Coloca la imagen**: `/assets/frames/frame-nuevo.png`

2. **Edita `/config/assets.ts`**:
```typescript
// Agregar al objeto FRAMES
nuevo: '/assets/frames/frame-nuevo.png',

// Agregar al array FRAME_CONFIG
{
  id: 'nuevo',
  label: 'NUEVO',
  image: FRAMES.nuevo,
  badge: '🆕',
},
```

3. **Actualiza el tipo en `/types/card.ts`**:
```typescript
frame: 'cobre' | 'plata' | 'oro' | 'diamante' | 'nuevo';
```

---

## 🎨 COMPONENTES DEL EDITOR

### Navegación
- **Sidebar**: Menú principal con 4 secciones

### Editores
1. **TemplateSelector**: Plantillas y marcos
2. **TextEditor**: Información, clases, ataques
3. **ImageEditor**: Imagen del personaje
4. **BackgroundEditor**: Fondo de ilustración

### Vista previa
- **CardCanvas**: Renderiza la carta en tiempo real

### Herramientas
- **EditorTools**: Undo, Redo, Zoom, Exportar, Guardar

---

## ✅ CHECKLIST FINAL

### Implementación completada:
- ✅ Eliminados módulos innecesarios
- ✅ Solo 2 plantillas (Clásica, FullArt)
- ✅ 4 marcos renombrados (Cobre, Plata, Oro, Diamante)
- ✅ 7 clases/tipos implementados
- ✅ 3 energías implementadas
- ✅ Medidas exactas aplicadas
- ✅ Sistema de slots preparado
- ✅ Estructura modular y escalable
- ✅ Orden de capas correcto
- ✅ Sin botón de carrito
- ✅ Iconos provisionales (listos para reemplazar)

### Próximos pasos (a cargo tuyo):
- 📌 Colocar tus 4 marcos en `/assets/frames/`
- 📌 Colocar tus 2 plantillas en `/assets/templates/`
- 📌 Colocar tus 7 iconos de clases en `/assets/class-icons/`
- 📌 Colocar tus 3 iconos de energías en `/assets/energy-icons/`
- 📌 (Opcional) Colocar fondos en `/assets/backgrounds/`

---

## 💡 NOTAS IMPORTANTES

1. **Todos los assets son PROVISIONALES**: Los emojis y placeholders son temporales. Simplemente reemplázalos con tus imágenes.

2. **No necesitas modificar código**: El sistema está diseñado para detectar automáticamente tus assets.

3. **Sistema completamente modular**: Cada componente es independiente y fácil de modificar.

4. **Preparado para crecer**: Agregar nuevos elementos es tan simple como:
   - Colocar la imagen
   - Actualizar `/config/assets.ts`
   - (Opcional) Actualizar tipos en `/types/card.ts`

5. **Fallbacks incluidos**: Si una imagen falta, el sistema muestra alternativas visuales.

---

## 📞 SOPORTE

Si necesitas agregar funcionalidad o modificar algo:

1. **Consulta** `/config/assets.ts` para configuración
2. **Revisa** `/types/card.ts` para estructura de datos
3. **Edita** componentes en `/components/` según necesites
4. **Lee comentarios** en el código - todo está documentado

---

**Estado del proyecto: ✅ COMPLETAMENTE CONFIGURADO Y LISTO PARA TUS ASSETS**

¡El sistema está preparado para recibir tus imágenes reales sin modificar código!
