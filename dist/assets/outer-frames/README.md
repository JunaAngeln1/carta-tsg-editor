# Marcos Externos (Outer Frames)

## 📋 Descripción

El marco externo es el **borde exterior** de la carta que rodea todos los demás elementos. Va encima de todo (z-index: 70).

## 🎯 Asset Base Predeterminado

- **URL**: https://i.ibb.co/bRMR0d0D/Marco-gris.webp
- **Nombre**: Marco gris
- **Función**: Borde decorativo exterior

## 📐 Especificaciones

- **Formato**: PNG con transparencia (o WebP)
- **Dimensiones exactas**: **413.9014 × 578.148 px**
- **Centro**: Debe ser **transparente** para ver el contenido
- **Grosor recomendado**: 15-25 px
- **Calidad**: Alta resolución (300 DPI para impresión)

## 📍 Ubicación en la carta

El marco externo es la capa **superior** que enmarca toda la carta.

```
┌─────────────────────────┐
│ MARCO EXTERNO (z-70)   │ ← TÚ ESTÁS AQUÍ
│  ┌──────────────────┐  │
│  │ Template + Info  │  │
│  │                  │  │
│  └──────────────────┘  │
└─────────────────────────┘
```

## 💡 Cómo agregar un nuevo marco externo

1. **Crea tu marco** con las dimensiones exactas (413.9014 × 578.148 px)
2. **Guarda como PNG** con transparencia en el centro
3. **Coloca el archivo** en esta carpeta: `/assets/outer-frames/`
4. **Edita** `/config/assets.ts`:

```typescript
// Agregar en OUTER_FRAMES
mimarco: '/assets/outer-frames/mi-marco.png',

// Agregar en OUTER_FRAME_CONFIG
{
  id: 'mimarco',
  label: 'Mi Marco',
  image: OUTER_FRAMES.mimarco,
}
```

5. **¡Listo!** Aparecerá automáticamente en el selector.

## 🎨 Recomendaciones de diseño

- Mantén un grosor consistente en todos los lados
- Usa colores neutros (gris, plata, oro) o temáticos
- Puedes agregar detalles en las esquinas
- El centro debe ser completamente transparente
- Considera efectos de relieve o sombra

## 📦 Marcos sugeridos para crear

- Marco de cobre (bronce, común)
- Marco de plata (poco común)
- Marco de oro (raro)
- Marco de diamante (ultra raro)
- Marco holográfico (especial)
- Marcos temáticos por clase

## ⚠️ Importante

- El marco NO debe incluir el contenido de la carta
- Solo es un borde decorativo
- Debe tener transparencia en el área central
- Se renderiza al final, sobre todas las demás capas
