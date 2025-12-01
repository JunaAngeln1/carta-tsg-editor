# Templates (Fondos con Información)

## 📋 Descripción

El template es el **fondo donde va toda la información** de la carta (nombre, PS, ataques, estadísticas, etc.). Incluye un sistema de **máscara de color** para personalización infinita.

## 🎯 Asset Base Predeterminado

- **URL**: https://i.ibb.co/39VYgN6S/Fondo-base-1.webp
- **Nombre**: Template base (turquesa)
- **Función**: Fondo con áreas para información

## 📐 Especificaciones

- **Formato**: PNG o WebP
- **Dimensiones exactas**: **375.6962 × 540.6523 px**
- **Layout**: Debe incluir espacios para:
  - Header (nombre + PS)
  - Área de ilustración (hueco central)
  - Sección de pasivos
  - 2 líneas de ataques
  - Footer (debilidad + retirada)
- **Calidad**: Alta resolución

## 🎨 Sistema de Máscara de Color

### ¿Qué es?

El template base se puede **colorear dinámicamente** manteniendo todas las texturas, sombras y detalles originales usando `mix-blend-mode: multiply`.

### Colores predefinidos disponibles:
- 🔵 Turquesa (#1dd1a1) - Por defecto
- 🔴 Rojo (#ee5a6f)
- 🔵 Azul (#54a0ff)
- 🟣 Púrpura (#9b59b6)
- 🟠 Naranja (#f39c12)
- 🟢 Verde (#26de81)
- 🟡 Amarillo (#fed330)
- 🩷 Rosa (#fd79a8)
- 🔵 Cian (#00d2d3)
- 🟢 Lima (#7bed9f)
- 🟤 Marrón (#a55eea)
- ⚪ Gris (#95a5a6)

### Personalización ilimitada:
El usuario puede elegir **cualquier color hex** usando el selector.

## 📍 Ubicación en la carta

El template está **debajo del marco externo** pero **encima de la ilustración**.

```
┌─────────────────────────┐
│ Marco externo (z-70)    │
│  ┌──────────────────┐   │
│  │ TEMPLATE (z-10)  │   │ ← TÚ ESTÁS AQUÍ
│  │ [Info + color]   │   │
│  │  ┌────────────┐  │   │
│  │  │Ilustración │  │   │
│  │  └────────────┘  │   │
│  └──────────────────┘   │
└─────────────────────────┘
```

## 💡 Cómo agregar un nuevo template

1. **Diseña tu template** con las dimensiones exactas (375.6962 × 540.6523 px)
2. **Incluye áreas para**:
   - Header superior
   - Espacio central para ilustración
   - Líneas divisorias
   - Zonas de texto
3. **Guarda como PNG o WebP**
4. **Coloca el archivo** en esta carpeta: `/assets/templates/`
5. **Edita** `/config/assets.ts`:

```typescript
// Agregar en TEMPLATES
mitemplate: '/assets/templates/mi-template.png',

// Agregar en TEMPLATE_CONFIG
{
  id: 'mitemplate',
  label: 'Mi Template',
  image: TEMPLATES.mitemplate,
}
```

6. **¡Listo!** Podrá ser coloreado con la máscara.

## 🎨 Recomendaciones de diseño

### Para que la máscara funcione bien:

- Usa tonos **medios a oscuros** en el diseño base
- Incluye **texturas y detalles** (se mantendrán con el color)
- Las **sombras** deben ser visibles
- Los **degradados** se adaptarán al color elegido
- Evita blancos puros (se verán grises con la máscara)

### Layout recomendado:

```
┌──────────────────┐
│ Nombre      PS   │ ← Header (20px alto)
├──────────────────┤
│                  │
│  [Ilustración]   │ ← Área 337×288 px
│                  │
├──────────────────┤
│ Descripción      │ ← 15px alto
├──────────────────┤
│ Pasivos          │ ← 25px alto
├──────────────────┤
│ atk 1            │ ← 20px alto
├──────────────────┤
│ atk 2            │ ← 20px alto
├──────────────────┤
│ Debilidad|Retira │ ← Footer
└──────────────────┘
```

## 📦 Templates sugeridos para crear

- **Clásico**: Diseño tradicional con bordes definidos
- **Moderno**: Líneas limpias y minimalistas
- **Ornamentado**: Con decoraciones elaboradas
- **Tecnológico**: Estilo futurista/cyber
- **Medieval**: Estilo fantasía/RPG
- **Minimalista**: Sin texturas, solo áreas de color

## 🔧 Tips técnicos

### Áreas importantes a dejar claras:

1. **Hueco central**: 337.3334 × 288.5933 px para ilustración
2. **Header**: ~40px desde arriba
3. **Footer**: ~40px desde abajo
4. **Márgenes laterales**: ~20px cada lado

### Elementos que se renderizan encima:

- Marco interno (z-30)
- Iconos de clases (z-40)
- Textos y stats (z-60)
- Marco externo (z-70)

## ⚠️ Importante

- El template NO incluye el marco externo (va por separado)
- El template NO incluye el marco interno (va por separado)
- La máscara de color se aplica automáticamente
- Diseña pensando en que será coloreado
- Mantén buen contraste para que el texto sea legible

## 🌈 Cómo probar tu template con colores

Antes de finalizar tu diseño:

1. Prueba con diferentes colores (claros y oscuros)
2. Verifica que las texturas se vean bien
3. Asegúrate de que el texto sea legible
4. Comprueba que las sombras se mantengan
5. Revisa que los degradados funcionen correctamente
